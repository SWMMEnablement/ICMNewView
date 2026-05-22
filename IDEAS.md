# ICM InfoWorks "What's New" — Roadmap of Ideas

Source: Review dated 2026-05-22, plus prior implementation notes.
Items marked **[done]** are already shipped. Items marked **[next]** are reasonable next-session targets. Items marked **[big]** are significant builds.

---

## Already Shipped

- **[done]** AI chat (Claude + Gemini) with independent histories, citations linking back to timeline
- **[done]** Timeline of 48 versions / 809 features with expand/collapse
- **[done]** Search with inline term highlighting
- **[done]** Category filters (7 categories, keyword-based)
- **[done]** My Stack — highlight features newer than your installed version, persisted in localStorage
- **[done]** Version range filter (From → To)
- **[done]** Compare Versions tool with upgrade-path logic, By Version / By Category / Chains tabs, Markdown export, category-shift summary
- **[done]** Evolution Chains — Jaccard title-similarity clustering with maturity classification
- **[done]** Release Analytics — by year, focus areas, recent releases
- **[done]** Category × Version Heatmap (11 categories) with color schemes, normalize-by-row, click-to-navigate
- **[done]** Documentation links per feature
- **[done]** "Ask AI about this feature" button on each feature card
- **[done]** AI suggested-question chips when chat is empty
- **[done]** Deep-linkable features and versions (URL hash → scroll + pulse)
- **[done]** Dark mode
- **[done]** Mobile responsive (tabbed Timeline / AI Chat)
- **[done]** Major release badges
- **[done]** Empty-response handling in chat ("No information was found…")
- **[done]** Export filtered features as CSV / Markdown
- **[done]** Learning Paths sheet (New to ICM / Upgrade from v2023 / Cloud Migration)

---

## Next Up (achievable in 1–2 sessions each)

### Interactive enhancements
- **[next]** "Explain this feature" → AI prompt pre-filled with deeper request than current "Ask AI" (different verb, scenario-based)
- **[next]** "Show me examples" button — AI prompt requesting code/config snippets
- **[next]** "How would I use this?" button — scenario-tailored AI prompt
- **[next]** Feature impact rating — local-only thumbs up/down stored in localStorage, surface a "Most valued" list

### Tools
- **[next]** Feature Timeline Graph — line chart of feature adoption per category over time (D3 or Recharts)
- **[next]** PDF export option (use jsPDF or print stylesheet)
- **[next]** Lazy load version detail sections (intersection observer)
- **[next]** Notifications opt-in for new versions (browser Notifications API + last-seen-version in localStorage)

---

## Big Builds (substantial scope each)

### Interactive diagrams (p5.js or D3)
Each is a standalone visualisation that explains one concept end-to-end.

- **[big]** **2D Meshing Evolution Slider** — timeline scrubber showing how a mesh of the same area evolves from v2.0 simple grids → v2027.0 subgrid sampling. Requires authored mesh snapshot data per version.
- **[big]** **Subgrid Sampling Visualizer** — click porous walls, infiltration zones, linear structures to see mesh representation before/after subgrid. Needs custom SVG diagrams.
- **[big]** **Roughness Zone Priority Demo** — interactive polygon tool; draw overlapping zones with priorities, see resolved roughness at any point. p5.js sketch.
- **[big]** **Cloud Database Architecture** — animated diagram comparing on-prem vs cloud data flow, with click-to-explore nodes for auth, encryption, access patterns.
- **[big]** **ICM Network Types Explainer** — toggle InfoWorks vs SWMM networks, click any node to see property differences.
- **[big]** **Scenario & Version Control Workflow** — git-like commit graph showing branch/merge with version-control feature availability per release.
- **[big]** **Rainfall Generator Evolution** — pick location, return period, duration; overlay FEH2013 / NOAA Atlas 14 / Euler Type II hyetographs. Backend would need rainfall computation.
- **[big]** **Simulation Engine Evolution** — toggle engine improvements, show their effect on a tiny demo network's simulation time / stability / accuracy. Requires mock simulation data per version.

### Community / persistence
- **[big]** User accounts (auth + profile) — would need backend session storage and DB
- **[big]** Per-feature user annotations / "this saved our project because…"
- **[big]** Common pitfalls warnings collected from users
- **[big]** Training video / documentation cross-links per feature (curated)
- **[big]** Shareable URL builder for filtered views (current state encoded in query string)

---

## Implementation Notes

- p5.js or D3 are the right tools for interactive diagrams.
- Each diagram should be self-contained, include a "Takeaway" summary, and a "Try It Yourself" affordance.
- Tab structure could grow to: **Timeline | AI Chat | Diagrams | Learning Paths** if interactive diagrams are added.
- Several "big" items need authored content (mesh snapshots, network diagrams, simulation traces) which is the real cost — not the code.

---

## Conclusion

The timeline foundation is solid. The next high-leverage moves are (a) the small AI-prompt button variations, (b) the feature timeline graph, and (c) at least one polished interactive diagram to prove the pattern before investing in the rest.
