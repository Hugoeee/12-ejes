window.IDEOLOGY_DATA = {
  "metadatos": {
    "version": "1.0.0-editorial",
    "fecha_revision": "2026-10-10",
    "estado": "Prototipo editorial sin validación psicométrica ni calibración empírica.",
    "avisos": [
      "Los números son coordenadas editoriales de tipos ideales definidos por las descripciones, no porcentajes de votantes, probabilidades, encuestas ni posiciones oficiales de partidos.",
      "Las seis agrupaciones por categoría son de navegación: centro/derecha/izquierda no implican equivalencia de radicalidad o de pluralismo.",
      "No se utilizan sociocentrismo ni otras etiquetas ambiguas sin una tradición política delimitada.",
      "El 50 en un eje excluido es un marcador para conservar el esquema solicitado; nunca debe entrar en la distancia ni presentarse como posición centrista.",
      "Las respuestas omitidas deben ser null y excluirse, no convertirse en 50. Una respuesta genuinamente neutral sí puede ser 50.",
      "Esta base de doce ejes no sustituye directamente la de dieciséis dimensiones de la web V9. Los polos de varias dimensiones también están invertidos.",
      "Se han definido los ocho ejes adicionales porque no había una definición cerrada de doce dimensiones en el historial visible.",
      "La distancia aproxima cercanía a un perfil, no determina qué ideología es una persona ni aconseja a qué partido votar.",
      "Los perfiles no cubren todas las variantes internas. Fe, residencia rural, profesión y origen no permiten inferir ideología.",
      "No clasificar automáticamente un anarquismo colectivista o un anarcocapitalismo mediante un eje que solo distingue mercado y planificación estatal: faltan propiedad y autogestión.",
      "No atribuir posiciones en la UE, leyes de memoria o inmigración contemporánea a doctrinas históricas sin una comparación expresamente analógica."
    ],
    "definicion_ejes": {
      "eje_territorial": {
        "cero": "Centralismo",
        "cien": "Máxima soberanía territorial: secesión o cantones pactados",
        "nota": "Descentralización, foralismo, federalismo y secesión no son equivalentes. El eje es una aproximación, no una ordenación histórica única."
      },
      "eje_estado": {
        "cero": "Monarquía",
        "cien": "República",
        "nota": "No mide democracia. El rechazo a cualquier Estado no equivale a republicanismo."
      },
      "eje_economia": {
        "cero": "Libre mercado con mínima intervención",
        "cien": "Planificación económica central estatal",
        "nota": "Valores intermedios representan economía mixta. No mide por sí solo propiedad colectiva o autogestión; tampoco todos los servicios públicos implican planificación central."
      },
      "eje_sociedad": {
        "cero": "Conservación de normas sociales tradicionales",
        "cien": "Ampliación y reforma de derechos y normas sociales",
        "nota": "No es una escala de superioridad moral ni de innovación tecnológica."
      },
      "eje_memoria": {
        "cero": "Mínima intervención pública en memoria histórica",
        "cien": "Políticas públicas de investigación, reconocimiento y reparación",
        "nota": "No mide conocimiento histórico ni permite atribuir debates posteriores a figuras del siglo XIX."
      },
      "eje_rural": {
        "cero": "Prioridad a concentración metropolitana de inversión y servicios",
        "cien": "Prioridad a reequilibrio territorial y acceso a servicios en zonas rurales",
        "nota": "No mide residencia, identidad rural, rechazo a ciudades o aceptación de tauromaquia. Ambas prioridades pueden coexistir."
      },
      "eje_fiscal": {
        "cero": "Menor carga tributaria y menor redistribución fiscal",
        "cien": "Mayor progresividad y redistribución fiscal",
        "nota": "No mide sin más el tamaño del Estado: impuestos altos y redistribución progresiva son conceptos diferentes."
      },
      "eje_inmigracion": {
        "cero": "Entrada y regularización muy restrictivas",
        "cien": "Entrada, regularización e integración muy abiertas",
        "nota": "No mide etnia o religión del participante. No confundir apoyo a inmigración laboral con apertura general."
      },
      "eje_religion": {
        "cero": "Estado confesional y fuerte papel institucional de la religión",
        "cien": "Separación institucional y Estado laico",
        "nota": "No mide fe personal ni hostilidad hacia los creyentes."
      },
      "eje_ecologia": {
        "cero": "Prioridad productiva frente a restricciones ambientales",
        "cien": "Prioridad a límites ambientales aunque restrinjan ciertas actividades",
        "nota": "No mide interés genérico por la naturaleza. Conservación tradicional y regulación climática actual son diferentes."
      },
      "eje_europa": {
        "cero": "Máxima soberanía estatal frente a integración de la UE",
        "cien": "Máxima integración política e institucional europea",
        "nota": "No mide pertenencia cultural a Europa. La UE no existía para las doctrinas del siglo XIX."
      },
      "eje_libertades": {
        "cero": "Autoritarismo y subordinación de garantías individuales al poder",
        "cien": "Pluralismo político y fuertes garantías civiles",
        "nota": "Protesta, privacidad y pluralismo no son idénticos; el test debe incluir varias preguntas. No confundir un ejecutivo democrático fuerte con una dictadura."
      }
    },
    "ejes_excluidos_por_perfil": {
      "Anarcosindicalismo": {
        "eje_estado": "Abolición del Estado, no elección entre monarquía y república.",
        "eje_economia": "Autogestión colectiva incompatible con los extremos mercado/planificación estatal.",
        "eje_fiscal": "Abolición del Estado, no una propuesta tributaria dentro del Estado.",
        "eje_memoria": "Una política estatal de memoria no es constitutiva de esta doctrina.",
        "eje_rural": "No fija una prioridad uniforme entre metrópolis y reequilibrio rural.",
        "eje_europa": "Internacionalismo libertario no equivale a integración institucional en la UE."
      },
      "Comunismo marxista-leninista": {
        "eje_memoria": "Sin postura uniforme o comparable en el tipo histórico modelado.",
        "eje_rural": "Sin postura uniforme o comparable en el tipo histórico modelado.",
        "eje_ecologia": "Sin postura uniforme o comparable en el tipo histórico modelado.",
        "eje_europa": "Sin postura uniforme o comparable en el tipo histórico modelado."
      },
      "Eurocomunismo": {
        "eje_memoria": "No se fija una postura uniforme de la corriente de la Transición para este debate actual.",
        "eje_rural": "No se fija una postura uniforme de la corriente de la Transición para este debate actual.",
        "eje_inmigracion": "No se fija una postura uniforme de la corriente de la Transición para este debate actual.",
        "eje_ecologia": "No se fija una postura uniforme de la corriente de la Transición para este debate actual.",
        "eje_europa": "No se fija una postura uniforme de la corriente de la Transición para este debate actual."
      },
      "Liberalismo clásico": {
        "eje_estado": "La doctrina no obliga a una posición común en esta dimensión.",
        "eje_memoria": "La doctrina no obliga a una posición común en esta dimensión.",
        "eje_rural": "La doctrina no obliga a una posición común en esta dimensión."
      },
      "Libertarismo minarquista": {
        "eje_estado": "La doctrina no obliga a una posición común en esta dimensión.",
        "eje_memoria": "La doctrina no obliga a una posición común en esta dimensión.",
        "eje_rural": "La doctrina no obliga a una posición común en esta dimensión.",
        "eje_europa": "La doctrina no obliga a una posición común en esta dimensión."
      },
      "Regionalismo pragmático": {
        "eje_memoria": "La reivindicación territorial no determina una política de memoria."
      },
      "Foralismo democrático": {
        "eje_estado": "Los fueros no determinan preferencia por monarquía o república."
      },
      "Nacionalcatolicismo franquista": {
        "eje_memoria": "El debate actual no se atribuye retrospectivamente al perfil histórico.",
        "eje_rural": "El debate actual no se atribuye retrospectivamente al perfil histórico.",
        "eje_inmigracion": "El debate actual no se atribuye retrospectivamente al perfil histórico.",
        "eje_ecologia": "El debate actual no se atribuye retrospectivamente al perfil histórico.",
        "eje_europa": "El debate actual no se atribuye retrospectivamente al perfil histórico.",
        "eje_estado": "La dictadura y el Reino sin rey no encajan en una preferencia democrática binaria.",
        "eje_fiscal": "La trayectoria del régimen no ofrece un único tipo redistributivo."
      },
      "Liberalismo conservador canovista": {
        "eje_memoria": "El debate actual no se atribuye retrospectivamente al perfil histórico.",
        "eje_rural": "El debate actual no se atribuye retrospectivamente al perfil histórico.",
        "eje_inmigracion": "El debate actual no se atribuye retrospectivamente al perfil histórico.",
        "eje_ecologia": "El debate actual no se atribuye retrospectivamente al perfil histórico.",
        "eje_europa": "El debate actual no se atribuye retrospectivamente al perfil histórico."
      },
      "Carlismo tradicionalista": {
        "eje_memoria": "No se fija una posición moderna común a las múltiples épocas carlistas.",
        "eje_rural": "No se fija una posición moderna común a las múltiples épocas carlistas.",
        "eje_inmigracion": "No se fija una posición moderna común a las múltiples épocas carlistas.",
        "eje_ecologia": "No se fija una posición moderna común a las múltiples épocas carlistas.",
        "eje_europa": "No se fija una posición moderna común a las múltiples épocas carlistas.",
        "eje_fiscal": "Fueros, subsidiariedad y fiscalidad local no fijan progresividad tributaria moderna."
      },
      "Cantonalismo de 1873": {
        "eje_memoria": "El debate actual no se atribuye retrospectivamente al movimiento de 1873.",
        "eje_rural": "El debate actual no se atribuye retrospectivamente al movimiento de 1873.",
        "eje_inmigracion": "El debate actual no se atribuye retrospectivamente al movimiento de 1873.",
        "eje_ecologia": "El debate actual no se atribuye retrospectivamente al movimiento de 1873.",
        "eje_europa": "El debate actual no se atribuye retrospectivamente al movimiento de 1873.",
        "eje_economia": "Las propuestas económicas cantonales fueron heterogéneas.",
        "eje_fiscal": "Autonomía fiscal no determina una política redistributiva única."
      },
      "Falangismo fundacional": {
        "eje_memoria": "El debate actual no se atribuye retrospectivamente al programa fundacional.",
        "eje_rural": "El debate actual no se atribuye retrospectivamente al programa fundacional.",
        "eje_inmigracion": "El debate actual no se atribuye retrospectivamente al programa fundacional.",
        "eje_ecologia": "El debate actual no se atribuye retrospectivamente al programa fundacional.",
        "eje_europa": "El debate actual no se atribuye retrospectivamente al programa fundacional.",
        "eje_estado": "La dictadura nacionalsindicalista no se define como opción democrática monarquía/república.",
        "eje_fiscal": "No se transforma su corporativismo en una escala moderna de progresividad fiscal."
      },
      "Tecnocracia desarrollista franquista": {
        "eje_estado": "No se fija una posición uniforme o comparable para este debate actual.",
        "eje_memoria": "No se fija una posición uniforme o comparable para este debate actual.",
        "eje_rural": "No se fija una posición uniforme o comparable para este debate actual.",
        "eje_fiscal": "No se fija una posición uniforme o comparable para este debate actual.",
        "eje_inmigracion": "No se fija una posición uniforme o comparable para este debate actual.",
        "eje_europa": "No se fija una posición uniforme o comparable para este debate actual."
      },
      "Anarcocapitalismo": {
        "eje_territorial": "La abolición del Estado o la libertad contractual no determina una política común en este eje.",
        "eje_estado": "La abolición del Estado o la libertad contractual no determina una política común en este eje.",
        "eje_sociedad": "La abolición del Estado o la libertad contractual no determina una política común en este eje.",
        "eje_memoria": "La abolición del Estado o la libertad contractual no determina una política común en este eje.",
        "eje_rural": "La abolición del Estado o la libertad contractual no determina una política común en este eje.",
        "eje_inmigracion": "La abolición del Estado o la libertad contractual no determina una política común en este eje.",
        "eje_religion": "La abolición del Estado o la libertad contractual no determina una política común en este eje.",
        "eje_ecologia": "La abolición del Estado o la libertad contractual no determina una política común en este eje.",
        "eje_europa": "La abolición del Estado o la libertad contractual no determina una política común en este eje."
      },
      "Ciberlibertarismo": {
        "eje_territorial": "La autonomía digital no fija un programa político general para esta dimensión.",
        "eje_estado": "La autonomía digital no fija un programa político general para esta dimensión.",
        "eje_economia": "La autonomía digital no fija un programa político general para esta dimensión.",
        "eje_memoria": "La autonomía digital no fija un programa político general para esta dimensión.",
        "eje_rural": "La autonomía digital no fija un programa político general para esta dimensión.",
        "eje_fiscal": "La autonomía digital no fija un programa político general para esta dimensión.",
        "eje_inmigracion": "La autonomía digital no fija un programa político general para esta dimensión.",
        "eje_ecologia": "La autonomía digital no fija un programa político general para esta dimensión.",
        "eje_europa": "La autonomía digital no fija un programa político general para esta dimensión."
      }
    },
    "comparacion": {
      "formula_distancia": "d = D / sqrt(sum(w_j)): distancia euclidiana normalizada a 0–100, equivalente al error cuadrático medio con raíz.",
      "formula_cercania": "cercania = 100 - d; con coordenadas entre 0 y 100 y pesos no negativos, el resultado está entre 0 y 100.",
      "pesos_iniciales": {
        "eje_territorial": 1,
        "eje_estado": 1,
        "eje_economia": 1,
        "eje_sociedad": 1,
        "eje_memoria": 1,
        "eje_rural": 1,
        "eje_fiscal": 1,
        "eje_inmigracion": 1,
        "eje_religion": 1,
        "eje_ecologia": 1,
        "eje_europa": 1,
        "eje_libertades": 1
      },
      "comparacion_justa": "Al ordenar varios perfiles, usar exactamente la misma intersección de ejes válidos para todos ellos y respondidos por el usuario; si es insuficiente, separar grupos y no crear un ranking global.",
      "minimo_ejes_comunes": 6,
      "perfiles_historicos_comparacion": "Mostrar en un bloque de analogías separado, con ejes y cobertura visibles. No mezclar su distancia parcial con un ranking contemporáneo.",
      "catalogo_sin_clasificacion_automatica": [
        "Anarcocapitalismo",
        "Ciberlibertarismo"
      ],
      "razon_catalogo": "Solo tienen tres dimensiones comparables en esta escala. Necesitan ejes de propiedad, organización del trabajo y soberanía digital para clasificarse con rigor.",
      "perfiles_analogicos": [
        "Comunismo marxista-leninista",
        "Eurocomunismo",
        "Nacionalcatolicismo franquista",
        "Liberalismo conservador canovista",
        "Carlismo tradicionalista",
        "Cantonalismo de 1873",
        "Falangismo fundacional",
        "Tecnocracia desarrollista franquista"
      ],
      "validacion_pendiente": [
        "Revisión independiente por especialistas con rúbrica para cada coordenada.",
        "Piloto de preguntas, cobertura por eje y claridad lingüística.",
        "Análisis de estabilidad ante pesos, pequeñas variaciones de coordenadas y respuestas neutrales.",
        "Separar dimensiones confundidas, especialmente planificación/propiedad, territorio y autoritarismo/seguridad.",
        "Calibrar con respuestas reales sin deducir certeza de la mera distancia matemática."
      ],
      "presentacion_resultado": "Perfil más próximo dentro de los ejes comparables; mostrar también alternativas y limitaciones. No fijar umbrales de certeza sin validación.",
      "formula_distancia_euclidiana": "D = sqrt(sum(w_j * (usuario_j - perfil_j)^2)), usando la misma base de ejes para los perfiles comparados."
    },
    "fuentes_documentales": [
      {
        "id": "cnt",
        "url": "https://www.cnt.es/que-es-cnt/",
        "alcance": "Autogestión, comunismo libertario y rechazo del Estado; no fundamenta porcentajes."
      },
      {
        "id": "pce",
        "url": "https://pce.es/media/uploads/2021/03/22/97dbe7de451543ee8bcfa93aca3b917f.pdf",
        "alcance": "Historia del PCE y del eurocomunismo; no es el perfil actual del partido."
      },
      {
        "id": "psoe",
        "url": "https://www.psoe.es/transparencia/informacion-politica-organizativa/estatutos-y-reglamentos-federales/",
        "alcance": "Referencia organizativa contemporánea; la socialdemocracia no se reduce al PSOE."
      },
      {
        "id": "erc",
        "url": "https://static.esquerra.cat/arxius/textosbasics/declaracio-ideologica.pdf",
        "alcance": "Declaración propia de ERC como ejemplo de independentismo republicano de izquierdas; no representa a todos los independentistas."
      },
      {
        "id": "pnv",
        "url": "https://www.eaj-pnv.eus/es/noticias/54863/ni-a-la-izquierda-ni-a-la-derecha-el-pnv-esta-dond",
        "alcance": "Ejemplo de autogobierno y soberanismo institucional; no atribuye estos números al PNV."
      },
      {
        "id": "carlistas",
        "url": "https://www.carlistas.es/2014/02/18/los-12-principios-fundamentales-del-carlismo/",
        "alcance": "Autodefinición de una organización tradicionalista actual; no representa todas las ramas históricas del carlismo."
      },
      {
        "id": "cartagena",
        "url": "https://armada.defensa.gob.es/archivo/mardigitalrevistas/cuadernosihcn/78cuaderno/cap03.pdf",
        "alcance": "Estudio histórico institucional de la sublevación de Cartagena, no fuente primaria de 1873."
      },
      {
        "id": "franquismo",
        "url": "https://www.boe.es/gazeta/dias/1945/07/18/pdfs/BOE-1945-199.pdf",
        "alcance": "Fuero de los Españoles de 1945; confesionalidad y marco de derechos de la dictadura."
      },
      {
        "id": "restauracion",
        "url": "https://fundacionfaes.org/canovas-y-el-liberalismo-conservador/",
        "alcance": "Presentación de un estudio de Cánovas desde una fundación ideológicamente situada; contraste editorial pendiente."
      },
      {
        "id": "rothbard",
        "url": "https://mises.org/library/book/anatomy-state",
        "alcance": "Texto de Rothbard para la doctrina antiestatal, no evidencia de implantación electoral en España."
      },
      {
        "id": "barlow",
        "url": "https://www.eff.org/cyberspace-independence",
        "alcance": "Declaración de 1996 sobre autonomía digital, no un programa completo para España."
      }
    ],
    "alcance_fuentes": "Las fuentes orientan definiciones y límites. Ninguna de ellas publica las 360 coordenadas propuestas; algunos tipos amplios e híbridos necesitan documentación específica adicional."
  },
  "categorias": {
    "Izquierda y Extrema Izquierda": [
      {
        "nombre": "Anarcosindicalismo",
        "descripcion": "Organiza la transformación social mediante sindicatos autónomos y federaciones libres.\nEn España se vincula a la tradición de la CNT y a la autogestión, no a un Estado planificador.",
        "stats": {
          "eje_territorial": 95,
          "eje_estado": 50,
          "eje_economia": 50,
          "eje_sociedad": 90,
          "eje_memoria": 50,
          "eje_rural": 50,
          "eje_fiscal": 50,
          "eje_inmigracion": 90,
          "eje_religion": 95,
          "eje_ecologia": 75,
          "eje_europa": 50,
          "eje_libertades": 100
        }
      },
      {
        "nombre": "Comunismo marxista-leninista",
        "descripcion": "Propone propiedad social de los medios de producción y planificación estatal bajo dirección comunista.\nSu variante histórica de partido dirigente rompe con el pluralismo liberal; no describe a todo comunismo español.",
        "stats": {
          "eje_territorial": 65,
          "eje_estado": 100,
          "eje_economia": 95,
          "eje_sociedad": 65,
          "eje_memoria": 50,
          "eje_rural": 50,
          "eje_fiscal": 85,
          "eje_inmigracion": 70,
          "eje_religion": 95,
          "eje_ecologia": 50,
          "eje_europa": 50,
          "eje_libertades": 15
        }
      },
      {
        "nombre": "Eurocomunismo",
        "descripcion": "Busca una transición al socialismo mediante elecciones, libertades políticas y pluralismo.\nEn España identifica una orientación del PCE de la Transición, distinta de los modelos de partido único.",
        "stats": {
          "eje_territorial": 60,
          "eje_estado": 75,
          "eje_economia": 70,
          "eje_sociedad": 80,
          "eje_memoria": 50,
          "eje_rural": 50,
          "eje_fiscal": 80,
          "eje_inmigracion": 50,
          "eje_religion": 90,
          "eje_ecologia": 50,
          "eje_europa": 50,
          "eje_libertades": 85
        }
      },
      {
        "nombre": "Socialismo democrático",
        "descripcion": "Defiende transformar democráticamente las relaciones de propiedad y reforzar el poder de los trabajadores.\nEn el contexto español combina republicanismo, servicios públicos y una economía con amplia propiedad social.",
        "stats": {
          "eje_territorial": 65,
          "eje_estado": 90,
          "eje_economia": 75,
          "eje_sociedad": 85,
          "eje_memoria": 90,
          "eje_rural": 65,
          "eje_fiscal": 90,
          "eje_inmigracion": 80,
          "eje_religion": 90,
          "eje_ecologia": 80,
          "eje_europa": 65,
          "eje_libertades": 90
        }
      },
      {
        "nombre": "Socialdemocracia",
        "descripcion": "Acepta la economía de mercado con negociación colectiva, servicios públicos y redistribución.\nLa variante española aquí modelada es autonomista, europeísta y reformista dentro del sistema constitucional.",
        "stats": {
          "eje_territorial": 55,
          "eje_estado": 35,
          "eje_economia": 45,
          "eje_sociedad": 80,
          "eje_memoria": 85,
          "eje_rural": 65,
          "eje_fiscal": 80,
          "eje_inmigracion": 75,
          "eje_religion": 80,
          "eje_ecologia": 75,
          "eje_europa": 90,
          "eje_libertades": 90
        }
      },
      {
        "nombre": "Ecosocialismo",
        "descripcion": "Une transformación socialista y transición ecológica mediante planificación democrática y justicia social.\nEn España prioriza vivienda, transporte público, energía y empleo compatible con límites ambientales.",
        "stats": {
          "eje_territorial": 70,
          "eje_estado": 90,
          "eje_economia": 80,
          "eje_sociedad": 90,
          "eje_memoria": 90,
          "eje_rural": 75,
          "eje_fiscal": 90,
          "eje_inmigracion": 85,
          "eje_religion": 95,
          "eje_ecologia": 100,
          "eje_europa": 65,
          "eje_libertades": 90
        }
      }
    ],
    "Centro y Liberalismo": [
      {
        "nombre": "Socioliberalismo",
        "descripcion": "Combina mercado y competencia con igualdad de oportunidades, derechos civiles y protección social.\nLa variante española modelada apuesta por reformas graduales, Estado aconfesional e integración europea.",
        "stats": {
          "eje_territorial": 45,
          "eje_estado": 40,
          "eje_economia": 30,
          "eje_sociedad": 80,
          "eje_memoria": 65,
          "eje_rural": 50,
          "eje_fiscal": 55,
          "eje_inmigracion": 75,
          "eje_religion": 85,
          "eje_ecologia": 70,
          "eje_europa": 90,
          "eje_libertades": 95
        }
      },
      {
        "nombre": "Liberalismo clásico",
        "descripcion": "Prioriza propiedad privada, contratos, competencia y límites jurídicos al poder del Estado.\nEn España puede convivir con monarquía o república; esta ficha no fija una preferencia dinástica.",
        "stats": {
          "eje_territorial": 45,
          "eje_estado": 50,
          "eje_economia": 15,
          "eje_sociedad": 55,
          "eje_memoria": 50,
          "eje_rural": 50,
          "eje_fiscal": 20,
          "eje_inmigracion": 70,
          "eje_religion": 80,
          "eje_ecologia": 40,
          "eje_europa": 65,
          "eje_libertades": 95
        }
      },
      {
        "nombre": "Liberalismo progresista",
        "descripcion": "Defiende libertades civiles y reformas sociales con una economía de mercado regulada.\nLa variante contemporánea española aquí representada añade republicanismo reformista y europeísmo.",
        "stats": {
          "eje_territorial": 50,
          "eje_estado": 85,
          "eje_economia": 30,
          "eje_sociedad": 85,
          "eje_memoria": 75,
          "eje_rural": 50,
          "eje_fiscal": 50,
          "eje_inmigracion": 80,
          "eje_religion": 90,
          "eje_ecologia": 70,
          "eje_europa": 90,
          "eje_libertades": 95
        }
      },
      {
        "nombre": "Centrismo reformista constitucional",
        "descripcion": "Busca pactos, reformas graduales y estabilidad institucional dentro de la Constitución de 1978.\nSu perfil español combina monarquía parlamentaria, autonomías, mercado y un Estado de bienestar moderado.",
        "stats": {
          "eje_territorial": 45,
          "eje_estado": 20,
          "eje_economia": 40,
          "eje_sociedad": 60,
          "eje_memoria": 55,
          "eje_rural": 60,
          "eje_fiscal": 50,
          "eje_inmigracion": 60,
          "eje_religion": 65,
          "eje_ecologia": 60,
          "eje_europa": 90,
          "eje_libertades": 90
        }
      },
      {
        "nombre": "Democracia cristiana",
        "descripcion": "Compatibiliza democracia pluralista, economía social de mercado, solidaridad y subsidiariedad.\nSu variante española europeísta acepta libertad religiosa y cooperación institucional sin imponer un Estado confesional.",
        "stats": {
          "eje_territorial": 55,
          "eje_estado": 35,
          "eje_economia": 40,
          "eje_sociedad": 40,
          "eje_memoria": 60,
          "eje_rural": 65,
          "eje_fiscal": 55,
          "eje_inmigracion": 65,
          "eje_religion": 45,
          "eje_ecologia": 65,
          "eje_europa": 90,
          "eje_libertades": 90
        }
      },
      {
        "nombre": "Libertarismo minarquista",
        "descripcion": "Limita el Estado principalmente a justicia, seguridad y protección de derechos y contratos.\nComo nicho español liberal radical, rechaza paternalismo y altos impuestos sin exigir abolir todo Estado.",
        "stats": {
          "eje_territorial": 65,
          "eje_estado": 50,
          "eje_economia": 5,
          "eje_sociedad": 70,
          "eje_memoria": 50,
          "eje_rural": 50,
          "eje_fiscal": 5,
          "eje_inmigracion": 85,
          "eje_religion": 95,
          "eje_ecologia": 20,
          "eje_europa": 50,
          "eje_libertades": 100
        }
      }
    ],
    "Derecha y Extrema Derecha": [
      {
        "nombre": "Conservadurismo liberal",
        "descripcion": "Combina mercado, propiedad privada y estabilidad institucional con cambios sociales graduales.\nLa variante española modelada acepta monarquía parlamentaria, autonomías y participación en la UE.",
        "stats": {
          "eje_territorial": 35,
          "eje_estado": 15,
          "eje_economia": 25,
          "eje_sociedad": 35,
          "eje_memoria": 35,
          "eje_rural": 60,
          "eje_fiscal": 30,
          "eje_inmigracion": 45,
          "eje_religion": 40,
          "eje_ecologia": 45,
          "eje_europa": 85,
          "eje_libertades": 85
        }
      },
      {
        "nombre": "Conservadurismo católico democrático",
        "descripcion": "Defiende familia, tradiciones y presencia social de la religión dentro del pluralismo democrático.\nLa variante española combina subsidiariedad y protección social; no equivale al nacionalcatolicismo dictatorial.",
        "stats": {
          "eje_territorial": 40,
          "eje_estado": 20,
          "eje_economia": 35,
          "eje_sociedad": 15,
          "eje_memoria": 40,
          "eje_rural": 70,
          "eje_fiscal": 45,
          "eje_inmigracion": 50,
          "eje_religion": 20,
          "eje_ecologia": 55,
          "eje_europa": 75,
          "eje_libertades": 85
        }
      },
      {
        "nombre": "Nacionalconservadurismo",
        "descripcion": "Prioriza unidad nacional, soberanía, seguridad, control migratorio y continuidad cultural.\nLa variante española modelada busca recentralizar competencias y revisar políticas identitarias contemporáneas.",
        "stats": {
          "eje_territorial": 10,
          "eje_estado": 20,
          "eje_economia": 25,
          "eje_sociedad": 20,
          "eje_memoria": 15,
          "eje_rural": 80,
          "eje_fiscal": 25,
          "eje_inmigracion": 15,
          "eje_religion": 30,
          "eje_ecologia": 25,
          "eje_europa": 25,
          "eje_libertades": 55
        }
      },
      {
        "nombre": "Neoconservadurismo",
        "descripcion": "Combina liberalización económica con énfasis en seguridad, alianzas occidentales y defensa del orden liberal.\nEn España es una influencia intelectual, no una tradición partidista uniforme; aquí se modela una variante constitucional.",
        "stats": {
          "eje_territorial": 30,
          "eje_estado": 20,
          "eje_economia": 20,
          "eje_sociedad": 35,
          "eje_memoria": 30,
          "eje_rural": 45,
          "eje_fiscal": 25,
          "eje_inmigracion": 45,
          "eje_religion": 50,
          "eje_ecologia": 30,
          "eje_europa": 80,
          "eje_libertades": 75
        }
      },
      {
        "nombre": "Nacionalcatolicismo franquista",
        "descripcion": "Fusionó nacionalismo español, confesionalidad católica y legitimación de una dictadura.\nSu perfil histórico prioriza unidad estatal y subordinación de libertades al régimen; no identifica a los católicos actuales.",
        "stats": {
          "eje_territorial": 0,
          "eje_estado": 50,
          "eje_economia": 65,
          "eje_sociedad": 0,
          "eje_memoria": 50,
          "eje_rural": 50,
          "eje_fiscal": 50,
          "eje_inmigracion": 50,
          "eje_religion": 0,
          "eje_ecologia": 50,
          "eje_europa": 50,
          "eje_libertades": 5
        }
      },
      {
        "nombre": "Liberalismo conservador canovista",
        "descripcion": "Defendió la monarquía de la Restauración, el orden social y un liberalismo restringido.\nSu práctica de turno y control electoral no equivale al pluralismo democrático español contemporáneo.",
        "stats": {
          "eje_territorial": 20,
          "eje_estado": 5,
          "eje_economia": 35,
          "eje_sociedad": 20,
          "eje_memoria": 50,
          "eje_rural": 50,
          "eje_fiscal": 40,
          "eje_inmigracion": 50,
          "eje_religion": 30,
          "eje_ecologia": 50,
          "eje_europa": 50,
          "eje_libertades": 35
        }
      }
    ],
    "Nacionalismos y Regionalismos": [
      {
        "nombre": "Federalismo plurinacional",
        "descripcion": "Propone compartir soberanía y reconocer varias identidades nacionales dentro de un Estado común.\nLa variante española aquí modelada busca una república federal con derechos sociales, sin exigir secesión.",
        "stats": {
          "eje_territorial": 70,
          "eje_estado": 90,
          "eje_economia": 50,
          "eje_sociedad": 80,
          "eje_memoria": 85,
          "eje_rural": 70,
          "eje_fiscal": 75,
          "eje_inmigracion": 75,
          "eje_religion": 85,
          "eje_ecologia": 75,
          "eje_europa": 85,
          "eje_libertades": 90
        }
      },
      {
        "nombre": "Regionalismo pragmático",
        "descripcion": "Defiende competencias, financiación y servicios para una comunidad sin hacer de la independencia su objetivo.\nEsta variante moderada española combina reconocimiento territorial, economía mixta y negociación institucional.",
        "stats": {
          "eje_territorial": 55,
          "eje_estado": 30,
          "eje_economia": 40,
          "eje_sociedad": 50,
          "eje_memoria": 50,
          "eje_rural": 80,
          "eje_fiscal": 50,
          "eje_inmigracion": 55,
          "eje_religion": 55,
          "eje_ecologia": 60,
          "eje_europa": 80,
          "eje_libertades": 85
        }
      },
      {
        "nombre": "Foralismo democrático",
        "descripcion": "Defiende instituciones, competencias y regímenes fiscales forales dentro de acuerdos democráticos.\nLa variante vasco-navarra modelada es autonomista y socialmente moderada; no implica independentismo ni carlismo.",
        "stats": {
          "eje_territorial": 65,
          "eje_estado": 50,
          "eje_economia": 40,
          "eje_sociedad": 50,
          "eje_memoria": 60,
          "eje_rural": 70,
          "eje_fiscal": 50,
          "eje_inmigracion": 60,
          "eje_religion": 50,
          "eje_ecologia": 65,
          "eje_europa": 85,
          "eje_libertades": 85
        }
      },
      {
        "nombre": "Soberanismo periférico pragmático",
        "descripcion": "Reclama capacidad de decisión nacional y mayor autogobierno, negociando su encaje institucional.\nEsta variante moderada, de economía mixta y europeísta, no equivale a todo nacionalismo vasco, catalán o gallego.",
        "stats": {
          "eje_territorial": 85,
          "eje_estado": 75,
          "eje_economia": 40,
          "eje_sociedad": 65,
          "eje_memoria": 75,
          "eje_rural": 65,
          "eje_fiscal": 55,
          "eje_inmigracion": 65,
          "eje_religion": 70,
          "eje_ecologia": 65,
          "eje_europa": 85,
          "eje_libertades": 85
        }
      },
      {
        "nombre": "Independentismo de izquierdas",
        "descripcion": "Une creación de un Estado propio, republicanismo y políticas redistributivas.\nSu variante española democrática defiende derechos sociales, reconocimiento lingüístico y transición ecológica.",
        "stats": {
          "eje_territorial": 100,
          "eje_estado": 100,
          "eje_economia": 65,
          "eje_sociedad": 90,
          "eje_memoria": 90,
          "eje_rural": 70,
          "eje_fiscal": 85,
          "eje_inmigracion": 85,
          "eje_religion": 95,
          "eje_ecologia": 85,
          "eje_europa": 80,
          "eje_libertades": 90
        }
      },
      {
        "nombre": "Independentismo liberal-conservador",
        "descripcion": "Defiende un Estado propio con economía de mercado y continuidad de instituciones y tradiciones nacionales.\nEsta variante democrática conserva políticas de bienestar moderadas; no atribuye una doctrina única a Junts u otros partidos.",
        "stats": {
          "eje_territorial": 100,
          "eje_estado": 85,
          "eje_economia": 30,
          "eje_sociedad": 45,
          "eje_memoria": 65,
          "eje_rural": 65,
          "eje_fiscal": 40,
          "eje_inmigracion": 50,
          "eje_religion": 50,
          "eje_ecologia": 55,
          "eje_europa": 85,
          "eje_libertades": 85
        }
      }
    ],
    "Históricas/Nichos": [
      {
        "nombre": "Carlismo tradicionalista",
        "descripcion": "Defiende legitimidad monárquica, confesionalidad católica, fueros y representación orgánica tradicional.\nSu variante histórica española no es centralista uniforme ni debe confundirse con el carlismo socialista posterior.",
        "stats": {
          "eje_territorial": 70,
          "eje_estado": 0,
          "eje_economia": 40,
          "eje_sociedad": 5,
          "eje_memoria": 50,
          "eje_rural": 50,
          "eje_fiscal": 50,
          "eje_inmigracion": 50,
          "eje_religion": 0,
          "eje_ecologia": 50,
          "eje_europa": 50,
          "eje_libertades": 25
        }
      },
      {
        "nombre": "Cantonalismo de 1873",
        "descripcion": "Impulsó una federación construida desde cantones y municipios mediante pactos de abajo arriba.\nLa insurrección de Cartagena fue su episodio más conocido; no fue un programa económico o social homogéneo.",
        "stats": {
          "eje_territorial": 100,
          "eje_estado": 100,
          "eje_economia": 50,
          "eje_sociedad": 70,
          "eje_memoria": 50,
          "eje_rural": 50,
          "eje_fiscal": 50,
          "eje_inmigracion": 50,
          "eje_religion": 85,
          "eje_ecologia": 50,
          "eje_europa": 50,
          "eje_libertades": 75
        }
      },
      {
        "nombre": "Falangismo fundacional",
        "descripcion": "Propuso nacionalismo español autoritario y organización económica nacionalsindicalista y corporativa.\nSu formulación de los años treinta rechazaba marxismo y liberalismo; no representa un mercado libre ni todo el franquismo.",
        "stats": {
          "eje_territorial": 0,
          "eje_estado": 50,
          "eje_economia": 70,
          "eje_sociedad": 20,
          "eje_memoria": 50,
          "eje_rural": 50,
          "eje_fiscal": 50,
          "eje_inmigracion": 50,
          "eje_religion": 20,
          "eje_ecologia": 50,
          "eje_europa": 50,
          "eje_libertades": 5
        }
      },
      {
        "nombre": "Tecnocracia desarrollista franquista",
        "descripcion": "Priorizó estabilización, industrialización y apertura económica bajo gestión técnica sin democratizar el régimen.\nSe refiere al desarrollismo español desde finales de los cincuenta, no a cualquier gobierno que consulte expertos.",
        "stats": {
          "eje_territorial": 10,
          "eje_estado": 50,
          "eje_economia": 40,
          "eje_sociedad": 20,
          "eje_memoria": 50,
          "eje_rural": 50,
          "eje_fiscal": 50,
          "eje_inmigracion": 50,
          "eje_religion": 15,
          "eje_ecologia": 15,
          "eje_europa": 50,
          "eje_libertades": 10
        }
      },
      {
        "nombre": "Anarcocapitalismo",
        "descripcion": "Propone sustituir el Estado por propiedad privada, contratos y servicios voluntarios de mercado.\nEs un nicho ideológico presente en debates digitales en español, no una preferencia entre monarquía y república.",
        "stats": {
          "eje_territorial": 50,
          "eje_estado": 50,
          "eje_economia": 0,
          "eje_sociedad": 50,
          "eje_memoria": 50,
          "eje_rural": 50,
          "eje_fiscal": 0,
          "eje_inmigracion": 50,
          "eje_religion": 50,
          "eje_ecologia": 50,
          "eje_europa": 50,
          "eje_libertades": 100
        }
      },
      {
        "nombre": "Ciberlibertarismo",
        "descripcion": "Prioriza privacidad digital, criptografía, expresión libre y autonomía de las comunidades en internet.\nEs una corriente transnacional reconocible en debates en español; no determina por sí sola una política fiscal o territorial.",
        "stats": {
          "eje_territorial": 50,
          "eje_estado": 50,
          "eje_economia": 50,
          "eje_sociedad": 75,
          "eje_memoria": 50,
          "eje_rural": 50,
          "eje_fiscal": 50,
          "eje_inmigracion": 50,
          "eje_religion": 90,
          "eje_ecologia": 50,
          "eje_europa": 50,
          "eje_libertades": 100
        }
      }
    ]
  }
};
