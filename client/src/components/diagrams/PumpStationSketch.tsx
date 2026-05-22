import { useCallback, useState } from "react";
import type p5 from "p5";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Lightbulb } from "lucide-react";
import P5Sketch from "../P5Sketch";

const W = 620;
const H = 360;

const PAD_L = 60;
const PAD_R = 20;
const PAD_T = 30;
const PAD_B = 50;
const PLOT_W = W - PAD_L - PAD_R;
const PLOT_H = H - PAD_T - PAD_B;

const Q_MAX = 100; // L/s
const H_MAX = 50;  // m

// Pump curve: H_p = shutoff - a * Q^2
function pumpHead(q: number, shutoff: number, a: number) {
  return Math.max(0, shutoff - a * q * q);
}
// System curve: H_s = static + k * Q^2
function systemHead(q: number, staticHead: number, k: number) {
  return staticHead + k * q * q;
}

function findOperatingPoint(shutoff: number, a: number, staticHead: number, k: number) {
  // shutoff - a*Q^2 = static + k*Q^2 → Q = sqrt((shutoff - static)/(a + k))
  if (shutoff <= staticHead) return { q: 0, h: staticHead };
  const q = Math.sqrt((shutoff - staticHead) / (a + k));
  const h = systemHead(q, staticHead, k);
  return { q, h };
}

