# España en 12 ejes · V2.1

Atlas exploratorio de ideas en España, preparado para GitHub y Vercel. Incluye 49 personalidades (40 históricas y 9 contemporáneas), 39 modelos ideológicos, 24 contextos históricos y un cuestionario de 16 dimensiones: los 12 ejes originales y 4 claves históricas. Versiones de 48 y 80 preguntas.

## Actualizar tu web en GitHub

1. Descomprime `espana-en-12-ejes-v2.zip` en tu ordenador.
2. Entra en tu repositorio `Hugoeee/12-ejes`. En la pantalla principal de archivos, pulsa **Add file → Upload files**.
3. Arrastra **los archivos de dentro de la carpeta**, directamente a la raíz del repositorio. No subas el ZIP ni una carpeta que los envuelva. Deben verse `package.json`, `build.cjs`, `data.js`, `app.js`, etc., en la misma pantalla.
4. GitHub actualizará los archivos que ya existían. Pon como mensaje `Actualizar atlas a versión 2.1` y pulsa **Commit changes**.
5. Vercel volverá a desplegar la rama conectada. Comprueba que el despliegue nuevo esté en **Ready** y abre tu dominio. Recarga la página si seguías viendo la versión anterior.

Los antiguos `scripts/build.cjs`, `tests/verify.cjs` y `vista-previa.html`, si siguen en tu repositorio, ya no son necesarios. No impiden la compilación de V2. El nuevo `package.json` utiliza `node build.cjs` y `node verify.cjs`, ambos en la raíz. Conserva los demás archivos propios de tu repositorio que no pertenezcan a esta app.

En Vercel: Framework **Other**, Build Command **npm run build**, Output Directory **dist** y Root Directory vacío. `vercel.json` declara estos valores. No necesita variables de entorno, base de datos ni claves API.

## Comprobar localmente

Con Node 20 o superior:

```sh
npm test
npm run build
```

No hay dependencias que instalar. Sirve la carpeta `dist` con un servidor estático de tu elección. Abrir el archivo HTML directamente permite consultar la web, pero el almacenamiento y las restricciones pueden variar según el navegador.

## Qué cambia

- Retratos de las 49 personalidades, con créditos, licencia, descripción del tipo de imagen y alternativas si no carga.
- Catálogos con búsqueda, filtros de época y familia, y páginas de 12 fichas.
- Resultados separados por corrientes, figuras históricas, contextos, política contemporánea y pensamiento económico.
- Fichas con diferencias por eje, datos ausentes, límites y fuentes.
- Cuatro dimensiones nuevas: pluralismo/autoritarismo, república/monarquía, propiedad colectiva/privada y gestión del trabajo.
- Ranking que tiene en cuenta la cobertura y los desacuerdos centrales, con fórmula publicada.
- Progreso local, pesos ajustables, revisión de respuestas y exportación SVG/JSON.
- Opción de desactivar imágenes externas y borrar los datos del navegador.

## Límites y fuentes

No es una enciclopedia completa ni un test validado. Los números son hipótesis editoriales aproximadas: las fuentes documentan contextos e ideas, pero no publican esas puntuaciones. Se muestran comparaciones exploratorias, no recomendaciones de voto ni respaldo a trayectorias políticas. Los perfiles actuales siguen basándose en documentos seleccionados, incluidos programas de 2023; no deben presentarse como datos actualizados de campaña de 2026.

Cada registro de `data.js` incluye un periodo, fuentes y límites. Las dimensiones actuales que no tienen una analogía histórica razonable quedan como `null`. El Reino de Asturias y el Toledo visigodo se tratan por separado. No se atribuyen ideas a los habitantes actuales de los lugares.

Los retratos se solicitan a Wikimedia Commons al abrir la página. No están empaquetados dentro del ZIP: necesitan conexión y pueden depender de la disponibilidad del proveedor. La app puede funcionar sin ellos. Cada ficha enlaza el archivo original y las condiciones de reutilización; las imágenes tienen sus propias licencias. Los retratos antiguos pueden ser representaciones posteriores o esculturas, y así se indica.

El progreso V1 no se migra: cambiar el cuestionario hace que las comparaciones antiguas no sean equivalentes. V2 guarda su propio progreso; el botón de borrado elimina ambas versiones del navegador.

## Ampliar el atlas

Añade registros en `data.js`: ID único, nombre, periodo, familia, descripción, 16 valores o `null`, fuentes con sus ejes, y limitaciones. No rellenes una postura desconocida con 50: 50 significa una posición intermedia; `null` significa falta de datos comparables. Para imágenes añade URL, autoría, fuente, licencia y el tipo de representación.

Pasa `npm test` y revisa la app antes de publicar. Para una publicación con pretensión académica o electoral, conviene revisar cada codificación con especialistas y documentos del periodo correspondiente.

## Corrección de imágenes y banderas en V2.1

Las imágenes utilizan miniaturas directas de `thumb.wikimedia.org` y una segunda ruta al archivo original en `upload.wikimedia.org`. Ambos dominios están permitidos en la política de seguridad. El problema anterior podía ocurrir cuando Commons redirigía a un dominio no autorizado. Los retratos siguen siendo externos: no están dentro del ZIP y su carga depende de Wikimedia. Si fallan ambas rutas se muestran iniciales y un aviso.

Se incluyen 11 diseños vectoriales de banderas y símbolos, integrados en `data.js`; no requieren subir una carpeta de imágenes y funcionan sin conexión. Se ven en las tarjetas y en las fichas, con fuente y contexto. Son dibujos esquemáticos y algunos omiten los escudos; no se ofrecen como reproducciones vexilológicas exactas. Se diferencia la rojigualda de 1873 de la tricolor de 1931 y la Cruz de la Victoria de una supuesta bandera del Reino de Asturias. Cuando no hay una enseña seleccionada no se inventa.

Sube también `vercel.json`: contiene la corrección necesaria para permitir las imágenes. Si en Privacidad desactivaste las imágenes externas, vuelve a activarlas. Después de que Vercel indique Ready, usa Ctrl+F5 para renovar la página.
