import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type p5 from "p5";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Lightbulb, RotateCcw } from "lucide-react";
import P5Sketch from "../P5Sketch";

type Domain = "2D" | "Cloud" | "SWMM" | "Scripting" | "Rainfall";
type EdgeKind = "prereq" | "enhance" | "supersede" | "companion";

interface Node {
  id: string;
  label: string;
  version: string;
  year: number;
  domain: Domain;
  x: number;
  y: number;
  blurb: string;
}

interface Edge {
  from: string;
  to: string;
  kind: EdgeKind;
}

const W = 720;
const H = 440;

const DOMAIN_COLOR: Record<Domain, [number, number, number]> = {
  "2D": [70, 130, 200],
  Cloud: [120, 80, 180],
  SWMM: [50, 150, 120],
  Scripting: [220, 130, 70],
  Rainfall: [80, 160, 200],
};

const DOMAIN_LABEL: Record<Domain, string> = {
  "2D": "2D Modelling",
  Cloud: "Cloud / SaaS",
  SWMM: "SWMM",
  Scripting: "Scripting",
  Rainfall: "Rainfall",
};

const NODES: Node[] = [
  // 2D evolution chain (top row)
  { id: "2d-basic", label: "2D Zone (basic mesh)", version: "v1.5", year: 2011, domain: "2D", x: 80, y: 90, blurb: "First 2D modelling zones with constant element size." },
  { id: "2d-boundary", label: "2D Boundary Conditions", version: "v2.0", year: 2012, domain: "2D", x: 220, y: 60, blurb: "Inflows/outflows at the 2D zone perimeter." },
  { id: "2d-adaptive", label: "Adaptive Mesh Refinement", version: "v4.0", year: 2014, domain: "2D", x: 360, y: 100, blurb: "Finer triangles near buildings and break-lines." },
  { id: "roughness", label: "Roughness Definitions", version: "v2021.4", year: 2021, domain: "2D", x: 500, y: 70, blurb: "Depth-dependent and zoned Manning's n with priorities." },
  { id: "priority-mesh", label: "Priority-Based Meshing", version: "v2023.2", year: 2023, domain: "2D", x: 620, y: 130, blurb: "Mesh element priority controls override stacking." },
  { id: "subgrid", label: "Subgrid Sampling", version: "v2026.0", year: 2025, domain: "2D", x: 620, y: 240, blurb: "Sub-element topography without finer base mesh." },
  { id: "subgrid-results", label: "Subgrid Ground-Level Results", version: "v2027.0", year: 2025, domain: "2D", x: 500, y: 290, blurb: "Min/max/mean ground level from subgrid triangle faces." },

  // SWMM (middle)
  { id: "swmm-engine", label: "SWMM Engine", version: "v10.5", year: 2019, domain: "SWMM", x: 220, y: 220, blurb: "EPA SWMM solver alongside legacy ICM engine." },
  { id: "swmm-2d", label: "SWMM 2D Boundary Objects", version: "v2021.8", year: 2021, domain: "SWMM", x: 360, y: 240, blurb: "Couple SWMM 1D networks with ICM 2D zones." },

  // Cloud (bottom)
  { id: "cloud-db", label: "Cloud Master DBs", version: "v2024.0", year: 2023, domain: "Cloud", x: 80, y: 360, blurb: "First SaaS database type, no workgroup server needed." },
  { id: "cloud-portal", label: "Cloud Mgmt Portal", version: "v2024.0", year: 2023, domain: "Cloud", x: 230, y: 380, blurb: "Info360 web portal for backup/restore/rename." },
  { id: "cloud-sim", label: "Cloud Simulations", version: "v2024.0", year: 2023, domain: "Cloud", x: 230, y: 320, blurb: "Parallel sims on auto-scaled cloud workers." },
  { id: "cloud-enh", label: "Cloud Enhancements", version: "v2026.1", year: 2025, domain: "Cloud", x: 380, y: 360, blurb: "Continued tightening of cloud workflows vs on-prem parity." },

  // Scripting (right)
  { id: "ruby24", label: "Ruby 2.4 Embedded", version: "v3.0", year: 2013, domain: "Scripting", x: 80, y: 190, blurb: "Original Ruby scripting runtime." },
  { id: "ruby34", label: "Ruby 3.4.6 + Gems", version: "v2027.0", year: 2025, domain: "Scripting", x: 380, y: 170, blurb: "Major Ruby upgrade. External gems supported. Some 2.x scripts break." },
];

