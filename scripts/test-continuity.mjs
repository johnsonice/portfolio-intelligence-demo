import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';

// Exercise the production continuity logic in an isolated state model. Rendering
// and platform adapters are stubs; calculations, plans, runs and snapshots are real.
const source=readFileSync(new URL('../src/continuity.js',import.meta.url),'utf8').replace(/ctInitialize\(\);\s*$/,'');
const timers=new Map();let timerId=0;
const c={console,Date,Map,Set,JSON,Number,Object,Array,String,Math,RegExp,
 setTimeout:fn=>{timers.set(++timerId,fn);return timerId},clearTimeout:id=>timers.delete(id)};
vm.createContext(c);
vm.runInContext(`
const data={northstar:{cost:[2,2.18,2.36,2.38],revenue:[10,10.2,10.5,11.4],support:[.4,.56,.72,.72]},harbor:{cost:[2.4,2.43,2.5,2.53],revenue:[8,8.4,8.8,9.1],support:[.6,.61,.64,.66]},cedar:{cost:[1.5,1.56,1.65,1.68],revenue:[6,6.1,6.3,6.35],support:[.35,.37,.43,.44]}};
const names={northstar:'Northstar Services',harbor:'Harbor Labs',cedar:'Cedar Works'},sourceSystems=Object.fromEntries(Object.keys(data).map(id=>[id,{hr:'HR',finance:'Finance'}]));
const clone=x=>JSON.parse(JSON.stringify(x)),esc=x=>String(x),I=x=>x,p=n=>(n>=0?'+':'')+n.toFixed(1)+'%',pct=(a,b)=>(a/b-1)*100,signedPP=n=>(n>=0?'+':'')+n.toFixed(1)+' pp';
const initial={companyIds:['northstar'],end:'aug',format:'report',blocks:[]},caseDefs={northstar:{no:'014'},cedar:{no:'015'},harbor:{no:'016'}};
let seq=1;const state={session:'north',route:'home',active:1,view:null,selected:null,draft:'preserve my draft',messages:[],sessions:{},taskMeta:{north:{title:'Northstar Support investigation'}},caseSessions:{northstar:'north'},artifacts:[{id:1,session:'north',versions:[clone(initial)],saved:null}],pins:[],companyScope:Object.keys(data)};
const ops={rules:[],runs:[],runSeq:0},feedState={open:{},runs:{},filter:'all'},ambient={messages:[],draft:'scout draft',voice:{state:'idle'},taskKey:null};
const root={querySelector:()=>null,querySelectorAll:()=>[],addEventListener:()=>{},classList:{remove:()=>{}}};
const window={parent:{postMessage:()=>{}},addEventListener:()=>{}};
function current(){return state.artifacts.find(a=>a.id===state.active).versions.at(-1)}
function taskSnapshot(key){return key===state.session?{active:state.active,view:state.view,draft:state.draft,messages:state.messages}:state.sessions[key]}
function stashSession(){state.sessions[state.session]=clone(taskSnapshot(state.session))}
function taskCompanyIds(key){const snap=taskSnapshot(key);return state.artifacts.find(a=>a.id===snap?.active)?.versions.at(-1).companyIds||[]}
function taskTitle(key){return state.taskMeta[key]?.title||key}
function scopeName(ids=state.companyScope){return ids.map(id=>names[id]).join(' + ')}
function companyScope(){return state.companyScope}
function createOpsTask(config,title,message){const id=++seq,key='task-'+id;state.artifacts.push({id,session:key,versions:[{...clone(config),title}],saved:null});state.sessions[key]={active:id,view:null,draft:'',messages:[]};state.taskMeta[key]={title};return{id,key}}
function caseConfig(id){return{...clone(initial),companyIds:[id]}}
function resumeTask(key){if(key!==state.session){stashSession();Object.assign(state,clone(state.sessions[key]));state.session=key}state.route='work'}
function openHubArtifact(id){const a=state.artifacts.find(a=>a.id===id);resumeTask(a.session);state.active=id}
function monthIndex(a){return a.end==='aug'?2:3}
function endName(a){return a.end==='aug'?'August':'September'}
function opScope(ids){return scopeName(ids)}
function render(){}function recordAgent(text){state.messages.push({role:'agent',text})}
`,c);
for(const [,name] of source.matchAll(/const ctBase\w+=(\w+);/g))if(!vm.runInContext(`typeof ${name}!=='undefined'`,c))c[name]=()=>'';
vm.runInContext(source,c);
const run=js=>vm.runInContext(js,c);
const plain=js=>JSON.parse(JSON.stringify(run(js)));
run(`ct.contexts=[{id:'H1',company:'northstar',kind:'hypothesis',text:'Capacity ahead of demand',version:1},{id:'A1',company:'northstar',kind:'assertion',text:'Sample rollout note',version:1},{id:'C1',company:'cedar',kind:'hypothesis',text:'Cedar-specific explanation',version:1}];ctTask('north');`);
const base=`{ids:['northstar','harbor','cedar'],start:0,end:3,focus:'total',format:'brief',action:'analyze',origin:'test',taskKey:'north'}`;
for(const q of ['Only Cedar, January to September 2026, report','只看 Cedar，十一月报告','Only Cedar, September 2030 report'])assert.ok(run(`ctInterpret(${JSON.stringify(q)},${base}).error`));
assert.deepEqual(plain(`ctInterpret('Exclude Northstar; prepare a September brief',${base}).plan.ids`),['harbor','cedar']);
assert.deepEqual(plain(`ctInterpret('Only Northstar and Cedar, August to September, Support comparison table',${base}).plan`).ids,['northstar','cedar']);
assert.equal(run(`ctInterpret('Only Northstar and Cedar, August to September, Support comparison table',${base}).plan.start`),2);
assert.match(run(`ctAnswer('Why did Cedar costs rise in August?',{ids:['northstar'],end:'sep'})`),/June–August: people cost \+10.0%/);
assert.match(run(`ctAnswer('Why did costs rise for all companies?',{ids:['northstar'],end:'sep'})`),/Harbor Labs/);
assert.match(run(`ctAnswer('Why did that change?',{ids:['cedar'],start:0,end:'jul'})`),/June–July: people cost \+4.0%/);
assert.match(run(`ctAnswer('Why did that change?',{ids:['northstar'],start:2,end:'sep'})`),/August–September: people cost \+0.8%/);
assert.equal(run(`ctWantsDeliverable('Create a report explaining why Cedar costs rose in August')`),true);
assert.equal(run(`ctInterpret('Create a report explaining why Cedar costs rose in August',{...${base},action:'request'}).plan.action`),'analyze');
run(`ctTask('north').excluded=['A1'];`);
assert.deepEqual(plain(`ctContextSnapshot(['northstar'],'north').map(c=>c.id)`),['H1']);
assert.doesNotMatch(run(`ctAnswer('Why did costs rise?',{ids:['northstar'],end:'sep',taskKey:'north'})`),/Sample rollout/);
run(`globalThis.plan={ids:['northstar'],start:2,end:3,focus:'support',format:'table',action:'analyze',issue:'northstar',taskKey:'north',origin:'snapshot'};globalThis.started=ctLaunch(plan,true);`);
assert.equal(run(`ctTask('north').status`),'running');
const frozen=plain(`ctTask('north').plan.contextSnapshot`);
run(`ct.contexts[0].text='New corrected hypothesis';ctPause('north');`);
assert.equal(run(`ctTask('north').status`),'paused');
run(`ctStart('north')`);
while(timers.size){const [id,fn]=timers.entries().next().value;timers.delete(id);fn()}
assert.equal(run(`ctTask('north').status`),'review');
assert.deepEqual(plain(`current().ctArtifact.context`),frozen);
assert.match(run(`ctArtifactHtml(current())`),/Support cost \+0.0% versus revenue \+8.6%/);
assert.doesNotMatch(run(`ctArtifactHtml(current())`),/Cedar-specific explanation/);
const output=run(`state.active`);run(`state.active=1;ctLaunch(plan,true)`);assert.equal(run(`state.active`),output);
assert.equal(run(`state.draft`),'preserve my draft');
run(`globalThis.link={company:'northstar',taskKey:'north',decisionId:'DEC1',caseNo:'014',findingId:'F-northstar',findingVersion:1,decisionSnapshot:{id:'DEC1',text:'Monitor'}};globalThis.rule={id:'linked',name:'Follow-up',companyIds:['northstar'],end:'aug',threshold:8,template:'scan',version:1,ctLink:link};globalThis.firstRun=makeRun(rule);`);
assert.equal(run(`firstRun.source`),'DEMO-AUG-2026-v1');
assert.equal(run(`firstRun.taskKey`),'north');
const old=plain(`firstRun`);run(`rule.end='sep';rule.version++;makeRun(rule)`);assert.deepEqual(plain(`firstRun`),old);
assert.match(run(`ops.runs[0].summary`),/13.0 pp to 5.0 pp/);
const count=run(`state.artifacts.length`);run(`rule.end='oct';globalThis.waiting=makeRun(rule)`);
assert.equal(run(`waiting.status`),'Waiting for data');assert.equal(run(`state.artifacts.length`),count);
assert.equal(run(`ctTask('north').status`),'waiting_data');
run(`ctStart('north')`);assert.equal(run(`ctTask('north').status`),'waiting_data');assert.equal(timers.size,0);
assert.match(run(`ctChallengeHtml('harbor',0,3)`),/September financial v1 remains approved/);
assert.match(run(`ctChallengeHtml('harbor',0,3)`),/higher workforce productivity is not established/);
assert.equal(run(`ctSourceRefs(['cedar'],3,2).length`),4);
assert.match(run(`ctSourceRefs(['cedar'],3,2)[0].publication`),/2026-08/);
run(`globalThis.manual={...plan,ids:['cedar'],issue:'cedar',origin:'manual-company-change',contextSnapshot:[{company:'northstar',id:'H1',version:1}],decisionIds:['DEC1']};ctLaunch(manual);`);
assert.deepEqual(plain(`current().ctArtifact.context.map(c=>c.company)`),['cedar']);
assert.deepEqual(plain(`current().ctPlan.decisionIds`),[null]);
const beforeReport=run(`state.artifacts.length`);
run(`runRequest('Create a report explaining why Cedar costs rose in August')`);
assert.equal(run(`state.artifacts.length`),beforeReport+1);
assert.equal(run(`current().format`),'report');
assert.equal(run(`current().ctPlan.end`),2);
assert.equal(run(`current().ctArtifact.kind`),'analysis');
run(`globalThis.savedBrief={id:77,version:0,value:{title:'August source brief'}};globalThis.briefPlan={ids:['cedar'],start:0,end:3,focus:'total',format:'brief',action:'analyze',origin:'brief-snapshot',source:savedBrief};ctLaunch(briefPlan);savedBrief.value.title='Later changed title';`);
assert.equal(run(`current().ctArtifact.sourceBrief.value.title`),'August source brief');
console.log('PASS: manual company changes; conversational period continuity; report intent; frozen source brief; plan validation; scope/period interpretation; company isolation; context exclusions; frozen background context; pause/resume; exact-result reopen; drafts; immutable linked runs; October waiting; qualified challenge; publication ranges.');
