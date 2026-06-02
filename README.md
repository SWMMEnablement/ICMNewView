# ICM InfoWorks — What's New

An interactive, AI-powered release-notes explorer for **ICM InfoWorks** that transforms static software release notes into a searchable, visual, and conversational product history.

**Repository:** [SWMMEnablement/ICMNewView](https://github.com/SWMMEnablement/ICMNewView)  
**Replit app:** [replit.com/@robertdickinson/ICMNewView](https://replit.com/@robertdickinson/ICMNewView)

---

## Overview

ICM InfoWorks — What's New is a web application for exploring the evolution of ICM InfoWorks across nearly two decades of releases. Instead of reading static release-note documents, users can browse a visual timeline, search by keyword, filter by domain, compare upgrade paths between versions, inspect feature-evolution chains, and ask AI assistants questions about any release or feature.

The application spans **48 versions** from **v1.5 (February 2011)** through **v2027.0**, with a total of **809 documented features** stored in the application dataset. It is designed for engineers, product users, consultants, and technical teams who want to understand what changed in ICM InfoWorks and how product capabilities evolved over time. [page:41]

---

## Key features

- **Interactive release timeline** with version cards and feature summaries. [page:41]
- **Full-text search** across feature titles, descriptions, and categories with inline highlighting. [page:41]
- **7 timeline filter categories** and version-range filtering. [page:41]
- **My Stack** tracking to show what is new relative to a selected baseline version. [page:41]
- **Analytics dashboard** with bar charts and a full **Category × Version heatmap**. [page:41]
- **Compare Versions** workflow for upgrade-path analysis between any two releases. [page:41]
- **Feature evolution chains** detected automatically using Jaccard title similarity. [page:41]
- **Deep-linkable features** so each feature can be referenced by URL anchor. [page:41]
- **Quad AI chat** with four independent models and separate conversation histories. [page:41]

---

## AI chat models

The application includes four built-in AI assistants, each exposed through a separate API endpoint and conversation tab. These are **Claude Sonnet 4.5**, **DeepSeek Chat**, **Gemini 2.5 Flash**, and **GPT-4o Mini**. [page:41]

Each AI response is instructed to include feature citations in the form `[cite:featureId]`, which the frontend renders as clickable badges that jump directly to the referenced feature in the timeline. This makes the chat useful not just for summaries, but for traceable product-history exploration. [page:41]

---

## Feature exploration

### Timeline and detail views

The timeline is the main navigation surface of the application. It presents versions chronologically with feature cards, and each card can open a detail modal, pre-fill a chat question, or be targeted by a deep link such as `/#feature-2027.0-network-design`. [page:41]

### Search and filters

Users can search across titles, descriptions, and category text. The filter system includes **7 timeline categories** — Cloud/SaaS, Interface/UI, 2D Modelling, Data Import/Export, Automation/Scripting, Administration, and Analysis/Results — along with a version range selector and baseline “My Stack” version tracker stored in local storage. [page:41]

### Compare Versions

The Compare Versions dialog analyzes all features added between a selected “from” version and “to” version, not just the endpoint releases. It supports **By Version**, **By Category**, and **Chains** tabs, plus markdown export for structured upgrade summaries. [page:41]

### Evolution chains

The app detects related features across versions using **Jaccard title similarity** with a threshold of **0.5**. Chains are classified into maturity states such as introduced, growing, mature-active, and stable, which helps users see how capabilities developed rather than viewing features as isolated one-off notes. [page:41]

---

## Analytics

The analytics section is centered on `VersionCharts.tsx` and includes bar-chart summaries plus an **11-row × 48-column heatmap**. The heatmap is sorted by release date, supports hover tooltips, row normalization, multiple color schemes, numeric overlay toggles, and click-through navigation back into the timeline. [page:41]

The heatmap uses **11 analysis categories** that are separate from the 7 timeline filter categories. These include Cloud/SaaS, 2D Modelling, UI/UX, Data Management, 1D Hydraulics, GIS Integration, Rainfall, Water Quality, Scripting/API, SWMM, and Analysis/Results. [page:41]

---

## Architecture

### Frontend

The frontend is built with **React 18**, **TypeScript**, and **Vite**, using **TanStack Query** for data fetching, **Wouter** for routing, **Tailwind CSS** for styling, and **shadcn/ui** plus **Radix UI** primitives for interface components. Core UI pieces include `TimelineView`, `FeatureCard`, `FeatureDetailModal`, `ChatSidebar`, `FilterPanel`, `VersionCharts`, `CompareVersionsDialog`, and `EvolutionChainsDialog`. [page:41]

### Backend

The backend uses **Express.js** with TypeScript and serves version data plus four AI chat endpoints. The primary routes are `GET /api/versions`, `GET /api/versions/:id`, and four `POST` chat endpoints under `/api/chat/` for Claude, DeepSeek, Gemini, and OpenAI-backed assistants. [page:41]

### Data layer

All version data is stored in memory, sourced from `server/data/versions.ts`, a TypeScript file of about **5,202 lines**. There is no active database in current operation, although Drizzle ORM infrastructure and an `IStorage` abstraction exist for future migration. [page:41]

---

## Repository structure

```text
ICMNewView/
├── .agents/                    # Agent-related configuration
├── attached_assets/            # Supporting content and source materials
├── client/                     # React frontend
│   └── src/
│       ├── components/
│       ├── hooks/
│       ├── lib/
│       └── pages/
├── scripts/                    # Version-data utility scripts
├── server/                     # Express backend and version data
│   └── data/
│       └── versions.ts         # 48 versions / 809 features
├── shared/                     # Zod schemas and shared types
├── HANDOVER.md                 # Detailed project handover
├── IDEAS.md                    # Feature roadmap and ideas
├── replit.md                   # Replit notes
├── design_guidelines.md        # UI/design guidance
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── .replit
```

The repository is primarily **TypeScript (98.8%)**, with a small amount of CSS and other supporting files. [page:40]

---

## API endpoints

### Version data

- `GET /api/versions` — Returns all versions sorted by version number descending. [page:41]
- `GET /api/versions/:id` — Returns a single version by ID. [page:41]

### AI chat

- `POST /api/chat/claude` — Claude Sonnet 4.5 via Anthropic SDK. [page:41]
- `POST /api/chat/deepseek` — DeepSeek Chat via OpenRouter. [page:41]
- `POST /api/chat/gemini` — Gemini 2.5 Flash via Google GenAI SDK. [page:41]
- `POST /api/chat/openai` — GPT-4o Mini via OpenAI SDK. [page:41]

All chat endpoints inject the full version dataset into the system prompt along with citation instructions, so answers can refer directly back to individual features. [page:41]

---

## Running locally

Install dependencies and start the development environment:

```bash
npm install
npm run dev
```

The application runs on **port 5000**, with the Express backend serving the frontend and Vite providing hot module reloading in development. The handover explicitly notes that `server/vite.ts`, `vite.config.ts`, `drizzle.config.ts`, and `package.json` should not be modified casually. [page:41]

---

## Environment variables

The app expects AI integration credentials to be provided through Replit AI Integrations. These include API keys and base URLs for Anthropic, OpenRouter, Gemini, and OpenAI, plus `SESSION_SECRET`; `KIMI_API_KEY` is also listed but currently unused. [page:41]

---

## Notes and quirks

A few implementation details are important for maintainers:

- Version IDs are the same as version strings, for example `id: "2027.0"` and `version: "2027.0"`. [page:41]
- Release dates do not always increase with version numbers, so heatmap ordering can differ from semantic version ordering. [page:41]
- The app uses two distinct category systems: **7 timeline filters** and **11 heatmap categories**. [page:41]
- Features matching “ruby” are exclusively mapped to the Scripting/API heatmap row through `EXCLUSIVE_OVERRIDES`. [page:41]
- All data is in memory, and each AI request includes the full 809-feature dataset in its system prompt. [page:41]

---

## Audience

This project is especially useful for:

- InfoWorks ICM users planning upgrades.
- Engineers comparing feature growth across versions.
- Teams documenting platform evolution.
- Product analysts studying development focus areas.
- Anyone who prefers conversational exploration over static release-note PDFs.

---

## Documentation

The most complete technical reference is `HANDOVER.md`, which documents the component architecture, API routes, data model, category systems, AI integrations, cross-component state flow, quirks, deployment approach, and future considerations. `IDEAS.md` captures roadmap concepts for additional diagrams and exercises. [page:41]

---

## Deployment

The project is designed for **Replit** deployment. In production, Vite builds the frontend and Express serves the static assets, with publishing handled through Replit’s deployment workflow. [page:41]

---

## License

Add the project license here if one is intended for public reuse.
