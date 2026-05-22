import { useCallback, useMemo, useState } from "react";
import type p5 from "p5";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
import P5Sketch from "../P5Sketch";

type Method = "FEH2013" | "NOAA Atlas 14" | "Euler Type II";

interface Bar {
  t: number;
  intensity: number; // mm/hr
  depth: number; // mm in this step
}

function generateHyetograph(method: Method, returnPeriod: number, durationMin: number, dt = 5): Bar[] {
  // Total depth scales with sqrt(returnPeriod) and duration^0.3 (rough IDF)
  const totalDepth = 25 * Math.pow(returnPeriod, 0.45) * Math.pow(durationMin / 60, 0.3);
  const steps = Math.max(2, Math.floor(durationMin / dt));
  const bars: Bar[] = [];
  for (let i = 0; i < steps; i++) {
    const frac = (i + 0.5) / steps; // 0..1
    let w: number;
    if (method === "FEH2013") {
      // Symmetric Gaussian-ish peak in middle (50%)
      w = Math.exp(-Math.pow((frac - 0.5) / 0.18, 2));
    } else if (method === "NOAA Atlas 14") {
      // Peak slightly past middle (60%)
      w = Math.exp(-Math.pow((frac - 0.6) / 0.22, 2));
    } else {
      // Euler Type II — back-loaded (peak at ~70%)
      w = Math.exp(-Math.pow((frac - 0.7) / 0.16, 2));
    }
    bars.push({ t: i * dt, intensity: 0, depth: w });
  }
  // Normalise to total depth
  const sumW = bars.reduce((s, b) => s + b.depth, 0);
  for (const b of bars) {
    b.depth = (b.depth / sumW) * totalDepth;
    b.intensity = b.depth * (60 / dt); // mm/hr
  }
  return bars;
}

export default function DesignRainfallSketch() {
  const [returnPeriod, setReturnPeriod] = useState(10);
  const [duration, setDuration] = useState(60);
  const [method, setMethod] = useState<Method>("FEH2013");

  const bars = useMemo(
    () => generateHyetograph(method, returnPeriod, duration),
    [method, returnPeriod, duration]
  );

  const totalDepth = bars.reduce((s, b) => s + b.depth, 0);
  const peakIntensity = Math.max(...bars.map((b) => b.intensity));

  const sketch = useCallback((p: p5) => {
    const W = 620;
    const H = 280;

    p.setup = () => {
      p.createCanvas(W, H);
      p.textFont("Inter, system-ui, sans-serif");
      p.noLoop();
    };

    p.draw = () => {
      p.background(248, 250, 252);

      const margin = { l: 50, r: 20, t: 20, b: 36 };
      const chartW = W - margin.l - margin.r;
      const chartH = H - margin.t - margin.b;
      const maxY = Math.max(peakIntensity, 1) * 1.15;

      // Axes
      p.stroke(180);
      p.line(margin.l, margin.t, margin.l, margin.t + chartH);
      p.line(margin.l, margin.t + chartH, margin.l + chartW, margin.t + chartH);

      // Y-axis labels
      p.noStroke();
      p.fill(100);
      p.textSize(10);
      p.textAlign(p.RIGHT, p.CENTER);
      for (let i = 0; i <= 4; i++) {
        const yv = (maxY * i) / 4;
        const yy = margin.t + chartH - (chartH * i) / 4;
        p.text(yv.toFixed(0), margin.l - 6, yy);
        p.stroke(230);
        p.line(margin.l, yy, margin.l + chartW, yy);
        p.noStroke();
      }
      p.push();
      p.translate(14, margin.t + chartH / 2);
      p.rotate(-p.HALF_PI);
      p.textAlign(p.CENTER, p.CENTER);
      p.fill(80);
      p.text("Intensity (mm/hr)", 0, 0);
      p.pop();

      // Bars
      const barW = chartW / bars.length;
      p.noStroke();
      for (let i = 0; i < bars.length; i++) {
        const b = bars[i];
        const h = (b.intensity / maxY) * chartH;
        const x = margin.l + i * barW;
        const y = margin.t + chartH - h;
        p.fill(59, 130, 246, 200);
        p.rect(x + 1, y, barW - 2, h, 2);
      }

      // X-axis labels (every ~5 bars)
      p.fill(100);
      p.textAlign(p.CENTER, p.TOP);
      p.textSize(10);
      const stride = Math.max(1, Math.floor(bars.length / 8));
      for (let i = 0; i < bars.length; i += stride) {
        const x = margin.l + i * barW + barW / 2;
        p.text(`${bars[i].t}m`, x, margin.t + chartH + 4);
      }
      p.text("Time", margin.l + chartW / 2, margin.t + chartH + 20);
    };
  }, [bars, peakIntensity]);

  return (
    <Card>
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-lg">Design Rainfall Generator <Badge variant="outline" className="ml-2 align-middle">Try it yourself</Badge></h3>
          <p className="text-sm text-muted-foreground">
            Build a design storm. Change return period, duration, and method to see how the hyetograph shape and totals respond.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground">
              Return period: <span className="font-semibold text-foreground">{returnPeriod} yr</span>
            </label>
            <Slider value={[returnPeriod]} onValueChange={([v]) => setReturnPeriod(v)} min={1} max={100} step={1} data-testid="slider-return-period" />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground">
              Duration: <span className="font-semibold text-foreground">{duration} min</span>
            </label>
            <Slider value={[duration]} onValueChange={([v]) => setDuration(v)} min={15} max={240} step={5} data-testid="slider-duration" />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground">Method</label>
            <Select value={method} onValueChange={(v) => setMethod(v as Method)}>
              <SelectTrigger data-testid="select-rainfall-method"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="FEH2013">FEH 2013 (UK, symmetric)</SelectItem>
                <SelectItem value="NOAA Atlas 14">NOAA Atlas 14 (US)</SelectItem>
                <SelectItem value="Euler Type II">Euler Type II (back-loaded)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="rounded-md border overflow-hidden bg-background flex justify-center">
          <P5Sketch sketch={sketch} data-testid="sketch-rainfall" />
        </div>

        <div className="grid grid-cols-3 gap-2 text-sm">
          <div className="rounded-md border p-2">
            <div className="text-xs text-muted-foreground">Total depth</div>
            <div className="font-semibold text-base">{totalDepth.toFixed(1)} mm</div>
          </div>
          <div className="rounded-md border p-2">
            <div className="text-xs text-muted-foreground">Peak intensity</div>
            <div className="font-semibold text-base">{peakIntensity.toFixed(1)} mm/hr</div>
          </div>
          <div className="rounded-md border p-2">
            <div className="text-xs text-muted-foreground">Time steps</div>
            <div className="font-semibold text-base">{bars.length} × 5 min</div>
          </div>
        </div>

        <div className="flex gap-2 rounded-md bg-amber-500/10 border border-amber-500/20 p-3 text-sm">
          <Lightbulb className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
          <div>
            <span className="font-semibold text-amber-900 dark:text-amber-200">Takeaway: </span>
            <span className="text-amber-900/90 dark:text-amber-100/90">
              Same return period and duration produce very different storms depending on the method. A back-loaded Euler hyetograph drains the system later in the simulation than a symmetric FEH event — your peak flows shift in time, not just in magnitude.
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
