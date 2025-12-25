# 🗺️ Mapa de Tianguis - Querétaro

Sistema de visualización para la Dirección de Inspección en Comercio y Espectáculos del Municipio de Querétaro.

## 🎯 Objetivo
Proporcionar a inspectores acceso rápido y confiable a información de tianguis desde sus dispositivos móviles, optimizando la gestión y supervisión en campo.

## ✨ Características Principales

### 🗺️ Visualización Geográfica
- Mapa interactivo con todos los tianguis del municipio
- **Polígonos delimitadores** que muestran el área física de cada tianguis
- Polígonos coloreados por **federación/organización** a la que pertenece el tianguis
- Visualización por delegación (7 zonas)
- Zoom táctil y navegación intuitiva

### 🔍 Sistema de Filtros
- **Por Delegación:** Centro Histórico, Felipe Carrillo Puerto, Felix Osores Sotomayor, Santa Rosa Jáuregui, Epimenio González, Josefa Vergara y Hernández, Villa Cayetano Rubio
- **Por Días de Operación:** Lunes a Domingo
- **Por Tipo:** Matutino, Nocturno, Diurno
- **Por Federación/Organización:** Filtrado visual por color de polígonos

### 👥 Información Detallada
Al seleccionar un tianguis se muestra:
- Datos básicos (nombre, ubicación, horario)
- **Galería de imágenes** del tianguis (almacenadas en Google Drive)
- **Fotos de la estructura** jerárquica (opcional)
- Estructura jerárquica completa
- Contactos telefónicos directos
- Número de agremiados
- Observaciones relevantes

### 📱 Acceso Móvil
- **PWA (Aplicación Web Progresiva)**
- Funciona sin conexión a internet
- Instalable en pantalla de inicio
- Optimizada para teléfonos Android/iOS
- Diseño mobile-first

## 🚀 Acceso Rápido

**URL de la aplicación:** `https://github.com/romerodavilajm-arch/mapa-tianguis-qro.git`

