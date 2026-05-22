import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Feature {
  id: string;
  title: string;
  description: string;
  category: string;
  hasVideo?: boolean;
  documentationUrl?: string;
  takeaway?: string;
  version: string;
  releaseDate: string;
}

interface FeatureCardProps {
  feature: Feature;
  onClick?: () => void;
}

const categoryColors: Record<string, string> = {
  "Esri Integration": "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20",
  "Project Admin": "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20",
  "Subgrid Sampling": "bg-green-500/10 text-green-700 dark:text-green-300 border-green-500/20",
  "Cloud": "bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-500/20",
};

export default function FeatureCard({ feature, onClick }: FeatureCardProps) {
  return (
    <Card 
      className="hover-elevate active-elevate-2 cursor-pointer transition-all"
      onClick={onClick}
      data-testid={`card-feature-${feature.id}`}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge
            variant="outline"
            className={cn(
              "text-xs font-medium",
              categoryColors[feature.category] || "bg-muted"
            )}
          >
            {feature.category}
          </Badge>
          <div className="flex gap-1">
            {feature.hasVideo && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Play className="h-3 w-3" />
              </div>
            )}
          </div>
        </div>
        <CardTitle className="text-xl leading-tight">{feature.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {feature.description}
        </p>
        {feature.takeaway && (
          <div className="flex gap-2 rounded-md bg-amber-500/10 border border-amber-500/20 p-2.5 text-xs" data-testid={`takeaway-${feature.id}`}>
            <Lightbulb className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
            <div>
              <div className="font-semibold text-amber-900 dark:text-amber-200 mb-0.5">Takeaway</div>
              <p className="text-amber-900/90 dark:text-amber-100/90 leading-relaxed">{feature.takeaway}</p>
            </div>
          </div>
        )}
        <div className="flex items-center justify-between pt-2">
          <div className="text-xs text-muted-foreground font-mono">
            v{feature.version}
          </div>
          {feature.documentationUrl && (
            <Button
              variant="ghost"
              size="sm"
              className="h-7 gap-1 text-xs"
              onClick={(e) => {
                e.stopPropagation();
                window.open(feature.documentationUrl, '_blank');
              }}
              data-testid={`button-docs-${feature.id}`}
            >
              <ExternalLink className="h-3 w-3" />
              Docs
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
