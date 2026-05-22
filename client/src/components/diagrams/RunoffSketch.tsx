import { useCallback, useState } from "react";
import type p5 from "p5";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Lightbulb } from "lucide-react";
import P5Sketch from "../P5Sketch";

const W = 620;
const H = 360;
const PAD_L = 50;
const PAD_R = 16;
const PAD_T = 24;
const PAD_B = 46;
const PLOT_W = W - PAD_L - PAD_R;
const PLOT_H = H - PAD_T - PAD_B;

const LAND_USES: Record<string, { label: string; cn: number }> = {
  forest: { label: "Forest (good cover)", cn: 55 },
  grass: { label: "Grass / open space", cn: 74 },
  residential: { label: "Residential ⅓ acre", cn: 81 },
  commercial: { label: "Commercial / paved", cn: 92 },
  impervious: { label: "Fully impervious", cn: 98 },
};

// SCS CN method: cumulative runoff Q for cumulative rainfall P (mm)
function scsCumulative(p_mm: number, cn: number) {
  const S = 25400 / cn - 254; // potential retention (mm)
  const Ia = 0.2 * S;
  if (p_mm <= Ia) return 0;
  return ((p_mm - Ia) ** 2) / (p_mm - Ia + S);
}

// Build a simple symmetric 60-minute storm hyetograph (mm per 5 min) totalling `total`
function buildHyetograph(total: number, durationMin = 60, stepMin = 5) {
  const n = durationMin / stepMin;
  const center = (n - 1) / 2;
  const weights: number[] = [];
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const w = Math.exp(-((i - center) ** 2) / 6);
    weights.push(w);
    sum += w;
  }
  return weights.map((w) => (w / sum) * total);
}

