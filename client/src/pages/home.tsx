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
import LearningPathsDialog from "@/components/LearningPathsDialog";
import type { Feature } from "@/components/FeatureCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Clock } from "lucide-react";
import type { Version } from "@shared/schema";

export default function HomePage() {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDocumentation, setShowDocumentation] = useState(false);
  const [mobileView, setMobileView] = useState<"timeline" | "chat">("timeline");
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

  const handleVersionNavigate = (versionId: string) => {
    const element = versionRefs.current.get(versionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleAskInChat = useCallback((message: string) => {
    setPendingChatMessage(message);
    setMobileView("chat");
  }, []);

  const handleCiteClick = useCallback((featureId: string) => {
    const el = document.getElementById(`feature-${featureId}`);
    if (el) {
      setMobileView("timeline");
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("ring-2", "ring-primary", "ring-offset-2");
        setTimeout(() => el.classList.remove("ring-2", "ring-primary", "ring-offset-2"), 2000);
      }, mobileView === "chat" ? 100 : 0);
    }
  }, [mobileView]);

  const handleHeatmapCellClick = useCallback((versionId: string, _catId: string) => {
    // Navigate timeline to that version
    setMobileView("timeline");
    setTimeout(() => {
      const el = versionRefs.current.get(versionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        el.classList.add("ring-2", "ring-primary", "ring-offset-2");
        setTimeout(() => el.classList.remove("ring-2", "ring-primary", "ring-offset-2"), 2000);
      }
    }, 50);
  }, []);

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
        <CompareVersionsDialog
          versions={versions || []}
          open={compareOpen}
          onOpenChange={setCompareOpen}
          externalFromId={compareFromId}
          externalToId={compareToId}
          onFromIdChange={setCompareFromId}
          onToIdChange={setCompareToId}
        />
      )}
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
        onClearFilters={() => {
          setSelectedCategories([]);
          setVersionFrom(null);
          setVersionTo(null);
        }}
      />
      <ExportMenu
        versions={filteredVersions}
        totalCount={filteredVersions.reduce((sum, v) => sum + v.features.length, 0)}
      />
    </div>
  );

  return (
    <div className="flex h-screen flex-col">
      <Header 
        onSearch={setSearchQuery}
        onShowDocumentation={() => setShowDocumentation(true)}
      />
      
      {/* Mobile Layout - Tabs */}
      <div className="flex flex-1 overflow-hidden md:hidden">
        <Tabs value={mobileView} onValueChange={(v) => setMobileView(v as "timeline" | "chat")} className="flex-1 flex flex-col">
          <TabsList className="w-full rounded-none border-b">
            <TabsTrigger value="timeline" className="flex-1 gap-2" data-testid="tab-mobile-timeline">
              <Clock className="h-4 w-4" />
              Timeline
            </TabsTrigger>
            <TabsTrigger value="chat" className="flex-1 gap-2" data-testid="tab-mobile-chat">
              <MessageSquare className="h-4 w-4" />
              AI Chat
            </TabsTrigger>
          </TabsList>

          <TabsContent value="timeline" className="flex-1 m-0 h-full">
            <div className="h-full overflow-auto">
              <div className="py-6 px-4">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold mb-2">Release Timeline</h2>
                  {versions && versions.length > 0 && (
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl font-bold text-primary">{versions.length}</span>
                      <span className="text-xs text-muted-foreground">versions</span>
                      <span className="mx-1">·</span>
                      <span className="text-xl font-bold text-primary">{versions.reduce((sum, v) => sum + v.features.length, 0)}</span>
                      <span className="text-xs text-muted-foreground">features</span>
                    </div>
                  )}
                  {versions && versions.length > 0 && (
                    <>
                      <FilterBar compact />
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
            </div>
          </TabsContent>

          <TabsContent value="chat" className="flex-1 m-0 overflow-hidden h-full">
            <ChatSidebar
              pendingMessage={pendingChatMessage}
              onPendingMessageUsed={() => setPendingChatMessage(undefined)}
              onCiteClick={handleCiteClick}
            />
          </TabsContent>
        </Tabs>
      </div>

      {/* Desktop Layout - Side by Side */}
      <div className="hidden md:flex flex-1 overflow-hidden">
        <ScrollArea className="flex-1" style={{ width: '80%' }}>
          <div className="container py-8 px-6">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-3xl font-bold">Release Timeline</h2>
                    {versions && versions.length > 0 && (
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary">{versions.length}</span>
                        <span className="text-sm text-muted-foreground">versions documented</span>
                      </div>
                    )}
                  </div>
                  <p className="text-muted-foreground">
                    Explore {versions?.reduce((sum, v) => sum + v.features.length, 0) || 0} features across {versions?.length || 0} versions from 2011 to present
                  </p>
                </div>
                {versions && versions.length > 0 && (
                  <div className="flex items-center gap-2">
                    <CompareVersionsDialog versions={versions} />
                    <VersionNavigator
                      versions={versions}
                      onNavigate={handleVersionNavigate}
                    />
                  </div>
                )}
              </div>
              {versions && versions.length > 0 && (
                <>
                  <FilterBar />
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
        </ScrollArea>

        <aside className="flex flex-col border-l h-full" style={{ width: '20%' }}>
          <ChatSidebar
            pendingMessage={pendingChatMessage}
            onPendingMessageUsed={() => setPendingChatMessage(undefined)}
            onCiteClick={handleCiteClick}
          />
        </aside>
      </div>

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
