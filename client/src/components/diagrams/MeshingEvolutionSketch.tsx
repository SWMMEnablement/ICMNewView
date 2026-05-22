import { useCallback, useEffect, useRef, useState } from "react";
import type p5 from "p5";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Lightbulb } from "lucide-react";
import P5Sketch from "../P5Sketch";

interface Stage {
  version: string;
  label: string;
  blurb: string;
  baseCell: number;       // base mesh resolution
  refineNear: number;     // how many recursive splits near buildings (0 = none)
  refineDist: number;     // distance from a building edge that triggers refinement
  subgrid: boolean;       // sample sub-cell topography for smooth output
  elementsApprox: number; // headline count for the badge
}

const STAGES: Stage[] = [
  {
    version: "2011",
    label: "Uniform coarse grid",
    blurb: "Single resolution everywhere. Fast, but flood depth jumps in big blocks around buildings — alley-scale flow is invisible.",
    baseCell: 50,
    refineNear: 0,
    refineDist: 0,
    subgrid: false,
    elementsApprox: 84,
  },
  {
    version: "2015",
    label: "Adaptive refinement",
    blurb: "Cells split once near buildings. Depth gradient sharpens at façades; element count roughly doubles.",
    baseCell: 50,
    refineNear: 1,
    refineDist: 30,
    subgrid: false,
    elementsApprox: 168,
  },
  {
    version: "2020",
    label: "Aggressive refinement",
    blurb: "Two levels of refinement near features. Best façade detail of any pre-subgrid era — but element count and runtime balloon.",
    baseCell: 50,
    refineNear: 2,
    refineDist: 40,
    subgrid: false,
    elementsApprox: 540,
  },
  {
    version: "2027",
    label: "Subgrid sampling",
    blurb: "Coarse cells stay coarse, but each cell carries a sub-sampled depth field. You get smooth, building-aware flooding without exploding the mesh.",
    baseCell: 50,
    refineNear: 0,
    refineDist: 0,
    subgrid: true,
    elementsApprox: 84,
  },
];

const W = 620;
const H = 340;

// Static urban scene
const BUILDINGS = [
  { x: 150, y: 110, w: 90, h: 70 },
  { x: 290, y: 180, w: 70, h: 60 },
  { x: 410, y: 90, w: 110, h: 50 },
  { x: 380, y: 240, w: 60, h: 50 },
  { x: 80, y: 220, w: 50, h: 50 },
];

// "True" continuous flood-depth field, defined analytically so we can sample
// it at any resolution. Depth peaks along a curving river then attenuates,
// with buildings displacing flow around them.
function depthAt(x: number, y: number): number {
  // River runs from left to right with a sinusoidal sway
  const riverY = H / 2 + Math.sin(x / 70) * 50;
  const distToRiver = Math.abs(y - riverY);
  let d = Math.max(0, 1 - distToRiver / 110);

  // Buildings push water sideways: add a thin ring of slightly elevated depth
  for (const b of BUILDINGS) {
    const cx = Math.max(b.x, Math.min(x, b.x + b.w));
    const cy = Math.max(b.y, Math.min(y, b.y + b.h));
    const dist = Math.hypot(x - cx, y - cy);
    if (dist < 30 && dist > 0) d += (1 - dist / 30) * 0.3;
    if (x >= b.x && x <= b.x + b.w && y >= b.y && y <= b.y + b.h) return -1; // inside building
  }
  return Math.min(1, d);
}

function depthColor(p: p5, d: number) {
  if (d < 0) return null; // building
  // Light cream (dry) → blue (deep)
  const t = Math.max(0, Math.min(1, d));
  const r = 245 - t * 175;
  const g = 240 - t * 110;
  const b = 220 + t * 30;
  return p.color(r, g, b);
}

function distToBuilding(cx: number, cy: number): number {
  let best = Infinity;
  for (const b of BUILDINGS) {
    const dx = Math.max(b.x - cx, 0, cx - (b.x + b.w));
    const dy = Math.max(b.y - cy, 0, cy - (b.y + b.h));
    const d = Math.hypot(dx, dy);
    if (d < best) best = d;
  }
  return best;
}

