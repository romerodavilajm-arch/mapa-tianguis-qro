# 📋 REQUISITOS DEL SISTEMA - Mapa de Tianguis Querétaro

## 1. CONTEXTO Y PROBLEMA

### Situación Actual
La Dirección de Inspección en Comercio y Espectáculos del Municipio de Querétaro enfrenta los siguientes desafíos:
- Información de tianguis dispersa en diferentes formatos (Excel, documentos, papel)
- Dificultad para acceder a datos en campo durante inspecciones
- Falta de visualización geográfica para planificación de rutas
- Datos de contactos y estructuras organizacionales no centralizados
- Dependencia de la memoria de inspectores veteranos

### Impacto
- Tiempo perdido buscando información
- Posibles omisiones en inspecciones
- Dificultad para tomar decisiones basadas en datos
- Ineficiencia en asignación de recursos

## 2. OBJETIVO DEL SISTEMA

Desarrollar una aplicación móvil web que permita:
- Visualizar todos los tianguis del municipio en un mapa interactivo
- Acceder rápidamente a información jerárquica y de contactos
- Filtrar tianguis por diferentes criterios
- Funcionar con o sin conexión a internet
- Ser mantenible sin conocimientos técnicos avanzados

## 3. USUARIOS Y PERFILES

### 3.1 Usuarios Primarios: Inspectores de Campo
**Cantidad:** 5-10 usuarios simultáneos  
**Dispositivos:** Teléfonos inteligentes personales (Android/iOS modernos)  
**Contexto de uso:**
- En campo, durante inspecciones
- Posiblemente sin conexión a internet
- Necesidad de acceso rápido a información
- Uso con una mano, mientras se camina

**Habilidades tecnológicas:** Variables, desde básicas a intermedias

### 3.2 Usuario Administrador
**Cantidad:** 1 persona  
**Dispositivo:** Computadora de escritorio  
**Responsabilidades:**
- Actualizar datos de tianguis
- Mantener información actualizada
- Gestionar cambios en estructura organizacional

**Habilidades tecnológicas:** Conocimiento básico de Excel/hojas de cálculo

## 4. ALCANCE FUNCIONAL (MVP - Producto Mínimo Viable)

### 4.1 Funcionalidades Principales (FASE 1)

#### Mapa Interactivo
- [ ] Visualizar tianguis como marcadores en el mapa
- [ ] Colores diferenciados por unión/afiliación
- [ ] Zoom táctil y navegación móvil
- [ ] Centrar mapa en ubicación del usuario
- [ ] Mostrar delegaciones como áreas coloreadas

#### Filtros y Búsqueda
- [ ] Filtrar por delegación (7 opciones)
- [ ] Filtrar por días de operación
- [ ] Filtrar por tipo (Matutino/Nocturno/Diurno)
- [ ] Filtrar por unión/afiliación
- [ ] Buscar por nombre de tianguis

#### Información Detallada
- [ ] Al tocar marcador, mostrar información completa
- [ ] Estructura jerárquica con nombres y teléfonos
- [ ] Ubicación escrita (entre calles, colonia)
- [ ] Horarios y días de operación
- [ ] Número aproximado de agremiados
- [ ] Observaciones importantes

### 4.2 Funcionalidades Futuras (FASE 2+)
- [ ] Imágenes de tianguis y coordinadores
- [ ] Navegación GPS hasta el tianguis
- [ ] Registro de inspecciones realizadas
- [ ] Reportes estadísticos básicos
- [ ] Notificaciones de cambios

## 5. REQUISITOS NO FUNCIONALES

### 5.1 Rendimiento
- **Tiempo de carga inicial:** < 3 segundos en conexión 4G
- **Tiempo de respuesta:** < 100ms para interacciones
- **Tamaño inicial:** < 2MB (sin datos)
- **Datos offline:** Cache automático para uso sin conexión

