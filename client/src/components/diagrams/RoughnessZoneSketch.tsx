import { useCallback, useState } from "react";
import type p5 from "p5";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Lightbulb, RotateCcw } from "lucide-react";
import P5Sketch from "../P5Sketch";

interface Zone {
  x: number;
  y: number;
  radius: number;
  roughness: number;
  priority: number;
}

const DEFAULT_ZONES: Zone[] = [
  { x: 180, y: 160, radius: 110, roughness: 0.013, priority: 1 },
  { x: 320, y: 220, radius: 90, roughness: 0.035, priority: 3 },
  { x: 430, y: 130, radius: 75, roughness: 0.080, priority: 2 },
];

const PALETTE = [
  [99, 179, 237],
  [246, 173, 85],
  [104, 211, 145],
];

const W = 620;
const H = 360;

function findEffective(x: number, y: number, zones: Zone[]): { zone: Zone; index: number } | null {
  let best: { zone: Zone; index: number } | null = null;
  for (let i = 0; i < zones.length; i++) {
    const z = zones[i];
    if (Math.hypot(x - z.x, y - z.y) <= z.radius && (!best || z.priority > best.zone.priority)) {
      best = { zone: z, index: i };
    }
  }
  return best;
}

export default function RoughnessZoneSketch() {
  const [zones, setZones] = useState<Zone[]>(() => DEFAULT_ZONES.map((z) => ({ ...z })));
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [probe, setProbe] = useState<{ x: number; y: number } | null>({ x: 280, y: 175 });

  const selected = zones[selectedIdx];
  const effective = probe ? findEffective(probe.x, probe.y, zones) : null;

  const updateSelected = (patch: Partial<Zone>) => {
    setZones((prev) => prev.map((z, i) => (i === selectedIdx ? { ...z, ...patch } : z)));
  };

  const reset = () => {
    setZones(DEFAULT_ZONES.map((z) => ({ ...z })));
    setProbe({ x: 280, y: 175 });
    setSelectedIdx(0);
  };

  const sketch = useCallback((p: p5) => {
    let dragging: number | null = null;

    p.setup = () => {
      p.createCanvas(W, H);
      p.textFont("Inter, system-ui, sans-serif");
    };

    p.draw = () => {
      p.background(248);

      // Grid backdrop
      p.stroke(230);
      p.strokeWeight(1);
      for (let gx = 0; gx <= W; gx += 40) p.line(gx, 0, gx, H);
      for (let gy = 0; gy <= H; gy += 40) p.line(0, gy, W, gy);

      const sorted = [...zones].sort((a, b) => a.priority - b.priority);
      for (const z of sorted) {
        const idx = zones.indexOf(z);
        const c = PALETTE[idx % PALETTE.length];
        const isSelected = idx === selectedIdx;
        p.noStroke();
        p.fill(c[0], c[1], c[2], 90);
        p.ellipse(z.x, z.y, z.radius * 2);
        p.stroke(c[0], c[1], c[2]);
        p.strokeWeight(isSelected ? 3 : 2);
        if (isSelected) p.drawingContext.setLineDash([6, 4]);
        p.noFill();
        p.ellipse(z.x, z.y, z.radius * 2);
        p.drawingContext.setLineDash([]);

        p.noStroke();
        p.fill(30);
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(12);
        p.text(`Z${idx + 1}: n=${z.roughness.toFixed(3)}`, z.x, z.y - 7);
        p.textSize(11);
        p.fill(80);
        p.text(`Priority ${z.priority}`, z.x, z.y + 8);
      }

      if (probe) {
        const eff = findEffective(probe.x, probe.y, zones);
        p.noStroke();
        p.fill(20);
        p.ellipse(probe.x, probe.y, 10);
        p.fill(255);
        p.ellipse(probe.x, probe.y, 4);

        const tx = Math.min(probe.x + 14, W - 170);
        const ty = Math.max(probe.y - 36, 8);
        p.fill(20, 220);
        p.noStroke();
        p.rect(tx, ty, 162, 50, 4);
        p.fill(255);
        p.textAlign(p.LEFT, p.TOP);
        p.textSize(11);
        if (eff) {
          p.text(`Effective n = ${eff.zone.roughness.toFixed(4)}`, tx + 8, ty + 8);
          p.text(`Winner: Z${eff.index + 1} (P${eff.zone.priority})`, tx + 8, ty + 26);
        } else {
          p.text("Outside all zones", tx + 8, ty + 8);
          p.text("(default roughness)", tx + 8, ty + 26);
        }
      }

      p.noStroke();
      p.fill(120);
      p.textAlign(p.LEFT, p.BOTTOM);
      p.textSize(11);
      p.text("Drag a zone, or click empty space to move the probe.", 10, H - 6);
    };

    p.mousePressed = () => {
      if (p.mouseX < 0 || p.mouseX > W || p.mouseY < 0 || p.mouseY > H) return;
      const ordered = zones.map((z, i) => ({ z, i })).sort((a, b) => b.z.priority - a.z.priority);
      for (const { z, i } of ordered) {
        if (Math.hypot(p.mouseX - z.x, p.mouseY - z.y) < z.radius) {
          dragging = i;
          setSelectedIdx(i);
          return;
        }
      }
      setProbe({ x: p.mouseX, y: p.mouseY });
    };

    p.mouseDragged = () => {
      if (dragging !== null) {
        const z = zones[dragging];
        const nx = p.constrain(p.mouseX, z.radius, W - z.radius);
        const ny = p.constrain(p.mouseY, z.radius, H - z.radius);
        setZones((prev) => prev.map((zz, i) => (i === dragging ? { ...zz, x: nx, y: ny } : zz)));
      }
    };

    p.mouseReleased = () => {
      dragging = null;
    };
  }, [zones, selectedIdx, probe]);

  return (
    <Card>
      <CardContent className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div>
            <h3 className="font-semibold text-lg">Roughness Zone Priority Editor</h3>
            <p className="text-sm text-muted-foreground">
              Three roughness zones overlap. Drag with the mouse, or use the keyboard controls below. Click empty space to move the probe; the highest-priority zone at the probe wins.
            </p>
          </div>
          <Button variant="outline" size="sm" onClick={reset} data-testid="button-reset-roughness">
            <RotateCcw className="h-3.5 w-3.5 mr-1.5" />
            Reset
          </Button>
        </div>

        <div className="flex gap-2 flex-wrap">
          <Badge variant="outline">Z1: n=0.013 · P1 (smooth pipe)</Badge>
          <Badge variant="outline">Z2: n=0.035 · P3 (grass)</Badge>
          <Badge variant="outline">Z3: n=0.080 · P2 (dense vegetation)</Badge>
        </div>

        <div
          className="rounded-md border overflow-hidden bg-background flex justify-center"
          role="img"
          aria-label={`Canvas showing three coloured roughness zones on a grid. Probe at (${probe?.x.toFixed(0) ?? "—"}, ${probe?.y.toFixed(0) ?? "—"}). Effective Manning's n at probe: ${effective ? effective.zone.roughness.toFixed(4) + " from Z" + (effective.index + 1) : "outside all zones (default)"}.`}
        >
          <P5Sketch sketch={sketch} data-testid="sketch-roughness" />
        </div>

        {/* Accessible keyboard controls */}
        <div className="rounded-md border p-3 space-y-3" aria-label="Keyboard controls for roughness zones">
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">Edit zone</label>
              <Select value={String(selectedIdx)} onValueChange={(v) => setSelectedIdx(Number(v))}>
                <SelectTrigger data-testid="select-zone"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {zones.map((_, i) => (
                    <SelectItem key={i} value={String(i)}>Zone {i + 1}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">
                Priority: <span className="font-semibold text-foreground">{selected.priority}</span>
              </label>
              <Slider
                value={[selected.priority]}
                onValueChange={([v]) => updateSelected({ priority: v })}
                min={1}
                max={5}
                step={1}
                data-testid="slider-priority"
                aria-label={`Priority of zone ${selectedIdx + 1}`}
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">
                Roughness n: <span className="font-semibold text-foreground">{selected.roughness.toFixed(3)}</span>
              </label>
              <Slider
                value={[selected.roughness * 1000]}
                onValueChange={([v]) => updateSelected({ roughness: v / 1000 })}
                min={10}
                max={150}
                step={1}
                data-testid="slider-roughness"
                aria-label={`Manning's roughness for zone ${selectedIdx + 1}`}
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">
                Radius: <span className="font-semibold text-foreground">{selected.radius}px</span>
              </label>
              <Slider
                value={[selected.radius]}
                onValueChange={([v]) => updateSelected({ radius: v })}
                min={40}
                max={160}
                step={5}
                data-testid="slider-radius"
                aria-label={`Radius of zone ${selectedIdx + 1}`}
              />
            </div>
          </div>

          {/* Live region for screen readers */}
          <div className="text-xs text-muted-foreground border-t pt-2" aria-live="polite" data-testid="text-state-summary">
            <span className="font-medium text-foreground">Effective roughness at probe: </span>
            {effective
              ? `n = ${effective.zone.roughness.toFixed(4)} from Zone ${effective.index + 1} (priority ${effective.zone.priority})`
              : "outside all zones — default roughness applies"}
          </div>
        </div>

        <div className="flex gap-2 rounded-md bg-amber-500/10 border border-amber-500/20 p-3 text-sm">
          <Lightbulb className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
          <div>
            <span className="font-semibold text-amber-900 dark:text-amber-200">Takeaway: </span>
            <span className="text-amber-900/90 dark:text-amber-100/90">
              Where zones overlap, only the highest-priority zone applies. A "dense vegetation" override on top of a base "grass" zone needs a higher priority number, or the override is invisible.
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
