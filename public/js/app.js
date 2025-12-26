// ========================================
// Configuración
// ========================================
const MAP_CONFIG = {
    center: [20.5913042, -100.3948518], // Centro Histórico, Querétaro
    zoom: 12,
    minZoom: 10,
    maxZoom: 18
};

const COLORS = {
    FECOPSE: '#3B82F6',
    FETAQ: '#EF4444',
    FUCQ: '#10B981',
    UTAFAC: '#F59E0B',
    INDEPENDIENTE: '#6B7280'
};

// ========================================
// Estado de la Aplicación
// ========================================
let map;
let tianguisData = [];
let federacionesData = [];
let delegacionesData = [];
let tianguisLayers = [];
let selectedDelegacion = null;

// ========================================
// Inicialización
// ========================================
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await initMap();
        await loadData();
        renderTianguis();
        setupEventListeners();
        updateCounter();
    } catch (error) {
        console.error('Error al inicializar la aplicación:', error);
        alert('Error al cargar la aplicación. Por favor, recarga la página.');
    }
});

// ========================================
// Inicializar Mapa
// ========================================
function initMap() {
    map = L.map('map', {
        center: MAP_CONFIG.center,
        zoom: MAP_CONFIG.zoom,
        minZoom: MAP_CONFIG.minZoom,
        maxZoom: MAP_CONFIG.maxZoom,
        zoomControl: true
    });

    // Agregar tiles de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(map);

    // Mover controles de zoom a la derecha
    map.zoomControl.setPosition('topright');
}

// ========================================
// Cargar Datos
// ========================================
async function loadData() {
    try {
        // Cargar tianguis
        const tianguisResponse = await fetch('data/tianguis.json');
        tianguisData = await tianguisResponse.json();

        // Cargar federaciones
        const federacionesResponse = await fetch('data/federaciones.json');
        federacionesData = await federacionesResponse.json();

        // Cargar delegaciones
        const delegacionesResponse = await fetch('data/delegaciones.json');
        delegacionesData = await delegacionesResponse.json();

        // Renderizar filtros de delegación
        renderDelegacionFilters();

    } catch (error) {
        console.error('Error al cargar datos:', error);
        throw error;
    }
}

// ========================================
// Renderizar Filtros de Delegación
// ========================================
function renderDelegacionFilters() {
    const container = document.getElementById('delegacionFilter');
    
    // Opción "Todas"
    const allOption = createFilterOption('all', 'Todas las delegaciones', true);
    container.appendChild(allOption);

    // Opciones de delegaciones
    delegacionesData.forEach(delegacion => {
        const option = createFilterOption(delegacion.id, delegacion.nombre, false);
        container.appendChild(option);
    });
}

function createFilterOption(value, label, checked) {
    const div = document.createElement('div');
    div.className = 'filter-option';

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'delegacion';
    input.value = value;
    input.id = `delegacion-${value}`;
    input.checked = checked;

    const labelEl = document.createElement('label');
    labelEl.htmlFor = `delegacion-${value}`;
    labelEl.textContent = label;

    div.appendChild(input);
    div.appendChild(labelEl);

    // Event listener
    input.addEventListener('change', () => {
        selectedDelegacion = value === 'all' ? null : value;
        applyFilters();
    });

    return div;
}

// ========================================
// Renderizar Tianguis en el Mapa
// ========================================
function renderTianguis() {
    // Limpiar capas anteriores
    tianguisLayers.forEach(layer => map.removeLayer(layer));
    tianguisLayers = [];

    // Filtrar tianguis según delegación seleccionada
    const filteredTianguis = tianguisData.filter(tianguis => {
        if (!selectedDelegacion) return true;
        return tianguis.delegacion === getDelegacionName(selectedDelegacion);
    });

    // Renderizar cada tianguis
    filteredTianguis.forEach(tianguis => {
        const federacion = federacionesData.find(f => f.id.trim() === tianguis.federacion.trim());
        const color = federacion ? federacion.color : COLORS.INDEPENDIENTE;

        // Crear polígono
        const polygon = L.polygon(
            tianguis.coordenadas.poligono.map(coord => [coord.lat, coord.lng]),
            {
                color: color,
                fillColor: color,
                fillOpacity: 0.3,
                weight: 2
            }
        ).addTo(map);

        // Click event
        polygon.on('click', () => {
            showTianguisInfo(tianguis, federacion);
        });

        // Tooltip
        polygon.bindTooltip(tianguis.nombre, {
            permanent: false,
            direction: 'top'
        });

        tianguisLayers.push(polygon);
    });

    updateCounter();
}