### 5.2 Usabilidad
- **Diseño:** Mobile-first, responsive
- **Accesibilidad:** Contraste adecuado, texto legible
- **Idioma:** Español al 100%
- **Navegación:** Intuitiva, máximo 3 toques para información clave

### 5.3 Compatibilidad
- **Navegadores:** Chrome 80+, Safari 14+, Firefox 75+
- **Dispositivos:** Android 8+, iOS 13+
- **Pantallas:** Desde 320px hasta 1920px

### 5.4 Confiabilidad
- **Disponibilidad:** 99% (GitHub Pages)
- **Tolerancia offline:** Datos críticos disponibles sin conexión
- **Backup:** Datos versionados en Git

## 6. ESTRUCTURA DE DATOS

### 6.1 Entidad Principal: Tianguis
Cada tianguis debe contener:
- Identificador único
- Nombre oficial
- Ubicación (coordenadas + descripción textual)
- Delegación (1 de 7 opciones)
- Información de operación (días, tipo, horario)
- Datos organizacionales (agremiados, unión, afiliación)
- Estructura jerárquica con contactos
- Observaciones

### 6.2 Entidades de Soporte
- **Delegaciones:** 7 del municipio con colores distintivos
- **Uniones/Afiliaciones:** Catálogo actualizable
- **Tipos de operación:** Matutino, Nocturno, Diurno

## 7. RESTRICCIONES Y LIMITACIONES

### 7.1 Técnicas
- Sin servidor de backend (datos estáticos)
- Sin base de datos tradicional
- Sin autenticación de usuarios
- Sin procesamiento en tiempo real

### 7.2 Operativas
- Actualización manual de datos
- Mantenimiento por una sola persona
- Sin soporte técnico dedicado
- Presupuesto $0 para hosting

### 7.3 Legales
- Cumplimiento con Ley de Protección de Datos para contactos
- Uso de mapas con licencias adecuadas
- Propiedad intelectual del municipio

## 8. CRITERIOS DE ACEPTACIÓN

### 8.1 Criterios Técnicos
- [ ] Aplicación carga en menos de 3 segundos
- [ ] Funciona correctamente en Android y iOS
- [ ] Datos disponibles sin conexión a internet
- [ ] No presenta errores críticos en consola

### 8.2 Criterios de Negocio
- [ ] 5 inspectores pueden usarla simultáneamente
- [ ] Reducción del tiempo de búsqueda de información en 50%
- [ ] Administrador puede actualizar datos en menos de 10 minutos
- [ ] 80% de los inspectores la consideran útil después de 1 mes

### 8.3 Criterios de Usuario
- [ ] Interface intuitiva sin necesidad de entrenamiento
- [ ] Información fácil de encontrar (máximo 3 toques)
- [ ] Texto legible en exteriores con sol
- [ ] Navegación clara y consistente

## 9. METRICS DE ÉXITO

### Métricas Cuantitativas
- **Adopción:** > 80% de inspectores usando la app regularmente
- **Rendimiento:** < 2s tiempo de carga promedio
- **Actualización:** < 15 minutos para actualizar datos
- **Disponibilidad:** > 99% uptime

### Métricas Cualitativas
- **Satisfacción:** Encuesta NPS > 50
- **Utilidad:** "Esta app me ahorra tiempo" (acuerdo > 80%)
- **Facilidad:** "Es fácil encontrar lo que necesito" (acuerdo > 90%)

## 10. RIESGOS IDENTIFICADOS

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Resistencia al cambio de inspectores | Media | Alto | Entrenamiento básico, UI simple |
| Datos iniciales incompletos | Alta | Medio | Comenzar con datos básicos, mejorar gradualmente |
| Problemas de conectividad en campo | Alta | Alto | Diseño offline-first |
| Mantenimiento abandonado | Baja | Alto | Proceso simple de actualización |
| Problemas legales con datos de contactos | Baja | Alto | Incluir solo datos de contacto laborales |

---

**Documento creado:** Enero 2024  
**Versión:** 1.0  
**Estado:** Aprobado para desarrollo
