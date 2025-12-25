# 📋 Requisitos de Software
## Mapa de Tianguis - Querétaro

**Versión:** 1.0  
**Fecha:** Diciembre 2025  
**Autor:** José María Romero Dávila

---

## 1. Descripción General

Sistema web progresivo (PWA) para visualizar tianguis del municipio de Querétaro en un mapa interactivo, permitiendo a inspectores municipales acceder a información detallada desde dispositivos móviles, con funcionalidad offline.

---

## 2. Requisitos Funcionales

### 2.1 Visualización del Mapa

**RF-01: Mapa Interactivo Base**
- El sistema debe mostrar un mapa interactivo del municipio de Querétaro
- Debe usar tiles de OpenStreetMap (gratuito)
- Debe soportar zoom táctil (pinch) y navegación por arrastre
- Tiempo de carga inicial: < 3 segundos en 4G

**RF-02: Polígonos de Tianguis**
- Cada tianguis debe representarse como un **polígono** que delimita su área física
- Los polígonos deben tener colores según la **federación/organización** a la que pertenece el tianguis
- Al tocar un polígono, debe mostrar información del tianguis
- Debe incluir leyenda de colores por federación

**RF-03: Ubicación del Usuario**
- Debe mostrar la ubicación actual del usuario (con permiso)
- Botón para centrar el mapa en la ubicación actual

---

### 2.2 Sistema de Filtros

**RF-04: Filtro por Delegación**
- Filtrar tianguis por las 7 delegaciones municipales:
  - Centro Histórico
  - Felipe Carrillo Puerto
  - Felix Osores Sotomayor
  - Santa Rosa Jáuregui
  - Epimenio González
  - Josefa Vergara y Hernández
  - Villa Cayetano Rubio
- Permitir selección múltiple
- Mostrar contador de tianguis por delegación

**RF-05: Filtro por Día de Operación**
- Filtrar por día de la semana (Lunes a Domingo)
- Resaltar el día actual por defecto
- Permitir selección múltiple
- Mostrar tianguis que operan en al menos uno de los días seleccionados

**RF-06: Filtro por Tipo**
- Filtrar por tipo de tianguis:
  - Matutino (06:00-14:00)
  - Diurno (10:00-18:00)
  - Nocturno (18:00-23:00)
- Permitir selección múltiple

**RF-07: Filtro por Federación/Organización**
- Filtrar por federación u organización a la que pertenece el tianguis
- Debe coincidir con los colores de los polígonos
- Mostrar contador de tianguis por federación

**RF-08: Combinación de Filtros**
- Los filtros deben poder combinarse (lógica AND)
- Los filtros deben aplicarse en < 500ms
- Debe haber opción para limpiar todos los filtros

---

### 2.3 Información Detallada

**RF-09: Panel de Información del Tianguis**

Al seleccionar un tianguis, debe mostrar:

**Datos Básicos:**
- Nombre del tianguis
- Nombre de la unión
- Ubicación exacta (dirección)
- Delegación
- Días de operación
- Tipo (Matutino/Diurno/Nocturno)
- Horario
- Número de agremiados
- Federación/organización a la que pertenece

**Galería de Imágenes:**
- Imágenes del tianguis (almacenadas en Google Drive)
- Visualización tipo carrusel o galería
- Lazy loading de imágenes
- Placeholder mientras cargan

**Estructura Jerárquica:**
- Presidente: Nombre, teléfono, foto (opcional)
- Representante: Nombre, teléfono, foto (opcional)
- Tesorero: Nombre, teléfono, foto (opcional)

**Observaciones:**
- Campo de texto libre con notas relevantes

**RF-10: Enlaces de Contacto**
- Los números telefónicos deben ser clickeables
- Formato: `tel:4421234567` para abrir marcador
- Debe funcionar en Android e iOS

**RF-11: Cerrar Panel**
- Botón visible para cerrar el panel
- Cerrar al tocar fuera del panel (opcional)
- Animación suave de cierre

---

### 2.4 Búsqueda

**RF-12: Búsqueda de Tianguis**
- Barra de búsqueda visible
- Buscar por nombre del tianguis
- Buscar por ubicación/dirección
- Autocompletado mientras se escribe
- Al seleccionar resultado:
  - Centrar mapa en el tianguis
  - Resaltar el polígono
  - Abrir panel de información

---

### 2.5 PWA (Progressive Web App)

**RF-13: Instalación como PWA**
- Manifest.json válido
- Service Worker registrado
- Iconos en tamaños: 192x192, 512x512
- Instalable en Android (Chrome/Edge)
- Instalable en iOS (Safari)
- Funcionar en modo standalone (sin barra de navegador)

