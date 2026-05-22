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

---

## Addendum — p5.js Interactive Diagrams Concept (May 2026)

A second round of ideas focused on **p5.js sketches**, **"Takeaway" summaries**, **"Try It Yourself"** exercises, and a **tabbed interface** that promotes diagrams to a first-class section of the app.

### Proposed top-level tab structure
`Timeline` · `Interactive Diagrams` · `Learning Paths` · `AI Assistant` · `Version Compare`

The Diagrams tab would be a gallery of p5.js sketches, each opening as a focused module with instructions, controls, takeaway, and next-step links.

### p5.js diagram sketches

- **[big]** **2D Meshing Evolution Slider** — scrub a timeline slider; canvas redraws the same area as a coarse grid (v2011) → adaptive grid (v2015) → subgrid mesh (v2027). Mouse hover on the modern mesh highlights subgrid elements (porous walls, infiltration zones).
- **[big]** **Roughness Zone Priority Editor** — interactive: click to add zones, drag to move, set radius/roughness/priority. Click any point to sample the effective roughness resolved by priority. Real-time numerical readout.
- **[big]** **Database Architecture Comparator** — toggle on-premise vs cloud. Animated data packets flow between servers/clients/API gateway. Click any node to expand auth/encryption details.
- **[big]** **Design Rainfall Generator** — sliders for return period, duration, timestep + method dropdown (FEH2013 / NOAA Atlas 14 / Euler Type II). Live hyetograph, total depth, peak intensity, and a comparison table of methods.
- **[big]** **Pump Station Configurator** — drag points on the pump curve; system curve is computed live; operating-point intersection is rendered with flow/head/efficiency readout. Lets a user *feel* what pump-curve changes do.

### "Takeaway" summary system
Every feature card (and every diagram) gets a one-line "why this matters" written in plain language. Example:
> **Subgrid Sampling (v2027.0)** — More accurate flood depths around buildings without huge models.

- **[next]** Add a `takeaway?: string` field to the `Feature` schema and surface it on the FeatureCard as a highlighted callout. Author 50–100 of the highest-value takeaways manually; AI-draft the rest with human review.

### "Try It Yourself" exercise pattern
Each interactive diagram is wrapped in a 5-part shell:
1. **Instructions** — clear goal and steps
2. **Interactive controls** — sliders, drag handles, dropdowns
3. **Immediate feedback** — live visuals + numerical results
4. **Save/Share** — export configuration as JSON or shareable URL
5. **Next steps** — links to the related ICM documentation and feature cards

### Implementation notes
- Add `p5` as a frontend dependency. Wrap each sketch in a React component using a `useRef`-attached canvas container and a `useEffect` that instantiates `new p5(sketch, ref.current)` and tears it down on unmount.
- Keep each diagram in its own file under `client/src/components/diagrams/` (e.g. `MeshingEvolution.tsx`, `RoughnessZoneEditor.tsx`).
- A gallery page (`client/src/pages/diagrams.tsx`) renders preview cards with thumbnail + title + blurb, and routes to per-diagram pages via wouter.
- Mobile: use horizontally scrollable tab nav; sketches should detect `windowWidth < 768` and downscale.
- "Save/Share" can be implemented client-side using URL-encoded state (no backend needed).
- Tab promotion (Diagrams as a sibling of Timeline) should wait until at least 2 polished sketches exist — otherwise the tab feels empty.

### Recommended sequencing
1. Add `p5` dependency and build the **Roughness Zone Priority Editor** first — it's bounded, doesn't need authored per-version data, and demonstrates the full pattern (canvas + controls + readout + takeaway).
2. Once the pattern is validated, add the **Design Rainfall Generator** (synthetic data is fine).
3. Then the heavier authored-content diagrams (Meshing Evolution, Database Architecture).
4. Promote Diagrams to a top-level tab once ≥2 sketches ship.
5. Layer in the takeaway-summary field and "Save/Share" URL encoder in parallel.