export default function MeshingEvolutionSketch() {
  const [stageIdx, setStageIdx] = useState(0);
  const [showMesh, setShowMesh] = useState(true);

  const stageRef = useRef(stageIdx);
  const showMeshRef = useRef(showMesh);
  useEffect(() => { stageRef.current = stageIdx; }, [stageIdx]);
  useEffect(() => { showMeshRef.current = showMesh; }, [showMesh]);

  // Sketch created ONCE — reads live state via refs
  const sketch = useCallback((p: p5) => {
    p.setup = () => {
      p.createCanvas(W, H);
      p.textFont("Inter, system-ui, sans-serif");
    };

    function drawCell(x: number, y: number, size: number, s: Stage) {
      if (s.subgrid) {
        // Fill the cell using a fine sub-sampled depth field
        const sub = 5;
        p.noStroke();
        for (let dx = 0; dx < size; dx += sub) {
          for (let dy = 0; dy < size; dy += sub) {
            const d = depthAt(x + dx + sub / 2, y + dy + sub / 2);
            const c = depthColor(p, d);
            if (c) {
              p.fill(c);
              p.rect(x + dx, y + dy, sub, sub);
            }
          }
        }
      } else {
        // Sample once at the cell centre — produces blocky output
        const d = depthAt(x + size / 2, y + size / 2);
        const c = depthColor(p, d);
        p.noStroke();
        if (c) {
          p.fill(c);
          p.rect(x, y, size, size);
        }
      }
    }

    function refineAndDraw(x: number, y: number, size: number, s: Stage, level: number) {
      const cx = x + size / 2;
      const cy = y + size / 2;
      const should = level < s.refineNear && distToBuilding(cx, cy) < s.refineDist;
      if (should) {
        const half = size / 2;
        refineAndDraw(x, y, half, s, level + 1);
        refineAndDraw(x + half, y, half, s, level + 1);
        refineAndDraw(x, y + half, half, s, level + 1);
        refineAndDraw(x + half, y + half, half, s, level + 1);
      } else {
        drawCell(x, y, size, s);
        if (showMeshRef.current) {
          p.noFill();
          p.stroke(70, 110, 160, 110);
          p.strokeWeight(0.6);
          p.rect(x, y, size, size);
        }
      }
    }

    p.draw = () => {
      const s = STAGES[stageRef.current];
      p.background(248);

      // Fill mesh cells
      for (let x = 0; x < W; x += s.baseCell) {
        for (let y = 0; y < H; y += s.baseCell) {
          refineAndDraw(x, y, s.baseCell, s, 0);
        }
      }

      // Buildings on top
      p.noStroke();
      p.fill(60, 70, 90);
      for (const b of BUILDINGS) p.rect(b.x, b.y, b.w, b.h, 2);
      // Roof outlines for clarity
      p.noFill();
      p.stroke(30, 40, 60);
      p.strokeWeight(1);
      for (const b of BUILDINGS) p.rect(b.x, b.y, b.w, b.h, 2);

      // Title badge
      p.noStroke();
      p.fill(20, 200);
      p.rect(10, 10, 240, 50, 4);
      p.fill(255);
      p.textAlign(p.LEFT, p.TOP);
      p.textSize(11);
      p.text(`v${s.version} — ${s.label}`, 18, 16);
      p.textSize(13);
      p.text(`≈ ${s.elementsApprox.toLocaleString()} elements`, 18, 34);

      // Depth-scale legend (bottom-right)
      const lx = W - 130;
      const ly = H - 28;
      p.noStroke();
      for (let i = 0; i < 100; i++) {
        const c = depthColor(p, i / 100);
        if (c) {
          p.fill(c);
          p.rect(lx + i * 1.1, ly, 1.2, 10);
        }
      }
      p.fill(60);
      p.textAlign(p.LEFT, p.BOTTOM);
      p.textSize(10);
      p.text("dry", lx, ly);
      p.textAlign(p.RIGHT, p.BOTTOM);
      p.text("deep flood", lx + 110, ly);
    };
  }, []);

  const stage = STAGES[stageIdx];

  return (
    <Card>
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-lg">2D Meshing Evolution</h3>
          <p className="text-sm text-muted-foreground">
            Same urban scene and same underlying flood field. Watch how each mesh strategy samples it differently — the colour of each cell is the depth that strategy would report.
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <Badge variant="outline" className="font-mono">v{stage.version}</Badge>
            <span className="text-sm font-medium flex-1">{stage.label}</span>
            <div className="flex items-center gap-2">
              <Switch id="show-mesh" checked={showMesh} onCheckedChange={setShowMesh} data-testid="switch-show-mesh" />
              <Label htmlFor="show-mesh" className="text-xs cursor-pointer">Show mesh lines</Label>
            </div>
          </div>
          <Slider
            value={[stageIdx]}
            onValueChange={([v]) => setStageIdx(v)}
            min={0}
            max={STAGES.length - 1}
            step={1}
            data-testid="slider-mesh-stage"
            aria-label="Meshing era"
          />
          <div className="flex justify-between text-xs">
            {STAGES.map((s, i) => (
              <button
                key={s.version}
                type="button"
                onClick={() => setStageIdx(i)}
                className={`hover-elevate active-elevate-2 rounded px-1.5 py-0.5 ${i === stageIdx ? "font-semibold text-foreground" : "text-muted-foreground"}`}
                data-testid={`mesh-stage-${s.version}`}
              >
                v{s.version}
              </button>
            ))}
          </div>
        </div>

        <div
          className="rounded-md border overflow-hidden bg-background flex justify-center"
          role="img"
          aria-label={`Urban flood scene meshed using ${stage.label} (${stage.elementsApprox} elements approx).`}
        >
          <P5Sketch sketch={sketch} data-testid="sketch-meshing" />
        </div>

        <p className="text-sm text-muted-foreground">{stage.blurb}</p>

        <div className="flex gap-2 rounded-md bg-amber-500/10 border border-amber-500/20 p-3 text-sm">
          <Lightbulb className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
          <div>
            <span className="font-semibold text-amber-900 dark:text-amber-200">Takeaway: </span>
            <span className="text-amber-900/90 dark:text-amber-100/90">
              Compare v2020 and v2027 directly. Both resolve the depth gradient at building façades smoothly — but v2027 does it with the element count of v2011. That's the runtime saving that subgrid sampling unlocks.
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
