(function(root){
  'use strict';
  function score(questions, answers) {
    return Array.from({length:12},(_,axis)=>{
      const qs=questions.filter(q=>q.axis===axis && Number.isInteger(answers[q.id]) && Math.abs(answers[q.id])<=2);
      return qs.length ? Math.round(50+25*qs.reduce((s,q)=>s+answers[q.id]*q.direction,0)/qs.length) : null;
    });
  }
  function match(scores, profile, weights=Array(12).fill(1)) {
    const axes=scores.map((v,i)=>i).filter(i=>scores[i]!==null && profile.values[i]!==null && weights[i]>0);
    if(axes.length<3) return null;
    const total=axes.reduce((s,i)=>s+weights[i],0);
    const distance=axes.reduce((s,i)=>s+Math.abs(scores[i]-profile.values[i])*weights[i],0)/total;
    return {similarity:Math.round(100-distance),coverage:axes.length,axes};
  }
  function rank(scores, profiles, weights) {
    return profiles.map(profile=>({profile,...match(scores,profile,weights)})).filter(x=>x.similarity!==undefined).sort((a,b)=>b.similarity-a.similarity||b.coverage-a.coverage||a.profile.name.localeCompare(b.profile.name,'es'));
  }
  const api={score,match,rank};
  if(typeof module!=='undefined'&&module.exports) module.exports=api; else root.AxisCore=api;
})(typeof window!=='undefined'?window:globalThis);
