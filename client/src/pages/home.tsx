import { useState, useRef, useMemo, useEffect, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import ChatSidebar from "@/components/ChatSidebar";
import TimelineView from "@/components/TimelineView";
import FeatureDetailModal from "@/components/FeatureDetailModal";
import DocumentationSheet from "@/components/DocumentationSheet";
import VersionNavigator from "@/components/VersionNavigator";
import FilterPanel, { matchesCategory, type CategoryId } from "@/components/FilterPanel";
import CompareVersionsDialog from "@/components/CompareVersionsDialog";
import VersionCharts from "@/components/VersionCharts";
import EvolutionChainsDialog from "@/components/EvolutionChainsDialog";
import UpgradeImpactBanner from "@/components/UpgradeImpactBanner";
import ExportMenu from "@/components/ExportMenu";
import LearningPathsDialog, { LearningPathsView } from "@/components/LearningPathsDialog";
import DiagramsPlaceholder from "@/components/DiagramsPlaceholder";
import type { Feature } from "@/components/FeatureCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { MessageSquare, Clock, BarChart3, GraduationCap, GitCompare } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Version } from "@shared/schema";

type TabId = "timeline" | "diagrams" | "learning" | "chat" | "compare";

export default function HomePage() {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDocumentation, setShowDocumentation] = useState(false);
  const [activeTab, setActiveTab] = useState<TabId>("timeline");
  const [selectedCategories, setSelectedCategories] = useState<CategoryId[]>([]);
  const [myStackVersion, setMyStackVersion] = useState<string | null>(
    () => localStorage.getItem("icm-my-stack") || null
  );
  const [versionFrom, setVersionFrom] = useState<string | null>(null);
  const [versionTo, setVersionTo] = useState<string | null>(null);
  const [pendingChatMessage, setPendingChatMessage] = useState<string | undefined>(undefined);
  const versionRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  // Shared comparison state — lifted so heatmap, chains, and comparison can all talk to each other
  const [compareOpen, setCompareOpen] = useState(false);
  const [compareFromId, setCompareFromId] = useState("");
  const [compareToId, setCompareToId] = useState("");

  const openCompare = useCallback((fromId = "", toId = "") => {
    if (fromId) setCompareFromId(fromId);
    if (toId) setCompareToId(toId);
    setCompareOpen(true);
  }, []);

  const { data: versions, isLoading } = useQuery<Version[]>({
    queryKey: ["/api/versions"],
  });

  const myStackVersionDate = useMemo(() => {
    if (!myStackVersion || !versions) return null;
    const selectedVersion = versions.find(v => v.id === myStackVersion);
    return selectedVersion ? new Date(selectedVersion.releaseDate) : null;
  }, [myStackVersion, versions]);

  const filteredVersions = useMemo(() => {
    const fromDate = versionFrom && versions
      ? new Date(versions.find(v => v.id === versionFrom)?.releaseDate || "")
      : null;
    const toDate = versionTo && versions
      ? new Date(versions.find(v => v.id === versionTo)?.releaseDate || "")
      : null;

    return (versions || []).map((version) => {
      const versionDate = new Date(version.releaseDate);
      const isNewerThanMyStack = myStackVersionDate !== null && versionDate > myStackVersionDate;
      
      return {
        ...version,
        isNewerThanMyStack,
        features: version.features
          .map(feature => ({
            ...feature,
            version: version.version,
            releaseDate: version.releaseDate,
          }))
          .filter(feature => {
            const matchesSearch = searchQuery === "" ||
              feature.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              feature.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
              feature.category.toLowerCase().includes(searchQuery.toLowerCase());
            
            const matchesCategoryFilter = selectedCategories.length === 0 ||
              selectedCategories.some(cat => matchesCategory(feature, cat));
            
            return matchesSearch && matchesCategoryFilter;
          })
      };
    }).filter(version => {
      if (version.features.length === 0) return false;
      const vd = new Date(version.releaseDate);
      if (fromDate && !isNaN(fromDate.getTime()) && vd < fromDate) return false;
      if (toDate && !isNaN(toDate.getTime()) && vd > toDate) return false;
      return true;
    });
  }, [versions, searchQuery, selectedCategories, myStackVersionDate, versionFrom, versionTo]);

  // Deep-link: scroll to feature or version from URL hash on load
  useEffect(() => {
    if (!versions || versions.length === 0) return;
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("ring-2", "ring-primary", "ring-offset-2");
        setTimeout(() => el.classList.remove("ring-2", "ring-primary", "ring-offset-2"), 2500);
      }
    }, 300);
  }, [versions]);

  const handleVersionNavigate = useCallback((versionId: string) => {
    setActiveTab("timeline");
    setTimeout(() => {
      const element = versionRefs.current.get(versionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }, []);

  const handleAskInChat = useCallback((message: string) => {
    setPendingChatMessage(message);
    setActiveTab("chat");
  }, []);

  const handleCiteClick = useCallback((featureId: string) => {
    setActiveTab("timeline");
    setTimeout(() => {
      const el = document.getElementById(`feature-${featureId}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("ring-2", "ring-primary", "ring-offset-2");
        setTimeout(() => el.classList.remove("ring-2", "ring-primary", "ring-offset-2"), 2000);
      }
    }, 100);
  }, []);

  const handleHeatmapCellClick = useCallback((versionId: string, _catId: string) => {
    setActiveTab("timeline");
    setTimeout(() => {
      const el = versionRefs.current.get(versionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        el.classList.add("ring-2", "ring-primary", "ring-offset-2");
        setTimeout(() => el.classList.remove("ring-2", "ring-primary", "ring-offset-2"), 2000);
      }
    }, 100);
  }, []);

  const clearAllFilters = useCallback(() => {
    setSelectedCategories([]);
    setVersionFrom(null);
    setVersionTo(null);
  }, []);

  // Auto-open the Compare dialog when the Compare tab is selected
  useEffect(() => {
    if (activeTab === "compare") {
      setCompareOpen(true);
    }
  }, [activeTab]);

  const FilterBar = ({ compact = false }: { compact?: boolean }) => (
    <div className="flex items-center gap-2 flex-wrap">
      <FilterPanel
        versions={versions || []}
        selectedCategories={selectedCategories}
        onCategoryChange={setSelectedCategories}
        myStackVersion={myStackVersion}
        onMyStackChange={setMyStackVersion}
        versionFrom={versionFrom}
        versionTo={versionTo}
        onVersionRangeChange={(from, to) => { setVersionFrom(from); setVersionTo(to); }}
      />
      {!compact && (
        <EvolutionChainsDialog
          versions={versions || []}
          onScrollToFeature={handleCiteClick}
          onCompareRange={(fromId, toId) => openCompare(fromId, toId)}
        />
      )}
      <VersionCharts
        versions={versions || []}
        onHeatmapCellClick={handleHeatmapCellClick}
        onColumnHeaderClick={(versionId) => openCompare("", versionId)}
        compareRange={compareFromId && compareToId ? { fromId: compareFromId, toId: compareToId } : undefined}
      />
      <LearningPathsDialog
        versions={versions || []}
        onNavigateToVersion={handleVersionNavigate}
        onAskInChat={handleAskInChat}
        onClearFilters={clearAllFilters}
      />
      <ExportMenu
        versions={filteredVersions}
        totalCount={filteredVersions.reduce((sum, v) => sum + v.features.length, 0)}
      />
    </div>
  );

  const totalFeatures = versions?.reduce((sum, v) => sum + v.features.length, 0) || 0;

  const TimelineContent = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={mobile ? "py-6 px-4" : "container py-8 px-6"}>
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className={mobile ? "text-2xl font-bold" : "text-3xl font-bold"}>Release Timeline</h2>
              {versions && versions.length > 0 && (
                <div className="flex items-center gap-2">
                  <span className={mobile ? "text-xl font-bold text-primary" : "text-2xl font-bold text-primary"}>{versions.length}</span>
                  <span className="text-sm text-muted-foreground">versions{mobile ? "" : " documented"}</span>
                </div>
              )}
            </div>
            {!mobile && (
              <p className="text-muted-foreground">
                Explore {totalFeatures} features across {versions?.length || 0} versions from 2011 to present
              </p>
            )}
          </div>
          {!mobile && versions && versions.length > 0 && (
            <div className="flex items-center gap-2">
              <VersionNavigator versions={versions} onNavigate={handleVersionNavigate} />
            </div>
          )}
        </div>
        {versions && versions.length > 0 && (
          <>
            <FilterBar compact={mobile} />
            {myStackVersion && (
              <UpgradeImpactBanner
                versions={versions}
                myStackVersion={myStackVersion}
                onNavigateToVersion={handleVersionNavigate}
              />
            )}
          </>
        )}
      </div>

      {isLoading ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Loading versions...</p>
        </div>
      ) : filteredVersions.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No features found matching your filters</p>
        </div>
      ) : (
        <TimelineView
          versions={filteredVersions}
          onFeatureClick={setSelectedFeature}
          onAskInChat={handleAskInChat}
          searchQuery={searchQuery}
          versionRefs={versionRefs}
        />
      )}
    </div>
  );

  return (
    <div className="flex h-screen flex-col">
      <Header 
        onSearch={setSearchQuery}
        onShowDocumentation={() => setShowDocumentation(true)}
      />

      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as TabId)} className="flex-1 flex flex-col overflow-hidden">
        <TabsList className="w-full rounded-none border-b justify-start h-auto p-0 overflow-x-auto flex-nowrap md:flex-wrap">
          <TabsTrigger value="timeline" aria-label="Timeline" className="gap-2 py-3 px-4 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary" data-testid="tab-timeline">
            <Clock className="h-4 w-4" />
            <span className="hidden sm:inline">Timeline</span>
          </TabsTrigger>
          <TabsTrigger value="diagrams" aria-label="Interactive Diagrams" className="gap-2 py-3 px-4 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary" data-testid="tab-diagrams">
            <BarChart3 className="h-4 w-4" />
            <span className="hidden sm:inline">Interactive Diagrams</span>
          </TabsTrigger>
          <TabsTrigger value="learning" aria-label="Learning Paths" className="gap-2 py-3 px-4 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary" data-testid="tab-learning">
            <GraduationCap className="h-4 w-4" />
            <span className="hidden sm:inline">Learning Paths</span>
          </TabsTrigger>
          <TabsTrigger value="chat" aria-label="AI Assistant" className="gap-2 py-3 px-4 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary" data-testid="tab-chat">
            <MessageSquare className="h-4 w-4" />
            <span className="hidden sm:inline">AI Assistant</span>
          </TabsTrigger>
          <TabsTrigger value="compare" aria-label="Version Compare" className="gap-2 py-3 px-4 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary" data-testid="tab-compare">
            <GitCompare className="h-4 w-4" />
            <span className="hidden sm:inline">Version Compare</span>
          </TabsTrigger>
        </TabsList>

        <div className="flex-1 flex overflow-hidden">
          {/* Main content area — hidden when chat tab is full-width */}
          <div className={cn(
            "flex-1 overflow-hidden flex flex-col",
            activeTab === "chat" && "hidden",
          )}>
            <TabsContent value="timeline" className="flex-1 m-0 overflow-hidden data-[state=inactive]:hidden" forceMount>
              <ScrollArea className="h-full">
                <TimelineContent />
              </ScrollArea>
            </TabsContent>

            <TabsContent value="diagrams" className="flex-1 m-0 overflow-auto">
              <DiagramsPlaceholder />
            </TabsContent>

            <TabsContent value="learning" className="flex-1 m-0 overflow-auto">
              <div className="container py-8 px-6 max-w-3xl">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <GraduationCap className="h-7 w-7 text-primary" />
                    <h2 className="text-3xl font-bold">Learning Paths</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Guided tours through the most important parts of ICM InfoWorks. Each step jumps to the relevant version or asks the AI for an explanation.
                  </p>
                </div>
                <LearningPathsView
                  versions={versions || []}
                  onNavigateToVersion={handleVersionNavigate}
                  onAskInChat={handleAskInChat}
                  onClearFilters={clearAllFilters}
                />
              </div>
            </TabsContent>

            <TabsContent value="compare" className="flex-1 m-0 overflow-auto">
              <div className="container py-8 px-6 max-w-3xl">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <GitCompare className="h-7 w-7 text-primary" />
                    <h2 className="text-3xl font-bold">Version Compare</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Compare any two versions to see the upgrade path, category shifts, and feature evolution chains.
                  </p>
                </div>
                <Button
                  size="lg"
                  className="gap-2"
                  onClick={() => setCompareOpen(true)}
                  data-testid="button-open-compare"
                >
                  <GitCompare className="h-4 w-4" />
                  Open comparison tool
                </Button>
                <p className="text-xs text-muted-foreground mt-3">
                  The comparison opens as a dialog. Close it to return to this tab.
                </p>
              </div>
            </TabsContent>
          </div>

          {/* Persistent ChatSidebar — mounted once so conversation state survives tab switches.
              Positioned per tab via CSS: right rail on Timeline (desktop), full width on AI Assistant tab,
              hidden elsewhere or on mobile Timeline. */}
          <aside
            className={cn(
              "border-l flex-col h-full overflow-hidden",
              activeTab === "timeline" && "hidden md:flex w-1/5",
              activeTab === "chat" && "flex flex-1 max-w-4xl mx-auto w-full border-l-0 border-x",
              activeTab !== "timeline" && activeTab !== "chat" && "hidden",
            )}
            data-testid="chat-sidebar-container"
          >
            <ChatSidebar
              pendingMessage={pendingChatMessage}
              onPendingMessageUsed={() => setPendingChatMessage(undefined)}
              onCiteClick={handleCiteClick}
            />
          </aside>
        </div>
      </Tabs>

      {/* Compare dialog is rendered once at the page level so it can be opened from any tab/widget */}
      {versions && (
        <CompareVersionsDialog
          versions={versions}
          open={compareOpen}
          onOpenChange={setCompareOpen}
          externalFromId={compareFromId}
          externalToId={compareToId}
          onFromIdChange={setCompareFromId}
          onToIdChange={setCompareToId}
        />
      )}

      <FeatureDetailModal
        feature={selectedFeature}
        open={!!selectedFeature}
        onClose={() => setSelectedFeature(null)}
      />
      
      <DocumentationSheet
        open={showDocumentation}
        onClose={() => setShowDocumentation(false)}
        versions={versions}
      />
    </div>
  );
}
