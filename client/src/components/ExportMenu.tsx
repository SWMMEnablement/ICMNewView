import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Download, FileSpreadsheet, FileText } from "lucide-react";
import { exportFeaturesAsCSV, exportFeaturesAsMarkdown } from "@/lib/exportFeatures";
import type { Feature } from "./FeatureCard";

interface ExportMenuProps {
  versions: Array<{ id: string; version: string; releaseDate: string; features: Feature[] }>;
  totalCount: number;
}

export default function ExportMenu({ versions, totalCount }: ExportMenuProps) {
  const disabled = totalCount === 0;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2" disabled={disabled} data-testid="button-export">
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline">Export</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Export {totalCount} feature{totalCount === 1 ? "" : "s"}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => exportFeaturesAsCSV(versions)} data-testid="export-csv">
          <FileSpreadsheet className="h-4 w-4 mr-2" />
          Export as CSV
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => exportFeaturesAsMarkdown(versions)} data-testid="export-markdown">
          <FileText className="h-4 w-4 mr-2" />
          Export as Markdown
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
