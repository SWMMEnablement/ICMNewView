import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Layers, Droplet, CloudRain, Database, Settings2, BarChart3, ArrowLeft, Sprout, ShieldAlert, Radar } from "lucide-react";
import RoughnessZoneSketch from "./diagrams/RoughnessZoneSketch";
import MeshingEvolutionSketch from "./diagrams/MeshingEvolutionSketch";
import DesignRainfallSketch from "./diagrams/DesignRainfallSketch";
import DatabaseArchitectureSketch from "./diagrams/DatabaseArchitectureSketch";
import PumpStationSketch from "./diagrams/PumpStationSketch";
import RunoffSketch from "./diagrams/RunoffSketch";
import BreakingChangesSketch from "./diagrams/BreakingChangesSketch";
import CapabilityRadarSketch from "./diagrams/CapabilityRadarSketch";

type DiagramId = "roughness" | "meshing" | "rainfall" | "database" | "pump" | "runoff" | "breaking" | "radar";

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
    blurb: "Toggle on-premise vs cloud architectures with animated data flow between clients, gateway and backend services.",
    icon: Database,
    color: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
    available: true,
  },
  {
    id: "pump",
    title: "Pump Station Configurator",
    blurb: "Tune pump and system curves with sliders. The operating point updates live where the two curves cross.",
    icon: Settings2,
    color: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
    available: true,
  },
  {
    id: "runoff",
    title: "Subcatchment Runoff (SCS-CN)",
    blurb: "Pick a land use and storm depth. See how curve number turns rainfall into runoff vs losses, bar by bar.",
    icon: Sprout,
    color: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
    available: true,
  },
  {
    id: "breaking",
    title: "Breaking Changes & Migration Risk",
    blurb: "Curated timeline of changes that bite upgrade planners — Ruby jumps, licensing shifts, DB format changes — with severity and mitigation steps.",
    icon: ShieldAlert,
    color: "bg-red-500/10 text-red-700 dark:text-red-300",
    available: true,
    badge: "Upgrade planning",
  },
  {
    id: "radar",
    title: "Capability Growth Radar",
    blurb: "8-axis radar of cumulative features per modelling domain. Scrub or animate across 48 versions to see where investment landed.",
    icon: Radar,
    color: "bg-violet-500/10 text-violet-700 dark:text-violet-300",
    available: true,
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
          {active.id === "database" && <DatabaseArchitectureSketch />}
          {active.id === "pump" && <PumpStationSketch />}
          {active.id === "runoff" && <RunoffSketch />}
          {active.id === "breaking" && <BreakingChangesSketch />}
          {active.id === "radar" && <CapabilityRadarSketch />}
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
