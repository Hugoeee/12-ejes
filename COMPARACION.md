# Revisión funcional de 12 Axes y adaptación española

Fecha: 9 de octubre de 2026. Repositorio de referencia: https://github.com/RomanCypherpunk/12axes . Commit examinado: `1873a6a1de3fdbc70523c298219610ebde31c181`.

Se revisaron la documentación, las pantallas de portada, elección de formato, cuestionario y resultados, sus componentes y los generadores de catálogos y fichas. También se consultaron las páginas públicas de ideologías, personalidades y países. No se ha hecho una comparación visual píxel a píxel en un navegador.

## Alcance

La licencia https://github.com/RomanCypherpunk/12axes/blob/main/LICENSE indica que el repositorio no es de código abierto y exige autorización escrita para copiar, redistribuir o crear derivados. Por ello se ha utilizado para identificar funciones y diferencias; no se ha incorporado su contenido al entregable.

Esta versión conserva el catálogo español y su propio modelo de doce ejes contemporáneos más cuatro claves históricas. Las referencias numéricas siguen siendo provisionales. No se presenta como una réplica idéntica ni como una traducción del original.

| Área examinada | Implementación española V7 | Diferencia que se mantiene |
| --- | --- | --- |
| Portada y ejemplos | Ejemplos de fichas, retratos, lugar histórico y coordenadas | Composición y textos propios |
| Guía de dimensiones | Dieciséis ejes, explicación y polos | Se conservan los ejes españoles de versiones anteriores |
| Familias políticas | Ocho accesos a tradiciones presentes en el catálogo | No se copia la taxonomía editorial del original |
| Formatos de test | Breve, completo y en profundidad | 48/80/240 preguntas, con 16 dimensiones; no 36/60/240 con 12 |
| Banco de preguntas | 240 propuestas originales sobre España | Enunciados y direcciones propios; no es una traducción |
| Cuestionario | Volver, omitir, contexto, reanudación y avance opcional | Interacción independiente |
| Tema | Claro y oscuro, con preferencia local | Paletas y estilos propios |
| Preguntas adicionales | Cinco decisiones opcionales de prioridades | Cambian pesos, no suman respuestas de arquetipo |
| Filtro religioso | Oculta ciertos modelos confesionales explícitos | No pregunta la religión del visitante ni clasifica la fe personal |
| Resultado por dimensión | Posiciones, explicaciones y valores ausentes | No se rellenan omisiones ni perfiles sin documentación |
| Firma del resultado | Posición más marcada, más central y frecuencia en el catálogo | No se extrapola a frecuencia poblacional ni se diagnostican contradicciones |
| Lugares y países | 42 contextos de España e Hispania con periodos | No se añade un catálogo mundial de países actuales |
| Personalidades | 150 personas vinculadas a España, con filtros y fuentes | Las biografías sin posiciones suficientes no reciben afinidad numérica |
| Afinidades por ámbito | Mejor ficha comparable en cada ámbito | Se señala cuando un ámbito no tiene codificación suficiente |
| Corrientes próximas y lejanas | Cercanías con el modelo propio y menor cercanía entre comparables | No se copian vectores ni algoritmo del original |
| Lecturas | Bibliografía de fichas próximas que tienen lecturas documentadas | Sin catálogo de libros copiado ni afiliación comercial |
| Mapa político | Economía y Legitimidad del poder | Proyección propia de dos ejes, con límites expresos |
| Comparador | Búsqueda, selección y tabla por dimensión | Cálculo local, sin consultar la API del original |
| Carta para compartir | PNG y SVG con referencias y créditos disponibles | Diseño independiente; no réplica visual exacta |
| Informe | Vista imprimible con fuentes, preparada para PDF | Se usa «Guardar como PDF» del navegador |
| Enlace compartible | Coordenadas y pesos en URL, con validación | No contiene respuestas individuales ni reemplaza el test guardado |
| Catálogos | Búsqueda, época, ámbito, familia, tipo de documentación y orden | Contenido y agrupaciones propios |
| Fichas públicas | 253 fichas individuales y tres catálogos estáticos | Fuentes y estado de revisión del catálogo español |
| Indexación | Metadatos, recursos absolutos, sitemap y robots | Dominio configurable, independiente del original |
| Imágenes y símbolos | 141 archivos de Wikimedia incluidos, nueve pendientes y dibujos locales documentados | No se reutilizan los recursos del repositorio de referencia |
| Apoyo y proyecto | Método, glosario y descarga de datos | No se copian donaciones, contactos o identificadores del autor |
| Idiomas | Español | No se incluyen las traducciones portuguesa e inglesa del original |

## Qué necesita trabajo posterior

1. Una copia literal o incorporación del código y diseño original requiere la autorización escrita de su titular.
2. La revisión visual debe realizarse en un navegador real, en ordenador y móvil. Las pruebas actuales comprueban flujos, cálculos, marcado y archivos, no equivalencia píxel a píxel.
3. Se han descargado y validado 141 archivos de imagen reales, incluidos con atribuciones y licencias. Nueve fichas siguen pendientes. Las pruebas de fallo de red y caché son simuladas; la identificación y el encuadre de todas las imágenes requieren revisión visual.
4. Las puntuaciones históricas necesitan una revisión especializada con pasajes concretos. Ampliar el banco de preguntas del visitante no resuelve esa deuda de documentación.