const EDGES: Edge[] = [
  { from: "2d-basic", to: "2d-boundary", kind: "prereq" },
  { from: "2d-basic", to: "2d-adaptive", kind: "enhance" },
  { from: "2d-adaptive", to: "roughness", kind: "enhance" },
  { from: "roughness", to: "priority-mesh", kind: "companion" },
  { from: "2d-adaptive", to: "subgrid", kind: "supersede" },
  { from: "subgrid", to: "subgrid-results", kind: "enhance" },
  { from: "priority-mesh", to: "subgrid", kind: "companion" },

  { from: "swmm-engine", to: "swmm-2d", kind: "enhance" },
  { from: "2d-boundary", to: "swmm-2d", kind: "prereq" },

  { from: "cloud-db", to: "cloud-portal", kind: "companion" },
  { from: "cloud-db", to: "cloud-sim", kind: "companion" },
  { from: "cloud-db", to: "cloud-enh", kind: "enhance" },

  { from: "ruby24", to: "ruby34", kind: "supersede" },
];

const EDGE_STYLES: Record<EdgeKind, { color: [number, number, number]; label: string; dash: number[] }> = {
  prereq: { color: [80, 80, 80], label: "Prerequisite", dash: [] },
  enhance: { color: [70, 140, 200], label: "Enhancement", dash: [6, 4] },
  supersede: { color: [200, 80, 70], label: "Superseded by", dash: [2, 4] },
  companion: { color: [150, 120, 60], label: "Companion", dash: [1, 5] },
};

