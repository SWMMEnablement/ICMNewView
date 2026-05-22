import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type p5 from "p5";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Lightbulb, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import P5Sketch from "../P5Sketch";

interface Feature { id: string; title: string; description: string; category?: string; }
interface Version { id: string; version: string; releaseDate: string; features: Feature[]; }

const DOMAINS: { key: string; label: string; keywords: string[] }[] = [
  { key: "1D", label: "1D Hydraulics", keywords: ["1d", "pipe", "manhole", "weir", "orifice", "pump", "conduit"] },
  { key: "2D", label: "2D Modelling", keywords: ["2d", "mesh", "subgrid", "floodplain", "surface", "buildings"] },
  { key: "WQ", label: "Water Quality", keywords: ["water quality", "pollut", "sediment", "wq"] },
  { key: "SWMM", label: "SWMM", keywords: ["swmm"] },
  { key: "Cloud", label: "Cloud / SaaS", keywords: ["cloud", "saas", "info360", "portal"] },
  { key: "Script", label: "Scripting / API", keywords: ["ruby", "script", "api", "sdk", "exchange"] },
  { key: "GIS", label: "GIS Integration", keywords: ["gis", "shapefile", "esri", "geodatabase", "dwg", "12da"] },
  { key: "Rain", label: "Rainfall / Hydrology", keywords: ["rainfall", "hydrolog", "feh", "noaa", "infiltration", "runoff"] },
];

const W = 620;
const H = 380;
const CX = W / 2;
const CY = H / 2 + 6;
const R = 130;

function scoreDomains(features: Feature[]): number[] {
  const scores = Array(DOMAINS.length).fill(0);
  for (const f of features) {
    const text = `${f.title} ${f.description} ${f.category ?? ""}`.toLowerCase();
    DOMAINS.forEach((d, i) => {
      if (d.keywords.some((kw) => text.includes(kw))) scores[i] += 1;
    });
  }
  return scores;
}

