# Portfolio Intelligence — Priority Exploration

Interactive product prototype for a private equity portfolio intelligence workspace.

This experimental branch, `explore/priority-led-home`, starts from `ce07a92`. It has its own Sites identity and preview; the main branch and original published demo are preserved.

## Priority-led experience

Home selects the next useful actions; Scout, a floating portfolio companion, answers lightweight questions in place; Workspace owns sustained investigations and artifacts.

Scout is an original illustrated character with a cobalt crest, ivory face and pale-blue scarf. Drag it anywhere in the viewport. Its conversation bubble follows above its head and flips below near the top edge. The page remains usable and keeps its layout. The same bounded bubble is used on smaller screens. Click to open or close; closing and dragging preserve dialogue, scroll position and the unsent draft during this visit. Arrow keys move the focused character; Home returns it to the corner; Escape closes its bubble. Position is remembered in this browser. Scout is hidden in Workspace, where the existing task conversation takes over.

Messages retain company and period context. Named-company questions can change the conversation scope without changing the page filter. Requests to find a dashboard, case, Sources or Routines return an explicit navigation button. Source values expand inside the bubble. A request for a report or brief presents a scoped Workspace handoff card; it does not create an artifact until the user clicks Start in Workspace. The footer follows the same pending request. Handoff reuses the relevant task, preserves existing drafts and carries the conversation and source context. Reopening the card reuses the output. Ordinary data questions generate neither reports nor new tasks.

## Company scope

A single left-aligned company dropdown combines the current selection (such as All companies) with Portfolio scope filtering. It supports all companies, one company or a custom group, with an adjacent Clear action and a left-anchored selection menu. Home findings and recommendations, Cases, Sources, Workspace and Routines follow it. Shared tasks and routines match any selected company and retain their full, labeled scope. Prepared portfolio findings are shown in All companies. New agent tasks and routines inherit the selection. Dashboard tiles follow the shared scope by default, with an optional local override; pinned source snapshots retain their original scope. Existing agent reports, prepared cases, routine configurations and run evidence are not rewritten when the browsing filter changes. Agent scope can be changed explicitly, creating a new report version while retaining the conversation draft.

## Experience

- **Home:** a concise “Here’s what’s next” briefing with up to three contextual priorities, evidence summaries, Why this explanations, defer/restore controls and a dependency-based Next up list. Priority state reflects newly prepared drafts. Portfolio signals remain secondary, with independently expandable quick charts and links to full cases. The large agent composer and prompt strip are removed.
- **Workspace:** one place for task sessions, agent conversations and generated artifacts. A searchable sidebar switches between Tasks and Artifacts, including saved versions; opening an artifact restores its originating conversation. Tasks retain independent drafts, context and versions. The sidebar follows company filters while an open task keeps its own scope. A compact single-row task toolbar pairs the task title with its analysis company dropdown. Long titles and company selections truncate without wrapping; the scope label remains available to assistive technology and in the dropdown tooltip. Desktop uses a conversation/artifact workspace without a separate view-mode selector; navigation, task list and conversation/artifact panes have draggable, keyboard-accessible dividers. Navigation snaps to an icon rail, tasks fold to a slim restore strip, and either content pane can fold to its edge. Dragging or switching focus preserves drafts, selected artifacts and scroll position; restoring uses the prior expanded width. Layout preferences are saved locally in this browser. Smaller screens use a task drawer and a contextual Artifacts / Back to chat button without overwriting desktop widths or focus mode. Reports include calculated KPI summaries, company scorecards, cost contribution analysis, review agendas and methodology; charts, tables and partner briefs adapt to scope, month and cost basis.
- **Routines:** configurable example workflows and traceable simulated runs.
- **Dashboards:** four KPI tiles with monthly comparisons and sparklines; indexed trends, department cost mix, company cost-intensity lines, cost-growth contributions, monthly momentum heatmap and an expanded operating scorecard. Revenue mix is available in the tile catalog. Views follow company/month filters and support agent drilldown, rearrangement and pinned source versions.
- **Sources:** company-grouped HR and financial connector cards with simulated connection health, publication coverage and run history. Monthly source values remain browsable through company, source-type and period filters. The shared assistant handles natural-language questions and source explanations, with source-publication lineage. Unsupported fields return clarification. Illustrative system assignments are not live integrations.
- **Cases:** analytical case reports with executive KPIs, indexed trends, monthly source values, department cost bridges, portfolio comparisons and management review agendas. Contextual actions open the shared floating companion to explain drivers, compare September or create a review brief. There is no separate bottom composer. Existing task drafts and the prepared case snapshot are preserved. Sources and methodology are available in an expandable section.

## Demo scope

All portfolio data is synthetic. Agent responses and routine runs are simulated locally. No live model, customer data source, scheduler, account system or backend is connected. Demo work is held in memory and resets when the page reloads. Only layout preferences (pane widths, collapsed states, focus mode and companion position) persist locally; no conversation or portfolio data is stored by this feature.

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

## Interaction checks

Validated in the local browser at desktop and mobile widths:

- Drag the character with an open bubble; the bubble follows and avoids viewport edges without losing the draft or toggling closed.
- Close and reopen the bubble; dialogue, scroll position and unsent text survive.
- Northstar priority answers on Home; requesting a brief keeps its two existing outputs unchanged until explicit Workspace handoff.
- Workspace handoff creates the September brief in the original Northstar task, retaining earlier dialogue and combining the existing unsent draft with the companion draft.
- Requests for Cedar’s dashboard stay on the page until the navigation button is clicked; source values expand inline and show September revenue of $6.35m.
- Pending work cards label resolved company scope. Formal requests freeze their starting document configuration; later edits do not silently replace it.

All embedded JavaScript passes syntax checks. No live LLM, durable memory, automatic scheduling or connector execution is implied.
