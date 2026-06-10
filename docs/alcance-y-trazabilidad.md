# Alcance y trazabilidad del prototipo

## 1. Proposito

Este documento relaciona los requisitos funcionales y casos de uso aprobados con las pantallas implementadas en el prototipo Iliturgi AR. Su objetivo es justificar el alcance real de la entrega y diferenciar entre funcionalidad implementada, simulada y prevista para una fase posterior.

## 2. Modulos funcionales aprobados

| Modulo | Ambito | Estado en prototipo |
| --- | --- | --- |
| A | Gestion de usuarios y acceso | Prototipado visual y flujo de invitado. |
| B | Navegacion y posicionamiento SIG | Implementado parcialmente con Leaflet. |
| C | Visualizacion inmersiva y RA | Implementado como visor 3D y acceso RA web. |
| D | Recorridos historicos | Prototipado funcional con rutas e hitos. |
| E | Contenidos culturales y multimedia | Prototipado mediante fichas, POI y audio simulado. |
| F | Gamificacion e interactividad | Representado parcialmente en perfil/progreso. |
| G | Administracion y CMS | Documentado como evolucion futura. |

## 3. Trazabilidad de casos de uso

| Caso de uso | Nombre | Estado | Pantalla relacionada | Observacion |
| --- | --- | --- | --- | --- |
| CU-01 | Acceder en modo invitado | Implementado | `index.html`, `home.html`, `acceso.html` | El acceso invitado permite entrar sin registro real. |
| CU-02 | Registrarse en la plataforma | Simulado | `acceso.html` | Existe accion demostrativa, sin backend. |
| CU-03 | Iniciar sesion | Simulado | `acceso.html` | El formulario redirige al prototipo. |
| CU-06 | Gestionar preferencias de cookies | Previsto | `ajustes.html` | Se recomienda ampliar con bloque especifico de privacidad/cookies. |
| CU-08 | Gestionar preferencias de usuario | Prototipado | `ajustes.html` | Incluye accesibilidad y preferencias visuales. |
| CU-09 | Consultar ayuda mediante chatbot | Previsto | No implementado | Puede incorporarse como asistente contextual futuro. |
| CU-11 | Consultar mapa interactivo | Implementado | `mapa.html` | Integrado con Leaflet y OpenStreetMap. |
| CU-12 | Visualizar ubicacion actual | Simulado | `mapa.html` | Se muestra estado GPS, sin API real de geolocalizacion. |
| CU-13 | Navegar hacia un punto de interes | Prototipado | `mapa.html`, `detalle-poi.html` | Los marcadores enlazan a ficha y RA. |
| CU-14 | Consultar puntos cercanos | Prototipado | `home.html`, `mapa.html` | Se muestra aviso de proximidad simulado. |
| CU-15 | Acceder mediante codigo QR | Previsto | No implementado | Requiere generacion/lectura QR. |
| CU-16 | Visualizar contenido en RA | Prototipado | `vista-ra.html` | model-viewer permite visor 3D y boton RA si el dispositivo lo soporta. |
| CU-17 | Explorar modelo tridimensional | Implementado | `vista-ra.html` | El modelo se puede rotar y explorar. |
| CU-18 | Cambiar periodo historico | Prototipado | `vista-ra.html` | La linea temporal es visual, no interactiva todavia. |
| CU-19 | Activar/desactivar modo inmersivo | Prototipado | `vista-ra.html` | Boton RA y retorno a home. |
| CU-20 | Adaptar calidad de renderizado | Previsto | `vista-ra.html` | model-viewer ofrece base tecnica, falta logica adaptativa. |
| CU-21 | Iniciar recorrido tematico | Implementado parcial | `recorridos.html`, `mapa.html` | Existen rutas e inicio mediante enlaces. |
| CU-22 | Consultar linea temporal | Prototipado | `vista-ra.html`, `recorridos.html` | Se muestra linea temporal visual. |
| CU-23 | Crear recorrido personalizado | Previsto | `recorridos.html` | Se presenta como futura ampliacion. |
| CU-24 | Registrar progreso de recorrido | Simulado | `recorridos.html`, `perfil.html` | Progreso visual sin persistencia real. |
| CU-25 | Pausar y reanudar recorrido | Previsto | `recorridos.html` | Requiere estado persistente. |
| CU-26 | Exportar resumen | Previsto | No implementado | Requiere generacion de reporte. |
| CU-27 | Consultar ficha historica de POI | Implementado parcial | `detalle-poi.html` | Ficha con texto, acciones y accesibilidad. |
| CU-28 | Reproducir contenido multimedia | Simulado | `detalle-poi.html` | Audio representado visualmente. |
| CU-29 | Filtrar puntos de interes | Prototipado | `mapa.html` | Filtros visibles, falta logica de filtrado. |
| CU-30 | Buscar contenidos historicos | Prototipado | `home.html` | Buscador visible sin motor real. |
| CU-31 | Compartir contenido cultural | Previsto | No implementado | Puede anadirse con Web Share API. |
| CU-32 | Consultar informacion contextual mediante chatbot | Previsto | No implementado | Se documenta como extension. |
| CU-33 | Realizar actividad interactiva | Previsto | No implementado | Requiere cuestionario funcional. |
| CU-34 | Completar cuestionario educativo | Previsto | No implementado | Asociado al modulo F. |
| CU-35 | Obtener insignias digitales | Simulado | `perfil.html` | El perfil muestra progreso, no insignias completas. |
| CU-36 | Consultar puntuacion y progreso | Prototipado | `perfil.html`, `recorridos.html` | Estadisticas visuales simuladas. |
| CU-37 | Ayuda contextual en actividades | Previsto | No implementado | Depende de chatbot. |
| CU-38 | Gestionar contenidos historicos | Futuro | No implementado | Requiere CMS/backend. |
| CU-39 | Gestionar recorridos historicos | Futuro | No implementado | Requiere panel administrador. |
| CU-40 | Gestionar recursos multimedia | Futuro | No implementado | Requiere CMS. |
| CU-41 | Gestionar usuarios y roles | Futuro | No implementado | Requiere autenticacion y roles. |
| CU-42 | Consultar estadisticas de uso | Futuro | No implementado | Requiere analitica y datos. |
| CU-43 | Gestionar versiones de contenidos | Futuro | No implementado | Relacionado con BD/CMS. |
| CU-44 | Previsualizar contenidos | Futuro | No implementado | Requiere flujo editorial. |
| CU-45 | Programar publicacion | Futuro | No implementado | Requiere CMS. |
| CU-46 | Recibir recomendaciones de recorrido | Prototipado | `home.html`, `recorridos.html` | Hay recorrido recomendado fijo. |