export default function RunoffSketch() {
  const [landUse, setLandUse] = useState<keyof typeof LAND_USES>("residential");
  const [rainfall, setRainfall] = useState(40); // mm
  const cn = LAND_USES[landUse].cn;

  const hyetograph = buildHyetograph(rainfall);
  let cumRain = 0;
  let prevRunoff = 0;
  const series = hyetograph.map((r) => {
    cumRain += r;
    const cumRunoff = scsCumulative(cumRain, cn);
    const incRunoff = cumRunoff - prevRunoff;
    prevRunoff = cumRunoff;
    return { rain: r, runoff: Math.max(0, incRunoff), cumRain, cumRunoff };
  });

  const totalRunoff = scsCumulative(rainfall, cn);
  const losses = rainfall - totalRunoff;
  const runoffPct = rainfall > 0 ? (totalRunoff / rainfall) * 100 : 0;

  const maxBar = Math.max(...series.map((s) => Math.max(s.rain, s.runoff)), 1);

  const sketch = useCallback((p: p5) => {
    const xAt = (i: number) => PAD_L + (PLOT_W * (i + 0.5)) / series.length;
    const yAt = (v: number) => PAD_T + PLOT_H - (v / maxBar) * PLOT_H;

    p.setup = () => {
      p.createCanvas(W, H);
      p.textFont("Inter, system-ui, sans-serif");
    };

    p.draw = () => {
      p.background(248);

      // Axes
      p.stroke(120);
      p.strokeWeight(1.5);
      p.line(PAD_L, PAD_T + PLOT_H, PAD_L + PLOT_W, PAD_T + PLOT_H);
      p.line(PAD_L, PAD_T, PAD_L, PAD_T + PLOT_H);

      p.stroke(220);
      p.strokeWeight(1);
      for (let i = 0; i < 5; i++) {
        const y = PAD_T + (PLOT_H * i) / 4;
        p.line(PAD_L, y, PAD_L + PLOT_W, y);
      }

      // Y axis labels
      p.noStroke();
      p.fill(110);
      p.textSize(9);
      p.textAlign(p.RIGHT, p.CENTER);
      for (let i = 0; i <= 4; i++) {
        const v = (maxBar * (4 - i)) / 4;
        p.text(v.toFixed(1), PAD_L - 5, PAD_T + (PLOT_H * i) / 4);
      }

      // Bars
      const barW = (PLOT_W / series.length) * 0.42;
      series.forEach((s, i) => {
        const x = xAt(i);
        // Rainfall (blue, left half)
        p.noStroke();
        p.fill(70, 130, 200);
        const ry = yAt(s.rain);
        p.rect(x - barW - 1, ry, barW, PAD_T + PLOT_H - ry, 2);
        // Runoff (orange, right half)
        p.fill(220, 130, 70);
        const ru = yAt(s.runoff);
        p.rect(x + 1, ru, barW, PAD_T + PLOT_H - ru, 2);
      });

      // X axis ticks (minutes)
      p.fill(110);
      p.textAlign(p.CENTER, p.TOP);
      p.textSize(9);
      for (let m = 0; m <= 60; m += 15) {
        const x = PAD_L + (PLOT_W * m) / 60;
        p.stroke(180);
        p.strokeWeight(1);
        p.line(x, PAD_T + PLOT_H, x, PAD_T + PLOT_H + 4);
        p.noStroke();
        p.fill(110);
        p.text(`${m}'`, x, PAD_T + PLOT_H + 6);
      }

      // Axis labels
      p.fill(60);
      p.textAlign(p.CENTER, p.TOP);
      p.textSize(10);
      p.text("Time (min)", PAD_L + PLOT_W / 2, PAD_T + PLOT_H + 24);
      p.push();
      p.translate(14, PAD_T + PLOT_H / 2);
      p.rotate(-Math.PI / 2);
      p.text("Depth per 5 min (mm)", 0, 0);
      p.pop();

      // Legend
      p.noStroke();
      p.fill(70, 130, 200);
      p.rect(PAD_L + 4, PAD_T + 4, 12, 12, 2);
      p.fill(60);
      p.textAlign(p.LEFT, p.CENTER);
      p.textSize(11);
      p.text("Rainfall", PAD_L + 20, PAD_T + 10);
      p.fill(220, 130, 70);
      p.rect(PAD_L + 90, PAD_T + 4, 12, 12, 2);
      p.fill(60);
      p.text("Runoff", PAD_L + 106, PAD_T + 10);

      // Losses block on right
      const lossPct = rainfall > 0 ? (losses / rainfall) * 100 : 0;
      p.fill(60);
      p.textAlign(p.RIGHT, p.TOP);
      p.textSize(11);
      p.text(`CN = ${cn}`, PAD_L + PLOT_W - 4, PAD_T + 4);
      p.text(`Losses: ${losses.toFixed(1)} mm (${lossPct.toFixed(0)}%)`, PAD_L + PLOT_W - 4, PAD_T + 20);
    };
  }, [series, maxBar, cn, losses, rainfall]);

  return (
    <Card>
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-lg">Subcatchment Runoff (SCS Curve Number)</h3>
          <p className="text-sm text-muted-foreground">
            Same 60-minute storm, different land use. The SCS-CN method splits rainfall into initial abstraction, continuing losses, and effective runoff. See how curve number drives the hydrograph shape.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground">Land use</label>
            <Select value={landUse} onValueChange={(v) => setLandUse(v as keyof typeof LAND_USES)}>
              <SelectTrigger data-testid="select-land-use"><SelectValue /></SelectTrigger>
              <SelectContent>
                {Object.entries(LAND_USES).map(([k, v]) => (
                  <SelectItem key={k} value={k}>{v.label} (CN {v.cn})</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground">
              Total rainfall: <span className="font-semibold text-foreground">{rainfall} mm</span>
            </label>
            <Slider value={[rainfall]} onValueChange={([v]) => setRainfall(v)} min={5} max={120} step={1} data-testid="slider-rainfall" aria-label="Total rainfall in mm" />
          </div>
        </div>

        <div
          className="rounded-md border overflow-hidden bg-background flex justify-center"
          role="img"
          aria-label={`Bar chart comparing rainfall and runoff per 5-minute interval. Total rainfall ${rainfall} mm on ${LAND_USES[landUse].label} (CN ${cn}) produces ${totalRunoff.toFixed(1)} mm runoff and ${losses.toFixed(1)} mm losses.`}
        >
          <P5Sketch sketch={sketch} data-testid="sketch-runoff" />
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" data-testid="badge-runoff-total">Total runoff: {totalRunoff.toFixed(1)} mm</Badge>
          <Badge variant="outline">Runoff coefficient: {runoffPct.toFixed(0)}%</Badge>
          <Badge variant="outline">Losses: {losses.toFixed(1)} mm</Badge>
        </div>

        <div className="flex gap-2 rounded-md bg-amber-500/10 border border-amber-500/20 p-3 text-sm">
          <Lightbulb className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
          <div>
            <span className="font-semibold text-amber-900 dark:text-amber-200">Takeaway: </span>
            <span className="text-amber-900/90 dark:text-amber-100/90">
              Small storms on permeable ground produce no runoff at all — the curve number method captures that threshold via initial abstraction. Urbanising a catchment doesn't just increase peak flow; it also lowers the rainfall depth needed to start producing any runoff.
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
