# Portfolio Intelligence Demo

Interactive product prototype for a private equity portfolio intelligence workspace.

## Company scope

A single left-aligned company dropdown combines the current selection (such as All companies) with Portfolio scope filtering. It supports all companies, one company or a custom group, with an adjacent Clear action and a left-anchored selection menu. Home findings and recommendations, Cases, Sources, Workspace and Routines follow it. Shared tasks and routines match any selected company and retain their full, labeled scope. Prepared portfolio findings are shown in All companies. New agent tasks and routines inherit the selection. Dashboard tiles follow the shared scope by default, with an optional local override; pinned source snapshots retain their original scope. Existing agent reports, prepared cases, routine configurations and run evidence are not rewritten when the browsing filter changes. Agent scope can be changed explicitly, creating a new report version while retaining the conversation draft.

## Experience

- **Home:** an agent task entry with compact suggested-prompt chips beneath the composer, derived from in-session drafts, saved briefs and September company signals; six compact finding previews with an inline, collapsible chart or cost breakdown (one open at a time), plus separate links to detailed cases and analysis. Suggestions resume work or create scoped outputs, preserve source versions and reuse previously started tasks.
- **Workspace:** one place for task sessions, agent conversations and generated artifacts. A searchable sidebar switches between Tasks and Artifacts, including saved versions; opening an artifact restores its originating conversation. Tasks retain independent drafts, context and versions. The sidebar follows company filters while an open task keeps its own scope. The analysis company selector sits directly below its label on the left. Desktop uses a conversation/artifact workspace without a separate view-mode selector; navigation, task list and conversation/artifact panes have draggable, keyboard-accessible dividers. Navigation snaps to an icon rail, tasks fold to a slim restore strip, and either content pane can fold to its edge. Dragging or switching focus preserves drafts, selected artifacts and scroll position; restoring uses the prior expanded width. Layout preferences are saved locally in this browser. Smaller screens use a task drawer and a contextual Artifacts / Back to chat button without overwriting desktop widths or focus mode. Reports include calculated KPI summaries, company scorecards, cost contribution analysis, review agendas and methodology; charts, tables and partner briefs adapt to scope, month and cost basis.
- **Routines:** configurable example workflows and traceable simulated runs.
- **Dashboards:** four KPI tiles with monthly comparisons and sparklines; indexed trends, department cost mix, company cost-intensity lines, cost-growth contributions, monthly momentum heatmap and an expanded operating scorecard. Revenue mix is available in the tile catalog. Views follow company/month filters and support agent drilldown, rearrangement and pinned source versions.
- **Cases and Sources:** analytical case reports with executive KPIs, indexed trends, monthly source values, department cost bridges, portfolio comparisons and management review agendas. A bottom composer carries the case into a new agent investigation, with calculated follow-ups for cost drivers, September and peers. Existing task drafts and the prepared case snapshot are preserved. Sources and methodology are available in an expandable section.

## Demo scope

All portfolio data is synthetic. Agent responses and routine runs are simulated locally. No live model, customer data source, scheduler, account system or backend is connected. Demo work is held in memory and resets when the page reloads. Only layout preferences (pane widths, collapsed states and focus mode) persist locally; no conversation or portfolio data is stored by this feature.

## Run locally

Open `dist/index.html` in a browser, or serve the static directory:

```sh
python3 -m http.server 8080 --directory dist
```

Then open http://localhost:8080.

## Project structure

`dist/index.html` is the complete standalone prototype with its styles, scripts and icon assets embedded. No dependency installation or build step is required. `.openai/hosting.json` identifies the Sites deployment and static output directory.

Edit `dist/index.html` to update the prototype. The original customer requirements and proposal documents are intentionally excluded from this repository.

Seeded workflows follow concrete operating-review scenarios: Northstar Support cost follow-up, Harbor revenue-growth repeatability, and monthly partner-brief preparation. Resume prompts identify their task, and generated deliverable names include company scope and reporting month.
