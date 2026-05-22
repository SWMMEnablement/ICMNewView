import { useCallback, useState } from "react";
import type p5 from "p5";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
import P5Sketch from "../P5Sketch";

const STAGES = [
  {
    version: "2011",
    label: "Uniform coarse grid",
    blurb: "Single mesh resolution everywhere — fast to run, but flow paths around buildings are barely resolved.",
    cellSize: 50,
    adaptive: false,
    subgrid: false,
  },
  {
    version: "2015",
    label: "Adaptive refinement",
    blurb: "Mesh refines near buildings and breaklines. Better accuracy, larger element count.",
    cellSize: 50,
    adaptive: true,
    subgrid: false,
  },
  {
    version: "2020",
    label: "Aggressive refinement",
    blurb: "Even finer refinement near features. Models become large; runtimes grow.",
    cellSize: 50,
    adaptive: true,
    refinementFactor: 2,
    subgrid: false,
  },
  {
    version: "2027",
    label: "Subgrid sampling",
    blurb: "Coarse mesh keeps runtime low. Subgrid sampling stores higher-resolution topography inside each cell — flood depths at buildings are accurate without exploding the mesh.",
    cellSize: 50,
    adaptive: false,
    subgrid: true,
  },
] as const;

// Static building geometry — same scene across versions
const BUILDINGS = [
  { x: 160, y: 110, w: 90, h: 70 },
  { x: 290, y: 180, w: 70, h: 60 },
  { x: 410, y: 90, w: 110, h: 50 },
  { x: 380, y: 240, w: 60, h: 50 },
];

export default function MeshingEvolutionSketch() {
  const [stageIdx, setStageIdx] = useState(0);
  const stage = STAGES[stageIdx];

  const sketch = useCallback((p: p5) => {
    const W = 620;
    const H = 340;

    function nearBuilding(cx: number, cy: number, margin = 0): boolean {
      return BUILDINGS.some(
        (b) =>
          cx + 25 > b.x - margin &&
          cx - 25 < b.x + b.w + margin &&
          cy + 25 > b.y - margin &&
          cy - 25 < b.y + b.h + margin
      );
    }

    p.setup = () => {
      p.createCanvas(W, H);
      p.textFont("Inter, system-ui, sans-serif");
      p.noLoop();
    };

    p.draw = () => {
      p.background(245, 247, 250);

      const s = STAGES[stageIdx];

      // Draw mesh based on stage
      p.stroke(160, 200, 240);
      p.strokeWeight(1);
      p.noFill();
      const base = s.cellSize;
      for (let x = 0; x < W; x += base) {
        for (let y = 0; y < H; y += base) {
          if (s.adaptive) {
            const refinement = (s as any).refinementFactor || 1;
            const near = nearBuilding(x + base / 2, y + base / 2, 30);
            if (near) {
              const sub = base / (2 * refinement);
              for (let ix = 0; ix < base; ix += sub) {
                for (let iy = 0; iy < base; iy += sub) {
                  p.rect(x + ix, y + iy, sub, sub);
                }
              }
            } else {
              p.rect(x, y, base, base);
            }
          } else {
            p.rect(x, y, base, base);
          }
        }
      }

      // Subgrid sampling visualization: overlay fine dots inside coarse cells near buildings
      if (s.subgrid) {
        for (let x = 0; x < W; x += base) {
          for (let y = 0; y < H; y += base) {
            if (nearBuilding(x + base / 2, y + base / 2, 40)) {
              // Mark cell as subgrid-enriched
              p.fill(255, 200, 100, 50);
              p.noStroke();
              p.rect(x, y, base, base);
              // Sampling dots
              p.fill(220, 120, 30);
              for (let dx = 5; dx < base; dx += 10) {
                for (let dy = 5; dy < base; dy += 10) {
                  if (!isInsideBuilding(x + dx, y + dy)) {
                    p.ellipse(x + dx, y + dy, 1.5);
                  }
                }
              }
            }
          }
        }
      }

      // Buildings on top
      p.noStroke();
      p.fill(60, 70, 90);
      for (const b of BUILDINGS) {
        p.rect(b.x, b.y, b.w, b.h, 2);
      }

      // Element count badge
      const count = estimateElementCount(s);
      p.fill(20, 200);
      p.noStroke();
      p.rect(10, 10, 200, 46, 4);
      p.fill(255);
      p.textAlign(p.LEFT, p.TOP);
      p.textSize(11);
      p.text(`Mesh: ${s.label}`, 18, 16);
      p.textSize(13);
      p.text(`≈ ${count.toLocaleString()} elements`, 18, 32);
    };

    function isInsideBuilding(x: number, y: number) {
      return BUILDINGS.some((b) => x >= b.x && x <= b.x + b.w && y >= b.y && y <= b.y + b.h);
    }

    function estimateElementCount(s: typeof STAGES[number]) {
      const baseCount = (W / s.cellSize) * (H / s.cellSize);
      if (!s.adaptive) return Math.round(baseCount);
      const refinement = (s as any).refinementFactor || 1;
      // Count cells near buildings refined into (2*refinement)^2 subcells
      let extra = 0;
      for (let x = 0; x < W; x += s.cellSize) {
        for (let y = 0; y < H; y += s.cellSize) {
          if (nearBuilding(x + s.cellSize / 2, y + s.cellSize / 2, 30)) {
            extra += (2 * refinement) ** 2 - 1;
          }
        }
      }
      return Math.round(baseCount + extra);
    }
  }, [stageIdx]);

  return (
    <Card>
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-lg">2D Meshing Evolution</h3>
          <p className="text-sm text-muted-foreground">
            Same urban scene, four mesh strategies across 16 years of ICM development.
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="font-mono">v{stage.version}</Badge>
            <span className="text-sm font-medium">{stage.label}</span>
          </div>
          <Slider
            value={[stageIdx]}
            onValueChange={([v]) => setStageIdx(v)}
            min={0}
            max={STAGES.length - 1}
            step={1}
            data-testid="slider-mesh-stage"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            {STAGES.map((s, i) => (
              <button
                key={s.version}
                type="button"
                onClick={() => setStageIdx(i)}
                className={i === stageIdx ? "font-semibold text-foreground" : "hover:text-foreground"}
                data-testid={`mesh-stage-${s.version}`}
              >
                v{s.version}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-md border overflow-hidden bg-background flex justify-center">
          <P5Sketch sketch={sketch} data-testid="sketch-meshing" />
        </div>

        <p className="text-sm text-muted-foreground">{stage.blurb}</p>

        <div className="flex gap-2 rounded-md bg-amber-500/10 border border-amber-500/20 p-3 text-sm">
          <Lightbulb className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
          <div>
            <span className="font-semibold text-amber-900 dark:text-amber-200">Takeaway: </span>
            <span className="text-amber-900/90 dark:text-amber-100/90">
              Subgrid sampling (v2027) breaks the historical trade-off between mesh size and accuracy near buildings. You get the runtime of a coarse mesh with the flood-depth fidelity of a fine one.
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
