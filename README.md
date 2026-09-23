# Portfolio Intelligence — Priority Exploration

Interactive product prototype for a private equity portfolio intelligence workspace.

This experimental branch, `explore/priority-led-home`, starts from `ce07a92`. It has its own Sites identity and preview; the main branch and original published demo are preserved.

## Published demos

| Version | Live website | Source branch |
| --- | --- | --- |
| **Priority exploration · current iteration** | [Open the latest demo](https://portfolio-priority-exploration.johnsonice.chatgpt.site/) | [`explore/priority-led-home`](https://github.com/johnsonice/portfolio-intelligence-demo/tree/explore/priority-led-home) |
| Original demo | [Open the original demo](https://portfolio-intelligence-demo.johnsonice.chatgpt.site/) | [`main`](https://github.com/johnsonice/portfolio-intelligence-demo/tree/main) |

Use the **Priority exploration** link when sharing the current design. This iteration connects the briefing, Scout, persistent Workspace tasks and Routines around a continuing company investigation. The two demos have separate published URLs.

## Continuing investigations

Six additions build on the existing interface:

1. **A briefing that follows the work.** Suggested tasks are ranked using the available monthly publications, saved work, outstanding evidence and prior judgments. Each recommendation explains why it is relevant. A compact **Needs your input** queue highlights reviews, missing management context and work awaiting attention. Completed recommendations reopen the captured result instead of generating another copy.
2. **Company context users can inspect and correct.** The **Context** entry in Scout and Workspace separates source facts, management statements, agent hypotheses and recorded judgments. Users can add or revise statements and hypotheses, inspect their history, or exclude an entry from a task. Company scope is explicit. Analyses retain the context snapshot used when they started; later corrections do not rewrite earlier outputs.
3. **Tasks that outlast a report.** A Workspace task retains its conversation, drafts, artifacts, progress and activity. It can be working, paused, waiting for information or data, ready for review, or monitoring a judgment. Users can continue simulated work in the background, pause it, resume it or take over. Producing a report leaves the investigation open for review.
4. **Adjustable workflow previews.** Users can change the company selection, reporting interval, analysis focus and output type through controls or supported natural-language requests. The resulting preview is the plan that runs. It captures the applicable company context and starting document version. Unsupported periods or empty company selections require correction rather than silently generating a different analysis.
5. **Judgments linked to follow-up Routines.** A case judgment records the evidence, rationale and condition for revisiting it. Its Routine keeps the same investigation and appends a new comparison when the selected publication is available. Each run retains its rule, judgment and source snapshots. A request for October waits for data; the demo only contains June–September publications.
6. **Challenge and reuse with traceable sources.** **Challenge this finding** reviews alternative explanations, missing evidence and limits of the conclusion. A finding can be reused in a partner brief, pinned to Dashboards or linked to a Routine. The company, finding version and source period remain attached to each reused result.

The seeded Northstar story demonstrates the intended flow: an August Support-cost finding leads to a provisional judgment, then a September follow-up in the same task. September revenue rises while Support cost stays flat; the new report compares those changes with the earlier judgment without treating the business explanation as proven. Cedar supplies an example of missing management evidence, and Harbor supplies an opportunity that still needs a repeatability check.

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

- **Home:** one mixed briefing feed of prepared Signals and Suggested tasks. Signals keep their original June–August period, expandable chart previews and read-only report links. Recommendations reflect available September data, existing work and outstanding judgments. Company filters apply to both types. Preview, adjust or run a task; completed items reopen their exact result. Recent work and pinned outputs remain resumable work.
- **Workspace:** one place for task sessions, agent conversations and generated artifacts. A searchable sidebar switches between Tasks and Artifacts, including saved versions; opening an artifact restores its originating conversation. Tasks retain independent drafts, context and versions. The sidebar follows company filters while an open task keeps its own scope. A compact single-row task toolbar pairs the task title with its analysis company dropdown. Long titles and company selections truncate without wrapping; the scope label remains available to assistive technology and in the dropdown tooltip. Desktop uses a conversation/artifact workspace without a separate view-mode selector; navigation, task list and conversation/artifact panes have draggable, keyboard-accessible dividers. Navigation snaps to an icon rail, tasks fold to a slim restore strip, and either content pane can fold to its edge. Dragging or switching focus preserves drafts, selected artifacts and scroll position; restoring uses the prior expanded width. Layout preferences are saved locally in this browser. Smaller screens use a task drawer and a contextual Artifacts / Back to chat button without overwriting desktop widths or focus mode. Reports include calculated KPI summaries, company scorecards, cost contribution analysis, review agendas and methodology; charts, tables and partner briefs adapt to scope, month and cost basis.
- **Routines:** configurable example workflows and traceable simulated runs, including judgment-linked follow-ups that return to the originating investigation. Run history preserves the configuration, publication, judgment and output used for each run. Changing the company scope of a linked Routine detaches future runs from that company-specific judgment while preserving past evidence.
- **Dashboards:** four KPI tiles with monthly comparisons and sparklines; indexed trends, department cost mix, company cost-intensity lines, cost-growth contributions, monthly momentum heatmap and an expanded operating scorecard. Revenue mix is available in the tile catalog. Views follow company/month filters and support agent drilldown, rearrangement and pinned source versions.
- **Sources:** company-grouped HR and financial connector cards with simulated connection health, publication coverage and run history. Monthly source values remain browsable through company, source-type and period filters. The shared assistant handles natural-language questions and source explanations, with source-publication lineage. Unsupported fields return clarification. Illustrative system assignments are not live integrations.
- **Cases:** analytical case reports with executive KPIs, indexed trends, monthly source values, department cost bridges, portfolio comparisons and management review agendas. Contextual actions open the shared floating companion to explain drivers, compare September or create a review brief. There is no separate bottom composer. Existing task drafts and the prepared case snapshot are preserved. Sources and methodology are available in an expandable section.

## Demo scope and saved work

All portfolio data is synthetic. Agent responses, plan interpretation, progress and Routine runs are simulated locally. No live model, customer connector, server scheduler, account system or backend is connected. Natural-language behavior supports the demonstrated company, period, cost-focus and output scenarios; it is not a general-purpose LLM.

Demo tasks, conversations, drafts, artifacts, context revisions, judgments, Routines and run history are saved in this browser's `localStorage`. This is browser-local demo persistence, not an account-backed or shared workspace. Clearing site data removes the saved work; another browser or the other demo URL has its own state. If storage is unavailable, the interface indicates that work lasts for the current visit. Layout preferences also remain local to this browser.

Simulated background work progresses only while the page is open. Reloading restores the saved task and pauses an in-progress analysis at its last saved step so that the user can resume it. Closing the browser does not run jobs, poll connectors or trigger a scheduled Routine. Source facts and calculated outputs cover June–September 2026, in monthly USD values.

## Run locally

Open `dist/index.html` in a browser, or serve the static directory:

```sh
python3 -m http.server 8080 --directory dist
```

Then open http://localhost:8080.

## Project structure and editing

| Path | Purpose |
| --- | --- |
| `dist/index.html` | Complete standalone prototype, including the base interface, styles, scripts, icons and Scout illustrations. This is the deployed static file. |
| `src/continuity.js` | Editable investigation behavior: context, task lifecycle, plans, judgments, follow-up runs and finding lineage. |
| `src/continuity.css` | Styles for the continuity controls, dialogs and report additions. |
| `src/continuity-storage.js` | Parent-page storage bridge for the sandboxed prototype; saves and restores browser-local demo state. |
| `scripts/assemble-continuity.py` | Replaces the embedded continuity modules in `dist/index.html` with the current source files and checks embedded application JavaScript syntax. |
| `scripts/test-continuity.mjs` | Logic regression checks using the production continuity module in an isolated state model. |
| `.openai/hosting.json` | Sites project identity and static output directory. |

No dependency installation is needed to view the committed demo. To change the continuity features, edit the appropriate file under `src/`, then rebuild the standalone page and run the logic checks with Python 3 and Node.js:

```sh
python3 scripts/assemble-continuity.py
node scripts/test-continuity.mjs
```

The assembler updates `dist/index.html` in place; commit that generated file with the source changes. The older base interface is still embedded directly in `dist/index.html`. Avoid editing the generated continuity blocks there because the next assembly replaces them. After assembling, use the local static server above to inspect the rendered interface and exercise the affected interactions.

The original customer requirements and proposal documents are intentionally excluded from this repository.

## Verification

The logic regression script covers plan validation, company and period interpretation, company isolation, task context exclusions, captured background context, pause/resume, reopening an existing result, draft preservation, immutable linked run evidence, waiting for unavailable October data, qualified challenge language and publication ranges. Rendering and platform adapters are stubbed in this script; it does not replace browser checks.

For a release, also exercise the relevant flows in the rendered page: adjust and run a plan; correct and exclude context; pause and reload a task; record a judgment and run its follow-up; challenge a finding and reuse it in a brief or dashboard. Inspect both desktop and narrow-screen layouts, company filters and the source links. Browser interaction results should be recorded from the actual release candidate rather than inferred from a passing logic suite.

Voice preflight explains browser-managed processing. Microphone recording is not part of the logic checks, and live dictation requires user/browser support. All portfolio data, agent responses and workflow execution remain simulated.