**RF-14: Funcionalidad Offline**
- Después de la primera carga, funcionar sin internet
- Cachear todos los datos de tianguis
- Cachear tiles del mapa para área de Querétaro (zoom 10-16)
- Sincronizar datos al recuperar conexión
- Mostrar indicador de estado (online/offline)

---

### 2.6 Administración de Datos

**RF-15: Actualización de Datos**
- Datos almacenados en archivos JSON editables
- Estructura de datos documentada
- Validación de formato JSON
- Despliegue automático tras commit (GitHub Pages)
- Tiempo de propagación: < 2 minutos

**RF-16: Archivos de Datos**
- `tianguis.json`: Lista completa de tianguis
- `federaciones.json`: Catálogo de federaciones con colores
- `delegaciones.json`: Información de las 7 delegaciones
- `config.json`: Configuración general de la app

---

## 3. Requisitos No Funcionales

### 3.1 Rendimiento

**RNF-01: Tiempos de Respuesta**
- Carga inicial: < 3 segundos (4G)
- Carga inicial: < 5 segundos (3G)
- First Contentful Paint: < 1.5 segundos
- Time to Interactive: < 3 segundos
- Aplicación de filtros: < 500ms
- Apertura de panel: < 300ms

**RNF-02: Uso de Recursos**
- Consumo de RAM: < 150MB en móviles
- Tamaño de caché: < 50MB
- Transferencia inicial: < 2MB
- Imágenes optimizadas (WebP preferido)

**RNF-03: Capacidad**
- Soportar hasta 500 tianguis simultáneamente
- Renderizar hasta 100 polígonos visibles sin lag
- Animaciones a 60 FPS

---

### 3.2 Compatibilidad

**RNF-04: Navegadores Móviles**
- Chrome Android 100+ (últimas 2 versiones)
- Safari iOS 15+ (últimas 2 versiones)
- Edge Android (última versión)
- Firefox Android (última versión)

**RNF-05: Dispositivos**
- Android 8.0+ (API 26+)
- iOS 13.0+
- Resoluciones: 320px a 1920px de ancho
- Orientación vertical y horizontal

**RNF-06: Diseño Responsive**
- Mobile-first
- Elementos táctiles mínimo 44x44px
- Texto legible sin zoom (mínimo 16px)
- Sin scroll horizontal
- Breakpoints: 320px, 375px, 768px, 1024px

---

### 3.3 Seguridad y Privacidad

**RNF-07: Seguridad**
- Conexión HTTPS obligatoria (TLS 1.2+)
- Headers de seguridad:
  - Content-Security-Policy
  - X-Content-Type-Options: nosniff
  - X-Frame-Options: DENY
  - Referrer-Policy

**RNF-08: Privacidad**
- Sin registro de usuarios
- Sin recolección de datos personales
- Sin cookies de tracking
- Sin analytics invasivos
- Solo datos públicos laborales

---

### 3.4 Disponibilidad

**RNF-09: Uptime**
- 99% de disponibilidad mensual (GitHub Pages SLA)
- Recuperación automática ante fallas

**RNF-10: Funcionalidad Core Offline**
- 100% de funcionalidad básica disponible offline
- Datos de tianguis disponibles offline
- Mapa disponible offline (área cacheada)

---

### 3.5 Usabilidad

**RNF-11: Facilidad de Uso**
- Intuitivo sin entrenamiento previo
- Tiempo para encontrar un tianguis: < 30 segundos
- Máximo 2 clics para información completa
- Interfaz en español

**RNF-12: Accesibilidad**
- Contraste de colores WCAG 2.1 AA
- Texto normal: contraste ≥ 4.5:1
- Navegación por teclado funcional
- Textos alternativos en imágenes

---

### 3.6 Mantenibilidad

**RNF-13: Código**
- HTML5, CSS3, JavaScript Vanilla (ES6+)
- Código comentado en español
- Estructura modular
- Sin dependencias innecesarias

**RNF-14: Documentación**
- README completo
- Documentación de estructura de datos
- Guía de instalación para usuarios
- Guía de actualización para administrador

---

### 3.7 Costos

**RNF-15: Costo Cero**
- Hosting: GitHub Pages (gratuito)
- Mapas: OpenStreetMap (gratuito)
- Imágenes: Google Drive (gratuito hasta 15GB)
- Sin servicios de pago
- Sin infraestructura propia

---

## 4. Estructura de Datos

