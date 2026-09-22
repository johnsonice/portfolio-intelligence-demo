# Portfolio Intelligence Demo

Interactive product prototype for a private equity portfolio intelligence workspace.

## Experience

- **Home:** an agent task entry with contextual suggestions derived from in-session drafts, saved briefs and September company signals; six prioritized findings with inline charts. Suggestions resume work or create scoped outputs, preserve source versions and reuse previously started tasks.
- **Agent:** a streamlined conversation pane with a fixed composer, collapsible context and independently scrollable reports. Reports include calculated KPI summaries, company scorecards, cost contribution analysis, review agendas and methodology; charts, tables and partner briefs adapt to scope, month and cost basis.
- **My work:** tasks and saved output versions.
- **Automations:** configurable example workflows and traceable simulated runs.
- **Dashboards:** reusable metric views, filters and pinned analysis.
- **Cases and Sources:** investigation context and illustrative evidence.

## Demo scope

All portfolio data is synthetic. Agent responses and automation runs are simulated locally. No live model, customer data source, scheduler, account system or backend is connected. Changes are held in memory and reset when the page reloads.

## Run locally

Open `dist/index.html` in a browser, or serve the static directory:

```sh
python3 -m http.server 8080 --directory dist
```

Then open http://localhost:8080.

## Project structure

`dist/index.html` is the complete standalone prototype with its styles, scripts and icon assets embedded. No dependency installation or build step is required. `.openai/hosting.json` identifies the Sites deployment and static output directory.

Edit `dist/index.html` to update the prototype. The original customer requirements and proposal documents are intentionally excluded from this repository.
