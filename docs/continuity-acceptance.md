# Continuity exploration acceptance

Scope: the six KZone-inspired product changes and subsequent Home and Case follow-up refinements in the existing priority exploration. All portfolio records and agent execution remain synthetic and local to the browser.

## Evidence

| Requirement | Verification |
| --- | --- |
| Unified Home tasks | Browser: prepared findings and completed analyses use Review; the latest Northstar follow-up occupies the same card as the original finding. Review reopens the existing artifact, while unexecuted recommendations use Run. To review and Suggested tasks are separate visible sections that both follow the company selection. Browser: running the September scorecard moved it from Suggested tasks to To review, changing counts from 6 / 3 to 7 / 2. Selecting Northstar showed only its review and suggestions. Active work is prioritized in Continue your work. The redundant input-queue banner was removed in the Home simplification. |
| Correctable company context | Browser: added an attributed management statement, excluded it from the Northstar task, and verified its omission from a causal answer. Facts, hypotheses, assertions and judgment history remain separately labeled. Logic regression checks company isolation and exclusions. |
| Persistent task lifecycle | Browser: background work paused at step 2/3, survived reload, and resumed in the original task; existing conversation drafts remained. Logic regression checks pause/resume, frozen input context and exact-output reopening. |
| Adjustable execution plan | Browser: natural-language Northstar + Cedar, August–September, Support table produced those values; manual company selection changed a Northstar plan to a Cedar-only analytical report with Cedar-only captured context. Logic regression rejects unsupported periods and retains source-brief snapshots. |
| Judgment-linked follow-up | Browser: recorded DEC-1, produced RUN-004 with September evidence in the original Northstar investigation, and revisited the prior judgment. Recorded a Cedar judgment for October; RUN-005 waited with no October artifact or substitute result. Logic regression checks immutable past runs and prevents background execution while waiting. |
| Challenge and reuse | Browser: challenge displayed qualified interpretations and missing evidence; a Northstar finding was reused in a brief and pinned in Dashboards with finding/version/period lineage. Logic regression checks the qualified Harbor interpretation and monthly source references. |
| Conversation continuity | Browser: “Why did Cedar costs rise in July?” followed by “Why did that change?” both retained June–July and the same 4.0% cost / 1.7% revenue comparison. Logic regression also checks report-generation intent and custom comparison starts. |
| Responsive layout | Browser: checked desktop and 390 × 844 viewport. Adjust-plan drawer, context drawer, judgment form, task conversation and artifact navigation remained operable. Fixed the mobile toolbar overflow and retained the compact desktop toolbar. |
| Compact Home cards | Browser: three-column desktop and single-column 390 × 844 layouts; chart previews expand in place. An adjusted August partner brief displays August in its Home title, June–August as its period and the matching calculated values. Review opens that existing artifact. October follow-ups show Waiting for data without substituting an earlier period. Original company Case and portfolio-report links still open their detailed reports. |
| Prominent Case follow-up | Desktop browser: verified the report's follow-up panel with a freeform input and three contextual suggestions for September comparison, possible explanations and an operating partner brief. Exercised a freeform query and the September suggestion. Cancelling a pending query restored its Case draft separately from the existing Scout draft. Workspace navigation reopened the existing Northstar Case 014 investigation with the exact user question and answer retained. At 390 × 844, the suggestions stack below the composer. Harbor’s generated brief retained June–August and its company scope. A saved Case draft was restored after reload. |

## Repeatable checks

```sh
python3 scripts/assemble-continuity.py
node scripts/test-continuity.mjs
git diff --check
```

The logic suite executes the production continuity code against an isolated state model. It does not replace browser layout checks or test a live LLM.

## Deliberate demo limits

- Background work advances only while the page is open. Reload restores unfinished work as paused.
- Browser-local storage saves this demo's work; there is no account backend or cross-device synchronization.
- Context statements remain attributed, uncorroborated statements until supporting evidence exists. Recording a judgment does not verify the cause.
- HR/financial connections, workflow runs and generated outputs are simulated. Information-request drafts are never sent externally.
- Available monthly publications cover June–September 2026. October follow-ups remain waiting.
