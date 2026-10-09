# Catálogo de Ideologías · V10

Referencia de estructura visual: https://12axes.vercel.app/en/ideologies . Se han estudiado la página y sus estilos públicos. La implementación y los iconos son propios; no se incorporan código, textos o recursos del repositorio de referencia.

## Navegación y diseño

- Cabecera con título, descripción, cifras y barra de distribución proporcional.
- Cinco categorías españolas, con colores coherentes en grupos, chips, tarjetas y cifras.
- Búsqueda sin distinción de acentos o mayúsculas, combinable con la categoría.
- Filtros por chips, limpieza, resultados vacíos y contador actualizado.
- Tarjetas compactas, tres columnas en escritorio, dos en tamaños intermedios y una en móvil.
- Barra de búsqueda fija al desplazarse y atajo / que no interrumpe la escritura en controles.
- Indicadores accesibles de dimensiones con intensidad por distancia al centro; gris para ausencia de posición comparable. Son iconos de dimensión, no símbolos de una posición política.
- Fichas individuales con extremos explícitos, exclusiones, método y alcance de las fuentes.
- Tema oscuro y respeto a la preferencia de reducción de movimiento.

## Dos catálogos con escalas propias

La selección principal muestra los 30 tipos ideales del JSON, con los doce ejes allí definidos. Se conservan los valores de origen y se muestran como sin datos los ejes excluidos por su metodología. Las fichas aclaran si son solo catálogo o analogías históricas.

La segunda vista conserva las 61 corrientes del atlas anterior con sus 16 dimensiones. El cuestionario, las respuestas guardadas y el cálculo de afinidades del test siguen usando ese atlas. Esta edición cambia el catálogo: no mezcla ni convierte automáticamente las dos escalas.

El archivo JSON completo se descarga desde el catálogo y se publica como recurso local. ideologies-data.js contiene la misma base para consultar la interfaz sin una petición externa.

## Validación

60 comprobaciones automáticas, incluidos búsqueda, filtros combinados, 30 fichas nuevas, conservación del atlas, escape de texto, controles, rutas públicas, exclusiones y build. Compilación offline con 290 páginas estáticas más portada.

No se ha hecho revisión visual en navegador: esa capacidad no está disponible en este entorno. Los puntos de adaptación se comprueban en CSS y el marcado con pruebas automatizadas; esto no garantiza coincidencia visual píxel a píxel con la referencia.
