import { useCallback, useEffect, useRef, useState } from "react";
import type p5 from "p5";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, AlertTriangle, ShieldAlert, Info } from "lucide-react";
import P5Sketch from "../P5Sketch";

type Severity = "high" | "medium" | "low";

interface BreakingChange {
  version: string;
  year: number;
  title: string;
  category: string;
  severity: Severity;
  summary: string;
  mitigation: string;
}

const CHANGES: BreakingChange[] = [
  {
    version: "v10.5",
    year: 2019,
    title: "SWMM engine introduction",
    category: "Engine",
    severity: "medium",
    summary: "New 1D SWMM solver added alongside the legacy ICM engine. Mixed-engine workflows require explicit choice per network.",
    mitigation: "Audit existing networks; decide engine per project. Re-validate calibration if migrating from legacy to SWMM.",
  },
  {
    version: "v2021.1",
    year: 2021,
    title: "Version numbering scheme change",
    category: "Operational",
    severity: "low",
    summary: "Autodesk switched from 'X.Y' to 'YYYY.N' versioning. Scripts that parse version strings may break.",
    mitigation: "Update any version-detection logic in Ruby/SDK scripts.",
  },
  {
    version: "v2023.0",
    year: 2022,
    title: "Licensing system change",
    category: "Operational",
    severity: "high",
    summary: "Move to single-user / named-user licensing model. Floating license workflows changed; offline activation differs.",
    mitigation: "Coordinate with IT and Autodesk Account admins before rollout. Schedule downtime for license server changeover.",
  },
  {
    version: "v2023.1",
    year: 2023,
    title: "Multi-version database format",
    category: "Database",
    severity: "medium",
    summary: "Database files gain forward-compatibility metadata. Older clients may refuse to open newer DBs.",
    mitigation: "Standardise the team on one client version per database. Back up before opening shared DBs in newer clients.",
  },
  {
    version: "v2024.0",
    year: 2023,
    title: "Cloud master databases (SaaS) introduced",
    category: "Architecture",
    severity: "medium",
    summary: "Cloud DBs are not a drop-in replacement for workgroup DBs — different permissions model, simulation hosting, and storage.",
    mitigation: "Pilot one project on cloud before migrating teams. Map workgroup roles to cloud roles up front.",
  },
  {
    version: "v2024.0",
    year: 2023,
    title: "Legacy database dialog removed",
    category: "UI",
    severity: "low",
    summary: "The classic open/create dialog is replaced by a unified type-selector dialog.",
    mitigation: "Update any training materials and screencasts.",
  },
  {
    version: "v2024.0",
    year: 2023,
    title: "DWG import switched to 64-bit",
    category: "Import/Export",
    severity: "low",
    summary: "32-bit DWG import path removed; very old DWG files may need conversion via Autodesk DWG TrueView first.",
    mitigation: "Test critical legacy DWGs in advance; keep a converter handy.",
  },
  {
    version: "v2027.0",
    year: 2025,
    title: "Ruby 2.4 → 3.4.6 upgrade",
    category: "Scripting",
    severity: "high",
    summary: "Major Ruby version jump. Deprecated 2.x syntax, gem ABI changes, and stricter keyword-argument rules will break older scripts.",
    mitigation: "Run `ruby -W` on existing scripts; replace `Fixnum/Bignum` with `Integer`, fix keyword splats, re-install native gems.",
  },
];

const W = 640;
const H = 360;
const PAD_L = 50;
const PAD_R = 30;
const PAD_T = 80;
const PAD_B = 50;
const PLOT_W = W - PAD_L - PAD_R;
const TRACK_Y = H - PAD_B - 40;

const SEV_COLOR: Record<Severity, [number, number, number]> = {
  high: [220, 80, 70],
  medium: [230, 160, 60],
  low: [120, 170, 130],
};

const SEV_LABEL: Record<Severity, string> = {
  high: "High",
  medium: "Medium",
  low: "Low",
};

