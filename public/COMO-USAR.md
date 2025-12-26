# 🚀 Cómo Usar la Aplicación

## Inicio Rápido

### Abrir la Aplicación

1. Navega a la carpeta `public`
2. Abre `index.html` en tu navegador

**Opciones:**
- **Doble clic** en `index.html`
- **Servidor local** (recomendado):
  ```bash
  # Con Python 3
  python -m http.server 8000
  
  # Con Node.js (npx)
  npx http-server
  
  # Con PHP
  php -S localhost:8000
  ```
  Luego abre: `http://localhost:8000`

---

## Funcionalidades Disponibles

### 🗺️ Mapa Interactivo

- **Zoom**: Usa los botones +/- o gestos de pinch en móvil
- **Navegación**: Arrastra el mapa con el mouse o dedo
- **Polígono azul**: Representa el Tianguis Satélite (FECOPSE)

### 📍 Ver Información de un Tianguis

1. Haz clic/toca el polígono azul en el mapa
2. Se abrirá un panel con información completa:
   - Ubicación
   - Días de operación
   - Horario
   - Estructura jerárquica
   - Contactos telefónicos
3. Toca los teléfonos para llamar directamente

### 🔍 Filtrar por Delegación

1. En móvil: Toca el ícono de menú (☰) arriba a la derecha
2. En desktop: El panel de filtros está siempre visible
3. Selecciona una delegación
4. El mapa mostrará solo tianguis de esa delegación
5. El contador se actualiza automáticamente

### 🧹 Limpiar Filtros

- Toca el botón "Limpiar filtros"
- O selecciona "Todas las delegaciones"

---

## Instalar como PWA (Aplicación)

### En Android (Chrome/Edge)

1. Abre la app en Chrome
2. Toca el menú (⋮)
3. Selecciona "Añadir a pantalla de inicio" o "Instalar app"
4. Confirma la instalación
5. El icono aparecerá en tu pantalla de inicio

### En iPhone (Safari)

1. Abre la app en Safari
2. Toca el botón de compartir (↑)
3. Desplázate y selecciona "Añadir a pantalla de inicio"
4. Personaliza el nombre si deseas
5. Toca "Añadir"

---

## Estructura del Proyecto

```
public/
├── index.html          # Página principal
├── manifest.json       # Configuración PWA
├── css/
│   └── styles.css      # Estilos
├── js/
│   └── app.js          # Lógica de la aplicación
├── assets/
│   ├── icon-192.png    # Icono PWA 192x192
│   └── icon-512.png    # Icono PWA 512x512
└── data/
    ├── tianguis.json       # Datos de tianguis
    ├── federaciones.json   # Federaciones
    ├── delegaciones.json   # Delegaciones
    └── config.json         # Configuración
```

---

## Agregar Más Tianguis

1. Abre `data/tianguis.json`
2. Copia el tianguis existente (TQ-001)
3. Pega al final del array (antes del `]`)
4. Actualiza:
   - `id`: TQ-002, TQ-003, etc.
   - `nombre`: Nombre del nuevo tianguis
   - `ubicacion`: Dirección
   - `delegacion`: Nombre exacto de la delegación
   - `coordenadas.poligono`: Coordenadas del área
   - Todos los demás campos
5. Guarda el archivo
6. Recarga la página

**Importante:** No olvides la coma entre objetos en el array JSON.

---

## Obtener Coordenadas de Polígonos

1. Abre [Google Maps](https://maps.google.com)
2. Busca la ubicación del tianguis
3. Haz clic derecho en cada esquina del área
4. Selecciona "¿Qué hay aquí?"
5. Copia las coordenadas (lat, lng)
6. Repite para cada esquina (mínimo 3, recomendado 4)
7. Agrégalas al array `poligono` en orden

**Ejemplo:**
```json
"poligono": [
  {"lat": 20.640397, "lng": -100.450197},  // Esquina 1
  {"lat": 20.642221, "lng": -100.450969},  // Esquina 2
  {"lat": 20.640542, "lng": -100.453112},  // Esquina 3
  {"lat": 20.639548, "lng": -100.452604}   // Esquina 4
]
```

---

## Solución de Problemas

### El mapa no carga

- Verifica que tengas conexión a internet (Leaflet.js se carga desde CDN)
- Abre la consola del navegador (F12) y revisa errores
- Asegúrate de que los archivos JSON sean válidos

### Los polígonos no aparecen

- Verifica que `data/tianguis.json` existe y es válido
- Revisa que las coordenadas estén en el formato correcto
- Asegúrate de que la federación existe en `federaciones.json`

### El filtro no funciona

- Verifica que el nombre de la delegación coincida exactamente
- Revisa la consola del navegador para errores

### La PWA no se instala

- Asegúrate de estar usando HTTPS o localhost
- Verifica que `manifest.json` sea válido
- Los iconos deben existir en `/assets`

---

## Compatibilidad

### Navegadores Soportados

- ✅ Chrome 100+ (Android/Desktop)
- ✅ Safari 15+ (iOS/macOS)
- ✅ Edge 100+ (Android/Desktop)
- ✅ Firefox 100+ (Android/Desktop)

### Dispositivos

- ✅ Smartphones (320px+)
- ✅ Tablets
- ✅ Desktop

---

## Próximos Pasos

1. **Agregar más tianguis** usando TQ-001 como plantilla
2. **Probar en dispositivos reales** (móvil y desktop)
3. **Instalar como PWA** en tu teléfono
4. **Recopilar feedback** de otros inspectores
5. **Agregar imágenes** a Google Drive
6. **Implementar Service Worker** para funcionalidad offline completa

---

## Soporte

**Administrador:** José María Romero Dávila  
**Departamento:** Dirección de Inspección en Comercio y Espectáculos  
**Municipio de Querétaro**  
**Teléfono:** 442-121-8734

---

**Versión:** 1.0.0 (MVP)  
**Última actualización:** 25 de Diciembre de 2025
