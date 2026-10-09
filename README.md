# España en 12 ejes · Atlas 7.0

Versión independiente centrada en España: 150 personalidades, 61 corrientes, 42 lugares y proyectos históricos, 18 representaciones de banderas y símbolos. Doce dimensiones contemporáneas y cuatro claves históricas. Catálogo selectivo, sin validación psicométrica.

## Actualizar GitHub y Vercel

1. Descomprime el ZIP.
2. Abre `https://github.com/Hugoeee/12-ejes` en la pantalla principal de archivos.
3. Abre la carpeta **`subida-1`** del paquete. En GitHub pulsa **Add file → Upload files** y arrastra **su contenido**: 15 archivos y las carpetas `fonts` y `portraits`. No arrastres la carpeta `subida-1` ni el ZIP.
4. Pulsa **Commit changes**. Después repite **Add file → Upload files** desde la raíz del repositorio y arrastra **la carpeta `portraits` que está dentro de `subida-2`**. Confirma de nuevo. Se incorporan los retratos restantes a la misma carpeta, sin eliminar los anteriores.
5. En Vercel usa Framework **Other**, Build Command **npm run build**, Output Directory **dist** y Root Directory vacío. No se necesitan claves ni un servidor adicional.
6. Espera al estado **Ready**, abre la web y pulsa **Ctrl+F5**. El pie debe mostrar **V7.0**.

El paquete está dividido en dos tandas porque GitHub permite subir un máximo de 100 archivos a la vez mediante el navegador (https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository). `subida-1` contiene 93 archivos y `subida-2`, 70. Son carpetas de entrega: **no deben aparecer como carpetas del repositorio**. Si utilizas Git en tu ordenador, combina el contenido de ambas en la raíz del proyecto.

El nuevo `atlas.js` es obligatorio. También lo son `poster.js`, `media.js`, `data.js`, `core.js`, `app.js` y las carpetas `fonts` y `portraits`. Los archivos de configuración deben quedar al mismo nivel. No hace falta borrar otros archivos propios ni las carpetas antiguas `scripts` y `tests`: no forman parte de este build.

## Qué incorpora esta versión

- Portada con ejemplos, coordenadas editoriales, guía de ejes, familias de ideas y tres formatos.
- Tests de **48, 80 o 240 preguntas originales en español**, con 3, 5 o 15 propuestas por dimensión. Neutral es una respuesta; omitir no aporta datos. Los formatos no reproducen los enunciados del proyecto de referencia.
- Reanudación local, botón anterior, contexto de cada eje, avance automático opcional y tema claro/oscuro.
- Resultado con navegación por nueve secciones: coordenadas, lectura del perfil, lugares, personalidades, ámbitos, lecturas, corrientes, mapa y comparador.
- Comparador con selección y búsqueda de cualquier ficha. Muestra distancia por eje, cobertura, valores ausentes y ejes excluidos.
- Cinco decisiones opcionales de prioridad que ajustan pesos. No cambian las respuestas ni las coordenadas obtenidas.
- Filtro que oculta determinados modelos de doctrina confesional. No infiere la fe del visitante ni la de las personas del catálogo.
- Carta SVG y PNG, enlace compartible, informe imprimible para guardar como PDF y descarga JSON del resultado o del catálogo.
- Catálogos con filtros, ordenación, chips por época y una tira visual de dieciséis coordenadas. Se puede filtrar por fichas numéricas provisionales o biográficas.
- **258 páginas estáticas además de la portada**: tres catálogos, 253 fichas y dos páginas de consulta. Incluyen metadatos, enlaces individuales, créditos y un sitemap.

Las páginas se generan en `dist/personalidades/<id>/`, `dist/ideologias/<id>/` y `dist/lugares/<id>/`. Las rutas de scripts, estilos y retratos locales son absolutas para que también funcionen al entrar directamente en una ficha. `PUBLIC_SITE_URL`, si se configura, cambia el dominio usado para el sitemap y las URL canónicas; por defecto es `https://12-ejes.vercel.app`.

## Cartas, informe y enlaces

**Descargar carta SVG** genera una carta vectorial. **Descargar carta PNG** la convierte a una imagen de 1080 píxeles de ancho; la altura puede aumentar para alojar créditos. Los retratos se incorporan cuando el navegador puede obtenerlos. Si fallan, se usan iniciales y un aviso. La preferencia de desactivar imágenes se respeta.

**Informe para PDF** abre una vista con coordenadas, afinidades, periodos, límites y referencias. Pulsa **Imprimir / Guardar como PDF** y elige «Guardar como PDF» en el navegador. No es un servicio de generación de PDF en el servidor.

**Compartir enlace** genera una URL con dieciséis coordenadas y sus pesos. No contiene las respuestas individuales ni identidad; quien reciba el enlace podrá leer sus posiciones políticas. Abrir un resultado compartido no reemplaza el test local guardado. No hay publicación automática del resultado ni analítica.

Los resultados V2–V6 siguen siendo compatibles. El test y las preferencias se guardan únicamente en este navegador. El modo privado o el borrado de datos pueden eliminarlos.

## Datos y método