export default function CapabilityRadarSketch() {
  const { data: versions } = useQuery<Version[]>({ queryKey: ["/api/versions"] });

  // versions come in descending order — reverse for chronology
  const ordered = useMemo(() => (versions ? [...versions].reverse() : []), [versions]);

  // Cumulative scores up to version i
  const cumulative = useMemo(() => {
    const out: number[][] = [];
    const running = Array(DOMAINS.length).fill(0);
    for (const v of ordered) {
      const s = scoreDomains(v.features);
      for (let i = 0; i < running.length; i++) running[i] += s[i];
      out.push([...running]);
    }
    return out;
  }, [ordered]);

  const maxPerDomain = useMemo(() => {
    if (!cumulative.length) return Array(DOMAINS.length).fill(1);
    const last = cumulative[cumulative.length - 1];
    return last.map((v) => Math.max(v, 1));
  }, [cumulative]);

  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (ordered.length && idx === 0) setIdx(ordered.length - 1);
  }, [ordered.length]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % Math.max(1, ordered.length));
    }, 350);
    return () => clearInterval(t);
  }, [playing, ordered.length]);

  const scoresRef = useRef<number[]>([]);
  const labelRef = useRef("");
  useEffect(() => {
    if (cumulative[idx]) {
      scoresRef.current = cumulative[idx].map((v, i) => v / maxPerDomain[i]);
      labelRef.current = ordered[idx]?.version ?? "";
    }
  }, [idx, cumulative, maxPerDomain, ordered]);

  const sketch = useCallback((p: p5) => {
    p.setup = () => {
      p.createCanvas(W, H);
      p.textFont("Inter, system-ui, sans-serif");
    };

    p.draw = () => {
      p.background(248);

      const n = DOMAINS.length;
      const angleStep = (Math.PI * 2) / n;

      // Concentric rings
      p.noFill();
      p.stroke(220);
      p.strokeWeight(1);
      for (let k = 1; k <= 4; k++) {
        const rr = (R * k) / 4;
        p.beginShape();
        for (let i = 0; i < n; i++) {
          const a = -Math.PI / 2 + i * angleStep;
          p.vertex(CX + Math.cos(a) * rr, CY + Math.sin(a) * rr);
        }
        p.endShape(p.CLOSE);
      }

      // Spokes + labels
      p.stroke(220);
      DOMAINS.forEach((d, i) => {
        const a = -Math.PI / 2 + i * angleStep;
        const ex = CX + Math.cos(a) * R;
        const ey = CY + Math.sin(a) * R;
        p.line(CX, CY, ex, ey);
        const lx = CX + Math.cos(a) * (R + 22);
        const ly = CY + Math.sin(a) * (R + 16);
        p.noStroke();
        p.fill(70);
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(11);
        p.text(d.label, lx, ly);
      });

      // Polygon
      const scores = scoresRef.current;
      if (scores.length === n) {
        p.noStroke();
        p.fill(70, 130, 200, 80);
        p.beginShape();
        for (let i = 0; i < n; i++) {
          const a = -Math.PI / 2 + i * angleStep;
          const v = Math.min(1, scores[i]);
          p.vertex(CX + Math.cos(a) * R * v, CY + Math.sin(a) * R * v);
        }
        p.endShape(p.CLOSE);
        p.stroke(50, 100, 170);
        p.strokeWeight(2);
        p.noFill();
        p.beginShape();
        for (let i = 0; i < n; i++) {
          const a = -Math.PI / 2 + i * angleStep;
          const v = Math.min(1, scores[i]);
          p.vertex(CX + Math.cos(a) * R * v, CY + Math.sin(a) * R * v);
        }
        p.endShape(p.CLOSE);

        // Vertex dots
        for (let i = 0; i < n; i++) {
          const a = -Math.PI / 2 + i * angleStep;
          const v = Math.min(1, scores[i]);
          p.noStroke();
          p.fill(50, 100, 170);
          p.ellipse(CX + Math.cos(a) * R * v, CY + Math.sin(a) * R * v, 6);
        }
      }

      // Version label
      p.noStroke();
      p.fill(40);
      p.textAlign(p.CENTER, p.CENTER);
      p.textStyle(p.BOLD);
      p.textSize(22);
      p.text(`v${labelRef.current}`, CX, CY);
      p.textStyle(p.NORMAL);
      p.textSize(10);
      p.fill(120);
      p.text("cumulative", CX, CY + 18);
    };
  }, []);

  const current = cumulative[idx] ?? [];
  const topDomains = DOMAINS
    .map((d, i) => ({ d, c: current[i] ?? 0 }))
    .sort((a, b) => b.c - a.c)
    .slice(0, 3);

  return (
    <Card>
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-lg">Capability Growth Radar</h3>
          <p className="text-sm text-muted-foreground">
            Cumulative feature count per modelling domain, normalised against the all-time max per axis. Scrub the slider — or press play — to watch where Autodesk has been investing across the 48-version history.
          </p>
        </div>

        <div className="flex gap-2 items-center flex-wrap">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPlaying((p) => !p)}
            data-testid="button-radar-play"
            disabled={!ordered.length}
          >
            {playing ? <Pause className="h-3.5 w-3.5 mr-1.5" /> : <Play className="h-3.5 w-3.5 mr-1.5" />}
            {playing ? "Pause" : "Animate"}
          </Button>
          <div className="flex-1 min-w-[200px]">
            <Slider
              value={[idx]}
              onValueChange={([v]) => { setIdx(v); setPlaying(false); }}
              min={0}
              max={Math.max(0, ordered.length - 1)}
              step={1}
              disabled={!ordered.length}
              data-testid="slider-radar-version"
              aria-label="Version index"
            />
          </div>
          <span className="text-sm font-medium tabular-nums">v{ordered[idx]?.version ?? "—"}</span>
        </div>

        <div
          className="rounded-md border overflow-hidden bg-background flex justify-center"
          role="img"
          aria-label={`Radar chart of capability growth through v${ordered[idx]?.version ?? "—"}. Top domains: ${topDomains.map((t) => `${t.d.label} (${t.c})`).join(", ")}.`}
        >
          <P5Sketch sketch={sketch} data-testid="sketch-radar" />
        </div>

        <div className="flex flex-wrap gap-1.5">
          {topDomains.map((t) => (
            <Badge key={t.d.key} variant="outline" data-testid={`badge-top-${t.d.key}`}>
              Top: {t.d.label} — {t.c} features
            </Badge>
          ))}
        </div>

        <div className="flex gap-2 rounded-md bg-amber-500/10 border border-amber-500/20 p-3 text-sm">
          <Lightbulb className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
          <div>
            <span className="font-semibold text-amber-900 dark:text-amber-200">Takeaway: </span>
            <span className="text-amber-900/90 dark:text-amber-100/90">
              The radar collapses 809 features into 8 axes. Watch the Cloud axis spring open around v2024.0, and the 2D axis grow steadily across every release — it's where most of the modern investment lives.
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
