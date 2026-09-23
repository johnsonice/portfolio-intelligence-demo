# Continuity exploration acceptance

Scope: the six KZone-inspired product changes in the existing priority exploration. All portfolio records and agent execution remain synthetic and local to the browser.

## Evidence

| Requirement | Verification |
| --- | --- |
| Prioritized briefing and input queue | Browser: Northstar follow-up moves to Ready for review with its run/decision reference; unresolved information and review items appear in the compact queue. Company scope controls the feed. |
| Correctable company context | Browser: added an attributed management statement, excluded it from the Northstar task, and verified its omission from a causal answer. Facts, hypotheses, assertions and judgment history remain separately labeled. Logic regression checks company isolation and exclusions. |
| Persistent task lifecycle | Browser: background work paused at step 2/3, survived reload, and resumed in the original task; existing conversation drafts remained. Logic regression checks pause/resume, frozen input context and exact-output reopening. |
| Adjustable execution plan | Browser: natural-language Northstar + Cedar, August–September, Support table produced those values; manual company selection changed a Northstar plan to a Cedar-only analytical report with Cedar-only captured context. Logic regression rejects unsupported periods and retains source-brief snapshots. |
| Judgment-linked follow-up | Browser: recorded DEC-1, produced RUN-004 with September evidence in the original Northstar investigation, and revisited the prior judgment. Recorded a Cedar judgment for October; RUN-005 waited with no October artifact or substitute result. Logic regression checks immutable past runs and prevents background execution while waiting. |
| Challenge and reuse | Browser: challenge displayed qualified interpretations and missing evidence; a Northstar finding was reused in a brief and pinned in Dashboards with finding/version/period lineage. Logic regression checks the qualified Harbor interpretation and monthly source references. |
| Conversation continuity | Browser: “Why did Cedar costs rise in July?” followed by “Why did that change?” both retained June–July and the same 4.0% cost / 1.7% revenue comparison. Logic regression also checks report-generation intent and custom comparison starts. |
| Responsive layout | Browser: checked desktop and 390 × 844 viewport. Adjust-plan drawer, context drawer, judgment form, task conversation and artifact navigation remained operable. Fixed the mobile toolbar overflow and retained the compact desktop toolbar. |

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