export default function BreakingChangesSketch() {
  const [selected, setSelected] = useState<number>(7); // Ruby
  const [hover, setHover] = useState<number | null>(null);

  const selectedRef = useRef(selected);
  const hoverRef = useRef(hover);
  useEffect(() => { selectedRef.current = selected; }, [selected]);
  useEffect(() => { hoverRef.current = hover; }, [hover]);

  const years = CHANGES.map((c) => c.year);
  const yMin = Math.min(...years) - 0.5;
  const yMax = Math.max(...years) + 0.5;
  const xOf = (year: number) => PAD_L + ((year - yMin) / (yMax - yMin)) * PLOT_W;

  const sketch = useCallback((p: p5) => {
    p.setup = () => {
      p.createCanvas(W, H);
      p.textFont("Inter, system-ui, sans-serif");
    };

    p.draw = () => {
      p.background(248);

      // Title block
      p.noStroke();
      p.fill(60);
      p.textAlign(p.LEFT, p.TOP);
      p.textStyle(p.BOLD);
      p.textSize(13);
      p.text("Migration Risk Timeline", 16, 14);
      p.textStyle(p.NORMAL);
      p.fill(110);
      p.textSize(11);
      p.text("Each dot = a breaking change or operational shift. Click any dot for details.", 16, 32);

      // Track
      p.stroke(200);
      p.strokeWeight(2);
      p.line(PAD_L, TRACK_Y, PAD_L + PLOT_W, TRACK_Y);

      // Year ticks
      for (let y = Math.ceil(yMin); y <= Math.floor(yMax); y++) {
        const x = xOf(y);
        p.stroke(220);
        p.strokeWeight(1);
        p.line(x, TRACK_Y - 6, x, TRACK_Y + 6);
        p.noStroke();
        p.fill(110);
        p.textAlign(p.CENTER, p.TOP);
        p.textSize(10);
        p.text(String(y), x, TRACK_Y + 10);
      }

      // Stack dots if multiple in same year
      const yearCounts: Record<number, number> = {};
      const placed: { i: number; cx: number; cy: number; r: number }[] = [];
      const sev = selectedRef.current;
      const hov = hoverRef.current;

      CHANGES.forEach((c, i) => {
        yearCounts[c.year] = (yearCounts[c.year] ?? 0) + 1;
        const offset = (yearCounts[c.year] - 1) * 22;
        const cx = xOf(c.year);
        const cy = TRACK_Y - 20 - offset;
        const r = c.severity === "high" ? 14 : c.severity === "medium" ? 11 : 9;
        const col = SEV_COLOR[c.severity];
        const isActive = i === sev;
        const isHover = i === hov;

        // Stem line
        p.stroke(190);
        p.strokeWeight(1);
        p.line(cx, TRACK_Y, cx, cy + r);

        // Halo for active
        if (isActive) {
          p.noStroke();
          p.fill(col[0], col[1], col[2], 60);
          p.ellipse(cx, cy, (r + 6) * 2);
        }
        p.noStroke();
        p.fill(col[0], col[1], col[2]);
        p.ellipse(cx, cy, r * 2);
        if (isHover || isActive) {
          p.stroke(30);
          p.strokeWeight(2);
          p.noFill();
          p.ellipse(cx, cy, r * 2 + 4);
        }
        // Severity letter
        p.noStroke();
        p.fill(255);
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(10);
        p.textStyle(p.BOLD);
        p.text(c.severity[0].toUpperCase(), cx, cy + 1);
        p.textStyle(p.NORMAL);

        placed.push({ i, cx, cy, r });
      });

      // Legend
      const legendY = 56;
      const legendItems: [Severity, string][] = [["high", "High risk"], ["medium", "Medium"], ["low", "Low"]];
      let lx = 16;
      legendItems.forEach(([s, label]) => {
        const col = SEV_COLOR[s];
        p.noStroke();
        p.fill(col[0], col[1], col[2]);
        p.ellipse(lx + 6, legendY, 12);
        p.fill(70);
        p.textAlign(p.LEFT, p.CENTER);
        p.textSize(11);
        p.text(label, lx + 16, legendY);
        lx += 88;
      });

      // Track hover/active in mouse handlers via placed list
      (p as unknown as { _placed: typeof placed })._placed = placed;
    };

    p.mouseMoved = () => {
      const placed = (p as unknown as { _placed?: { i: number; cx: number; cy: number; r: number }[] })._placed ?? [];
      let found: number | null = null;
      for (const pp of placed) {
        if (Math.hypot(p.mouseX - pp.cx, p.mouseY - pp.cy) <= pp.r + 2) {
          found = pp.i;
          break;
        }
      }
      if (found !== hoverRef.current) setHover(found);
    };

    p.mousePressed = () => {
      const placed = (p as unknown as { _placed?: { i: number; cx: number; cy: number; r: number }[] })._placed ?? [];
      for (const pp of placed) {
        if (Math.hypot(p.mouseX - pp.cx, p.mouseY - pp.cy) <= pp.r + 2) {
          setSelected(pp.i);
          return;
        }
      }
    };
  }, [yMin, yMax]);

  const c = CHANGES[selected];
  const sevColor = c.severity === "high"
    ? "text-red-700 dark:text-red-300 bg-red-500/10 border-red-500/20"
    : c.severity === "medium"
      ? "text-amber-700 dark:text-amber-300 bg-amber-500/10 border-amber-500/20"
      : "text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border-emerald-500/20";
  const SevIcon = c.severity === "high" ? ShieldAlert : c.severity === "medium" ? AlertTriangle : Info;

  return (
    <Card>
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-lg">Breaking Changes & Migration Risk</h3>
          <p className="text-sm text-muted-foreground">
            Curated list of changes most likely to break existing workflows. Click a dot on the timeline — or pick from the list — to see severity and migration guidance.
          </p>
        </div>

        <div
          className="rounded-md border overflow-hidden bg-background flex justify-center"
          role="img"
          aria-label={`Timeline of ${CHANGES.length} breaking changes from ${Math.min(...years)} to ${Math.max(...years)}. Currently selected: ${c.version} ${c.title} (${SEV_LABEL[c.severity]} severity).`}
        >
          <P5Sketch sketch={sketch} data-testid="sketch-breaking" />
        </div>

        {/* Accessible list */}
        <div className="flex flex-wrap gap-1.5" role="listbox" aria-label="Breaking changes list">
          {CHANGES.map((ch, i) => {
            const isSelected = i === selected;
            const sevDot = ch.severity === "high" ? "bg-red-500" : ch.severity === "medium" ? "bg-amber-500" : "bg-emerald-500";
            return (
              <button
                key={i}
                type="button"
                role="option"
                aria-selected={isSelected}
                className={`text-xs rounded-md border px-2 py-1 hover-elevate active-elevate-2 flex items-center gap-1.5 ${isSelected ? "ring-2 ring-primary" : ""}`}
                onClick={() => setSelected(i)}
                data-testid={`button-breaking-${i}`}
              >
                <span className={`h-2 w-2 rounded-full ${sevDot}`} />
                <span className="font-medium">{ch.version}</span>
                <span className="text-muted-foreground truncate max-w-[160px]">{ch.title}</span>
              </button>
            );
          })}
        </div>

        {/* Detail card */}
        <div className={`rounded-md border p-3 ${sevColor}`} aria-live="polite">
          <div className="flex items-start gap-2">
            <SevIcon className="h-4 w-4 shrink-0 mt-0.5" />
            <div className="space-y-1.5 flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-semibold">{c.version} · {c.title}</span>
                <Badge variant="outline" data-testid="badge-severity">{SEV_LABEL[c.severity]} risk</Badge>
                <Badge variant="outline">{c.category}</Badge>
              </div>
              <p className="text-sm opacity-90">{c.summary}</p>
              <p className="text-sm"><span className="font-semibold">Mitigation: </span>{c.mitigation}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-2 rounded-md bg-amber-500/10 border border-amber-500/20 p-3 text-sm">
          <Lightbulb className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
          <div>
            <span className="font-semibold text-amber-900 dark:text-amber-200">Takeaway: </span>
            <span className="text-amber-900/90 dark:text-amber-100/90">
              Upgrade planning shouldn't focus on what's new alone. Three categories tend to bite: scripting runtime jumps (Ruby), licensing model shifts, and database format changes. Pilot every high-risk change on a non-critical project before rolling out.
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
