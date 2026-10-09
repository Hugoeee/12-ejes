# España en 12 ejes

Aplicación estática original, en español, inspirada en el concepto de 12 Axes. Preparada para Vercel, sin dependencias de producción ni backend.

## Qué incluye

- Tests de 36 y 60 preguntas originales, repartidas entre 12 dimensiones.
- Seis figuras políticas: Pedro Sánchez, Alberto Núñez Feijóo, Santiago Abascal, Yolanda Díaz, Gabriel Rufián y Aitor Esteban.
- Tres economistas: Juan Ramón Rallo, Juan Torres López y Daniel Lacalle.
- Catálogo con búsqueda, filtros, posiciones editoriales, cobertura y enlaces a fuentes.
- Comparación por ejes, ajuste de prioridades, guardado local y borrado de datos.
- Descarga de tarjeta SVG y exportación JSON. No se comparten automáticamente.
- Diseño adaptable a móvil, navegación por teclado y respeto a movimiento reducido.

## Desplegar en Vercel

1. Descomprime el proyecto y sube el contenido de esta carpeta a un repositorio de GitHub.
2. En Vercel, crea un proyecto e importa ese repositorio.
3. Si el repositorio contiene otras carpetas, selecciona `espana-en-12-ejes` como Root Directory.
4. Vercel lee `vercel.json`: Framework **Other**, Build Command **npm run build**, Output Directory **dist**. No necesita variables de entorno.
5. Pulsa Deploy. La aplicación usa rutas con hash, así que no requiere redirecciones SPA.

También puedes desplegar con la CLI oficial de Vercel desde esta carpeta, en un entorno donde ya tengas sesión iniciada: `vercel --prod`.

## Abrir y comprobar

Abre `index.html` directamente para una prueba local, o usa cualquier servidor estático. El almacenamiento local puede comportarse de forma distinta con `file://`; para producción utiliza HTTPS.

Con Node 20 o superior:

```sh
npm test
npm run build
```

El build copia seis archivos a `dist/`. No necesita descargar paquetes. Las comprobaciones cubren los cálculos, integridad de datos y flujos del test mediante un DOM simulado; no sustituyen las pruebas visuales y de accesibilidad en un navegador real.

## Archivos que editar

| Archivo | Contenido |
| --- | --- |
| `data.js` | Ejes, preguntas, perfiles y fuentes |
| `core.js` | Fórmula de puntuación y afinidad |
| `app.js` | Pantallas, interacciones y exportaciones |
| `styles.css` | Diseño y adaptación a móvil |
| `vercel.json` | Build, carpeta publicada y cabeceras |

## Estado editorial: prototipo, no comparador electoral validado

Fecha de revisión: 9 de octubre de 2026. La fecha electoral del 29 de noviembre de 2026 se enlaza a la nota del INE. El catálogo no es una lista oficial de candidaturas.

Los programas políticos usados son de **2023**, y varios textos sociales son anteriores. Cada puntuación es una interpretación editorial, no un dato numérico publicado por la fuente. Los programas de partido se usan como aproximación a una figura individual: no implican que esa persona haya respondido el test. No hay aprobación o colaboración de las figuras citadas.

Los ejes sin evidencia seleccionada se dejan en `null`, nunca en 50. Se requieren tres ejes comunes para calcular afinidad. Juan Torres López tiene solo dos y por eso no obtiene porcentaje, aunque aparece en el catálogo. Los perfiles sociales y políticos se muestran en grupos distintos; el número de dimensiones comparadas siempre se muestra.

**Antes de promocionarlo como guía para noviembre:** incorporar los programas nuevos, ampliar la pluralidad de figuras y territorios, revisar las preguntas y justificar por eje cada puntuación con pasajes y fechas concretos. Someter el sistema a revisión independiente y realizar QA visual en móvil y escritorio. El prototipo ya funciona; la validación editorial electoral sigue pendiente.

## Método

Las respuestas valen −2, −1, 0, +1 o +2. Cada pregunta tiene dirección +1 o −1. Posición del eje = 50 + 25 × media(respuesta × dirección). Las omisiones no cuentan; un eje entero omitido queda sin datos.

Afinidad = 100 − media ponderada de diferencias absolutas entre posiciones. Solo compara dimensiones documentadas en ambos perfiles con peso positivo. Todos los ejes empiezan con peso 1; los ajustes de prioridades son temporales y se reinician al recargar. Una afinidad de 80 no significa coincidir en el 80% de las propuestas ni tener un 80% de probabilidad de votar a alguien.

## Privacidad

No hay analítica, peticiones de API, píxeles ni fuentes externas. Las respuestas se almacenan en localStorage del navegador. El alojamiento puede generar registros técnicos de acceso. El JSON descargado incluye las respuestas; la tarjeta SVG contiene solo el perfil y la afinidad. Los usuarios deciden si los comparten. La CSP bloquea conexiones desde la aplicación a servicios externos.

## Atribución

Referencia conceptual: https://12axes.vercel.app/ . Implementación, preguntas y textos originales. No se ha copiado el código, catálogo, identidad visual ni recursos gráficos del proyecto de referencia. Las fuentes enlazadas pertenecen a sus autores.
