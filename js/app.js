/* Assam Tourism Portal — Interactive Application & Rendering Logic */

document.addEventListener('DOMContentLoaded', () => {
  initFloodAdvisory();
  initSeasonalDestinations();
  initDestinations();
  initLodging();
  initStatsCounter();
  setupSearchAndFilters();
  setupModals();
});

/* 🚨 1. ASDMA State Flood & Safety Advisory Engine */
function initFloodAdvisory(filterStatus = 'ALL', searchQuery = '') {
  const container = document.getElementById('flood-advisory-grid');
  if (!container) return;

  container.innerHTML = '';

  let filtered = FLOOD_ADVISORY_DATA;
  if (filterStatus !== 'ALL') {
    filtered = filtered.filter(item => item.status === filterStatus);
  }

  if (searchQuery.trim() !== '') {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(item => 
      item.destination.toLowerCase().includes(query) || 
      item.district.toLowerCase().includes(query) || 
      item.statusText.toLowerCase().includes(query) ||
      item.advisoryMessage.toLowerCase().includes(query)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border-color);">
      <h4 style="color: var(--text-muted); margin-bottom: 0.4rem;">No advisory notifications found matching query</h4>
      <p style="color: var(--text-secondary); font-size: 0.9rem;">Try viewing All Locations or search for "Sonbeel", "Kaziranga", or "Majuli".</p>
    </div>`;
    return;
  }

  filtered.forEach((adv, idx) => {
    const card = document.createElement('div');
    card.className = 'advisory-card animate-fade';
    card.style.animationDelay = `${idx * 0.08}s`;
    card.style.borderLeft = `6px solid ${adv.statusColor}`;
    card.style.background = 'var(--bg-card)';
    card.style.padding = '1.5rem';
    card.style.borderRadius = 'var(--radius-md)';
    card.style.boxShadow = 'var(--shadow-md)';
    card.style.borderTop = '1px solid var(--border-color)';
    card.style.borderRight = '1px solid var(--border-color)';
    card.style.borderBottom = '1px solid var(--border-color)';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.justifyContent = 'space-between';

    card.innerHTML = `
      <div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.8rem; flex-wrap: wrap; gap: 0.5rem;">
          <span style="background: ${adv.statusBg}; color: ${adv.statusColor}; font-size: 0.82rem; font-weight: 800; padding: 0.35rem 0.8rem; border-radius: var(--radius-full); border: 1px solid ${adv.statusColor}; display: inline-flex; align-items: center; gap: 0.3rem;">
            ${adv.statusText}
          </span>
          <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">🕒 ${adv.updatedAt}</span>
        </div>
        
        <h3 style="font-size: 1.35rem; color: var(--text-primary); margin-bottom: 0.3rem;">${adv.destination}</h3>
        <p style="font-size: 0.85rem; color: var(--text-muted); font-weight: 700; margin-bottom: 1rem;">📍 District: ${adv.district}</p>
        
        <div style="background: var(--bg-main); padding: 0.8rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); margin-bottom: 1rem;">
          <p style="font-size: 0.82rem; color: var(--text-primary); margin-bottom: 0.3rem;"><strong>🌊 River / Flood Level:</strong> ${adv.waterLevel}</p>
          <p style="font-size: 0.82rem; color: var(--text-primary);"><strong>🛣️ Road & Ferry Status:</strong> ${adv.ferryRoadStatus}</p>
        </div>

        <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.2rem;">
          <strong>Official Guidance:</strong> ${adv.advisoryMessage}
        </p>
      </div>

      <div style="padding-top: 1rem; border-top: 1px dashed var(--border-color); display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 0.78rem; font-weight: 600; color: var(--tea-emerald);">🏛️ Verified by ASDMA & ATDC</span>
        <button class="btn btn-secondary" style="padding: 0.4rem 0.9rem; font-size: 0.8rem;" onclick="showToast('Dispatching emergency SOS route details for ${adv.destination}...', '📡')">
          View Safe Routes ↗
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

/* 📅 2. Seasonal Destinations & Calendar Engine */
function initSeasonalDestinations(seasonKey = 'monsoon') {
  const container = document.getElementById('seasonal-grid');
  const titleBox = document.getElementById('seasonal-header-box');
  if (!container || !SEASONAL_DESTINATIONS_DATA[seasonKey]) return;

  const data = SEASONAL_DESTINATIONS_DATA[seasonKey];

  if (titleBox) {
    titleBox.innerHTML = `
      <span class="badge-awesome" style="background: var(--tea-emerald); font-size: 0.85rem; padding: 0.3rem 0.8rem; margin-bottom: 0.6rem; display: inline-block;">${data.recommendationBadge}</span>
      <h3 style="font-size: 1.8rem; margin-bottom: 0.4rem;">${data.seasonTitle}</h3>
      <p style="color: var(--text-secondary); font-size: 1.05rem;">${data.seasonSubtitle}</p>
    `;
  }

  container.innerHTML = '';
  data.destinations.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'card animate-fade';
    card.style.animationDelay = `${idx * 0.1}s`;

    card.innerHTML = `
      <div class="card-img-wrap" style="height: 220px;">
        <span class="card-verified" style="background: var(--primary-red);">✨ ${item.highlight}</span>
        <img src="${item.image}" alt="${item.name}" loading="lazy">
      </div>
      <div class="card-content">
        <div class="card-subtitle">
          <span>📍 ${item.district}</span>
        </div>
        <h3 class="card-title" style="font-size: 1.25rem;">${item.name}</h3>
        <p class="card-desc">${item.desc}</p>
        
        <div style="background: var(--silk-gold-light); border-left: 4px solid var(--silk-gold); padding: 0.7rem 0.9rem; border-radius: var(--radius-sm); margin-bottom: 1.2rem;">
          <p style="font-size: 0.82rem; color: #0F172A; font-weight: 600;">💡 Tourist Tip: ${item.tip}</p>
        </div>

        <div class="card-footer" style="border-top: 1px solid var(--border-color); padding-top: 1rem;">
          <span style="font-size: 0.8rem; font-weight: 600; color: var(--tea-emerald);">Govt Itinerary Ready</span>
          <button class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.85rem;" onclick="openDestinationModal('${item.destId || 'sonbeel'}')">
            Full Dossier ↗
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

/* 3. Destination Rendering Engine */
function initDestinations(filterCategory = 'all') {
  const grid = document.getElementById('destinations-grid');
  if (!grid) return;

  grid.innerHTML = '';
  
  const filtered = filterCategory === 'all' 
    ? DESTINATIONS_DATA 
    : DESTINATIONS_DATA.filter(d => d.category === filterCategory);

  filtered.forEach((dest, idx) => {
    const card = document.createElement('div');
    card.className = 'card animate-fade';
    card.style.animationDelay = `${idx * 0.1}s`;

    card.innerHTML = `
      <div class="card-img-wrap">
        <span class="card-badge">${dest.badge}</span>
        <img src="${dest.image}" alt="${dest.title}" loading="lazy">
      </div>
      <div class="card-content">
        <div class="card-subtitle">
          <span>📍 ${dest.district}</span> • <span style="color: var(--silk-gold);">🗓 ${dest.bestSeason.split('|')[0]}</span>
        </div>
        <h3 class="card-title">${dest.title}</h3>
        <p style="font-size: 0.8rem; font-weight: 600; color: var(--tea-emerald); margin-bottom: 0.6rem;">${dest.assameseTitle}</p>
        <p class="card-desc">${dest.shortDesc}</p>
        <div class="card-footer">
          <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">G2C E-Dossier Ready</span>
          <button class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.85rem;" onclick="openDestinationModal('${dest.id}')">
            Explore Guide ↗
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* 4. Lodging Rendering Engine (Hostels, Homestays, Govt Lodges, Hotels) */
function initLodging(filterType = 'all', searchQuery = '') {
  const grid = document.getElementById('lodging-grid');
  if (!grid) return;

  grid.innerHTML = '';
  
  let filtered = LODGING_DATA;

  if (filterType !== 'all') {
    filtered = filtered.filter(l => l.type === filterType);
  }

  if (searchQuery.trim() !== '') {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(l => 
      l.name.toLowerCase().includes(query) || 
      l.location.toLowerCase().includes(query) || 
      l.district.toLowerCase().includes(query) ||
      l.type.toLowerCase().includes(query)
    );
  }

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border-color);">
      <h3 style="color: var(--text-muted); margin-bottom: 0.5rem;">No accommodations found matching your search</h3>
      <p style="color: var(--text-secondary); font-size: 0.9rem;">Try viewing All Categories or searching for "Majuli", "Kaziranga", or "Hostel".</p>
    </div>`;
    return;
  }

  filtered.forEach((item, idx) => {
    const typeLabelMap = {
      hostel: '🎒 Backpackers Hostel',
      homestay: '🏡 Eco-Homestay',
      lodge: '🏛️ Govt Tourist Lodge',
      hotel: '👑 Heritage Hotel'
    };

    const card = document.createElement('div');
    card.className = 'card animate-fade';
    card.style.animationDelay = `${idx * 0.08}s`;

    card.innerHTML = `
      <div class="card-img-wrap">
        <span class="card-verified">✓ ${item.verifiedBy.split(' ')[0]} Verified</span>
        <img src="${item.image}" alt="${item.name}" loading="lazy">
      </div>
      <div class="card-content">
        <div class="card-subtitle">
          <span style="font-weight: 700; color: var(--tea-emerald);">${typeLabelMap[item.type] || item.type}</span> • <span>⭐ ${item.rating}</span>
        </div>
        <h3 class="card-title">${item.name}</h3>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.8rem;">📍 ${item.location} (${item.district})</p>
        <p class="card-desc">${item.description}</p>
        
        <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.2rem;">
          ${item.amenities.map(a => `<span style="background: var(--bg-main); border: 1px solid var(--border-color); padding: 0.2rem 0.5rem; border-radius: var(--radius-sm); font-size: 0.72rem; color: var(--text-secondary);">${a}</span>`).join('')}
        </div>

        <div class="card-footer">
          <div class="price-box">
            <span class="price">₹${item.price}</span>
            <span class="unit">/${item.unit}</span>
          </div>
          <button class="btn btn-gold" style="padding: 0.5rem 1rem; font-size: 0.85rem;" onclick="openBookingModal('${item.id}')">
            Reserve G2C Slot
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* 5. Interactive Filter Pills & Search Handlers */
function setupSearchAndFilters() {
  // Flood Advisory tab filters
  const floodBtns = document.querySelectorAll('#flood-filters .filter-btn');
  floodBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      floodBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const query = document.getElementById('flood-search-input')?.value || '';
      initFloodAdvisory(btn.getAttribute('data-filter'), query);
    });
  });

  // Realtime search box for flood advisory
  const floodInput = document.getElementById('flood-search-input');
  if (floodInput) {
    floodInput.addEventListener('input', (e) => {
      const activeFilter = document.querySelector('#flood-filters .filter-btn.active')?.getAttribute('data-filter') || 'ALL';
      initFloodAdvisory(activeFilter, e.target.value);
    });
  }

  // Seasonal Discovery tabs
  const seasonBtns = document.querySelectorAll('#season-filters .filter-btn');
  seasonBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      seasonBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      initSeasonalDestinations(btn.getAttribute('data-season'));
      showToast(`Switched to seasonal calendar: ${btn.innerText}`, '🗓️');
    });
  });

  // Destination tab filters
  const destBtns = document.querySelectorAll('#dest-filters .filter-btn');
  destBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      destBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      initDestinations(btn.getAttribute('data-filter'));
    });
  });

  // Lodging tab filters
  const lodgeBtns = document.querySelectorAll('#lodging-filters .filter-btn');
  lodgeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      lodgeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const currentSearch = document.getElementById('lodging-search-input')?.value || '';
      initLodging(btn.getAttribute('data-filter'), currentSearch);
    });
  });

  // Realtime search box for lodging
  const searchInput = document.getElementById('lodging-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const activeFilter = document.querySelector('#lodging-filters .filter-btn.active')?.getAttribute('data-filter') || 'all';
      initLodging(activeFilter, e.target.value);
    });
  }

  // Hero Section Quick Search Kiosk Handler
  const heroSearchBtn = document.getElementById('hero-search-btn');
  if (heroSearchBtn) {
    heroSearchBtn.addEventListener('click', () => {
      const districtVal = document.getElementById('hero-district-select').value;
      const typeVal = document.getElementById('hero-type-select').value;
      
      document.getElementById('lodging')?.scrollIntoView({ behavior: 'smooth' });
      
      if (typeVal && typeVal !== 'all') {
        const targetBtn = document.querySelector(`#lodging-filters [data-filter="${typeVal}"]`);
        if (targetBtn) targetBtn.click();
      }
      if (districtVal && searchInput) {
        searchInput.value = districtVal;
        searchInput.dispatchEvent(new Event('input'));
      }
      
      showToast('Search filters applied to Govt Verified Accommodations!', '✨');
    });
  }
}

