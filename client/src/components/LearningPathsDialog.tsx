import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GraduationCap, Cloud, ArrowUpCircle, Sparkles, ChevronRight } from "lucide-react";
import type { Version } from "@shared/schema";

interface LearningPathsDialogProps {
  versions: Version[];
  onNavigateToVersion: (versionId: string) => void;
  onAskInChat?: (message: string) => void;
  onClearFilters?: () => void;
}

interface PathStep {
  title: string;
  detail: string;
  versionId?: string;
  question?: string;
}

interface Path {
  id: string;
  title: string;
  blurb: string;
  icon: typeof Cloud;
  color: string;
  steps: PathStep[];
}

export default function LearningPathsDialog({ versions, onNavigateToVersion, onAskInChat, onClearFilters }: LearningPathsDialogProps) {
  const [open, setOpen] = useState(false);
  const [activePath, setActivePath] = useState<string | null>(null);

  const paths: Path[] = useMemo(() => {
    const find = (v: string) => versions.find((x) => x.version === v)?.id;
    return [
      {
        id: "newcomer",
        title: "New to ICM InfoWorks",
        blurb: "A guided tour of the essentials every modeller should know.",
        icon: Sparkles,
        color: "bg-blue-500/10 text-blue-700 dark:text-blue-300",
        steps: [
          { title: "Start with the latest", detail: "Begin at the newest release to understand what ICM is today.", versionId: find("2027.0") },
          { title: "Understand 2D meshing", detail: "Mesh technology has evolved dramatically. Ask the AI for an overview.", question: "Explain how 2D meshing works in ICM InfoWorks and which versions introduced the most significant improvements." },
          { title: "Cloud foundations", detail: "Cloud databases were introduced in 2024.0 — see the new architecture.", versionId: find("2024.0") },
          { title: "Get hands-on with Ruby scripting", detail: "Automation unlocks bulk operations.", question: "What can I do with Ruby scripting in ICM InfoWorks? Show me practical examples." },
        ],
      },
      {
        id: "upgrade-2023",
        title: "Upgrading from v2023.x",
        blurb: "Breaking changes, migration tips, and what's new since 2023.",
        icon: ArrowUpCircle,
        color: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
        steps: [
          { title: "Set your stack baseline", detail: "Open Filters → My Stack and pick v2023.x to highlight everything new for you.", versionId: find("2023.0") },
          { title: "Review category shifts", detail: "Use Compare Versions to see the development focus changes between 2023.0 and today.", question: "Summarise the biggest changes between v2023.0 and v2027.0, grouped by category." },
          { title: "Network type changes", detail: "SWMM networks landed in 2023 — understand the differences.", question: "What is the difference between InfoWorks networks and SWMM networks, and when should I use each?" },
          { title: "Jump to the latest", detail: "Scroll to the newest release to see what's currently shipping.", versionId: find("2027.0") },
        ],
      },
      {
        id: "cloud",
        title: "Cloud Migration Journey",
        blurb: "Step-by-step adoption of cloud databases (v2024.0+).",
        icon: Cloud,
        color: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
        steps: [
          { title: "The starting point", detail: "v2024.0 introduced cloud database support.", versionId: find("2024.0") },
          { title: "Architecture overview", detail: "Ask the AI to explain on-premise vs cloud architectures.", question: "Compare on-premise (standalone/workgroup) and cloud database architectures in ICM InfoWorks. Explain data flow, security and trade-offs." },
          { title: "Continued enhancements", detail: "Cloud capabilities expanded through 2026.", versionId: find("2026.3") },
          { title: "Migration practicalities", detail: "What teams need to plan for.", question: "What practical steps should a team take when migrating an existing InfoWorks ICM project to a cloud database?" },
        ],
      },
    ];
  }, [versions]);

  const current = paths.find((p) => p.id === activePath);

  const handleStep = (step: PathStep) => {
    if (step.versionId) {
      onClearFilters?.();
      setOpen(false);
      setTimeout(() => onNavigateToVersion(step.versionId!), 100);
    } else if (step.question && onAskInChat) {
      onAskInChat(step.question);
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(o) => { setOpen(o); if (!o) setActivePath(null); }}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2" data-testid="button-learning-paths">
          <GraduationCap className="h-4 w-4" />
          <span className="hidden sm:inline">Learning Paths</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            {current ? current.title : "Learning Paths"}
          </DialogTitle>
          <DialogDescription>
            {current ? current.blurb : "Guided tours through the most important parts of ICM InfoWorks."}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] pr-3">
          {!current ? (
            <div className="grid gap-3">
              {paths.map((p) => {
                const Icon = p.icon;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActivePath(p.id)}
                    className="text-left w-full"
                    data-testid={`path-${p.id}`}
                  >
                    <Card className="hover-elevate active-elevate-2">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-3">
                          <div className={`h-9 w-9 rounded-md flex items-center justify-center ${p.color}`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <CardTitle className="text-base">{p.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{p.blurb}</p>
                        <div className="mt-2 text-xs text-muted-foreground">{p.steps.length} steps</div>
                      </CardContent>
                    </Card>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="space-y-3">
              <Button variant="ghost" size="sm" onClick={() => setActivePath(null)} data-testid="button-back-paths">
                ← All paths
              </Button>
              {current.steps.map((step, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleStep(step)}
                  className="text-left w-full"
                  data-testid={`step-${current.id}-${i}`}
                >
                  <Card className="hover-elevate active-elevate-2">
                    <CardContent className="py-3 flex items-center gap-3">
                      <Badge variant="outline" className="font-mono">{i + 1}</Badge>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{step.title}</div>
                        <div className="text-xs text-muted-foreground">{step.detail}</div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </CardContent>
                  </Card>
                </button>
              ))}
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
