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
            Full Guide ↗
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
          <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">G2C E-Brochure Ready</span>
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

/* 6. Modal Dialogs for Rich Guides & Reservations */
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

function openDestinationModal(destId) {
  const dest = DESTINATIONS_DATA.find(d => d.id === destId) || DESTINATIONS_DATA[0];

  const modalOverlay = document.getElementById('portal-modal');
  const modalBody = document.getElementById('modal-body-content');

  modalBody.innerHTML = `
    <div style="display: flex; gap: 0.5rem; margin-bottom: 0.8rem; flex-wrap: wrap;">
      <span class="badge-awesome" style="font-size: 0.75rem;">Official Tourist Guide</span>
      <span style="background: var(--tea-emerald); color: #fff; padding: 0.2rem 0.6rem; border-radius: var(--radius-full); font-size: 0.75rem; font-weight: 700;">${dest.badge}</span>
    </div>
    <h2 style="font-size: 2.2rem; margin-bottom: 0.2rem;">${dest.title}</h2>
    <h3 style="color: var(--primary-red); font-size: 1.1rem; font-weight: 600; margin-bottom: 1.2rem;">${dest.assameseTitle} — ${dest.district}</h3>
    
    <img src="${dest.image}" style="width: 100%; height: 320px; object-fit: cover; border-radius: var(--radius-md); margin-bottom: 1.5rem; box-shadow: var(--shadow-md);" alt="${dest.title}">
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; background: var(--bg-main); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); margin-bottom: 1.5rem;">
      <div>
        <strong style="color: var(--text-muted); font-size: 0.75rem; text-transform: uppercase; display: block;">🗓 Recommended Visit Season</strong>
        <span style="font-weight: 700; color: var(--text-primary); font-size: 0.95rem;">${dest.bestSeason}</span>
      </div>
      <div>
        <strong style="color: var(--text-muted); font-size: 0.75rem; text-transform: uppercase; display: block;">📍 GPS Coordinates</strong>
        <span style="font-weight: 700; color: var(--tea-emerald); font-size: 0.95rem;">${dest.gpsCoordinates}</span>
      </div>
    </div>

    <h4 style="font-size: 1.2rem; margin-bottom: 0.6rem;">About This Heritage Location</h4>
    <p style="color: var(--text-secondary); font-size: 1rem; line-height: 1.8; margin-bottom: 1.5rem;">${dest.fullDescription}</p>

    <h4 style="font-size: 1.2rem; margin-bottom: 0.8rem;">🌟 Key Citizen & Tourist Highlights</h4>
    <ul style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; margin-bottom: 2rem;">
      ${dest.highlights.map(h => `<li style="background: var(--bg-surface); padding: 0.6rem 1rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm); font-size: 0.9rem; font-weight: 600;">✨ ${h}</li>`).join('')}
    </ul>

    <div style="background: linear-gradient(135deg, var(--gov-topbar-bg), #0F172A); padding: 1.5rem; border-radius: var(--radius-md); color: #fff; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
      <div>
        <h5 style="color: var(--silk-gold); font-size: 1.1rem; margin-bottom: 0.2rem;">Need a Govt Certified Local Guide or Permit?</h5>
        <p style="font-size: 0.85rem; color: #CBD5E1;">Apply online through our G2C Single-Window Kiosk without middleman fees.</p>
      </div>
      <button class="btn btn-gold" onclick="openGuideModal('${dest.district}')">Book Guide & Passes ↗</button>
    </div>
  `;

  modalOverlay.classList.add('active');
}

function openBookingModal(lodgeId) {
  const item = LODGING_DATA.find(l => l.id === lodgeId);
  if (!item) return;

  const modalOverlay = document.getElementById('portal-modal');
  const modalBody = document.getElementById('modal-body-content');

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

  modalBody.innerHTML = `
    <div style="border-bottom: 2px solid var(--silk-gold); padding-bottom: 1rem; margin-bottom: 1.5rem;">
      <span class="badge-awesome" style="background: var(--primary-red);">Citizen Employment Kiosk</span>
      <h2 style="font-size: 1.8rem; margin-top: 0.5rem;">Hire a Govt Certified Local Guide</h2>
      <p style="color: var(--text-muted); font-size: 0.9rem;">Connecting tourists with bilingual trained Assam youth under Govt initiative.</p>
    </div>

    <div style="margin-bottom: 2rem;">
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        ${TOURIST_GUIDES_REGISTRY.map(g => `
          <div style="display: flex; justify-content: space-between; align-items: center; background: var(--bg-main); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
            <div>
              <h4 style="font-size: 1.1rem; margin-bottom: 0.2rem; display: flex; align-items: center; gap: 0.5rem;">
                👮‍♂️ ${g.name} <span style="font-size: 0.75rem; background: var(--tea-emerald); color: #fff; padding: 0.1rem 0.5rem; border-radius: 4px;">${g.rating}</span>
              </h4>
              <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.2rem;">📍 Expert Regions: <strong>${g.district}</strong></p>
              <p style="font-size: 0.8rem; color: var(--text-muted);">🗣️ Languages: ${g.languages} • ID: ${g.certId}</p>
            </div>
            <button class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.85rem;" onclick="showToast('Dispatching connection request to guide ${g.name}...', '📡'); document.getElementById('portal-modal').classList.remove('active');">
              Request Hire
            </button>
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
