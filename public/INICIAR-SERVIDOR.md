# 🚀 Iniciar Servidor Local

## ⚠️ IMPORTANTE

**NO puedes abrir `index.html` directamente** haciendo doble clic. Los navegadores modernos bloquean las peticiones a archivos locales por seguridad (error CORS).

**DEBES usar un servidor local.**

---

## Opción 1: Python (Recomendado - Más Simple)

### Si tienes Python instalado:

1. Abre PowerShell o CMD
2. Navega a la carpeta `public`:
   ```powershell
   cd "d:\Documentos de Chema\DESARROLLO\mapa-tianguis-qro\public"
   ```

3. Inicia el servidor:
   ```powershell
   python -m http.server 8000
   ```

4. Abre tu navegador y ve a:
   ```
   http://localhost:8000
   ```

5. Para detener el servidor: `Ctrl + C`

---

## Opción 2: Node.js / npx

### Si tienes Node.js instalado:

1. Abre PowerShell o CMD
2. Navega a la carpeta `public`:
   ```powershell
   cd "d:\Documentos de Chema\DESARROLLO\mapa-tianguis-qro\public"
   ```

3. Inicia el servidor:
   ```powershell
   npx http-server -p 8000
   ```

4. Abre tu navegador y ve a:
   ```
   http://localhost:8000
   ```

---

## Opción 3: PHP

### Si tienes PHP instalado:

1. Abre PowerShell o CMD
2. Navega a la carpeta `public`:
   ```powershell
   cd "d:\Documentos de Chema\DESARROLLO\mapa-tianguis-qro\public"
   ```

3. Inicia el servidor:
   ```powershell
   php -S localhost:8000
   ```

4. Abre tu navegador y ve a:
   ```
   http://localhost:8000
   ```

---

## Opción 4: VS Code Live Server (Si usas VS Code)

1. Instala la extensión "Live Server" en VS Code
2. Abre la carpeta del proyecto en VS Code
3. Haz clic derecho en `index.html`
4. Selecciona "Open with Live Server"
5. Se abrirá automáticamente en el navegador

---

## ¿Cómo saber si funciona?

Cuando el servidor esté corriendo correctamente verás:

✅ El mapa de Querétaro cargado
✅ Un polígono azul (Tianguis Satélite)
✅ Contador: "Tianguis visibles: 1"
✅ Sin errores en la consola del navegador (F12)

---

## Solución de Problemas

### Error: "python no se reconoce como comando"
- Python no está instalado o no está en el PATH
- Descarga Python desde: https://www.python.org/downloads/
- Durante la instalación, marca "Add Python to PATH"

### Error: "npx no se reconoce como comando"
- Node.js no está instalado
- Descarga Node.js desde: https://nodejs.org/

### El puerto 8000 ya está en uso
- Usa otro puerto:
  ```powershell
  python -m http.server 8080
  ```
- Luego abre: `http://localhost:8080`

### La página carga pero no aparece el mapa
- Abre la consola del navegador (F12)
- Busca errores en rojo
- Verifica que estés usando `http://localhost` y NO `file://`

---

## Comando Rápido (Copiar y Pegar)

```powershell
cd "d:\Documentos de Chema\DESARROLLO\mapa-tianguis-qro\public" ; python -m http.server 8000
```

Luego abre: **http://localhost:8000**

---

**Nota:** Una vez que el servidor esté corriendo, NO cierres la ventana de PowerShell/CMD. Déjala abierta mientras uses la aplicación.