Las puntuaciones de las fichas son **estimaciones editoriales provisionales**, no números publicados por sus fuentes. No se afirma que las personalidades hayan respondido a las 240 preguntas. Los formatos más largos amplían las respuestas del visitante; no convierten en verificadas las codificaciones históricas existentes.

La cercanía usa la distancia absoluta ponderada en dimensiones compartidas. Se requieren al menos tres. El orden descuenta poca cobertura y desacuerdos centrales. El mapa utiliza Economía y Legitimidad del poder; no resume los otros catorce ejes. La frecuencia de una posición se calcula sobre las fichas puntuadas disponibles, no sobre una muestra de población española.

Las 44 incorporaciones de V6 siguen siendo fichas biográficas sin afinidad numérica mientras falte documentación suficiente. No se deducen posturas de la profesión, el patrimonio o el prestigio. Los datos ausentes permanecen como `null`; no se sustituyen por 50. Trajano y otras figuras de Hispania no reciben una nacionalidad española moderna.

Cada personalidad contiene `sources`, `reading`, `documentation`, `evidence` y `researchPriorities`. `evidence.sourceIndexes` señala referencias editoriales por dimensión; no prueba que un pasaje respalde un número exacto. `documentation.updated` fecha la organización de metadatos y no certifica una revisión completa. Antes de añadir puntuaciones se debe localizar el pasaje, fijar fecha y contexto, contrastar fuentes y justificar la codificación.

Los lugares representan proyectos y periodos, no los habitantes actuales de una ciudad. Asturias medieval y Toledo visigodo tienen fichas diferentes. La Primera República no recibe la tricolor de 1931. Las banderas son representaciones esquemáticas y se señala si el símbolo es posterior a su época. No se asignan por profesión o lugar de nacimiento.

Las lecturas proceden de bibliografía enlazada del catálogo. No implican un aval de los autores ni una recomendación comercial. Los programas contemporáneos seleccionados, incluidos los de 2023, no se presentan como programas vigentes de campaña de 2026.

## Imágenes y licencias

**Se incluyen 141 archivos de imagen descargados realmente**, con su metadata de atribución y licencia en `portraits/manifest.json`. El build los valida y reutiliza sin tener que descargarlos de nuevo. Nueve fichas siguen pendientes: Amancio Ortega, QuantumFracture, Isabel II, Felipe VI, Miguel Anxo Bastos, Juan Velarde, Julio Segura, Fernando Trías de Bes y Rosalía Mera. No se sustituyen por fotografías de edificios, firmas, homónimos o imágenes inventadas.

Los retratos proceden de archivos públicos con licencia propia en Wikimedia, cuando pueden resolverse; no se han copiado del repositorio de referencia. El build consulta Wikipedia/Commons, resuelve el archivo canónico y la atribución, verifica MIME y firma, descarga las imágenes disponibles y publica el informe `media-status.json`. La caché reutiliza únicamente archivos válidos.

Si la descarga falla, se utiliza una ruta externa o una consulta de respaldo en el navegador. Si todas fallan se muestran iniciales y un aviso. No se inventan retratos. **Se comprobó la descarga y validez de los 141 archivos incluidos. Los nueve restantes dependen de resolución externa.** No se ha contrastado manualmente la identidad y el encuadre de todas las imágenes en navegador; consulta el archivo original de cada retrato. La pantalla **Diagnóstico de imágenes** permite comprobar la cobertura en Vercel. Las pruebas de red utilizan respuestas simuladas.

Las imágenes externas reciben los datos técnicos habituales de una petición de red; no reciben las respuestas del test. Se pueden desactivar en Privacidad. Banderas y fuentes tipográficas funcionan localmente: las cuatro WOFF2 incluyen sus dos licencias SIL Open Font License en `fonts`.

## Referencia y diferencias

Se revisaron el repositorio `RomanCypherpunk/12axes`, sus pantallas, catálogos, generadores de fichas y documentación. Su licencia reserva los derechos y no permite redistribuir una copia o traducción sin autorización escrita. Esta entrega no contiene su código, preguntas, textos, vectores, imágenes ni API. No es una reproducción al 100%.

Consulta **COMPARACION.md** para ver qué funciones se adaptaron y qué diferencias permanecen. La interfaz, los datos y el cálculo se implementan de forma independiente. No hay afiliación con 12 Axes.

## Verificar

Con Node 20 o superior, sin instalar dependencias:

```sh
npm test
npm run build
```

El build normal descarga imágenes. En un entorno sin conexión se puede verificar el empaquetado mediante:

```sh
SKIP_MEDIA_DOWNLOAD=1 npm run build
```

No configures esa opción en Vercel si quieres descargar retratos.

Se verifican 45 casos, incluidos los tres formatos, omisiones, pesos, reanudación, filtros, comparador, prioridades, enlaces válidos e inválidos, informe, temas, marcado de todas las fichas, generación de páginas, imágenes y caché simuladas, más la validez de los 141 archivos incluidos, exportaciones y privacidad. No se ha realizado una revisión visual en navegador real La disponibilidad de las nueve imágenes pendientes no está confirmada.
