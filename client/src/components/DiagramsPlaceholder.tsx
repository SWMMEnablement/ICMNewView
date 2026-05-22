import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Layers, Droplet, CloudRain, Database, Settings2, BarChart3, ArrowLeft } from "lucide-react";
import RoughnessZoneSketch from "./diagrams/RoughnessZoneSketch";
import MeshingEvolutionSketch from "./diagrams/MeshingEvolutionSketch";
import DesignRainfallSketch from "./diagrams/DesignRainfallSketch";

type DiagramId = "roughness" | "meshing" | "rainfall" | "database" | "pump";

interface DiagramMeta {
  id: DiagramId;
  title: string;
  blurb: string;
  icon: typeof Droplet;
  color: string;
  available: boolean;
  badge?: string;
}

const DIAGRAMS: DiagramMeta[] = [
  {
    id: "roughness",
    title: "Roughness Zone Priority Editor",
    blurb: "Drag overlapping roughness zones and probe the effective Manning's n at any point. The highest-priority zone wins.",
    icon: Droplet,
    color: "bg-blue-500/10 text-blue-700 dark:text-blue-300",
    available: true,
  },
  {
    id: "meshing",
    title: "2D Meshing Evolution",
    blurb: "Scrub a slider to see the same urban scene meshed in v2011 (coarse) → v2015 (adaptive) → v2027 (subgrid).",
    icon: Layers,
    color: "bg-green-500/10 text-green-700 dark:text-green-300",
    available: true,
  },
  {
    id: "rainfall",
    title: "Design Rainfall Generator",
    blurb: "Generate hyetographs for FEH 2013, NOAA Atlas 14, or Euler Type II. Live totals and peak intensity.",
    icon: CloudRain,
    color: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300",
    available: true,
    badge: "Try it yourself",
  },
  {
    id: "database",
    title: "Database Architecture Comparator",
    blurb: "Toggle on-premise vs cloud architectures with animated data flow between servers, clients and the API gateway.",
    icon: Database,
    color: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
    available: false,
  },
  {
    id: "pump",
    title: "Pump Station Configurator",
    blurb: "Drag points on a pump curve and watch the operating point shift against a live system curve.",
    icon: Settings2,
    color: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
    available: false,
  },
];

export default function DiagramsPlaceholder() {
  const [activeId, setActiveId] = useState<DiagramId | null>(null);
  const active = activeId ? DIAGRAMS.find((d) => d.id === activeId) ?? null : null;

  return (
    <div className="container py-8 px-6 max-w-5xl">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <BarChart3 className="h-7 w-7 text-primary" />
          <h2 className="text-3xl font-bold">Interactive Diagrams</h2>
        </div>
        <p className="text-muted-foreground">
          Hands-on p5.js sketches that explain ICM InfoWorks concepts visually. Each diagram includes live controls, immediate feedback, and a one-line takeaway.
        </p>
      </div>

      {active ? (
        <div className="space-y-4">
          <Button variant="ghost" size="sm" onClick={() => setActiveId(null)} data-testid="button-back-diagrams">
            <ArrowLeft className="h-4 w-4 mr-1.5" />
            All diagrams
          </Button>
          {active.id === "roughness" && <RoughnessZoneSketch />}
          {active.id === "meshing" && <MeshingEvolutionSketch />}
          {active.id === "rainfall" && <DesignRainfallSketch />}
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {DIAGRAMS.map((d) => {
            const Icon = d.icon;
            const inner = (
              <Card className={d.available ? "hover-elevate active-elevate-2 h-full" : "h-full opacity-70"}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className={`h-9 w-9 rounded-md flex items-center justify-center ${d.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    {d.available ? (
                      d.badge && <Badge variant="outline">{d.badge}</Badge>
                    ) : (
                      <Badge variant="outline">Coming soon</Badge>
                    )}
                  </div>
                  <h3 className="font-semibold text-base mb-1">{d.title}</h3>
                  <p className="text-sm text-muted-foreground">{d.blurb}</p>
                </CardContent>
              </Card>
            );
            return d.available ? (
              <button
                key={d.id}
                type="button"
                className="text-left"
                onClick={() => setActiveId(d.id)}
                data-testid={`diagram-card-${d.id}`}
              >
                {inner}
              </button>
            ) : (
              <div key={d.id} data-testid={`diagram-card-${d.id}`}>{inner}</div>
            );
          })}
        </div>
      )}
    </div>
  );
}