/* 6. Modal Dialogs for Ultra-Premium G2C Single-Window Dossiers */
function setupModals() {
  const modalOverlay = document.getElementById('portal-modal');
  const closeBtn = document.querySelector('.modal-close');

  if (closeBtn && modalOverlay) {
    closeBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }
}

/* 🌟 ULTRA-PREMIUM SINGLE-WINDOW DESTINATION DOSSIER (All-In-One G2C Kiosk) */
function openDestinationModal(destId) {
  const dest = DESTINATIONS_DATA.find(d => d.id === destId) || DESTINATIONS_DATA[0];
  const adv = FLOOD_ADVISORY_DATA.find(a => a.id === dest.advisoryId) || FLOOD_ADVISORY_DATA[0];
  
  // Find matching nearby lodging properties
  const nearLodgings = LODGING_DATA.filter(l => (dest.lodgingIds && dest.lodgingIds.includes(l.id)) || l.district.includes(dest.district.split(' ')[0]));
  const displayLodgings = nearLodgings.length ? nearLodgings : LODGING_DATA.slice(0, 3);
  
  // Find assigned certified bilingual guides
  const assignedGuides = TOURIST_GUIDES_REGISTRY.filter(g => g.destIds && g.destIds.includes(dest.id));
  const displayGuides = assignedGuides.length ? assignedGuides : TOURIST_GUIDES_REGISTRY.slice(0, 2);

  const modalOverlay = document.getElementById('portal-modal');
  const modalBody = document.getElementById('modal-body-content');

  // Set broader styling for the dossier
  document.querySelector('.modal-content').style.maxWidth = '920px';

  modalBody.innerHTML = `
    <!-- Top Government Seal & Breadcrumbs -->
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--border-color); padding-bottom: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 0.5rem;">
      <div>
        <span class="badge-awesome" style="background: var(--tea-emerald); font-size: 0.75rem;">Government of Assam e-District Dossier</span>
        <span style="font-size: 0.8rem; color: var(--text-muted); margin-left: 0.5rem; font-weight: 700;">G2C Single-Window Registry</span>
      </div>
      <span style="background: var(--primary-red); color: #fff; padding: 0.2rem 0.6rem; border-radius: var(--radius-full); font-size: 0.75rem; font-weight: 700;">${dest.badge}</span>
    </div>

    <!-- Destination Main Header -->
    <h1 style="font-size: 2.4rem; font-weight: 900; margin-bottom: 0.2rem; color: var(--text-primary);">${dest.title}</h1>
    <h2 style="color: var(--primary-red); font-size: 1.15rem; font-weight: 700; margin-bottom: 1.5rem;">${dest.assameseTitle} — 📍 ${dest.district}</h2>
    
    <!-- Hero Showcase Image -->
    <div style="position: relative; margin-bottom: 2rem;">
      <img src="${dest.image}" style="width: 100%; height: 350px; object-fit: cover; border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); border: 2px solid var(--border-color);" alt="${dest.title}">
      <div style="position: absolute; bottom: 15px; left: 15px; background: rgba(15, 23, 42, 0.85); backdrop-filter: blur(8px); padding: 0.5rem 1rem; border-radius: var(--radius-full); border: 1px solid rgba(255,255,255,0.2); color: #fff; font-size: 0.85rem; font-weight: 600;">
        📍 GPS: ${dest.gpsCoordinates} • 🗓 Best Season: ${dest.bestSeason}
      </div>
    </div>
    
    <!-- 🚨 SECTION 1: REAL-TIME FLOOD ADVISORY & WEATHER STATUS -->
    <div style="background: ${adv.statusBg}; border: 2px solid ${adv.statusColor}; padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 2.2rem; box-shadow: var(--shadow-sm);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem; flex-wrap: wrap;">
        <span style="background: ${adv.statusColor}; color: #fff; font-size: 0.85rem; font-weight: 800; padding: 0.4rem 0.9rem; border-radius: var(--radius-full); text-transform: uppercase; letter-spacing: 0.5px;">
          🚨 ASDMA Travel Status: ${adv.statusText}
        </span>
        <span style="font-size: 0.82rem; font-weight: 700; color: var(--text-primary);">☀️ Live Weather: <strong>${dest.weather || '28°C | Moderate Breeze | AQI: 30'}</strong></span>
      </div>
      <p style="font-size: 0.95rem; color: var(--text-primary); font-weight: 600; line-height: 1.6; margin-bottom: 0.5rem;">
        <strong>Current Condition & River Level:</strong> ${adv.waterLevel} • ${adv.advisoryMessage}
      </p>
      <div style="font-size: 0.85rem; color: var(--text-secondary); background: rgba(255,255,255,0.7); padding: 0.6rem 0.8rem; border-radius: 6px; margin-top: 0.8rem; border-left: 4px solid ${adv.statusColor};">
        <strong>🛣️ Roadway & Approach Advisory:</strong> ${adv.ferryRoadStatus} (Verified by District Disaster Management Authority, ${adv.updatedAt})
      </div>
    </div>

    <!-- 📖 SECTION 2: COMPREHENSIVE OVERVIEW & HIGHLIGHTS -->
    <div style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.4rem; font-weight: 800; border-left: 5px solid var(--tea-emerald); padding-left: 0.8rem; margin-bottom: 0.8rem; color: var(--text-primary);">About This Ecological & Heritage Landmark</h3>
      <p style="color: var(--text-secondary); font-size: 1.05rem; line-height: 1.8; margin-bottom: 1.5rem;">${dest.fullDescription}</p>

      <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.8rem;">🌟 Official Citizen & Tourist Attractions</h4>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.8rem;">
        ${dest.highlights.map(h => `<div style="background: var(--bg-main); padding: 0.8rem 1rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm); font-size: 0.9rem; font-weight: 700; color: var(--tea-emerald); display: flex; align-items: center; gap: 0.5rem;"><span>✨</span> <span>${h}</span></div>`).join('')}
      </div>
    </div>

    <!-- ✈️ SECTION 3: HOW TO REACH & OFFICIAL GOVERNMENT TARIFF BOARD -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem; margin-bottom: 2.5rem;">
      <!-- How to Reach Kiosk -->
      <div style="background: var(--bg-main); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
        <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 1rem; color: var(--text-primary); display: flex; align-items: center; gap: 0.5rem;">
          🗺️ Transit & How to Reach
        </h3>
        <div style="display: flex; flex-direction: column; gap: 0.9rem;">
          <div>
            <strong style="font-size: 0.85rem; color: var(--tea-emerald); display: block;">✈️ AIRWAY CONNECTION</strong>
            <span style="font-size: 0.9rem; color: var(--text-secondary);">${dest.howToReach ? dest.howToReach.air : 'Nearest commercial airport: Guwahati LGBI or Silchar (IXS).'}</span>
          </div>
          <div>
            <strong style="font-size: 0.85rem; color: var(--silk-gold); display: block;">🚆 RAILWAY NETWORK</strong>
            <span style="font-size: 0.9rem; color: var(--text-secondary);">${dest.howToReach ? dest.howToReach.train : 'Connected via Northeast Frontier Railway network junctions.'}</span>
          </div>
          <div>
            <strong style="font-size: 0.85rem; color: var(--primary-red); display: block;">🛣️ MOTOR ROADWAY</strong>
            <span style="font-size: 0.9rem; color: var(--text-secondary);">${dest.howToReach ? dest.howToReach.road : 'Accessible via National Highways with ASTC luxury buses and taxis.'}</span>
          </div>
        </div>
      </div>

      <!-- Official Tariff Board -->
      <div style="background: var(--bg-main); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
        <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 1rem; color: var(--text-primary); display: flex; align-items: center; gap: 0.5rem;">
          📜 Official Govt Tariff Schedule
        </h3>
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          ${(dest.officialTariff || [{item: "Citizen Entrance Fee", fee: "FREE"}, {item: "Guided Boating/Safari", fee: "Govt Regulated Tariff"}]).map(t => `
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed var(--border-color); padding-bottom: 0.6rem;">
              <span style="font-size: 0.88rem; font-weight: 600; color: var(--text-primary);">${t.item}</span>
              <span style="font-size: 0.85rem; font-weight: 800; background: rgba(10,92,54,0.15); color: var(--tea-emerald); padding: 0.2rem 0.6rem; border-radius: 4px;">${t.fee}</span>
            </div>
          `).join('')}
        </div>
        <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 1rem;">* Tariffs mandated under Assam Tourism Citizen Consumer Protection Circular.</p>
      </div>
    </div>

    <!-- 🏡 SECTION 4: GOVT VERIFIED ACCOMMODATIONS NEAR THIS DESTINATION -->
    <div style="margin-bottom: 2.5rem; background: var(--bg-surface); border: 1px solid var(--border-color); padding: 1.8rem; border-radius: var(--radius-lg); box-shadow: var(--shadow-sm);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.2rem; flex-wrap: wrap; gap: 0.5rem;">
        <div>
          <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--text-primary);">🏡 Verified Stays & Hostels Near ${dest.title.split(' ')[0]}</h3>
          <p style="font-size: 0.9rem; color: var(--text-secondary);">Direct zero-commission reservations with certified eco-homestay families & ATDC properties.</p>
        </div>
        <span class="badge-awesome" style="background: var(--tea-emerald);">🛡️ Inspected & Safe</span>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.2rem;">
        ${displayLodgings.map(lodge => `
          <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.2rem; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
                <span style="font-size: 0.72rem; background: rgba(212, 175, 55, 0.2); color: var(--silk-gold); font-weight: 800; padding: 0.2rem 0.5rem; border-radius: 4px;">${lodge.type.toUpperCase()}</span>
                <span style="font-size: 0.8rem; font-weight: 700;">⭐ ${lodge.rating}</span>
              </div>
              <h4 style="font-size: 1.15rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.3rem;">${lodge.name}</h4>
              <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.8rem;">📍 ${lodge.location}</p>
              <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem; line-height: 1.5;">${lodge.description.substring(0, 90)}...</p>
            </div>
            <div style="border-top: 1px solid var(--border-color); padding-top: 0.8rem; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <span style="font-size: 1.15rem; font-weight: 800; color: var(--tea-emerald);">₹${lodge.price}</span>
                <span style="font-size: 0.72rem; color: var(--text-muted);">/${lodge.unit}</span>
              </div>
              <button class="btn btn-gold" style="padding: 0.45rem 0.85rem; font-size: 0.8rem;" onclick="openBookingModal('${lodge.id}')">Reserve Slot ↗</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- 👮‍♂️ SECTION 5: ASSIGNED CERTIFIED BILINGUAL TOURIST GUIDES REGISTRY -->
    <div style="margin-bottom: 2.5rem; background: linear-gradient(135deg, var(--gov-topbar-bg), #0F172A); color: #fff; padding: 1.8rem; border-radius: var(--radius-lg); border: 1px solid rgba(255,255,255,0.15);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.2rem; flex-wrap: wrap;">
        <div>
          <span class="badge-awesome" style="background: var(--primary-red); margin-bottom: 0.3rem; display: inline-block;">Citizen Employment & Safety Registry</span>
          <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--silk-gold);">👮‍♂️ Certified Tourist Guides Assigned to ${dest.title.split(' ')[0]}</h3>
          <p style="font-size: 0.9rem; color: #CBD5E1;">Government trained bilingual youth with verified background credentials and direct contact helpdesks.</p>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1rem;">
        ${displayGuides.map(guide => `
          <div style="background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.18); border-radius: var(--radius-md); padding: 1.2rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <div style="flex: 1; min-width: 250px;">
              <h4 style="font-size: 1.2rem; font-weight: 800; color: #fff; margin-bottom: 0.3rem; display: flex; align-items: center; gap: 0.6rem;">
                👮‍♂️ ${guide.name} <span style="font-size: 0.75rem; background: var(--tea-emerald); color: #fff; padding: 0.15rem 0.5rem; border-radius: 4px;">Verified License: ${guide.certId}</span>
              </h4>
              <p style="font-size: 0.85rem; color: var(--silk-gold); margin-bottom: 0.4rem; font-weight: 600;">📍 Assigned Regions: ${guide.district} • ⭐ ${guide.rating}</p>
              <p style="font-size: 0.85rem; color: #E2E8F0; margin-bottom: 0.4rem;">🗣️ <strong>Languages Spoken:</strong> ${guide.languages}</p>
              <p style="font-size: 0.82rem; color: #94A3B8; font-style: italic;">"Specialties: ${guide.specialty}"</p>
            </div>

            <div style="display: flex; flex-direction: column; gap: 0.5rem; min-width: 190px;">
              <div style="background: #000; padding: 0.5rem 0.8rem; border-radius: var(--radius-sm); text-align: center; border: 1px solid var(--silk-gold);">
                <span style="font-size: 0.72rem; color: var(--text-muted); display: block; text-transform: uppercase;">Direct Govt Help Desk Tel:</span>
                <span style="font-size: 1rem; font-weight: 800; color: var(--silk-gold); letter-spacing: 0.5px;">📞 ${guide.phone || '+91 94350-89000'}</span>
              </div>
              <button class="btn btn-primary" style="background: #ffffff; color: var(--tea-emerald); font-weight: 800; font-size: 0.85rem; padding: 0.5rem 1rem; width: 100%; text-align: center;" onclick="showToast('Initiating SMS Dispatch & Call to Certified Guide ${guide.name}...', '📞');">
                Call / SMS Guide Now ↗
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- 🚨 SECTION 6: DISTRICT ADMINISTRATION & EMERGENCY MEDICAL HELPDESK -->
    <div style="background: rgba(211,47,47,0.08); border-left: 5px solid var(--primary-red); padding: 1.2rem 1.5rem; border-radius: var(--radius-md); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
      <div>
        <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--primary-red); margin-bottom: 0.2rem;">🏛️ District Administration & Tourist Protection Kiosk</h4>
        <p style="font-size: 0.88rem; color: var(--text-primary); font-weight: 600;">${dest.adminContact || 'District Magistrate Office Helpline: 1363 | Police & Medical: 112'}</p>
        <p style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.2rem;">All tourist checkpoints are monitored under the Assam Tourist Police security network.</p>
      </div>
      <button class="btn btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;" onclick="document.getElementById('portal-modal').classList.remove('active'); location.href='#helpdesk';">
        Report Issue / Support 1363 →
      </button>
    </div>
  `;

  modalOverlay.classList.add('active');
}

function openBookingModal(lodgeId) {
  const item = LODGING_DATA.find(l => l.id === lodgeId);
  if (!item) return;

  const modalOverlay = document.getElementById('portal-modal');
  const modalBody = document.getElementById('modal-body-content');

  document.querySelector('.modal-content').style.maxWidth = '700px';

  modalBody.innerHTML = `
    <div style="border-bottom: 2px solid var(--tea-emerald); padding-bottom: 1rem; margin-bottom: 1.5rem;">
      <span class="badge-awesome" style="background: var(--tea-emerald);">G2C Instant Online Reservation</span>
      <h2 style="font-size: 1.8rem; margin-top: 0.5rem;">${item.name}</h2>
      <p style="color: var(--text-muted); font-size: 0.9rem;">📍 ${item.location} • 🛡️ ${item.verifiedBy}</p>
    </div>

    <form id="booking-form" onsubmit="handleBookingSubmit(event, '${item.name}')">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.2rem;">
        <div>
          <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.4rem; color: var(--text-primary);">Check-in Date *</label>
          <input type="date" required style="width: 100%; padding: 0.7rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm); background: var(--bg-main); color: var(--text-primary);">
        </div>
        <div>
          <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.4rem; color: var(--text-primary);">Number of Guests *</label>
          <input type="number" min="1" max="15" value="2" required style="width: 100%; padding: 0.7rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm); background: var(--bg-main); color: var(--text-primary);">
        </div>
      </div>

      <div style="margin-bottom: 1.2rem;">
        <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.4rem; color: var(--text-primary);">Citizen Full Name (As per Aadhaar/Passport) *</label>
        <input type="text" placeholder="e.g., Rajdeep Saikia / Tourist Name" required style="width: 100%; padding: 0.7rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm); background: var(--bg-main); color: var(--text-primary);">
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
        <div>
          <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.4rem; color: var(--text-primary);">Mobile Number (For G2C SMS confirmation) *</label>
          <input type="tel" placeholder="+91 98765 43210" required style="width: 100%; padding: 0.7rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm); background: var(--bg-main); color: var(--text-primary);">
        </div>
        <div>
          <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.4rem; color: var(--text-primary);">Selected Room Package</label>
          <input type="text" value="₹${item.price} (${item.unit})" disabled style="width: 100%; padding: 0.7rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm); background: rgba(10,92,54,0.1); color: var(--tea-emerald); font-weight: 700;">
        </div>
      </div>

      <div style="background: rgba(212, 175, 55, 0.15); border-left: 4px solid var(--silk-gold); padding: 1rem; border-radius: var(--radius-sm); margin-bottom: 1.5rem; font-size: 0.85rem; color: var(--text-secondary);">
        <strong>🏛️ Assam Govt Consumer Protection Guarantee:</strong> Your booking reservation directly informs the verified host. No third-party platform commissions charged!
      </div>

      <div style="display: flex; justify-content: flex-end; gap: 1rem;">
        <button type="button" class="btn btn-secondary" onclick="document.getElementById('portal-modal').classList.remove('active')">Cancel</button>
        <button type="submit" class="btn btn-primary">Confirm G2C Reservation →</button>
      </div>
    </form>
  `;

  modalOverlay.classList.add('active');
}

function openGuideModal(targetDistrict = '') {
  const modalOverlay = document.getElementById('portal-modal');
  const modalBody = document.getElementById('modal-body-content');

  document.querySelector('.modal-content').style.maxWidth = '800px';

  modalBody.innerHTML = `
    <div style="border-bottom: 2px solid var(--silk-gold); padding-bottom: 1rem; margin-bottom: 1.5rem;">
      <span class="badge-awesome" style="background: var(--primary-red);">Citizen Employment Kiosk</span>
      <h2 style="font-size: 1.8rem; margin-top: 0.5rem;">Hire a Govt Certified Local Guide</h2>
      <p style="color: var(--text-muted); font-size: 0.9rem;">Connecting tourists with bilingual trained Assam youth under Govt initiative.</p>
    </div>

    <div style="margin-bottom: 2rem;">
      <div style="display: flex; flex-direction: column; gap: 1.2rem;">
        ${TOURIST_GUIDES_REGISTRY.map(g => `
          <div style="display: flex; justify-content: space-between; align-items: center; background: var(--bg-main); padding: 1.2rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); flex-wrap: wrap; gap: 1rem;">
            <div style="flex: 1; min-width: 250px;">
              <h4 style="font-size: 1.2rem; margin-bottom: 0.2rem; display: flex; align-items: center; gap: 0.5rem; color: var(--text-primary);">
                👮‍♂️ ${g.name} <span style="font-size: 0.75rem; background: var(--tea-emerald); color: #fff; padding: 0.15rem 0.5rem; border-radius: 4px;">${g.rating}</span>
              </h4>
              <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.3rem;">📍 Expert Regions: <strong>${g.district}</strong> • License ID: ${g.certId}</p>
              <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.4rem;">🗣️ Languages: ${g.languages}</p>
              <p style="font-size: 0.82rem; color: var(--tea-emerald); font-weight: 600;">"${g.specialty}"</p>
            </div>
            
            <div style="text-align: right; min-width: 170px;">
              <div style="font-size: 0.9rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem;">📞 ${g.phone}</div>
              <button class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.85rem; width: 100%;" onclick="showToast('Dispatching connection request & SMS to guide ${g.name}...', '📡'); document.getElementById('portal-modal').classList.remove('active');">
                Request Guide Hire ↗
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
    <div style="text-align: center;">
      <button class="btn btn-secondary" onclick="document.getElementById('portal-modal').classList.remove('active')">Close Directory</button>
    </div>
  `;

  modalOverlay.classList.add('active');
}

function handleBookingSubmit(event, lodgeName) {
  event.preventDefault();
  document.getElementById('portal-modal').classList.remove('active');
  showToast(`Booking confirmation for ${lodgeName} dispatched via Govt SMS portal!`, '🎉');
}

/* 7. Animated Stats Counter */
function initStatsCounter() {
  const stats = [
    { el: 'stat-parks', target: 7, suffix: '+' },
    { el: 'stat-wetlands', target: 40, suffix: '+' },
    { el: 'stat-homestays', target: 450, suffix: '+' },
    { el: 'stat-heritage', target: 600, suffix: '+' }
  ];

  stats.forEach(st => {
    const el = document.getElementById(st.el);
    if (!el) return;
    let count = 0;
    const step = Math.max(1, Math.floor(st.target / 35));
    const timer = setInterval(() => {
      count += step;
      if (count >= st.target) {
        count = st.target;
        clearInterval(timer);
      }
      el.innerText = `${count}${st.suffix}`;
    }, 40);
  });
}

/* Helper: Toast Messaging */
function showToast(message, icon = '🏛️') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span style="font-size: 1.2rem;">${icon}</span> <span>${message}</span>`;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
