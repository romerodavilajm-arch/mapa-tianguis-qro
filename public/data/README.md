# 📊 Datos del Sistema

Esta carpeta contiene todos los archivos de datos en formato JSON que alimentan la aplicación.

---

## 📁 Archivos

### `tianguis.json`
Lista completa de tianguis del municipio de Querétaro.

**Contenido actual:** 1 tianguis (punto de partida)
- **TQ-001**: Tianguis Satélite (Felix Osores Sotomayor)
  - Ubicación: Entre Paseo de las Peñas, Av. De las Fuentes, Av. De la Piedra y Himalaya
  - Días: Jueves y Sábado
  - Tipo: Matutino (06:00-17:00)
  - Federación: FECOPSE
  - Agremiados: 120

### `federaciones.json`
Catálogo de federaciones y organizaciones reales de Querétaro con sus colores.

**Contenido actual:** 5 federaciones
- **FECOPSE** - Federación de Comerciantes de Tianguis de Querétaro (Azul #3B82F6)
- **FETAQ** - Federación de Trabajadores de Querétaro (Rojo #EF4444)
- **FUCQ** - Federación y Unión de Comerciantes de Querétaro (Verde #10B981)
- **UTAFAC** - Unión de Tianguistas del Ahorro Familiar A.C. (Naranja #F59E0B)
- **INDEPENDIENTE** - Tianguis Independientes (Gris #6B7280)

### `delegaciones.json`
Información de las 7 delegaciones municipales con coordenadas reales.

**Contenido actual:** 7 delegaciones completas
- **Centro Histórico** (20.5913042, -100.3948518)
- **Felipe Carrillo Puerto** (20.6055818, -100.4296567) - Noreste
- **Felix Osores Sotomayor** (20.6348499, -100.4594172) - Este
- **Santa Rosa Jáuregui** (20.7422047, -100.4495859) - Norte
- **Epimenio González** (20.6274669, -100.4115487) - Noroeste
- **Josefa Vergara y Hernández** (20.5657165, -100.3905695) - Sur
- **Villa Cayetano Rubio** (20.6000612, -100.3599012) - Sureste

### `config.json`
Configuración general de la aplicación.

**Incluye:**
- Configuración del mapa (centro: Querétaro, zoom inicial: 12)
- Configuración de caché (versión v1.0.0, tiles zoom 10-16)
- Configuración de interfaz (español, tema claro, animaciones)
- Configuración de filtros (contadores, selección múltiple)
- Información de contacto (Inspector: 442-121-8734)

---

## 🔄 Actualización de Datos

Para agregar más tianguis:

1. **Copiar la plantilla** del tianguis existente (TQ-001)
2. **Cambiar el ID** a TQ-002, TQ-003, etc.
3. **Actualizar todos los campos** con datos reales
4. **Obtener coordenadas** del polígono usando Google Maps
5. **Validar JSON** en [JSONLint](https://jsonlint.com/)
6. **Guardar** y hacer commit
7. Los cambios se reflejarán en 1-2 minutos

---

## 📖 Documentación

Para más información sobre la estructura de datos, consultar:
- **`/docs/estructura-de-datos.md`** - Documentación completa con ejemplos
- **`/docs/requisitos-software.md`** - Requisitos del sistema

---

## ⚠️ Reglas Importantes

✅ **SÍ hacer:**
- Validar JSON antes de hacer commit
- Usar coordenadas precisas (6-8 decimales)
- Verificar que la federación exista en `federaciones.json`
- Usar nombres de delegación exactos
- Mantener IDs únicos y secuenciales (TQ-001, TQ-002...)

❌ **NO hacer:**
- Eliminar campos obligatorios
- Usar IDs duplicados
- Referenciar federaciones que no existen
- Usar coordenadas fuera de Querétaro
- Olvidar cerrar el array JSON con `]`

---

## 🎨 Colores de Federaciones

Los colores están optimizados para ser distinguibles en el mapa:

| Federación | Nombre Completo | Color | Hex |
|------------|-----------------|-------|-----|
| **FECOPSE** | Federación de Comerciantes de Tianguis de Querétaro | 🔵 Azul | #3B82F6 |
| **FETAQ** | Federación de Trabajadores de Querétaro | 🔴 Rojo | #EF4444 |
| **FUCQ** | Federación y Unión de Comerciantes de Querétaro | 🟢 Verde | #10B981 |
| **UTAFAC** | Unión de Tianguistas del Ahorro Familiar A.C. | 🟠 Naranja | #F59E0B |
| **INDEPENDIENTE** | Tianguis Independientes | ⚫ Gris | #6B7280 |

---

## 📊 Estado Actual del Proyecto

**Tianguis registrados:** 1  
**Federaciones activas:** 5  
**Delegaciones:** 7  
**Última actualización:** 25 de Diciembre de 2025  
**Versión de datos:** 1.0.0

---

## 🚀 Próximos Pasos

1. Agregar más tianguis usando TQ-001 como plantilla
2. Obtener coordenadas reales de polígonos
3. Actualizar información de contacto de estructuras
4. Agregar imágenes a Google Drive
5. Completar observaciones de cada tianguis

---

**Administrador:** José María Romero Dávila  
**Departamento:** Dirección de Inspección en Comercio y Espectáculos  
**Municipio de Querétaro**  
**Contacto:** 442-121-8734
