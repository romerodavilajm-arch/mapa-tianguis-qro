# 📊 ESTRUCTURA DE DATOS - Mapa de Tianguis Querétaro

## 1. INTRODUCCIÓN

Este documento define la estructura completa de datos para el sistema de tianguis. Todos los datos se almacenan en formato JSON para facilitar su mantenimiento y actualización.

## 2. DELEGACIONES DEL MUNICIPIO

El municipio de Querétaro se divide en 7 delegaciones:

1. **Centro Histórico** - Área central del municipio
2. **Felipe Carrillo Puerto** - Zona norte
3. **Felix Osores Sotomayor** - Zona noroeste  
4. **Santa Rosa Jáuregui** - Zona suroeste
5. **Epimenio González** - Zona este
6. **Josefa Vergara y Hernández** - Zona sureste
7. **Villa Cayetano Rubio** - Zona noreste

## 3. ESQUEMA COMPLETO DE UN TIANGUIS

### Archivo: `public/data/tianguis.json`

```json
[
  {
    // IDENTIFICACIÓN
    "id": "TQ-001",
    "nombre": "Tianguis La Cruz",
    
    // UBICACIÓN GEOGRÁFICA
    "ubicacion": {
      "calles": "Entre Corregidora y 5 de Mayo",
      "colonia": "Centro",
      "texto": "Entre Corregidora y 5 de Mayo, Colonia Centro"
    },
    "delegacion": "Centro Histórico",
    "coordenadas": {
      "lat": 20.5881,
      "lng": -100.3881
    },
    
    // OPERACIÓN Y HORARIOS
    "operacion": {
      "dias": ["Lunes", "Jueves"],
      "tipo": "Matutino",
      "horario": "08:00-14:00"
    },
    
    // DATOS ESTADÍSTICOS
    "datos": {
      "agremiados": 120,
      "union": "FECOTAQ",
      "afiliacion": "Federación de Comerciantes"
    },
    
    // ESTRUCTURA ORGANIZACIONAL
    "estructura": {
      "presidente": {
        "nombre": "Juan Pérez",
        "telefono": "4421234567",
        "notas": "Presidente desde 2020"
      },
      "representante": {
        "nombre": "María García", 
        "telefono": "4427654321",
        "notas": "Encargada de logística"
      },
      "tesorero": {
        "nombre": "Pedro López",
        "telefono": "4425558888",
        "notas": ""
      },
      "secretario": {
        "nombre": "Ana Martínez",
        "telefono": "4423339999",
        "notas": ""
      }
    },
    
    // INFORMACIÓN ADICIONAL
    "observaciones": "Ubicación fija, cuenta con baños químicos. No opera días festivos oficiales.",
    
    // METADATOS TÉCNICOS
    "metadata": {
      "fecha_creacion": "2023-01-15",
      "ultima_actualizacion": "2024-01-10",
      "activo": true,
      "verificado": true
    },
    
    // CONFIGURACIÓN VISUAL
    "estilo": {
      "color": "#FF0000",
      "icono": "market",
      "prioridad": 1
    }
  }
]
3.1 Explicación de Campos
IDENTIFICACIÓN
id (string, requerido): Identificador único. Formato: TQ-001, TQ-002, etc.

nombre (string, requerido): Nombre oficial del tianguis.

UBICACIÓN
ubicacion.calles (string): Descripción entre qué calles se ubica.

ubicacion.colonia (string): Colonia o barrio.

ubicacion.texto (string): Descripción completa para mostrar.

delegacion (string, requerido): Una de las 7 delegaciones.

coordenadas.lat (number, requerido): Latitud decimal.

coordenadas.lng (number, requerido): Longitud decimal.

OPERACIÓN
operacion.dias (array): Días de instalación. Ej: ["Lunes", "Jueves"].

operacion.tipo (string): "Matutino", "Nocturno" o "Diurno".

operacion.horario (string): Formato "HH:MM-HH:MM". Ej: "08:00-14:00".

DATOS ESTADÍSTICOS
datos.agremiados (number): Número aproximado de comerciantes.

datos.union (string): Nombre de la unión principal.

datos.afiliacion (string): Nombre de afiliación o "No está afiliado".

ESTRUCTURA ORGANIZACIONAL
Cada cargo puede tener:

nombre (string): Nombre completo.

telefono (string): Teléfono de contacto (10 dígitos).

notas (string): Información adicional opcional.

Cargos definidos:

presidente (coordinador principal)

representante (encargado/enlace)

tesorero (responsable financiero)

secretario (administrativo)

OBSERVACIONES
observaciones (string): Texto libre con información relevante.

METADATOS
metadata.fecha_creacion (string): Fecha de registro (YYYY-MM-DD).

metadata.ultima_actualizacion (string): Última modificación.

metadata.activo (boolean): True si el tianguis está operando.

metadata.verificado (boolean): True si datos fueron confirmados.

ESTILO
estilo.color (string): Código hexadecimal del color (#FF0000).

estilo.icono (string): Tipo de icono para el mapa.

estilo.prioridad (number): Orden de visualización.