### 4.1 Tianguis (tianguis.json)

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
      "https://drive.google.com/uc?export=view&id=YYYYYYYYYYYYY"
    ],
    "estructura": {
      "presidente": "https://drive.google.com/uc?export=view&id=AAAAAA",
      "representante": null,
      "tesorero": null
    }
  },
  "estructura": {
    "presidente": {
      "nombre": "Juan Pérez",
      "telefono": "4421234567"
    },
    "representante": {
      "nombre": "María García",
      "telefono": "4427654321"
    },
    "tesorero": {
      "nombre": "Pedro López",
      "telefono": "4425558888"
    }
  },
  "observaciones": "Ubicación fija, cuenta con baños químicos"
}
```

**Campos obligatorios:**
- id, nombre, ubicacion, delegacion, coordenadas.centro, coordenadas.poligono, dias, tipo, horario, agremiados, federacion

**Campos opcionales:**
- nombreUnion, nombreFederacion, imagenes, estructura, observaciones

---

### 4.2 Federaciones (federaciones.json)

```json
{
  "id": "FECOTAQ",
  "nombre": "Federación de Comerciantes de Tianguis de Querétaro",
  "color": "#3B82F6",
  "descripcion": "Federación principal de comerciantes"
}
```

---

### 4.3 Delegaciones (delegaciones.json)

```json
{
  "id": "centro-historico",
  "nombre": "Centro Histórico",
  "coordenadas": {
    "lat": 20.5881,
    "lng": -100.3881
  },
  "zoom": 14
}
```

---

## 5. Stack Tecnológico

### 5.1 Frontend
- **HTML5**: Estructura semántica
- **CSS3**: Estilos y responsive design
- **JavaScript Vanilla (ES6+)**: Lógica de la aplicación
- **Leaflet.js**: Librería de mapas interactivos

### 5.2 PWA
- **Service Worker**: Funcionalidad offline
- **Manifest.json**: Instalación como app
- **Cache API**: Almacenamiento local

### 5.3 Hosting
- **GitHub Pages**: Hosting gratuito con HTTPS
- **GitHub Actions**: Despliegue automático (opcional)

### 5.4 Almacenamiento
- **JSON estático**: Base de datos
- **Google Drive**: Almacenamiento de imágenes

---

## 6. Flujos de Usuario Principales

### 6.1 Flujo: Encontrar un Tianguis
1. Usuario abre la app
2. Mapa carga con todos los tianguis (polígonos)
3. Usuario aplica filtros (delegación, día, tipo)
4. Usuario toca un polígono
5. Se abre panel con información completa
6. Usuario puede llamar a contactos directamente

### 6.2 Flujo: Instalar PWA
1. Usuario abre la app en el navegador
2. Aparece prompt de instalación
3. Usuario acepta instalar
4. Icono aparece en pantalla de inicio
5. Usuario abre desde el icono (modo standalone)

### 6.3 Flujo: Actualizar Datos (Administrador)
1. Administrador edita `tianguis.json`
2. Valida formato JSON
3. Hace commit y push al repositorio
4. GitHub Pages despliega automáticamente
5. Cambios visibles en < 2 minutos

---

## 7. Criterios de Aceptación del MVP

✅ **Mapa funcional** con polígonos de tianguis  
✅ **Filtros** por delegación, día y tipo funcionando  
✅ **Panel de información** completo con imágenes  
✅ **Enlaces telefónicos** clickeables  
✅ **PWA instalable** en Android e iOS  
✅ **Funcionalidad offline** completa  
✅ **Tiempo de carga** < 3 segundos en 4G  
✅ **Responsive** desde 320px de ancho  
✅ **Datos actualizables** vía JSON  
✅ **Costo** $0 MXN  

---

## 8. Fuera del Alcance (Versión 1.0)

❌ Backend con base de datos  
❌ Autenticación de usuarios  
❌ Edición de datos desde la app  
❌ Reportes y estadísticas avanzadas  
❌ Notificaciones push  
❌ Chat o mensajería  
❌ Integración con otros sistemas municipales  

---

## 9. Próximos Pasos

1. **Diseño de interfaz**: Wireframes y mockups
2. **Configuración del proyecto**: Estructura de carpetas
3. **Desarrollo del mapa**: Implementar Leaflet con polígonos
4. **Sistema de filtros**: Implementar lógica de filtrado
5. **Panel de información**: Diseño y funcionalidad
6. **PWA**: Service Worker y manifest
7. **Pruebas**: En dispositivos reales
8. **Despliegue**: GitHub Pages
9. **Documentación**: Guías de usuario y administrador

---

**Documento preparado por:** José María Romero Dávila  
**Departamento:** Dirección de Inspección en Comercio y Espectáculos  
**Municipio de Querétaro**  
**Fecha:** Diciembre 2025