export default function DependencyMapSketch() {
  const [positions, setPositions] = useState<Record<string, { x: number; y: number }>>(() =>
    Object.fromEntries(NODES.map((n) => [n.id, { x: n.x, y: n.y }]))
  );
  const [selected, setSelected] = useState<string | null>("subgrid");
  const [domainFilter, setDomainFilter] = useState<Domain | "all">("all");

  const positionsRef = useRef(positions);
  const selectedRef = useRef(selected);
  const filterRef = useRef<Domain | "all">(domainFilter);
  useEffect(() => { positionsRef.current = positions; }, [positions]);
  useEffect(() => { selectedRef.current = selected; }, [selected]);
  useEffect(() => { filterRef.current = domainFilter; }, [domainFilter]);

  const reset = () => {
    setPositions(Object.fromEntries(NODES.map((n) => [n.id, { x: n.x, y: n.y }])));
    setSelected("subgrid");
    setDomainFilter("all");
  };

  const sketch = useCallback((p: p5) => {
    let dragging: string | null = null;
    let dragOffset = { x: 0, y: 0 };

    const nodeRadius = 28;

    const visible = () => {
      const f = filterRef.current;
      if (f === "all") return new Set(NODES.map((n) => n.id));
      // Include neighbours of visible domain nodes
      const domainIds = new Set(NODES.filter((n) => n.domain === f).map((n) => n.id));
      EDGES.forEach((e) => {
        if (domainIds.has(e.from) || domainIds.has(e.to)) {
          domainIds.add(e.from);
          domainIds.add(e.to);
        }
      });
      return domainIds;
    };

    const connectedTo = (id: string) => {
      const ids = new Set<string>([id]);
      EDGES.forEach((e) => {
        if (e.from === id) ids.add(e.to);
        if (e.to === id) ids.add(e.from);
      });
      return ids;
    };

    p.setup = () => {
      p.createCanvas(W, H);
      p.textFont("Inter, system-ui, sans-serif");
    };

    p.draw = () => {
      p.background(248);
      const pos = positionsRef.current;
      const sel = selectedRef.current;
      const vis = visible();
      const hl = sel ? connectedTo(sel) : new Set<string>();

      // Edges first
      EDGES.forEach((e) => {
        if (!vis.has(e.from) || !vis.has(e.to)) return;
        const a = pos[e.from];
        const b = pos[e.to];
        if (!a || !b) return;
        const style = EDGE_STYLES[e.kind];
        const dim = sel && !(hl.has(e.from) && hl.has(e.to));
        p.stroke(style.color[0], style.color[1], style.color[2], dim ? 60 : 200);
        p.strokeWeight(dim ? 1 : 2);
        if (style.dash.length) p.drawingContext.setLineDash(style.dash);
        // Curve slightly
        const mx = (a.x + b.x) / 2;
        const my = (a.y + b.y) / 2 - 12;
        p.noFill();
        p.beginShape();
        p.vertex(a.x, a.y);
        p.quadraticVertex(mx, my, b.x, b.y);
        p.endShape();
        p.drawingContext.setLineDash([]);

        // Arrowhead at b
        const ang = Math.atan2(b.y - my, b.x - mx);
        const headX = b.x - Math.cos(ang) * nodeRadius;
        const headY = b.y - Math.sin(ang) * nodeRadius;
        p.push();
        p.translate(headX, headY);
        p.rotate(ang);
        p.noStroke();
        p.fill(style.color[0], style.color[1], style.color[2], dim ? 60 : 220);
        p.triangle(0, 0, -8, -4, -8, 4);
        p.pop();
      });

      // Nodes
      NODES.forEach((n) => {
        if (!vis.has(n.id)) return;
        const pp = pos[n.id];
        const dim = sel && !hl.has(n.id);
        const c = DOMAIN_COLOR[n.domain];
        const isSelected = n.id === sel;
        p.noStroke();
        p.fill(c[0], c[1], c[2], dim ? 80 : 230);
        p.ellipse(pp.x, pp.y, nodeRadius * 2);
        if (isSelected) {
          p.stroke(30);
          p.strokeWeight(3);
          p.noFill();
          p.ellipse(pp.x, pp.y, nodeRadius * 2 + 6);
        }
        p.noStroke();
        p.fill(255, dim ? 150 : 255);
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(9);
        p.textStyle(p.BOLD);
        p.text(n.version, pp.x, pp.y - 2);
        p.textStyle(p.NORMAL);
        // Label below
        p.fill(40, dim ? 100 : 220);
        p.textSize(10);
        const words = n.label.split(" ");
        const line1 = words.slice(0, Math.ceil(words.length / 2)).join(" ");
        const line2 = words.slice(Math.ceil(words.length / 2)).join(" ");
        p.text(line1, pp.x, pp.y + nodeRadius + 8);
        if (line2) p.text(line2, pp.x, pp.y + nodeRadius + 20);
      });

      // Legend (top-left)
      p.noStroke();
      p.fill(255, 230);
      p.rect(8, 8, 168, 78, 4);
      p.fill(60);
      p.textAlign(p.LEFT, p.TOP);
      p.textSize(10);
      p.textStyle(p.BOLD);
      p.text("Edges", 14, 12);
      p.textStyle(p.NORMAL);
      let ly = 26;
      (Object.entries(EDGE_STYLES) as [EdgeKind, typeof EDGE_STYLES[EdgeKind]][]).forEach(([, s]) => {
        p.stroke(s.color[0], s.color[1], s.color[2]);
        p.strokeWeight(2);
        if (s.dash.length) p.drawingContext.setLineDash(s.dash);
        p.line(16, ly + 5, 36, ly + 5);
        p.drawingContext.setLineDash([]);
        p.noStroke();
        p.fill(60);
        p.text(s.label, 42, ly);
        ly += 14;
      });
    };

    p.mousePressed = () => {
      if (p.mouseX < 0 || p.mouseX > W || p.mouseY < 0 || p.mouseY > H) return;
      const pos = positionsRef.current;
      const vis = visible();
      for (const n of NODES) {
        if (!vis.has(n.id)) continue;
        const pp = pos[n.id];
        if (Math.hypot(p.mouseX - pp.x, p.mouseY - pp.y) <= nodeRadius) {
          dragging = n.id;
          dragOffset = { x: pp.x - p.mouseX, y: pp.y - p.mouseY };
          setSelected(n.id);
          return;
        }
      }
      setSelected(null);
    };

    p.mouseDragged = () => {
      if (!dragging) return;
      const id = dragging;
      const nx = p.constrain(p.mouseX + dragOffset.x, nodeRadius + 4, W - nodeRadius - 4);
      const ny = p.constrain(p.mouseY + dragOffset.y, nodeRadius + 4, H - nodeRadius - 20);
      setPositions((prev) => ({ ...prev, [id]: { x: nx, y: ny } }));
    };

    p.mouseReleased = () => {
      dragging = null;
    };
  }, []);

  const selectedNode = useMemo(() => NODES.find((n) => n.id === selected) ?? null, [selected]);
  const incoming = useMemo(() => EDGES.filter((e) => e.to === selected), [selected]);
  const outgoing = useMemo(() => EDGES.filter((e) => e.from === selected), [selected]);

  return (
    <Card>
      <CardContent className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div>
            <h3 className="font-semibold text-lg">Feature Dependency Map</h3>
            <p className="text-sm text-muted-foreground">
              How key features built on each other across 16 years. Drag nodes to rearrange, click any node for context, or filter by domain to focus.
            </p>
          </div>
          <Button variant="outline" size="sm" onClick={reset} data-testid="button-reset-deps">
            <RotateCcw className="h-3.5 w-3.5 mr-1.5" />
            Reset
          </Button>
        </div>

        <div className="flex items-end gap-3 flex-wrap">
          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground">Filter domain</label>
            <Select value={domainFilter} onValueChange={(v) => setDomainFilter(v as Domain | "all")}>
              <SelectTrigger className="w-[180px]" data-testid="select-domain"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All domains</SelectItem>
                {(Object.keys(DOMAIN_LABEL) as Domain[]).map((d) => (
                  <SelectItem key={d} value={d}>{DOMAIN_LABEL[d]}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {(Object.keys(DOMAIN_LABEL) as Domain[]).map((d) => {
              const c = DOMAIN_COLOR[d];
              return (
                <Badge key={d} variant="outline" className="gap-1.5">
                  <span className="h-2 w-2 rounded-full" style={{ background: `rgb(${c[0]},${c[1]},${c[2]})` }} />
                  {DOMAIN_LABEL[d]}
                </Badge>
              );
            })}
          </div>
        </div>

        <div
          className="rounded-md border overflow-hidden bg-background flex justify-center"
          role="img"
          aria-label={`Feature dependency graph with ${NODES.length} nodes and ${EDGES.length} edges. Selected: ${selectedNode ? selectedNode.label + " (" + selectedNode.version + ")" : "none"}.`}
        >
          <P5Sketch sketch={sketch} data-testid="sketch-deps" />
        </div>

        {/* Accessible node picker */}
        <div className="flex flex-wrap gap-1.5">
          {NODES.map((n) => {
            const c = DOMAIN_COLOR[n.domain];
            const isSel = n.id === selected;
            return (
              <button
                key={n.id}
                type="button"
                className={`text-xs rounded-md border px-2 py-1 hover-elevate active-elevate-2 flex items-center gap-1.5 ${isSel ? "ring-2 ring-primary" : ""}`}
                onClick={() => setSelected(n.id)}
                data-testid={`button-node-${n.id}`}
              >
                <span className="h-2 w-2 rounded-full" style={{ background: `rgb(${c[0]},${c[1]},${c[2]})` }} />
                <span className="font-medium">{n.version}</span>
                <span className="text-muted-foreground truncate max-w-[140px]">{n.label}</span>
              </button>
            );
          })}
        </div>

        {/* Detail card */}
        {selectedNode && (
          <div className="rounded-md border p-3 space-y-2" aria-live="polite">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-base">{selectedNode.label}</span>
              <Badge variant="outline">{selectedNode.version} · {selectedNode.year}</Badge>
              <Badge variant="outline">{DOMAIN_LABEL[selectedNode.domain]}</Badge>
            </div>
            <p className="text-sm text-muted-foreground">{selectedNode.blurb}</p>
            <div className="grid sm:grid-cols-2 gap-3 pt-1">
              <div>
                <div className="text-xs font-medium text-muted-foreground mb-1">Builds on ({incoming.length})</div>
                {incoming.length ? (
                  <ul className="space-y-1">
                    {incoming.map((e, i) => {
                      const n = NODES.find((nn) => nn.id === e.from)!;
                      return (
                        <li key={i} className="text-xs">
                          <button type="button" className="underline hover:text-foreground" onClick={() => setSelected(n.id)} data-testid={`link-incoming-${i}`}>
                            {n.version} · {n.label}
                          </button>
                          <span className="text-muted-foreground"> — {EDGE_STYLES[e.kind].label.toLowerCase()}</span>
                        </li>
                      );
                    })}
                  </ul>
                ) : <div className="text-xs text-muted-foreground italic">No upstream dependencies</div>}
              </div>
              <div>
                <div className="text-xs font-medium text-muted-foreground mb-1">Enables ({outgoing.length})</div>
                {outgoing.length ? (
                  <ul className="space-y-1">
                    {outgoing.map((e, i) => {
                      const n = NODES.find((nn) => nn.id === e.to)!;
                      return (
                        <li key={i} className="text-xs">
                          <button type="button" className="underline hover:text-foreground" onClick={() => setSelected(n.id)} data-testid={`link-outgoing-${i}`}>
                            {n.version} · {n.label}
                          </button>
                          <span className="text-muted-foreground"> — {EDGE_STYLES[e.kind].label.toLowerCase()}</span>
                        </li>
                      );
                    })}
                  </ul>
                ) : <div className="text-xs text-muted-foreground italic">Nothing downstream yet</div>}
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-2 rounded-md bg-amber-500/10 border border-amber-500/20 p-3 text-sm">
          <Lightbulb className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
          <div>
            <span className="font-semibold text-amber-900 dark:text-amber-200">Takeaway: </span>
            <span className="text-amber-900/90 dark:text-amber-100/90">
              Features rarely arrive whole. Subgrid Sampling (v2026.0) only makes sense once Adaptive Refinement, Roughness Definitions and Priority-Based Meshing all exist. The graph makes the lineage visible — handy for explaining "why now?" to a project lead.
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
