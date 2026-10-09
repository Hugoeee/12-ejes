const assert=require('node:assert/strict');
const vm=require('node:vm');
const fs=require('node:fs');
const path=require('node:path');
const C=require('../core.js');
const root=path.resolve(__dirname,'..');
const dataCtx={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'data.js'),'utf8'),dataCtx);const D=dataCtx.window.AXIS_DATA;
let passed=0;function test(label,fn){fn();passed++;console.log('✓ '+label)}
const qs=[{id:'a',axis:0,direction:1},{id:'b',axis:0,direction:-1},{id:'c',axis:1,direction:1}];
test('Extremos y dirección inversa',()=>{assert.equal(C.score(qs,{a:2,b:-2})[0],100);assert.equal(C.score(qs,{a:-2,b:2})[0],0)});
test('Neutralidad y omisiones son distintas',()=>{assert.equal(C.score(qs,{a:0})[0],50);assert.equal(C.score(qs,{})[0],null);assert.equal(C.score(qs,{a:2})[0],100)});
test('Respuestas fuera de rango se ignoran',()=>assert.equal(C.score(qs,{a:7,b:'2'})[0],null));
test('Afinidad exacta, opuesta y ponderada',()=>{const values=Array(12).fill(null);values.splice(0,3,0,50,100);const p={values};assert.equal(C.match(values,p).similarity,100);const s=values.slice();s.splice(0,3,100,50,0);assert.equal(C.match(s,p).similarity,33);assert.equal(C.match(s,p,[1,3,1,...Array(9).fill(1)]).similarity,60)});
test('No compara menos de tres ejes ni pesos cero',()=>{assert.equal(C.match(Array(12).fill(50),{values:[0,0,...Array(10).fill(null)]}),null);assert.equal(C.match(Array(12).fill(50),{values:Array(12).fill(50)},Array(12).fill(0)),null)});
test('Banco completo y equilibrado',()=>{assert.equal(D.axes.length,12);assert.equal(D.bank.flat().length,60);D.bank.forEach(b=>{assert.equal(b.length,5);assert.ok(b.slice(0,3).some(q=>q[1]===1));assert.ok(b.slice(0,3).some(q=>q[1]===-1));b.forEach(q=>assert.ok([-1,1].includes(q[1])))})});
test('Perfiles y fuentes válidos; cada eje puntuado tiene fuente',()=>{assert.equal(new Set(D.profiles.map(p=>p.id)).size,D.profiles.length);D.profiles.forEach(p=>{assert.equal(p.values.length,12);p.values.forEach((v,i)=>{assert.ok(v===null||(Number.isInteger(v)&&v>=0&&v<=100));if(v!==null)assert.ok(p.sources.some(s=>s.axes.includes(i)),p.id+' sin fuente para '+i)});p.sources.forEach(s=>assert.equal(new URL(s.url).protocol,'https:'))})});
function appHarness(storage=new Map()){
 const listeners={},elements={},downloads=[];let hash='#inicio';
 const el=key=>elements[key]??=( {innerHTML:'',style:{},textContent:'',open:false,focus(){},querySelector(){return {focus(){}}},showModal(){this.open=true},close(){this.open=false},addEventListener(){},remove(){},click(){if(this.download)downloads.push(this.download)}} );
 const location={get hash(){return hash},set hash(v){hash=v;listeners.hashchange?.({})}};
 const doc={querySelector:el,querySelectorAll:()=>[],addEventListener:(type,fn)=>listeners[type]=fn,createElement:()=>el('anchor'),body:{appendChild(){}}};
 const localStorage={getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v),removeItem:k=>storage.delete(k)};
 const window={AXIS_DATA:D,AxisCore:C,scrollTo(){},addEventListener:(type,fn)=>listeners[type]=fn};
 const context={window,document:doc,location,localStorage,setTimeout:()=>1,clearTimeout(){},URL:{createObjectURL:()=> 'blob:test',revokeObjectURL(){}},Blob};
 vm.runInNewContext(fs.readFileSync(path.join(root,'app.js'),'utf8'),context);
 const click=dataset=>listeners.click({target:{closest:()=>({dataset})}});
 return {click,route:v=>{location.hash=v},html:()=>el('main').innerHTML,storage,downloads,doc,el};
}
test('Flujo breve de principio a fin y descarga',()=>{const a=appHarness();a.route('#test');a.click({start:'short'});for(let i=0;i<36;i++){a.click({answer:'0'});a.click({action:'next'})}assert.match(a.html(),/Mayor afinidad política estimada/);const stored=JSON.parse([...a.storage.values()][0]);assert.equal(stored.completed,true);assert.equal(Object.keys(stored.answers).length,36);a.click({action:'download'});a.click({action:'json'});assert.deepEqual(a.downloads,['mis-coordenadas.svg','mis-coordenadas.json'])});
test('Reanuda el progreso, permite volver y borrarlo',()=>{const a=appHarness();a.click({start:'full'});a.click({answer:'2'});a.click({action:'next'});const b=appHarness(a.storage);b.route('#test');assert.match(b.html(),/1 de 60/);b.click({action:'resume'});assert.match(b.html(),/2 \/ 60/);b.click({action:'back'});assert.match(b.html(),/aria-pressed="true"/);b.route('#privacidad');b.click({action:'clear'});assert.equal(b.storage.size,0)});
test('Flujo completo con todas las omisiones no inventa afinidad',()=>{const a=appHarness();a.click({start:'full'});for(let i=0;i<60;i++)a.click({action:'skip'});assert.match(a.html(),/Aún faltan coordenadas/);assert.match(a.html(),/0 ejes con datos/)});
test('Búsqueda, catálogo y ficha de fuentes',()=>{const a=appHarness();a.route('#catalogo');assert.match(a.el('#catalog-grid').innerHTML,/Pedro Sánchez/);a.click({detail:'rallo'});assert.equal(a.el('#detail').open,true);assert.match(a.el('#detail-content').innerHTML,/juanramonrallo.com/)});
test('Datos dañados no rompen la aplicación',()=>{const a=appHarness(new Map([['espana-12-ejes-v1','{'] ]));a.route('#preguntas');assert.match(a.html(),/Versión breve/)});
console.log(`${passed} comprobaciones superadas. La simulación DOM no sustituye una revisión visual en navegador.`);