export default function PumpStationSketch() {
  const [shutoff, setShutoff] = useState(40);
  const [pumpSlope, setPumpSlope] = useState(0.003); // a
  const [staticHead, setStaticHead] = useState(10);
  const [systemK, setSystemK] = useState(0.002);

  const op = findOperatingPoint(shutoff, pumpSlope, staticHead, systemK);

  const sketch = useCallback((p: p5) => {
    const qToX = (q: number) => PAD_L + (q / Q_MAX) * PLOT_W;
    const hToY = (h: number) => PAD_T + PLOT_H - (h / H_MAX) * PLOT_H;

    p.setup = () => {
      p.createCanvas(W, H);
      p.textFont("Inter, system-ui, sans-serif");
    };

    p.draw = () => {
      p.background(248);

      // Axes
      p.stroke(200);
      p.strokeWeight(1);
      for (let q = 0; q <= Q_MAX; q += 10) {
        const x = qToX(q);
        p.line(x, PAD_T, x, PAD_T + PLOT_H);
      }
      for (let h = 0; h <= H_MAX; h += 10) {
        const y = hToY(h);
        p.line(PAD_L, y, PAD_L + PLOT_W, y);
      }
      p.stroke(120);
      p.strokeWeight(1.5);
      p.line(PAD_L, PAD_T + PLOT_H, PAD_L + PLOT_W, PAD_T + PLOT_H);
      p.line(PAD_L, PAD_T, PAD_L, PAD_T + PLOT_H);

      // Axis labels
      p.noStroke();
      p.fill(60);
      p.textAlign(p.CENTER, p.TOP);
      p.textSize(11);
      p.text("Flow Q (L/s)", PAD_L + PLOT_W / 2, PAD_T + PLOT_H + 22);
      p.push();
      p.translate(16, PAD_T + PLOT_H / 2);
      p.rotate(-Math.PI / 2);
      p.text("Head H (m)", 0, 0);
      p.pop();

      // Tick numbers
      p.textSize(9);
      p.fill(110);
      for (let q = 0; q <= Q_MAX; q += 20) {
        p.textAlign(p.CENTER, p.TOP);
        p.text(q, qToX(q), PAD_T + PLOT_H + 4);
      }
      for (let h = 0; h <= H_MAX; h += 10) {
        p.textAlign(p.RIGHT, p.CENTER);
        p.text(h, PAD_L - 6, hToY(h));
      }

      // Pump curve
      p.noFill();
      p.stroke(70, 130, 200);
      p.strokeWeight(2.5);
      p.beginShape();
      for (let q = 0; q <= Q_MAX; q += 1) {
        const h = pumpHead(q, shutoff, pumpSlope);
        if (h < 0) break;
        p.vertex(qToX(q), hToY(h));
      }
      p.endShape();

      // System curve
      p.stroke(220, 100, 80);
      p.strokeWeight(2.5);
      p.beginShape();
      for (let q = 0; q <= Q_MAX; q += 1) {
        const h = systemHead(q, staticHead, systemK);
        if (h > H_MAX) break;
        p.vertex(qToX(q), hToY(h));
      }
      p.endShape();

      // Operating point
      if (op.q > 0 && op.q <= Q_MAX && op.h <= H_MAX) {
        const ox = qToX(op.q);
        const oy = hToY(op.h);
        p.stroke(40);
        p.strokeWeight(1);
        p.drawingContext.setLineDash([4, 4]);
        p.line(ox, oy, ox, PAD_T + PLOT_H);
        p.line(ox, oy, PAD_L, oy);
        p.drawingContext.setLineDash([]);
        p.noStroke();
        p.fill(20);
        p.ellipse(ox, oy, 12);
        p.fill(255);
        p.ellipse(ox, oy, 5);

        // Label
        p.fill(20, 220);
        p.rect(ox + 8, oy - 32, 130, 28, 4);
        p.fill(255);
        p.textAlign(p.LEFT, p.CENTER);
        p.textSize(11);
        p.text(`Q = ${op.q.toFixed(1)} L/s`, ox + 14, oy - 24);
        p.text(`H = ${op.h.toFixed(1)} m`, ox + 14, oy - 11);
      } else {
        p.noStroke();
        p.fill(180, 70, 60);
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(12);
        p.text("Pump cannot overcome static head — no flow", PAD_L + PLOT_W / 2, PAD_T + PLOT_H / 2);
      }

      // Legend
      p.noStroke();
      p.fill(70, 130, 200);
      p.rect(PAD_L + PLOT_W - 130, PAD_T + 4, 12, 12, 2);
      p.fill(60);
      p.textAlign(p.LEFT, p.CENTER);
      p.textSize(11);
      p.text("Pump curve", PAD_L + PLOT_W - 114, PAD_T + 10);
      p.fill(220, 100, 80);
      p.rect(PAD_L + PLOT_W - 130, PAD_T + 22, 12, 12, 2);
      p.fill(60);
      p.text("System curve", PAD_L + PLOT_W - 114, PAD_T + 28);
    };
  }, [shutoff, pumpSlope, staticHead, systemK]);

  return (
    <Card>
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-lg">Pump Station Configurator</h3>
          <p className="text-sm text-muted-foreground">
            The operating point sits where the pump curve crosses the system curve. Adjust pump and system to see how the duty point — flow and head — responds.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground">
              Pump shutoff head: <span className="font-semibold text-foreground">{shutoff} m</span>
            </label>
            <Slider value={[shutoff]} onValueChange={([v]) => setShutoff(v)} min={5} max={50} step={1} data-testid="slider-shutoff" aria-label="Pump shutoff head" />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground">
              Pump curve droop: <span className="font-semibold text-foreground">{(pumpSlope * 1000).toFixed(2)}</span>
            </label>
            <Slider value={[pumpSlope * 10000]} onValueChange={([v]) => setPumpSlope(v / 10000)} min={5} max={60} step={1} data-testid="slider-pump-slope" aria-label="Pump curve steepness" />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground">
              Static head: <span className="font-semibold text-foreground">{staticHead} m</span>
            </label>
            <Slider value={[staticHead]} onValueChange={([v]) => setStaticHead(v)} min={0} max={40} step={1} data-testid="slider-static-head" aria-label="System static head" />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground">
              System friction k: <span className="font-semibold text-foreground">{(systemK * 1000).toFixed(2)}</span>
            </label>
            <Slider value={[systemK * 10000]} onValueChange={([v]) => setSystemK(v / 10000)} min={2} max={40} step={1} data-testid="slider-system-k" aria-label="System friction coefficient" />
          </div>
        </div>

        <div
          className="rounded-md border overflow-hidden bg-background flex justify-center"
          role="img"
          aria-label={`Pump and system curves chart. Operating point: ${op.q > 0 ? `Q = ${op.q.toFixed(1)} L/s at H = ${op.h.toFixed(1)} m` : "no flow — pump cannot overcome static head"}.`}
        >
          <P5Sketch sketch={sketch} data-testid="sketch-pump" />
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" data-testid="badge-op-q">Operating Q: {op.q.toFixed(1)} L/s</Badge>
          <Badge variant="outline" data-testid="badge-op-h">Operating H: {op.h.toFixed(1)} m</Badge>
          <Badge variant="outline">Pump: H = {shutoff} − {pumpSlope.toFixed(4)}·Q²</Badge>
          <Badge variant="outline">System: H = {staticHead} + {systemK.toFixed(4)}·Q²</Badge>
        </div>

        <div className="flex gap-2 rounded-md bg-amber-500/10 border border-amber-500/20 p-3 text-sm">
          <Lightbulb className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
          <div>
            <span className="font-semibold text-amber-900 dark:text-amber-200">Takeaway: </span>
            <span className="text-amber-900/90 dark:text-amber-100/90">
              Increasing static head shifts the duty point left (less flow). When the system curve is steeper than the pump can lift, flow drops to zero — that's a pumping main needing a larger pump or smaller diameter rethink.
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
