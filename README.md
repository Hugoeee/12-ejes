# España en 12 ejes · Atlas 3.0

85 personalidades, 61 modelos de corrientes y 42 contextos históricos. Test de 48 u 80 preguntas en 16 dimensiones. 18 representaciones de banderas y símbolos, con fuentes y advertencias de alcance.

## Actualizar GitHub y Vercel

1. Descomprime el ZIP.
2. Abre `https://github.com/Hugoeee/12-ejes`, en la pantalla principal de archivos.
3. Pulsa **Add file → Upload files** y arrastra **los 12 archivos de dentro**, directamente a la raíz del repositorio. No arrastres el ZIP ni una carpeta que envuelva los archivos.
4. Reemplaza los archivos existentes, incluido `vercel.json`, y confirma con **Commit changes** en la rama conectada a Vercel.
5. Espera a que el despliegue nuevo muestre **Ready**. La descarga de retratos puede prolongar el build. Después abre tu web y pulsa **Ctrl+F5**.
6. Comprueba que abajo aparezca **V3.0**. En **Diagnóstico de imágenes** verás la cobertura de retratos del despliegue. En **Banderas** verás las 18 representaciones integradas.

El nuevo archivo `media.js` es obligatorio. Si no se sube, el respaldo que resuelve retratos no estará disponible. Los archivos `build.cjs`, `package.json`, `app.js`, `media.js`, `data.js` y `vercel.json` deben quedar al mismo nivel.

Las carpetas antiguas `scripts` y `tests` y `vista-previa.html` ya no se utilizan; no hace falta borrarlas para que funcione esta versión. Conserva otros archivos propios que no formen parte de esta app.

En Vercel: Framework **Other**, Build Command **npm run build**, Output Directory **dist**, Root Directory vacío. No necesita claves, base de datos ni cuentas de visitantes.

## Imágenes: qué cambia y qué no está verificado

Antes se calculaban rutas directas a miniaturas y el navegador dependía de ellas. Ahora el build consulta las APIs públicas de Wikipedia/Commons para obtener los nombres canónicos y las atribuciones. Las consultas se agrupan para reducir peticiones. Descarga los retratos disponibles, comprueba tipo de contenido y firma de imagen y los coloca en `dist/portraits`. Se sirven desde la propia web cuando la descarga tiene éxito. La extensión corresponde al tipo descargado.

Si una descarga falla, se conserva una ruta externa o se deja para resolución en el navegador. El navegador prueba el respaldo y, si hace falta, consulta metadatos públicos para recuperar la ruta. Si todo falla, se muestran iniciales y un aviso. No se inventan retratos ni se sustituyen por imágenes generadas.

**No se garantiza que todas las imágenes se puedan obtener.** La disponibilidad, los límites de Wikimedia y las restricciones de conexión pueden impedirlo. En esta preparación no ha sido posible verificar descargas reales de los 85 retratos. Las pruebas de descarga y caché utilizan respuestas simuladas; la disponibilidad real deberá comprobarse en el despliegue de Vercel.

El informe se publica en `/media-status.json` y se resume en **Diagnóstico de imágenes**. No contiene respuestas de visitantes. El número de archivos descargados no certifica que todas las imágenes se hayan cargado en cada navegador.

Los retratos externos y sus consultas de metadatos envían los datos técnicos habituales a Wikipedia/Commons, sin enviar las respuestas del test. Las imágenes externas se pueden desactivar en Privacidad. El guardado del test permanece local.

## Banderas y símbolos

Los diseños están dentro de `data.js`: no hay que subir una carpeta de banderas y funcionan sin conexión. Incluyen rojigualda, tricolor republicana, bandera roja cantonal, rojinegra, bandera negra, ikurriña, senyera, blanquiverde, bandera gallega, aspa de Borgoña y símbolos de referencia de Castilla, Asturias, omeyas, carlismo, cristianismo y falangismo.

Son dibujos esquemáticos, algunos sin escudo. Las fichas indican si la referencia es posterior a su época, un símbolo editorial o una bandera de movimiento. La Cruz de la Victoria de 908 no se presenta como una bandera documentada de Pelayo. La Primera República no recibe la tricolor de 1931. Una corriente que no tenga una bandera única documentada muestra esa limitación.

## Contenido y límites

Las incorporaciones incluyen, entre otras figuras, Abderramán III, Averroes, Juan de Mariana, Francisco Suárez, Juan Luis Vives, Juan de Padilla, María Pacheco, Espartero, Prim, Salmerón, Donoso Cortés, Balmes, Giner de los Ríos, Andreu Nin, Carmen de Burgos, María Lejárraga, Castelao y Tierno Galván.

Nuevos contextos: Córdoba califal, Tordesillas y Villalar, Germanías de Valencia y Mallorca, Barcelona austracista, Nueva Planta valenciana, Escuela Moderna, Irmandades da Fala, Asturias de 1934, Gernika de 1936, Ronda de 1918 y carlismo autogestionario, entre otros.

Este sigue siendo un catálogo selectivo y ampliable, no una enciclopedia completa ni un test validado. Las nuevas codificaciones son provisionales y necesitan revisión especializada. Las fuentes explican ideas y contextos: no publican estos números. Las dimensiones sin una comparación razonable quedan sin datos. Algunas figuras culturales, como Averroes, se consultan sin producir una afinidad numérica.

Las comparaciones no recomiendan voto ni respaldan actuaciones. Los documentos contemporáneos seleccionados, incluidos programas de 2023, no equivalen a posiciones actualizadas de campaña de 2026.

## Verificar localmente

Con Node 20 o superior:

```sh
npm test
npm run build
```

No hay dependencias que instalar. `npm run build` hace peticiones públicas para descargar imágenes. Para validar solo el empaquetado en un entorno sin conexión se puede usar `SKIP_MEDIA_DOWNLOAD=1`; el informe reflejará que las descargas se han omitido. No configures esa opción en Vercel si quieres descargar retratos.

Las pruebas verifican el cálculo, los dos flujos del test, filtros, borrado, exportaciones, simbología y errores de red, atribución y caché mediante respuestas simuladas. No sustituyen la revisión visual en navegador ni la comprobación real de Wikimedia.

## Ampliar

Edita `data.js` manteniendo IDs únicos, 16 valores o `null`, periodos, fuentes y límites. 50 significa posición intermedia; `null` significa falta de datos. Para un nuevo retrato aporta un `wikiTitle` correcto o un archivo de Commons identificado. Las licencias de las imágenes son independientes de la aplicación.