## 4. Correspondencia con requisitos funcionales

| Bloque de requisitos | Requisitos principales | Cobertura |
| --- | --- | --- |
| Gestion de usuarios y acceso | RF-01 a RF-14 | Acceso invitado, acceso simulado, preferencias y perfil demostrativo. |
| Visualizacion inmersiva | RF-15 a RF-22 | Visor 3D, boton RA, modo alternativo mediante modelo web. |
| Posicionamiento y navegacion | RF-23 a RF-35 | Mapa Leaflet, marcadores y proximidad simulada. |
| Recorridos temporales | RF-36 a RF-44 | Rutas predefinidas, progreso y secuencia de hitos simulados. |
| Contenidos e informacion | RF-45 a RF-53 | Fichas POI, buscador visible, filtros y contenido multimedia simulado. |
| Gamificacion | RF-54 a RF-59 | Progreso representado, actividades e insignias como ampliacion futura. |
| Administracion y CMS | RF-60 a RF-67 | Documentado en BD y alcance futuro. |

## 5. Criterios profesionales aplicados

- Se evita sobredimensionar el prototipo: las funciones sin backend se declaran como simuladas o previstas.
- Se mantiene trazabilidad entre requisitos, casos de uso, pantallas y base de datos.
- Se prioriza diseno responsive y accesibilidad, de acuerdo con el objetivo de acceso movil.
- Se emplean librerias ligeras y abiertas: Leaflet, OpenStreetMap y model-viewer.

## 6. Evolucion propuesta

1. Implementar filtrado real de POI en `mapa.html`.
2. Incorporar consentimiento de cookies y privacidad en `ajustes.html`.
3. Crear actividad interactiva minima en `recorridos.html` o `perfil.html`.
4. Conectar los POI y recorridos a una fuente JSON local como paso previo al backend.
5. Desarrollar un CMS en fase posterior conforme al modulo G.
