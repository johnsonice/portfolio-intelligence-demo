# Portfolio Intelligence — Priority Exploration

Interactive product prototype for a private equity portfolio intelligence workspace.

This experimental branch, `explore/priority-led-home`, starts from `ce07a92`. It has its own Sites identity and preview; the main branch and original published demo are preserved.

## Unified briefing and companion

Home combines prepared Signals and Suggested tasks in one briefing feed. Scout, a floating portfolio companion, answers lightweight questions in place; Workspace owns sustained investigations and artifacts.

Scout now uses the selected **08 Block Robot**: an ivory modular body, forest-green faceplate, amber eyes and coral ear. Its idle, wave and thinking illustrations are embedded in the page. Hover reveals a compact text/microphone input below the pet; successive visits alternate a wave, curious tilt and playful bob. Click or keyboard focus also opens the input. Reduced-motion preferences suppress animation.

Drag the character anywhere in the viewport. The input follows underneath and a small response bubble stays above its head, flipping below near the top edge. Controls stay within desktop and mobile viewport edges. Arrow keys move the focused character; Home returns it to the corner; Escape dismisses the bubble and input without discarding the draft. Position is remembered in this browser. Scout is hidden in Workspace, where the existing task conversation takes over.

Sending a question shows brief, explicitly simulated progress stages and a Stop control. Cancel restores the prompt. Changing page, company scope or priority context invalidates pending responses. A concise answer appears in place; the full answer is kept for a later Workspace handoff. Source values open the scoped Sources view. Named-company questions can change conversation scope without changing the page filter. Navigation requests return an explicit navigation button.

Report or brief requests present a compact **Work in Workspace** action; they do not create an artifact until clicked. Handoff reuses a relevant task, preserves drafts and carries conversation and source context. The starting document, artifact ID, viewed/saved version and conversation boundary are captured for pending work. Reopening its action reuses the output. Ordinary data questions generate neither reports nor new tasks. Priority actions preserve unrelated unsent companion text.

Voice input uses the browser’s native speech recognition, when available in a secure context. The microphone action first explains browser-managed speech processing and offers English or Chinese; Start dictation initiates the browser permission flow. Dictation populates an editable draft and never sends automatically. Stop finalizes text; Cancel, closing, page changes and Workspace handoff stop recognition. Errors offer a text-input fallback. Browser/service availability varies, and audio may be processed online by the browser’s speech service. The app does not record or store audio. Recognition runs in the parent page through a source-checked, nonce-scoped message bridge; the content iframe retains `sandbox="allow-scripts"`.

## Company scope

A single left-aligned company dropdown combines the current selection (such as All companies) with Portfolio scope filtering. It supports all companies, one company or a custom group, with an adjacent Clear action and a left-anchored selection menu. Home findings and recommendations, Cases, Sources, Workspace and Routines follow it. Shared tasks and routines match any selected company and retain their full, labeled scope. Prepared portfolio findings are shown in All companies. New agent tasks and routines inherit the selection. Dashboard tiles follow the shared scope by default, with an optional local override; pinned source snapshots retain their original scope. Existing agent reports, prepared cases, routine configurations and run evidence are not rewritten when the browsing filter changes. Agent scope can be changed explicitly, creating a new report version while retaining the conversation draft.

## Experience

- **Home:** one mixed briefing feed replaces separate priorities, Next up and Portfolio signals. Signal tags identify prepared June–August analysis, with expandable chart previews and read-only report links. Suggested task tags identify prepared workflows for a September partner brief, September operating scorecard and a management review agenda. Users can browse all items or filter by type. Each workflow preview shows the exact prompt, steps, input scope, report period and saved-source version where relevant. Run task creates the configured result directly in Workspace; its original card becomes Ready / Open Workspace and reopens the same task. Ready cards retain the input snapshot used for that result. Company filters apply to both item types. Existing company cases and prepared portfolio reports keep their original scope; recent work and pinned outputs remain separate resumable work, not new suggestions.
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

The unified briefing was validated locally at desktop and 390 × 844 mobile size:

- All / Signals / Suggested tasks filters, expandable chart and workflow previews.
- All-company brief creation directly in Workspace with the prepared prompt, September source values and preserved August source version.
- Management review agenda draws the actual questions and evidence requests from each prepared company case, including Cedar revenue-recognition timing and Harbor capacity.
- Cedar-only filtering scopes the feed and generated operating scorecard to Cedar.
- Completed task cards expose their existing Workspace result; the ready state does not create another feed card.
- Portfolio Signals open read-only prepared analysis with full source tables; opening the report does not create an artifact or alter the active Workspace report.
- All embedded JavaScript passes syntax checks; no browser JavaScript errors occurred in tested flows.

The floating Block Robot retains its drag, hover, compact conversation and Workspace handoff behavior. Voice preflight explains browser-managed processing; no microphone recording is triggered in automated QA. Live dictation requires user/browser support.

All data, agent responses and workflow execution are simulated locally. No live LLM, durable memory, automatic scheduling or connector execution is implied.
