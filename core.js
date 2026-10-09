(function(root){
'use strict';
function score(questions,answers,count=16){return Array.from({length:count},(_,axis)=>{const qs=questions.filter(q=>q.axis===axis&&Number.isInteger(answers[q.id])&&Math.abs(answers[q.id])<=2);return qs.length?Math.round(50+25*qs.reduce((s,q)=>s+answers[q.id]*q.direction,0)/qs.length):null;});}
function match(scores,profile,weights=scores.map(()=>1)){
 const answered=scores.map((v,i)=>i).filter(i=>Number.isFinite(scores[i])&&weights[i]>0);
 const axes=answered.filter(i=>Number.isFinite(profile.values[i]));
 if(axes.length<3)return null;
 const total=axes.reduce((s,i)=>s+weights[i],0),possible=answered.reduce((s,i)=>s+weights[i],0);
 const similarity=100-axes.reduce((s,i)=>s+Math.abs(scores[i]-profile.values[i])*weights[i],0)/total;
 const conflicts=(profile.core||[]).filter(i=>axes.includes(i)&&Math.abs(scores[i]-profile.values[i])>=55);
 // Ranking discounts sparse comparisons and large conflicts on core historical dimensions.
 const ranking=similarity*Math.sqrt(total/possible)-conflicts.length*8;
 return {similarity:Math.round(similarity),ranking,coverage:axes.length,available:answered.length,axes,conflicts};
}
function rank(scores,profiles,weights){return profiles.map(profile=>{const m=match(scores,profile,weights);return m?{profile,...m}:null;}).filter(Boolean).sort((a,b)=>b.ranking-a.ranking||b.coverage-a.coverage||a.profile.name.localeCompare(b.profile.name,'es'));}
function questions(bank,mode){const n=mode==='extreme'?15:mode==='full'?5:3;return Array.from({length:n},(_,j)=>bank.map((b,axis)=>({id:`${axis}-${j}`,axis,text:b[j][0],direction:b[j][1]}))).flat();}
const api={score,match,rank,questions};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.AxisCore=api;
})(typeof window!=='undefined'?window:globalThis);
