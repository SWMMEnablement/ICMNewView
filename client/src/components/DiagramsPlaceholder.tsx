import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers, Droplet, Database, CloudRain, Settings2, BarChart3 } from "lucide-react";

const PLANNED_DIAGRAMS = [
  {
    icon: Layers,
    title: "2D Meshing Evolution Slider",
    blurb: "Scrub a timeline to see how the same area is meshed in v2011 (coarse grid) → v2015 (adaptive) → v2027 (subgrid sampling).",
    color: "bg-green-500/10 text-green-700 dark:text-green-300",
  },
  {
    icon: Droplet,
    title: "Roughness Zone Priority Editor",
    blurb: "Draw overlapping roughness zones with different priorities, then click any point to see the effective roughness value.",
    color: "bg-blue-500/10 text-blue-700 dark:text-blue-300",
  },
  {
    icon: Database,
    title: "Database Architecture Comparator",
    blurb: "Toggle on-premise vs cloud architectures with animated data flow between servers, clients and the API gateway.",
    color: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
  },
  {
    icon: CloudRain,
    title: "Design Rainfall Generator",
    blurb: "Pick location, return period and duration to generate hyetographs using FEH2013, NOAA Atlas 14 or Euler Type II.",
    color: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300",
  },
  {
    icon: Settings2,
    title: "Pump Station Configurator",
    blurb: "Drag points on a pump curve and watch the operating point shift in real time against a live system curve.",
    color: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
  },
];

export default function DiagramsPlaceholder() {
  return (
    <div className="container py-8 px-6 max-w-5xl">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <BarChart3 className="h-7 w-7 text-primary" />
          <h2 className="text-3xl font-bold">Interactive Diagrams</h2>
          <Badge variant="outline">Coming soon</Badge>
        </div>
        <p className="text-muted-foreground">
          A gallery of p5.js sketches that explain ICM InfoWorks concepts visually. Each diagram includes instructions, live controls, immediate feedback, and a one-line takeaway.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {PLANNED_DIAGRAMS.map((d) => {
          const Icon = d.icon;
          return (
            <Card key={d.title} data-testid={`diagram-card-${d.title.replace(/\s+/g, '-').toLowerCase()}`}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className={`h-9 w-9 rounded-md flex items-center justify-center ${d.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base">{d.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{d.blurb}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <p className="text-xs text-muted-foreground mt-6">
        See <code className="font-mono">IDEAS.md</code> for full implementation notes and sequencing.
      </p>
    </div>
  );
}
