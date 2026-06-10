# Iliturgi AR

Prototipo web responsive para la difusion del patrimonio historico y arqueologico de Iliturgi mediante mapa interactivo, recorridos tematicos, contenidos culturales y una vista demostrativa de realidad aumentada.

El proyecto se plantea como una entrega de practicas profesionales de master. Por tanto, no se limita a una maqueta visual: se acompana de requisitos funcionales, casos de uso, diseno de base de datos y documentacion de alcance.

## Enlace publico

https://dainy93.github.io/Iliturgi-new07-06-2026/

## Objetivo general

Validar un prototipo web accesible desde navegador que permita explorar puntos de interes patrimonial, consultar contenidos historicos, iniciar recorridos y acceder a experiencias de visualizacion inmersiva ligera.

## Tecnologias empleadas

- HTML5 para la estructura de pantallas.
- CSS3 responsive para adaptacion movil, navegacion inferior y estados visuales.
- JavaScript para interacciones, preferencias de accesibilidad y simulacion de flujos.
- Leaflet para el mapa interactivo.
- OpenStreetMap como base cartografica abierta.
- model-viewer para visualizacion 3D y acceso a realidad aumentada web.
- GitHub Pages para despliegue estatico.

## Pantallas del prototipo

| Pantalla | Funcion |
| --- | --- |
| `index.html` | Bienvenida y acceso al prototipo. |
| `home.html` | Panel principal con accesos rapidos, POI destacados y recorrido recomendado. |
| `mapa.html` | Mapa Leaflet con puntos de interes patrimonial. |
| `detalle-poi.html` | Ficha historica de punto de interes. |
| `recorridos.html` | Recorridos historicos, progreso y secuencia de hitos. |
| `vista-ra.html` | Visualizacion 3D y acceso demostrativo a RA. |
| `perfil.html` | Actividad reciente, progreso y datos de usuario simulados. |
| `ajustes.html` | Preferencias, accesibilidad y opciones de experiencia. |
| `acceso.html` | Flujo demostrativo de acceso e invitado. |

## Documentacion del proyecto

- [Alcance y trazabilidad](docs/alcance-y-trazabilidad.md)
- [Diseno de base de datos](docs/diseno-base-datos.md)
- [Diseno de BD resumido](dise%C3%B1o%20BD.md)

## Requisitos y casos de uso cubiertos

El prototipo se alinea con los modulos definidos en los casos de uso aprobados:

- Modulo A: gestion de usuarios y acceso.
- Modulo B: navegacion y posicionamiento SIG.
- Modulo C: visualizacion inmersiva y realidad aumentada.
- Modulo D: recorridos historicos.
- Modulo E: contenidos culturales y multimedia.
- Modulo F: gamificacion e interactividad.
- Modulo G: administracion y CMS.

La implementacion actual cubre de forma funcional o demostrativa los modulos A-E y parte del modulo F. El modulo G se documenta como alcance futuro, ya que requiere backend y panel administrativo.

## Accesibilidad y adaptacion movil

El prototipo prioriza:

- Diseno responsive para movil, tablet y escritorio.
- Navegacion inferior en pantallas internas.
- Controles `A` y `A+` para tamano de texto escalable.
- Persistencia de preferencia de texto mediante almacenamiento local.
- Estados de foco visibles.
- Etiquetas accesibles en controles de la vista RA.

## Alcance actual

Este repositorio contiene un prototipo funcional de alta fidelidad. No incluye backend real, autenticacion productiva ni persistencia en base de datos. Los datos se simulan en el frontend, pero la estructura de pantallas se ha preparado para corresponder con las entidades del modelo de datos aprobado.

## Limitaciones conocidas

- El mapa depende de conexion a internet para cargar teselas de OpenStreetMap.
- La RA depende de la compatibilidad del navegador y del dispositivo.
- La autenticacion, el CMS, la gamificacion completa y la sincronizacion de progreso quedan como lineas de desarrollo futuro.
