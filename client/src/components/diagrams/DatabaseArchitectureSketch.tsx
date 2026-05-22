import { useCallback, useState } from "react";
import type p5 from "p5";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Lightbulb } from "lucide-react";
import P5Sketch from "../P5Sketch";

type Mode = "onprem" | "cloud";

const W = 640;
const H = 360;

export default function DatabaseArchitectureSketch() {
  const [mode, setMode] = useState<Mode>("onprem");
  const [clients, setClients] = useState(3);
  const [speed, setSpeed] = useState(1.0);

  const sketch = useCallback((p: p5) => {
    let t = 0;

    p.setup = () => {
      p.createCanvas(W, H);
      p.textFont("Inter, system-ui, sans-serif");
    };

    const drawBox = (x: number, y: number, w: number, h: number, label: string, sub: string, fill: number[]) => {
      p.noStroke();
      p.fill(fill[0], fill[1], fill[2]);
      p.rect(x, y, w, h, 6);
      p.fill(255);
      p.textAlign(p.CENTER, p.CENTER);
      p.textSize(13);
      p.textStyle(p.BOLD);
      p.text(label, x + w / 2, y + h / 2 - 8);
      p.textStyle(p.NORMAL);
      p.textSize(10);
      p.text(sub, x + w / 2, y + h / 2 + 9);
    };

    const drawPacket = (x: number, y: number, color: number[]) => {
      p.noStroke();
      p.fill(color[0], color[1], color[2]);
      p.ellipse(x, y, 8);
    };

    p.draw = () => {
      p.background(248);
      t += 0.012 * speed;

      // Title
      p.fill(60);
      p.noStroke();
      p.textAlign(p.LEFT, p.TOP);
      p.textSize(13);
      p.textStyle(p.BOLD);
      p.text(mode === "onprem" ? "On-Premise Workgroup" : "Cloud (SaaS, Info360)", 16, 14);
      p.textStyle(p.NORMAL);
      p.fill(110);
      p.textSize(11);
      p.text(
        mode === "onprem"
          ? "Database lives on a workgroup server inside your VPN."
          : "Database lives in Autodesk-managed cloud, accessed via gateway.",
        16, 32
      );

      // Clients (left column)
      const cx = 80;
      const startY = 80;
      const gap = 56;
      for (let i = 0; i < clients; i++) {
        drawBox(cx - 50, startY + i * gap, 100, 38, `Client ${i + 1}`, "ICM desktop", [71, 105, 165]);
      }

      if (mode === "onprem") {
        // Server in middle-right
        drawBox(W - 180, H / 2 - 50, 130, 100, "Workgroup", "SQL Server + files", [120, 80, 160]);
        // VPN boundary
        p.noFill();
        p.stroke(180, 80, 80, 140);
        p.strokeWeight(1);
        p.drawingContext.setLineDash([6, 4]);
        p.rect(20, 60, W - 40, H - 80, 8);
        p.drawingContext.setLineDash([]);
        p.noStroke();
        p.fill(180, 80, 80);
        p.textAlign(p.LEFT, p.BOTTOM);
        p.textSize(10);
        p.text("Corporate VPN", 28, 76);

        // Packets between clients and server
        for (let i = 0; i < clients; i++) {
          const y = startY + i * gap + 19;
          const sx = cx + 50;
          const ex = W - 180;
          const prog = (t + i * 0.18) % 1;
          drawPacket(sx + (ex - sx) * prog, y - Math.sin(prog * Math.PI) * 12, [71, 105, 165]);
          // Return packet
          const rprog = (t + 0.5 + i * 0.18) % 1;
          drawPacket(ex - (ex - sx) * rprog, y + Math.sin(rprog * Math.PI) * 12 + 6, [120, 80, 160]);
        }
      } else {
        // API Gateway
        drawBox(W / 2 - 60, H / 2 - 70, 120, 40, "API Gateway", "Auth + routing", [100, 140, 100]);
        // Cloud DB
        drawBox(W - 200, 80, 150, 60, "Cloud Master DB", "Multi-region", [80, 130, 180]);
        // Cloud Sim
        drawBox(W - 200, 160, 150, 60, "Cloud Sim Workers", "Auto-scaled", [180, 130, 80]);
        // Cloud Storage
        drawBox(W - 200, 240, 150, 60, "Object Storage", "Results / GIS", [140, 100, 160]);

        // Cloud bubble outline
        p.noFill();
        p.stroke(100, 140, 200, 140);
        p.strokeWeight(1);
        p.drawingContext.setLineDash([6, 4]);
        p.rect(W / 2 - 70, 60, W / 2 + 50, H - 80, 14);
        p.drawingContext.setLineDash([]);
        p.noStroke();
        p.fill(100, 140, 200);
        p.textAlign(p.LEFT, p.BOTTOM);
        p.textSize(10);
        p.text("Autodesk Cloud", W / 2 - 62, 76);

        // Packets: clients → gateway → services
        for (let i = 0; i < clients; i++) {
          const y = startY + i * gap + 19;
          const sx = cx + 50;
          const gx = W / 2 - 60;
          const prog = (t + i * 0.18) % 1;
          drawPacket(sx + (gx - sx) * prog, y - Math.sin(prog * Math.PI) * 10, [71, 105, 165]);
        }
        // Gateway → 3 backend services
        const gExitX = W / 2 + 60;
        const gExitY = H / 2 - 50;
        const targets = [
          { x: W - 200, y: 110, c: [80, 130, 180] },
          { x: W - 200, y: 190, c: [180, 130, 80] },
          { x: W - 200, y: 270, c: [140, 100, 160] },
        ];
        targets.forEach((tg, i) => {
          const prog = (t * 1.4 + i * 0.33) % 1;
          drawPacket(gExitX + (tg.x - gExitX) * prog, gExitY + (tg.y - gExitY) * prog, tg.c);
        });
      }

      // Legend / latency hint
      p.noStroke();
      p.fill(120);
      p.textAlign(p.LEFT, p.BOTTOM);
      p.textSize(10);
      p.text(
        mode === "onprem"
          ? "Latency: low (LAN) · Capacity: fixed · IT-managed"
          : "Latency: variable (WAN) · Capacity: elastic · Vendor-managed",
        16, H - 6
      );
    };
  }, [mode, clients, speed]);

  return (
    <Card>
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-lg">Database Architecture Comparator</h3>
          <p className="text-sm text-muted-foreground">
            Toggle between traditional on-premise workgroup deployment and cloud SaaS (introduced in v2024.0). Watch the data flow between clients, gateway and backend services.
          </p>
        </div>

        <div className="flex gap-3 flex-wrap items-end">
          <div>
            <label className="text-xs font-medium text-muted-foreground block mb-1">Deployment</label>
            <Tabs value={mode} onValueChange={(v) => setMode(v as Mode)}>
              <TabsList>
                <TabsTrigger value="onprem" data-testid="tab-onprem">On-premise</TabsTrigger>
                <TabsTrigger value="cloud" data-testid="tab-cloud">Cloud</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div className="min-w-[160px] flex-1">
            <label className="text-xs font-medium text-muted-foreground block mb-1">
              Concurrent clients: <span className="font-semibold text-foreground">{clients}</span>
            </label>
            <Slider value={[clients]} onValueChange={([v]) => setClients(v)} min={1} max={5} step={1} data-testid="slider-clients" aria-label="Number of concurrent clients" />
          </div>
          <div className="min-w-[160px] flex-1">
            <label className="text-xs font-medium text-muted-foreground block mb-1">
              Animation speed: <span className="font-semibold text-foreground">{speed.toFixed(1)}×</span>
            </label>
            <Slider value={[speed * 10]} onValueChange={([v]) => setSpeed(v / 10)} min={2} max={30} step={1} data-testid="slider-speed" aria-label="Animation speed" />
          </div>
        </div>

        <div
          className="rounded-md border overflow-hidden bg-background flex justify-center"
          role="img"
          aria-label={`Diagram of ${mode === "onprem" ? "on-premise workgroup" : "cloud SaaS"} architecture with ${clients} clients connecting to the ${mode === "onprem" ? "workgroup server" : "API gateway then cloud database, sim workers and object storage"}.`}
        >
          <P5Sketch sketch={sketch} data-testid="sketch-database" />
        </div>

        <div className="grid sm:grid-cols-2 gap-2">
          <Badge variant="outline" className="justify-start">On-prem: full data control, IT overhead</Badge>
          <Badge variant="outline" className="justify-start">Cloud: zero infra, pay per use, remote-friendly</Badge>
        </div>

        <div className="flex gap-2 rounded-md bg-amber-500/10 border border-amber-500/20 p-3 text-sm">
          <Lightbulb className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
          <div>
            <span className="font-semibold text-amber-900 dark:text-amber-200">Takeaway: </span>
            <span className="text-amber-900/90 dark:text-amber-100/90">
              Cloud removes the workgroup server but adds a gateway hop — fine for collaboration and elastic simulation, but expect higher per-request latency. Both modes can coexist; pick per project.
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