**Código QR de acceso:**
![QR Code](https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://github.com/romerodavilajm-arch/mapa-tianguis-qro.git)

## 📊 Estructura de Datos

### Tianguis (Ejemplo)
```json
{
  "id": "TQ-001",
  "nombre": "Tianguis La Cruz",
  "nombreUnion": "Unión de Comerciantes La Cruz",
  "ubicacion": "Entre Corregidora y 5 de Mayo, Centro",
  "delegacion": "Centro Histórico",
  "coordenadas": {
    "centro": {
      "lat": 20.5881,
      "lng": -100.3881
    },
    "poligono": [
      {"lat": 20.5885, "lng": -100.3885},
      {"lat": 20.5885, "lng": -100.3877},
      {"lat": 20.5877, "lng": -100.3877},
      {"lat": 20.5877, "lng": -100.3885}
    ]
  },
  "dias": ["Lunes", "Jueves"],
  "tipo": "Matutino",
  "horario": "08:00-14:00",
  "agremiados": 120,
  "federacion": "FECOTAQ",
  "nombreFederacion": "Federación de Comerciantes de Tianguis de Querétaro",
  "imagenes": {
    "tianguis": [
      "https://drive.google.com/uc?export=view&id=XXXXXXXXXXXXX",
      "https://drive.google.com/uc?export=view&id=YYYYYYYYYYYYY",
      "https://drive.google.com/uc?export=view&id=ZZZZZZZZZZZZZ"
    ],
    "estructura": {
      "presidente": "https://drive.google.com/uc?export=view&id=AAAAAAAAAAAA",
      "representante": "https://drive.google.com/uc?export=view&id=BBBBBBBBBBBBB",
      "tesorero": null
    }
  },
  "estructura": {
    "presidente": {"nombre": "Juan Pérez", "telefono": "4421234567"},
    "representante": {"nombre": "María García", "telefono": "4427654321"},
    "tesorero": {"nombre": "Pedro López", "telefono": "4425558888"}
  },
  "observaciones": "Ubicación fija, cuenta con baños químicos"
}
```

**Nota sobre la estructura organizacional:**
- Cada **tianguis** es una **unión** (organización local de comerciantes)
- Cada unión tiene su propia estructura jerárquica (presidente, representante, tesorero)
- Varias uniones pueden pertenecer a una **federación u organización** más grande
- El color del polígono en el mapa representa la federación/organización, no el tianguis individual

**Nota sobre las imágenes:**
- Las imágenes se almacenan en **Google Drive** para minimizar costos y tamaño del repositorio
- `imagenes.tianguis`: Array de URLs de fotos del tianguis (vista general, puestos, etc.)
- `imagenes.estructura`: Objeto con fotos opcionales de presidente, representante y tesorero
- Usar URLs con formato: `https://drive.google.com/uc?export=view&id=FILE_ID`
- Para obtener el FILE_ID: Compartir archivo → "Cualquiera con el enlace" → Copiar ID del enlace
- Si no hay imagen disponible, usar `null` o array vacío `[]`

## 🛠️ Tecnologías Utilizadas

| Tecnología | Uso | Beneficio |
|------------|-----|-----------|
| **HTML5/CSS3/JS Vanilla** | Frontend principal | Ligero, rápido, sin dependencias |
| **Leaflet.js** | Mapas interactivos | OpenStreetMap gratuito, móvil-friendly |
| **PWA Standards** | Funcionalidad offline | Instalable como app nativa |
| **GitHub Pages** | Hosting y despliegue | Gratuito, HTTPS, automático |
| **JSON estático** | Base de datos | Simple, editable, versionable |

## 📁 Estructura del Proyecto

```
mapa-tianguis-queretaro/
├── public/              # Archivos públicos de la app
│   ├── index.html      # Aplicación principal
│   ├── data/           # Datos en formato JSON
│   └── assets/         # Imágenes y recursos
├── docs/               # Documentación completa
└── README.md           # Este archivo
```

## 👥 Para Inspectores

### Instalación en Android
1. Abrir Chrome/Edge en tu celular
2. Navegar a la URL de la aplicación
3. Tocar menú (⋮) → "Añadir a pantalla de inicio"
4. La app aparecerá como icono en tu pantalla

### Instalación en iPhone
1. Abrir Safari en tu iPhone
2. Navegar a la URL de la aplicación
3. Tocar el ícono de compartir (↑)
4. Desplazar y seleccionar "Añadir a pantalla de inicio"

### Uso Diario
1. Abrir la aplicación (icono en pantalla)
2. El mapa cargará con tu ubicación actual
3. Usar filtros para encontrar tianguis específicos
4. Tocar cualquier **polígono** (área del tianguis) para ver información completa

## 👨‍💼 Para Administrador

### Actualización de Datos
1. Editar archivos JSON en `/public/data/`
2. Subir cambios al repositorio
3. Los datos se actualizan automáticamente en 1-2 minutos

### Archivos Clave
- `tianguis.json` - Lista completa de tianguis
- `config.json` - Configuración de filtros y opciones
- `delegaciones.json` - Información de las 7 delegaciones

## 🔒 Seguridad y Privacidad

- **Sin registro de usuarios:** Acceso libre para inspectores
- **Datos públicos:** Solo información de contacto laboral
- **Sin cookies:** No se almacena información personal
- **HTTPS:** Conexión segura en GitHub Pages

## 📈 Métricas de Éxito

- **Adopción:** 5+ inspectores usando simultáneamente
- **Rendimiento:** Carga < 3 segundos en 4G
- **Confiabilidad:** 99% uptime (GitHub Pages)
- **Usabilidad:** Interface intuitiva sin entrenamiento

## 🆓 Costo del Proyecto

| Componente | Costo | Detalle |
|------------|-------|---------|
| Desarrollo | $0 | Código abierto proporcionado |
| Hosting | $0 | GitHub Pages gratuito |
| Mapas | $0 | OpenStreetMap tiles gratuitos |
| Dominio | $0 | Subdominio de GitHub |
| **TOTAL** | **$0 MXN** | Sin inversión económica |

## 🤝 Contribución

Este es un proyecto interno de la Dirección de Inspección en Comercio y Espectáculos. Para sugerencias o reporte de problemas:

1. Contactar al administrador del sistema
2. Reportar datos incorrectos o desactualizados
3. Sugerir nuevas funcionalidades

## 📞 Contacto y Soporte

**Administrador del Sistema:** José María Romero Dávila, Inspector
**Departamento:** Dirección de Inspección en Comercio y Espectáculos  
**Municipio de Querétaro**  
**Actualización:** Enero 2026

---

## 🚧 Estado del Proyecto

**Versión Actual:** 1.0.0 (MVP)  
**Última Actualización:** 2025-12-30  
**Próxima Versión:** Filtros avanzados y estadísticas  

📌 *Sistema operativo y en constante mejora*
