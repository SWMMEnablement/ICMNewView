import type { Feature } from "@/components/FeatureCard";

interface VersionWithFeatures {
  id: string;
  version: string;
  releaseDate: string;
  features: Feature[];
}

function csvEscape(value: string): string {
  if (value == null) return "";
  const needsQuote = /[",\n\r]/.test(value);
  const escaped = value.replace(/"/g, '""');
  return needsQuote ? `"${escaped}"` : escaped;
}

function triggerDownload(filename: string, content: string, mime: string) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function exportFeaturesAsCSV(versions: VersionWithFeatures[], filename = "icm-features.csv") {
  const header = ["Version", "Release Date", "Feature ID", "Title", "Category", "Description", "Documentation URL"];
  const rows: string[] = [header.map(csvEscape).join(",")];
  for (const v of versions) {
    for (const f of v.features) {
      rows.push([
        v.version,
        v.releaseDate,
        f.id,
        f.title,
        f.category,
        f.description,
        (f as Feature & { documentationUrl?: string }).documentationUrl || "",
      ].map(csvEscape).join(","));
    }
  }
  triggerDownload(filename, rows.join("\n"), "text/csv;charset=utf-8");
}

export function exportFeaturesAsMarkdown(versions: VersionWithFeatures[], filename = "icm-features.md") {
  const totalFeatures = versions.reduce((sum, v) => sum + v.features.length, 0);
  const lines: string[] = [
    `# ICM InfoWorks — Feature Export`,
    ``,
    `**Exported:** ${new Date().toISOString().split("T")[0]}`,
    `**Versions:** ${versions.length} · **Features:** ${totalFeatures}`,
    ``,
    `---`,
    ``,
  ];
  for (const v of versions) {
    lines.push(`## Version ${v.version} — ${new Date(v.releaseDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`);
    lines.push("");
    for (const f of v.features) {
      lines.push(`### ${f.title}`);
      lines.push(`*Category:* ${f.category}`);
      lines.push("");
      lines.push(f.description);
      const docUrl = (f as Feature & { documentationUrl?: string }).documentationUrl;
      if (docUrl) lines.push(`\n[Documentation](${docUrl})`);
      lines.push("");
    }
    lines.push("---");
    lines.push("");
  }
  triggerDownload(filename, lines.join("\n"), "text/markdown;charset=utf-8");
}
