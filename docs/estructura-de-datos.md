# 📊 Documentación de Estructura de Datos
## Mapa de Tianguis - Querétaro

**Versión:** 1.0  
**Fecha:** Diciembre 2025  
**Autor:** José María Romero Dávila

---

## 📑 Índice

1. [Introducción](#introducción)
2. [Archivos de Datos](#archivos-de-datos)
3. [Tianguis (tianguis.json)](#tianguis-tianguisjson)
4. [Federaciones (federaciones.json)](#federaciones-federacionesjson)
5. [Delegaciones (delegaciones.json)](#delegaciones-delegacionesjson)
6. [Configuración (config.json)](#configuración-configjson)
7. [Validación de Datos](#validación-de-datos)
8. [Guía de Actualización](#guía-de-actualización)
9. [Ejemplos Completos](#ejemplos-completos)
10. [Preguntas Frecuentes](#preguntas-frecuentes)

---

## Introducción

Este documento describe la estructura de datos del sistema **Mapa de Tianguis - Querétaro**. Los datos se almacenan en archivos JSON estáticos ubicados en la carpeta `/public/data/`.

### Conceptos Clave

- **Tianguis**: Mercado ambulante que opera en días específicos. Cada tianguis es una **unión** (organización local de comerciantes)
- **Unión**: Organización local de comerciantes de un tianguis específico, con su propia estructura jerárquica
- **Federación/Organización**: Agrupación de varias uniones/tianguis. Ejemplo: FECOTAQ
- **Polígono**: Área geográfica delimitada que representa el espacio físico del tianguis
- **Delegación**: División administrativa del municipio (7 zonas)

### Jerarquía Organizacional

```
Federación/Organización (Ej: FECOTAQ)
    ├── Tianguis/Unión 1 (Ej: Tianguis La Cruz)
    │   ├── Presidente
    │   ├── Representante
    │   └── Tesorero
    ├── Tianguis/Unión 2
    └── Tianguis/Unión 3
```

---

## Archivos de Datos

Todos los archivos deben estar en formato JSON válido y ubicados en `/public/data/`.

| Archivo | Descripción | Obligatorio |
|---------|-------------|-------------|
| `tianguis.json` | Lista completa de tianguis | ✅ Sí |
| `federaciones.json` | Catálogo de federaciones con colores | ✅ Sí |
| `delegaciones.json` | Información de las 7 delegaciones | ✅ Sí |
| `config.json` | Configuración general de la app | ✅ Sí |

---

## Tianguis (tianguis.json)

### Estructura del Archivo

El archivo debe contener un **array** de objetos tianguis:

```json
[
  {
    // Tianguis 1
  },
  {
    // Tianguis 2
  }
]
```

### Esquema de un Tianguis

```json
{
  "id": "string",
  "nombre": "string",
  "nombreUnion": "string (opcional)",
  "ubicacion": "string",
  "delegacion": "string",
  "coordenadas": {
    "centro": {
      "lat": number,
      "lng": number
    },
    "poligono": [
      {"lat": number, "lng": number}
    ]
  },
  "dias": ["string"],
  "tipo": "string",
  "horario": "string",
  "agremiados": number,
  "federacion": "string",
  "nombreFederacion": "string (opcional)",
  "imagenes": {
    "tianguis": ["string"],
    "estructura": {
      "presidente": "string o null",
      "representante": "string o null",
      "tesorero": "string o null"
    }
  },
  "estructura": {
    "presidente": {
      "nombre": "string",
      "telefono": "string"
    },
    "representante": {
      "nombre": "string",
      "telefono": "string"
    },
    "tesorero": {
      "nombre": "string",
      "telefono": "string"
    }
  },
  "observaciones": "string (opcional)"
}
```

### Descripción de Campos

#### Campos Obligatorios

| Campo | Tipo | Descripción | Ejemplo |
|-------|------|-------------|---------|
| `id` | string | Identificador único del tianguis | `"TQ-001"` |
| `nombre` | string | Nombre del tianguis | `"Tianguis La Cruz"` |
| `ubicacion` | string | Dirección o descripción de ubicación | `"Entre Corregidora y 5 de Mayo"` |
| `delegacion` | string | Delegación a la que pertenece | `"Centro Histórico"` |
| `coordenadas.centro.lat` | number | Latitud del centro del tianguis | `20.5881` |
| `coordenadas.centro.lng` | number | Longitud del centro del tianguis | `-100.3881` |
| `coordenadas.poligono` | array | Array de puntos que forman el polígono | Ver ejemplo abajo |
| `dias` | array | Días de operación | `["Lunes", "Jueves"]` |
| `tipo` | string | Tipo de tianguis | `"Matutino"`, `"Diurno"`, `"Nocturno"` |
| `horario` | string | Horario de operación | `"08:00-14:00"` |
| `agremiados` | number | Número de comerciantes agremiados | `120` |
| `federacion` | string | ID de la federación | `"FECOTAQ"` |

#### Campos Opcionales

| Campo | Tipo | Descripción | Ejemplo |
|-------|------|-------------|---------|
| `nombreUnion` | string | Nombre oficial de la unión | `"Unión de Comerciantes La Cruz"` |
| `nombreFederacion` | string | Nombre completo de la federación | `"Federación de Comerciantes..."` |
| `imagenes` | object | URLs de imágenes en Google Drive | Ver sección de imágenes |
| `estructura` | object | Datos de presidente, representante, tesorero | Ver ejemplo |
| `observaciones` | string | Notas adicionales | `"Cuenta con baños químicos"` |

### Coordenadas y Polígonos

#### Centro del Tianguis

Punto central usado para centrar el mapa al seleccionar el tianguis:

```json
"centro": {
  "lat": 20.5881,
  "lng": -100.3881
}
```

#### Polígono Delimitador

Array de puntos (mínimo 3) que forman el área del tianguis. Los puntos deben estar en **orden consecutivo** (sentido horario o antihorario):

```json
"poligono": [
  {"lat": 20.5885, "lng": -100.3885},  // Esquina noroeste
  {"lat": 20.5885, "lng": -100.3877},  // Esquina noreste
  {"lat": 20.5877, "lng": -100.3877},  // Esquina sureste
  {"lat": 20.5877, "lng": -100.3885}   // Esquina suroeste
]
```

**Notas importantes:**
- Mínimo 3 puntos, sin máximo
- No es necesario repetir el primer punto al final
- Usar al menos 6 decimales para precisión
- Validar que las coordenadas estén dentro de Querétaro

### Días de Operación

Array con los días en que opera el tianguis. Valores permitidos:

```json
"dias": ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
```

**Ejemplos:**
- Un solo día: `["Lunes"]`
- Varios días: `["Lunes", "Jueves"]`
- Todos los días: `["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]`

### Tipos de Tianguis

Valores permitidos para el campo `tipo`:

| Tipo | Horario Típico | Descripción |
|------|----------------|-------------|
| `"Matutino"` | 06:00-14:00 | Opera en la mañana |
| `"Diurno"` | 10:00-18:00 | Opera durante el día |
| `"Nocturno"` | 18:00-23:00 | Opera en la tarde/noche |

### Delegaciones

Valores permitidos para el campo `delegacion`:

- `"Centro Histórico"`
- `"Felipe Carrillo Puerto"`
- `"Felix Osores Sotomayor"`
- `"Santa Rosa Jáuregui"`
- `"Epimenio González"`
- `"Josefa Vergara y Hernández"`
- `"Villa Cayetano Rubio"`

### Imágenes

Las imágenes se almacenan en **Google Drive** para minimizar el tamaño del repositorio.

#### Estructura de Imágenes

```json
"imagenes": {
  "tianguis": [
    "https://drive.google.com/uc?export=view&id=FILE_ID_1",
    "https://drive.google.com/uc?export=view&id=FILE_ID_2",
    "https://drive.google.com/uc?export=view&id=FILE_ID_3"
  ],
  "estructura": {
    "presidente": "https://drive.google.com/uc?export=view&id=FILE_ID_4",
    "representante": "https://drive.google.com/uc?export=view&id=FILE_ID_5",
    "tesorero": null
  }
}
```

#### Cómo Obtener el FILE_ID de Google Drive

1. Subir la imagen a Google Drive
2. Clic derecho → "Compartir"
3. Cambiar a "Cualquiera con el enlace puede ver"
4. Copiar el enlace (formato: `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`)
5. Extraer el `FILE_ID` del enlace
6. Usar formato: `https://drive.google.com/uc?export=view&id=FILE_ID`

**Ejemplo:**
- Enlace original: `https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9i0j/view?usp=sharing`
- FILE_ID: `1a2b3c4d5e6f7g8h9i0j`
- URL final: `https://drive.google.com/uc?export=view&id=1a2b3c4d5e6f7g8h9i0j`

#### Imágenes del Tianguis

Array de URLs de fotos del tianguis:
- Vista general del tianguis
- Puestos representativos
- Señalización
- Infraestructura (baños, estacionamiento, etc.)

**Recomendaciones:**
- Máximo 5 imágenes por tianguis
- Formato: JPG o WebP
- Tamaño recomendado: 1200x800px
- Peso máximo: 500KB por imagen

Si no hay imágenes, usar array vacío:
```json
"tianguis": []
```

#### Imágenes de la Estructura

Fotos opcionales de los miembros de la estructura:

```json
"estructura": {
  "presidente": "URL o null",
  "representante": "URL o null",
  "tesorero": "URL o null"
}
```

**Recomendaciones:**
- Fotos tipo credencial o retrato
- Formato: JPG
- Tamaño: 400x400px
- Peso máximo: 200KB

Si no hay foto, usar `null`:
```json
"presidente": null
```

### Estructura Jerárquica

Información de los representantes del tianguis/unión:

```json
"estructura": {
  "presidente": {
    "nombre": "Juan Pérez García",
    "telefono": "4421234567"
  },
  "representante": {
    "nombre": "María García López",
    "telefono": "4427654321"
  },
  "tesorero": {
    "nombre": "Pedro López Martínez",
    "telefono": "4425558888"
  }
}
```

#### Formato de Teléfonos

- Solo números, sin espacios ni guiones
- Incluir código de área (442 para Querétaro)
- 10 dígitos en total
- Ejemplo: `"4421234567"`

**Formatos válidos:**
- ✅ `"4421234567"`
- ✅ `"4429876543"`

**Formatos NO válidos:**
- ❌ `"442-123-4567"` (con guiones)
- ❌ `"442 123 4567"` (con espacios)
- ❌ `"1234567"` (sin código de área)
- ❌ `"+52 442 123 4567"` (con código de país)

---

## Federaciones (federaciones.json)

### Estructura del Archivo

Array de objetos federación:

```json
[
  {
    "id": "FECOTAQ",
    "nombre": "Federación de Comerciantes de Tianguis de Querétaro",
    "nombreCorto": "FECOTAQ",
    "color": "#3B82F6",
    "descripcion": "Federación principal de comerciantes de tianguis"
  },
  {
    "id": "CROC",
    "nombre": "Confederación Revolucionaria de Obreros y Campesinos",
    "nombreCorto": "CROC",
    "color": "#EF4444",
    "descripcion": "Organización sindical nacional"
  }
]
```

### Descripción de Campos

| Campo | Tipo | Obligatorio | Descripción | Ejemplo |
|-------|------|-------------|-------------|---------|
| `id` | string | ✅ | Identificador único (usar en tianguis.json) | `"FECOTAQ"` |
| `nombre` | string | ✅ | Nombre completo de la federación | `"Federación de..."` |
| `nombreCorto` | string | ❌ | Nombre corto o siglas | `"FECOTAQ"` |
| `color` | string | ✅ | Color hexadecimal para polígonos | `"#3B82F6"` |
| `descripcion` | string | ❌ | Descripción breve | `"Federación principal..."` |

### Colores

Los colores deben ser en formato **hexadecimal** (#RRGGBB):

**Colores recomendados (distinguibles):**
```json
"#3B82F6"  // Azul
"#EF4444"  // Rojo
"#10B981"  // Verde
"#F59E0B"  // Naranja
"#8B5CF6"  // Morado
"#EC4899"  // Rosa
"#14B8A6"  // Turquesa
"#F97316"  // Naranja oscuro
```

**Evitar:**
- Colores muy claros (difíciles de ver en el mapa)
- Colores muy similares entre federaciones
- Colores que no contrasten con el mapa

### Ejemplo Completo

```json
[
  {
    "id": "FECOTAQ",
    "nombre": "Federación de Comerciantes de Tianguis de Querétaro",
    "nombreCorto": "FECOTAQ",
    "color": "#3B82F6",
    "descripcion": "Agrupa a la mayoría de tianguis del municipio"
  },
  {
    "id": "CROC",
    "nombre": "Confederación Revolucionaria de Obreros y Campesinos",
    "nombreCorto": "CROC",
    "color": "#EF4444",
    "descripcion": "Organización sindical con presencia en varios tianguis"
  },
  {
    "id": "INDEPENDIENTE",
    "nombre": "Tianguis Independientes",
    "nombreCorto": "Independiente",
    "color": "#6B7280",
    "descripcion": "Tianguis no afiliados a ninguna federación"
  }
]
```

---

## Delegaciones (delegaciones.json)

### Estructura del Archivo

Array de objetos delegación:

```json
[
  {
    "id": "centro-historico",
    "nombre": "Centro Histórico",
    "coordenadas": {
      "lat": 20.5881,
      "lng": -100.3881
    },
    "zoom": 14,
    "descripcion": "Zona centro de la ciudad"
  }
]
```

### Descripción de Campos

| Campo | Tipo | Obligatorio | Descripción | Ejemplo |
|-------|------|-------------|-------------|---------|
| `id` | string | ✅ | Identificador único (kebab-case) | `"centro-historico"` |
| `nombre` | string | ✅ | Nombre oficial de la delegación | `"Centro Histórico"` |
| `coordenadas.lat` | number | ✅ | Latitud del centro de la delegación | `20.5881` |
| `coordenadas.lng` | number | ✅ | Longitud del centro de la delegación | `-100.3881` |
| `zoom` | number | ✅ | Nivel de zoom al seleccionar (10-16) | `14` |
| `descripcion` | string | ❌ | Descripción breve | `"Zona centro..."` |

### Las 7 Delegaciones de Querétaro

```json
[
  {
    "id": "centro-historico",
    "nombre": "Centro Histórico",
    "coordenadas": {"lat": 20.5881, "lng": -100.3881},
    "zoom": 14
  },
  {
    "id": "felipe-carrillo-puerto",
    "nombre": "Felipe Carrillo Puerto",
    "coordenadas": {"lat": 20.6200, "lng": -100.3600},
    "zoom": 13
  },
  {
    "id": "felix-osores-sotomayor",
    "nombre": "Felix Osores Sotomayor",
    "coordenadas": {"lat": 20.5500, "lng": -100.3500},
    "zoom": 13
  },
  {
    "id": "santa-rosa-jauregui",
    "nombre": "Santa Rosa Jáuregui",
    "coordenadas": {"lat": 20.7500, "lng": -100.4500},
    "zoom": 12
  },
  {
    "id": "epimenio-gonzalez",
    "nombre": "Epimenio González",
    "coordenadas": {"lat": 20.5200, "lng": -100.4200},
    "zoom": 13
  },
  {
    "id": "josefa-vergara-hernandez",
    "nombre": "Josefa Vergara y Hernández",
    "coordenadas": {"lat": 20.5700, "lng": -100.4500},
    "zoom": 13
  },
  {
    "id": "villa-cayetano-rubio",
    "nombre": "Villa Cayetano Rubio",
    "coordenadas": {"lat": 20.6500, "lng": -100.4000},
    "zoom": 13
  }
]
```

**Nota:** Las coordenadas son aproximadas y deben ajustarse según la ubicación real del centro de cada delegación.

---

## Configuración (config.json)

### Estructura del Archivo

```json
{
  "mapa": {
    "centroInicial": {
      "lat": 20.5881,
      "lng": -100.3881
    },
    "zoomInicial": 12,
    "zoomMinimo": 10,
    "zoomMaximo": 18
  },
  "cache": {
    "version": "v1.0.0",
    "tilesZoomMin": 10,
    "tilesZoomMax": 16
  },
  "ui": {
    "idioma": "es",
    "tema": "light",
    "animaciones": true
  },
  "contacto": {
    "administrador": "José María Romero Dávila",
    "email": "inspector@queretaro.gob.mx",
    "telefono": "4421234567"
  }
}
```

### Descripción de Secciones

#### Mapa

Configuración del mapa inicial:

| Campo | Descripción | Valor Recomendado |
|-------|-------------|-------------------|
| `centroInicial` | Coordenadas del centro al abrir | Centro de Querétaro |
| `zoomInicial` | Nivel de zoom inicial | `12` |
| `zoomMinimo` | Zoom mínimo permitido | `10` |
| `zoomMaximo` | Zoom máximo permitido | `18` |

#### Cache

Configuración del Service Worker:

| Campo | Descripción | Valor |
|-------|-------------|-------|
| `version` | Versión del caché (cambiar al actualizar) | `"v1.0.0"` |
| `tilesZoomMin` | Zoom mínimo de tiles a cachear | `10` |
| `tilesZoomMax` | Zoom máximo de tiles a cachear | `16` |

**Nota:** Cachear tiles de zoom 10-16 para el área de Querétaro consume aproximadamente 30-40MB.

#### UI

Configuración de interfaz:

| Campo | Descripción | Valores |
|-------|-------------|---------|
| `idioma` | Idioma de la interfaz | `"es"` (español) |
| `tema` | Tema visual | `"light"`, `"dark"` |
| `animaciones` | Habilitar animaciones | `true`, `false` |

---

## Validación de Datos

### Validación Manual

Antes de hacer commit, verificar:

1. **JSON válido**: Usar [JSONLint](https://jsonlint.com/) o editor con validación
2. **Campos obligatorios**: Todos presentes
3. **Tipos de datos**: Correctos (string, number, array, object)
4. **Coordenadas**: Dentro del rango de Querétaro
5. **IDs únicos**: No duplicados
6. **Referencias**: `federacion` existe en `federaciones.json`
7. **Delegaciones**: Nombre coincide con lista oficial

### Validación Automática (Opcional)

Crear un script de validación `validate.js`:

```javascript
// Ejemplo básico de validación
const tianguis = require('./public/data/tianguis.json');
const federaciones = require('./public/data/federaciones.json');

// Validar que todas las federaciones existen
const fedIds = federaciones.map(f => f.id);
tianguis.forEach(t => {
  if (!fedIds.includes(t.federacion)) {
    console.error(`Federación no encontrada: ${t.federacion} en tianguis ${t.id}`);
  }
});

// Validar coordenadas
tianguis.forEach(t => {
  if (t.coordenadas.centro.lat < 20.0 || t.coordenadas.centro.lat > 21.0) {
    console.error(`Latitud fuera de rango en ${t.id}`);
  }
  if (t.coordenadas.centro.lng < -101.0 || t.coordenadas.centro.lng > -100.0) {
    console.error(`Longitud fuera de rango en ${t.id}`);
  }
});
```

---

## Guía de Actualización

### Agregar un Nuevo Tianguis

1. **Copiar plantilla** (ver sección Ejemplos Completos)
2. **Asignar ID único**: Formato `TQ-XXX` (XXX = número secuencial)
3. **Llenar datos básicos**: nombre, ubicación, delegación
4. **Obtener coordenadas**:
   - Usar Google Maps
   - Clic derecho en el mapa → "¿Qué hay aquí?"
   - Copiar coordenadas (lat, lng)
5. **Definir polígono**:
   - Identificar las esquinas del área del tianguis
   - Obtener coordenadas de cada esquina
   - Ordenar en sentido horario o antihorario
6. **Subir imágenes a Google Drive** (si hay)
7. **Obtener FILE_IDs** de las imágenes
8. **Agregar al array** en `tianguis.json`
9. **Validar JSON**
10. **Hacer commit y push**

### Modificar un Tianguis Existente

1. **Buscar por ID** en `tianguis.json`
2. **Modificar campos** necesarios
3. **Validar JSON**
4. **Hacer commit con mensaje descriptivo**: `"Actualizar horario de TQ-001"`
5. **Push** al repositorio

### Eliminar un Tianguis

1. **Buscar por ID** en `tianguis.json`
2. **Eliminar objeto completo** (incluyendo comas)
3. **Validar JSON**
4. **Hacer commit**: `"Eliminar TQ-XXX (cerrado permanentemente)"`

### Agregar una Nueva Federación

1. **Editar** `federaciones.json`
2. **Agregar nuevo objeto**:
```json
{
  "id": "NUEVA_FED",
  "nombre": "Nombre Completo",
  "nombreCorto": "Siglas",
  "color": "#HEXCOLOR",
  "descripcion": "Descripción"
}
```
3. **Elegir color** que no esté en uso
4. **Validar JSON**
5. **Commit y push**

---

## Ejemplos Completos

### Plantilla de Tianguis Completo

```json
{
  "id": "TQ-XXX",
  "nombre": "Tianguis [Nombre]",
  "nombreUnion": "Unión de Comerciantes [Nombre]",
  "ubicacion": "[Dirección o descripción de ubicación]",
  "delegacion": "[Nombre de delegación]",
  "coordenadas": {
    "centro": {
      "lat": 20.XXXX,
      "lng": -100.XXXX
    },
    "poligono": [
      {"lat": 20.XXXX, "lng": -100.XXXX},
      {"lat": 20.XXXX, "lng": -100.XXXX},
      {"lat": 20.XXXX, "lng": -100.XXXX},
      {"lat": 20.XXXX, "lng": -100.XXXX}
    ]
  },
  "dias": ["Lunes"],
  "tipo": "Matutino",
  "horario": "08:00-14:00",
  "agremiados": 0,
  "federacion": "FECOTAQ",
  "nombreFederacion": "Federación de Comerciantes de Tianguis de Querétaro",
  "imagenes": {
    "tianguis": [],
    "estructura": {
      "presidente": null,
      "representante": null,
      "tesorero": null
    }
  },
  "estructura": {
    "presidente": {
      "nombre": "[Nombre completo]",
      "telefono": "442XXXXXXX"
    },
    "representante": {
      "nombre": "[Nombre completo]",
      "telefono": "442XXXXXXX"
    },
    "tesorero": {
      "nombre": "[Nombre completo]",
      "telefono": "442XXXXXXX"
    }
  },
  "observaciones": ""
}
```

### Plantilla de Tianguis Mínimo

```json
{
  "id": "TQ-XXX",
  "nombre": "Tianguis [Nombre]",
  "ubicacion": "[Dirección]",
  "delegacion": "[Delegación]",
  "coordenadas": {
    "centro": {
      "lat": 20.XXXX,
      "lng": -100.XXXX
    },
    "poligono": [
      {"lat": 20.XXXX, "lng": -100.XXXX},
      {"lat": 20.XXXX, "lng": -100.XXXX},
      {"lat": 20.XXXX, "lng": -100.XXXX}
    ]
  },
  "dias": ["Lunes"],
  "tipo": "Matutino",
  "horario": "08:00-14:00",
  "agremiados": 0,
  "federacion": "FECOTAQ"
}
```

---

## Preguntas Frecuentes

### ¿Cómo obtengo las coordenadas de un lugar?

1. Abrir [Google Maps](https://maps.google.com)
2. Buscar la ubicación
3. Clic derecho en el punto exacto
4. Seleccionar "¿Qué hay aquí?"
5. Copiar las coordenadas que aparecen abajo

### ¿Cómo creo un polígono para el tianguis?

1. Identificar las esquinas del área del tianguis en Google Maps
2. Obtener coordenadas de cada esquina
3. Listar en orden (horario o antihorario)
4. Mínimo 3 puntos, recomendado 4-8 puntos

### ¿Qué hago si no tengo fotos del tianguis?

Usar array vacío o null:
```json
"imagenes": {
  "tianguis": [],
  "estructura": {
    "presidente": null,
    "representante": null,
    "tesorero": null
  }
}
```

### ¿Puedo usar otro servicio en lugar de Google Drive?

Sí, cualquier servicio que proporcione URLs directas de imágenes:
- Dropbox (con `?dl=1` al final)
- Imgur
- Cloudinary
- Cualquier CDN público

### ¿Cómo cambio el color de una federación?

1. Editar `federaciones.json`
2. Cambiar el valor de `color`
3. Usar formato hexadecimal: `#RRGGBB`
4. Guardar y hacer commit

### ¿Los cambios se reflejan inmediatamente?

Los cambios se despliegan automáticamente en GitHub Pages, pero puede tomar 1-2 minutos. Los usuarios deben recargar la página (o esperar la sincronización automática del Service Worker).

### ¿Cómo valido que mi JSON es correcto?

1. Usar [JSONLint](https://jsonlint.com/)
2. Copiar y pegar el contenido
3. Clic en "Validate JSON"
4. Corregir errores si los hay

### ¿Qué pasa si pongo una federación que no existe?

El tianguis no tendrá color asignado o usará un color por defecto. Es importante que el `id` de federación en `tianguis.json` coincida exactamente con un `id` en `federaciones.json`.

---

## Resumen de Buenas Prácticas

✅ **Siempre validar JSON** antes de hacer commit  
✅ **Usar IDs únicos** y descriptivos  
✅ **Mantener consistencia** en nombres de delegaciones  
✅ **Optimizar imágenes** antes de subirlas a Google Drive  
✅ **Documentar cambios** en mensajes de commit  
✅ **Hacer backup** antes de cambios grandes  
✅ **Probar localmente** si es posible  
✅ **Usar coordenadas precisas** (6 decimales)  
✅ **Mantener federaciones.json actualizado**  
✅ **Incluir observaciones** relevantes  

---

**Documento preparado por:** José María Romero Dávila  
**Departamento:** Dirección de Inspección en Comercio y Espectáculos  
**Municipio de Querétaro**  
**Fecha:** Diciembre 2025

**Última actualización:** Diciembre 2025  
**Versión del documento:** 1.0
