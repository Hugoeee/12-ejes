const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const output=path.join(root,'dist');
fs.mkdirSync(output,{recursive:true});
for(const file of ['index.html','styles.css','core.js','data.js','app.js','favicon.svg'])fs.copyFileSync(path.join(root,file),path.join(output,file));
console.log('Build estático listo: dist/ (6 archivos, sin dependencias).');