// ========================================
// Mostrar Información del Tianguis
// ========================================
function showTianguisInfo(tianguis, federacion) {
    const panel = document.getElementById('infoPanel');
    const title = document.getElementById('infoPanelTitle');
    const content = document.getElementById('infoPanelContent');

    title.textContent = tianguis.nombre;

    // Construir HTML del contenido
    let html = '';

    // Datos Básicos
    html += '<div class="info-section">';
    html += '<h3 class="info-section-title">Datos Básicos</h3>';
    
    html += '<div class="info-item">';
    html += '<div class="info-label">Ubicación</div>';
    html += `<div class="info-value">${tianguis.ubicacion}</div>`;
    html += '</div>';

    html += '<div class="info-item">';
    html += '<div class="info-label">Delegación</div>';
    html += `<div class="info-value">${tianguis.delegacion}</div>`;
    html += '</div>';

    html += '<div class="info-item">';
    html += '<div class="info-label">Días de operación</div>';
    html += `<div class="info-value">${tianguis.dias.join(', ')}</div>`;
    html += '</div>';

    html += '<div class="info-item">';
    html += '<div class="info-label">Tipo</div>';
    html += `<div class="info-value"><span class="info-badge">${tianguis.tipo}</span></div>`;
    html += '</div>';

    html += '<div class="info-item">';
    html += '<div class="info-label">Horario</div>';
    html += `<div class="info-value">${tianguis.horario}</div>`;
    html += '</div>';

    html += '<div class="info-item">';
    html += '<div class="info-label">Agremiados</div>';
    html += `<div class="info-value">${tianguis.agremiados} comerciantes</div>`;
    html += '</div>';

    html += '<div class="info-item">';
    html += '<div class="info-label">Federación</div>';
    html += `<div class="info-value">${federacion ? federacion.nombre : tianguis.federacion}</div>`;
    html += '</div>';

    html += '</div>';

    // Estructura
    if (tianguis.estructura) {
        html += '<div class="info-section">';
        html += '<h3 class="info-section-title">Estructura Jerárquica</h3>';

        if (tianguis.estructura.presidente) {
            html += '<div class="contact-item">';
            html += '<div class="contact-name">👤 Presidente</div>';
            html += `<div>${tianguis.estructura.presidente.nombre}</div>`;
            if (tianguis.estructura.presidente.telefono) {
                html += `<a href="tel:${tianguis.estructura.presidente.telefono}" class="contact-phone">📞 ${formatPhone(tianguis.estructura.presidente.telefono)}</a>`;
            }
            html += '</div>';
        }

        if (tianguis.estructura.representante) {
            html += '<div class="contact-item">';
            html += '<div class="contact-name">👤 Representante</div>';
            html += `<div>${tianguis.estructura.representante.nombre}</div>`;
            if (tianguis.estructura.representante.telefono) {
                html += `<a href="tel:${tianguis.estructura.representante.telefono}" class="contact-phone">📞 ${formatPhone(tianguis.estructura.representante.telefono)}</a>`;
            }
            html += '</div>';
        }

        if (tianguis.estructura.tesorero) {
            html += '<div class="contact-item">';
            html += '<div class="contact-name">👤 Tesorero</div>';
            html += `<div>${tianguis.estructura.tesorero.nombre}</div>`;
            if (tianguis.estructura.tesorero.telefono) {
                html += `<a href="tel:${tianguis.estructura.tesorero.telefono}" class="contact-phone">📞 ${formatPhone(tianguis.estructura.tesorero.telefono)}</a>`;
            }
            html += '</div>';
        }

        html += '</div>';
    }

    // Observaciones
    if (tianguis.observaciones) {
        html += '<div class="info-section">';
        html += '<h3 class="info-section-title">Observaciones</h3>';
        html += `<div class="info-value">${tianguis.observaciones}</div>`;
        html += '</div>';
    }

    content.innerHTML = html;
    panel.classList.add('active');

    // Centrar mapa en el tianguis
    map.setView([tianguis.coordenadas.centro.lat, tianguis.coordenadas.centro.lng], 15);
}

// ========================================
// Aplicar Filtros
// ========================================
function applyFilters() {
    renderTianguis();
}

// ========================================
// Actualizar Contador
// ========================================
function updateCounter() {
    const counter = document.getElementById('tianguisCounter');
    counter.textContent = tianguisLayers.length;
}

// ========================================
// Event Listeners
// ========================================
function setupEventListeners() {
    // Toggle sidebar en móvil
    const filterToggle = document.getElementById('filterToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    filterToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Cerrar panel de información
    const infoPanelClose = document.getElementById('infoPanelClose');
    const infoPanel = document.getElementById('infoPanel');

    infoPanelClose.addEventListener('click', () => {
        infoPanel.classList.remove('active');
    });

    // Limpiar filtros
    const clearFilters = document.getElementById('clearFilters');
    clearFilters.addEventListener('click', () => {
        document.getElementById('delegacion-all').checked = true;
        selectedDelegacion = null;
        applyFilters();
    });
}

// ========================================
// Utilidades
// ========================================
function getDelegacionName(delegacionId) {
    const delegacion = delegacionesData.find(d => d.id === delegacionId);
    return delegacion ? delegacion.nombre : '';
}

function formatPhone(phone) {
    if (!phone) return '';
    // Formato: 442-123-4567
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 10) {
        return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    }
    return phone;
}
