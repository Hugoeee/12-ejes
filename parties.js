(function(root){
'use strict';
const KEY='espana-partidos-v8';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const valid=v=>Number.isInteger(v)&&v>=-2&&v<=2;
const safeUrl=v=>{try{return new URL(v).protocol==='https:'?v:'';}catch{return '';}};
function usable(D,answers,party,ids){
 return D.questions.filter(q=>(!ids||ids.includes(q.id))&&valid(answers[q.id])&&valid(party.positions[q.id]?.value)&&D.sources[party.positions[q.id].source]);
}
function compare(D,answers,party,ids){
 const qs=usable(D,answers,party,ids),themes=[...new Set(qs.map(q=>q.theme))];
 if(qs.length<4||themes.length<3)return null;
 const items=qs.map(q=>({q,position:party.positions[q.id],answer:answers[q.id],distance:Math.abs(answers[q.id]-party.positions[q.id].value)/4}));
 // Each topic has equal weight; extra housing questions do not inflate its weight.
 const distances=themes.map(t=>{const rows=items.filter(x=>x.q.theme===t);return rows.reduce((s,x)=>s+x.distance,0)/rows.length;});
 return {similarity:Math.round(100*(1-distances.reduce((s,x)=>s+x,0)/themes.length)),coverage:qs.length,themes:themes.length,items};
}
function common(D,answers,parties){
 if(parties.length<2)return [];
 return D.questions.filter(q=>valid(answers[q.id])&&parties.every(p=>valid(p.positions[q.id]?.value)&&D.sources[p.positions[q.id].source])).map(q=>q.id);
}
function read(D,storage){
 const fresh={revision:D.revision,answers:{},index:0,completed:false};
 try{const s=JSON.parse(storage.getItem(KEY));if(s?.revision!==D.revision||!s.answers||typeof s.answers!=='object')return fresh;
 for(const q of D.questions)if(valid(s.answers[q.id]))fresh.answers[q.id]=s.answers[q.id];
 fresh.index=Math.max(0,Math.min(D.questions.length-1,Number.isInteger(s.index)?s.index:0));fresh.completed=s.completed===true;
 }catch{}return fresh;
}
const positionLabel=v=>v===0?'Posición intermedia codificada':v===2?'A favor':v===1?'Tendencia favorable':v===-1?'Tendencia contraria':'En contra';
const answerLabel=v=>({2:'Muy de acuerdo',1:'De acuerdo',0:'Ni de acuerdo ni en desacuerdo','-1':'En desacuerdo','-2':'Muy en desacuerdo'}[v]);
function sourceHtml(D,id){const s=D.sources[id];if(!s)return '';const url=safeUrl(s.url);return `<span class="source-meta">${esc(s.date)} · ${esc(s.scope)}</span>${url?`<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(s.title)} ↗</a>`:esc(s.title)}`;}
function evidence(D,p,answers){return `<details class="party-evidence"><summary>Posiciones, matices y fuentes de ${esc(p.name)}</summary><p>${esc(p.limits)}</p><p class="subtle">La intensidad es editorial: ±2 expresa una orientación clara y ±1 una tendencia. No son respuestas dadas por el partido ni una auditoría de todas sus actuaciones.</p><div class="party-evidence-list">${D.questions.map(q=>{const pos=p.positions[q.id];return `<article><h4>${esc(q.text)}</h4>${pos?`<p><b>${esc(positionLabel(pos.value))}</b> · ${esc(pos.kind)}</p><p>${esc(pos.note)}</p>${sourceHtml(D,pos.source)}`:'<p class="subtle">Sin posición codificada. No se interpreta como neutralidad ni como oposición.</p>'}${valid(answers[q.id])?`<p class="subtle">Tu respuesta: ${esc(answerLabel(answers[q.id]))}.</p>`:''}</article>`;}).join('')}</div></details>`;}
function create(D,storage){
 let state=read(D,storage),selected=D.parties.map(p=>p.id),mode='partial';
 const save=()=>{try{storage.setItem(KEY,JSON.stringify(state));}catch{}};
 const heading=(label,title,text)=>`<section class="page-heading"><p class="eyebrow">${label}</p><h1>${title}</h1><p class="lead">${text}</p></section>`;
 const notes=()=>`<div class="notice"><b>Comparación editorial y provisional.</b> Fuentes de 2023–2025 y páginas consultadas el ${esc(D.reviewed)}. No son programas de una nueva convocatoria. El porcentaje describe coincidencia en las propuestas comparables; no indica probabilidad de voto ni una recomendación electoral.</div>`;
 function intro(){return heading('PARTIDOS Y ACTUALIDAD','Medidas concretas. Coincidencias visibles.','30 afirmaciones sobre decisiones de la política española. La comparación con partidos se calcula aparte del atlas histórico.')+notes()+`<div class="actions"><button class="button" data-party-action="start">${Object.keys(state.answers).length?'Continuar cuestionario':'Responder actualidad'} →</button>${state.completed?'<button class="button secondary" data-party-action="results">Ver comparación guardada</button>':''}<a class="button secondary" href="#test">Test del atlas histórico</a></div><section class="prose"><h2>Qué se compara</h2><p>Hay doce bloques temáticos, sin una puntuación ideológica única por bloque. Admisión migratoria e integración cultural, o ayudas a comprar y límites al alquiler, se conservan como propuestas distintas.</p><p>Las omisiones no cuentan como neutralidad. Ninguna posición se deduce de la ausencia de una promesa. Las fuentes europeas, estatales y autonómicas tienen su ámbito visible.</p><h2>Los diez partidos</h2></section><div class="grid party-grid">${D.parties.slice().sort((a,b)=>a.name.localeCompare(b.name,'es')).map(p=>`<article class="card party-card" style="--accent:${esc(p.color)}"><div class="card-body"><p class="eyebrow">${Object.keys(p.positions).length} DE ${D.questions.length} PROPUESTAS CODIFICADAS</p><h2>${esc(p.name)}</h2><p>${esc(p.limits)}</p>${evidence(D,p,state.answers)}</div></article>`).join('')}</div><details class="question-bank"><summary>Leer todas las afirmaciones</summary><ol>${D.questions.map(q=>`<li><b>${esc(D.themes[q.theme])}:</b> ${esc(q.text)}<p class="subtle">${esc(q.context)}</p></li>`).join('')}</ol></details>`;}
 function quiz(){const q=D.questions[state.index],v=state.answers[q.id];return `<section class="test-panel"><div class="test-top"><a href="#partidos">← Guardar y salir</a><span>${state.index+1} / ${D.questions.length}</span></div><div class="progress" role="progressbar" aria-label="Avance de actualidad" aria-valuemin="0" aria-valuemax="${D.questions.length}" aria-valuenow="${state.index}"><span style="width:${state.index/D.questions.length*100}%"></span></div><p class="eyebrow">ACTUALIDAD · ${esc(D.themes[q.theme])}</p><h1>${esc(q.text)}</h1><div class="answers">${[2,1,0,-1,-2].map(n=>`<button class="answer ${v===n?'selected':''}" data-party-answer="${n}" aria-pressed="${v===n}"><span>${esc(answerLabel(n))}</span><i aria-hidden="true">${v===n?'●':'○'}</i></button>`).join('')}</div><div class="question-actions"><button class="text-button" data-party-action="back" ${state.index===0?'disabled':''}>← Anterior</button><button class="text-button" data-party-action="skip">No sé / omitir</button><button class="button" data-party-action="next" ${v===undefined?'disabled':''}>${state.index===D.questions.length-1?'Ver coincidencias':'Siguiente'} →</button></div><details class="question-help"><summary>Contexto del enunciado</summary><p>${esc(q.context)}</p><p>No hay respuestas correctas. Las cinco opciones expresan tu grado de acuerdo con esta propuesta.</p></details><p class="subtle">Cálculo local. Las posiciones de los partidos se muestran al terminar para no anticipar una etiqueta durante las preguntas.</p></section>`;}
 function results(){
 const parties=D.parties.filter(p=>selected.includes(p.id)),ids=common(D,state.answers,parties),answered=Object.keys(state.answers).length;
 const rows=parties.slice().sort((a,b)=>a.name.localeCompare(b.name,'es')).map(p=>({p,m:compare(D,state.answers,p,mode==='common'?ids:undefined)}));
 return heading('COINCIDENCIAS CON PARTIDOS','Tu comparación de propuestas.',`${answered} respuestas con datos de ${D.questions.length}. Los partidos aparecen por orden alfabético, sin una recomendación de voto.`)+notes()+`<div class="actions"><button class="button secondary" data-party-action="review">Revisar respuestas</button><button class="button secondary" data-party-action="export">Descargar comparación JSON ↓</button><button class="text-button" data-party-action="clear">Borrar estas respuestas</button></div><section class="party-comparison-controls"><h2>Elige qué comparar</h2><div class="era-chips">${D.parties.map(p=>`<button data-party-select="${esc(p.id)}" aria-pressed="${selected.includes(p.id)}">${esc(p.name)}</button>`).join('')}</div><div class="actions"><button class="button secondary" data-party-mode="partial" aria-pressed="${mode==='partial'}">Temas disponibles de cada partido</button><button class="button secondary" data-party-mode="common" aria-pressed="${mode==='common'}">Mismas preguntas para los seleccionados</button></div><p class="notice">${mode==='partial'?'La cobertura varía entre partidos: estos porcentajes no forman una clasificación comparable. Consulta qué preguntas entran en cada cálculo.':`${ids.length} preguntas tienen respuesta y posición codificada para todos los partidos seleccionados. Solo se muestran porcentajes con al menos 4 preguntas y 3 bloques comunes.`}</p></section><div class="grid party-grid">${rows.map(({p,m})=>`<article class="card party-card" style="--accent:${esc(p.color)}"><div class="card-body"><p class="eyebrow">${mode==='common'?'BASE COMÚN':'COMPARACIÓN PARCIAL'}</p><h2>${esc(p.name)}</h2>${m?`<p class="party-score"><b>${m.similarity}%</b> de coincidencia</p><p>${m.coverage} preguntas · ${m.themes} bloques · ${answered} respuestas disponibles</p><div class="affinity-track"><i style="width:${m.similarity}%"></i></div><details><summary>Qué entra en este porcentaje</summary><ul>${m.items.map(x=>`<li>${esc(x.q.text)}<p class="subtle">Tú: ${esc(answerLabel(x.answer))} · Partido: ${esc(positionLabel(x.position.value))}.</p></li>`).join('')}</ul></details>`:'<p class="notice">Información insuficiente para calcular: hacen falta 4 preguntas comparables de al menos 3 bloques.</p>'}${evidence(D,p,state.answers)}</div></article>`).join('')}</div><details class="question-bank"><summary>Fórmula y límites del resultado</summary><p>Las respuestas y posiciones van de −2 a +2. Para cada pregunta, distancia = |respuesta − posición| / 4. Se promedia primero dentro de cada bloque y después entre bloques: coincidencia = 100 × (1 − distancia media). Así, tener más preguntas de vivienda no le da más peso que a otro bloque.</p><p>El modo de base común usa exactamente las mismas preguntas para todos los seleccionados. El modo parcial calcula cada partido con su propia cobertura y no permite establecer un ranking justo.</p><p>Una respuesta neutral puede estar cerca de una posición matizada. Un 100% solo significa coincidencia en las propuestas incluidas, no acuerdo con todo un programa. Las posiciones requieren actualización y revisión editorial independiente; no hay validación psicométrica.</p></details>`;
 }
 function action(d){
  if(d.partyAnswer!==undefined){const v=Number(d.partyAnswer);if(valid(v)){state.answers[D.questions[state.index].id]=v;save();}return 'quiz';}
  if(d.partySelect){if(!D.parties.some(p=>p.id===d.partySelect))return 'results';selected=selected.includes(d.partySelect)?selected.filter(id=>id!==d.partySelect):[...selected,d.partySelect];return 'results';}
  if(d.partyMode){if(['partial','common'].includes(d.partyMode))mode=d.partyMode;return 'results';}
  switch(d.partyAction){
   case 'start':state.completed=false;save();return 'quiz';
   case 'results':return 'results';
   case 'review':state.index=0;state.completed=false;save();return 'quiz';
   case 'back':state.index=Math.max(0,state.index-1);save();return 'quiz';
   case 'skip':delete state.answers[D.questions[state.index].id];break;
   case 'next':if(!valid(state.answers[D.questions[state.index].id]))return 'quiz';break;
   case 'clear':clear();return 'intro';
   case 'export':return 'export';
   default:return 'intro';
  }
  if(state.index===D.questions.length-1){state.completed=true;save();return 'results';}state.index++;save();return 'quiz';
 }
 function clear(){state={revision:D.revision,answers:{},index:0,completed:false};selected=D.parties.map(p=>p.id);mode='partial';try{storage.removeItem(KEY);}catch{}}
 function report(){return {version:D.version,revision:D.revision,reviewed:D.reviewed,formula:'100 × (1 − media entre bloques de medias de |respuesta − posición| / 4)',mode,selected,answers:{...state.answers},comparison:D.parties.filter(p=>selected.includes(p.id)).map(p=>({id:p.id,name:p.name,result:compare(D,state.answers,p,mode==='common'?common(D,state.answers,D.parties.filter(p=>selected.includes(p.id))):undefined)})),sources:D.sources,notice:'Comparación editorial, no recomendación electoral. Incluye respuestas políticas individuales; comparte solo si quieres hacerlo.'};}
 return {intro,quiz,results,action,clear,report};
}
const api={KEY,compare,common,read,create,esc,safeUrl};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.AxisParties=api;
})(typeof window!=='undefined'?window:globalThis);
