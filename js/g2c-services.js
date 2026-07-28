/* Assam Tourism Portal — ePrastuti & GIGW Citizen Services Controller */

document.addEventListener('DOMContentLoaded', () => {
  setupAccessibilityTools();
  setupThemeSwitcher();
  setupLanguageSimulation();
  setupG2CGrievanceForm();
  setupMobileNav();
});

/* 1. ePrastuti Font Scale Control (A-, A, A+) */
function setupAccessibilityTools() {
  const btnMinus = document.getElementById('font-decrease');
  const btnReset = document.getElementById('font-reset');
  const btnPlus = document.getElementById('font-increase');
  
  let currentZoom = 16; // Base 16px

  if (btnMinus) {
    btnMinus.addEventListener('click', () => {
      if (currentZoom > 12) {
        currentZoom -= 2;
        document.documentElement.style.fontSize = `${currentZoom}px`;
        showToast(`Accessibility: Text size reduced (${currentZoom}px)`, '🔍');
      }
    });
  }

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      currentZoom = 16;
      document.documentElement.style.fontSize = `${currentZoom}px`;
      showToast('Accessibility: Text size reset to normal', '🎯');
    });
  }

  if (btnPlus) {
    btnPlus.addEventListener('click', () => {
      if (currentZoom < 24) {
        currentZoom += 2;
        document.documentElement.style.fontSize = `${currentZoom}px`;
        showToast(`Accessibility: Text size enlarged (${currentZoom}px)`, '🔍');
      }
    });
  }
}

/* 2. Theme Toggings: Default Light -> Dark -> High Contrast */
function setupThemeSwitcher() {
  const themeBtn = document.getElementById('theme-toggle');
  const themes = ['light', 'dark', 'high-contrast'];
  const themeLabels = {
    'light': '🌗 Dark Mode',
    'dark': '⚡ High Contrast',
    'high-contrast': '☀️ Light Mode'
  };
  let currentIndex = 0;

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % themes.length;
      const selectedTheme = themes[currentIndex];
      
      if (selectedTheme === 'light') {
        document.documentElement.removeAttribute('data-theme');
      } else {
        document.documentElement.setAttribute('data-theme', selectedTheme);
      }
      
      themeBtn.innerText = themeLabels[selectedTheme];
      showToast(`ePrastuti Theme switched to: ${selectedTheme.toUpperCase()}`, '🎨');
    });
  }
}

/* 3. Official Bilingual / Multilingual Simulator */
function setupLanguageSimulation() {
  const langSelector = document.getElementById('lang-selector');
  if (!langSelector) return;

  const greetings = {
    'EN': { name: 'English', subtitle: 'Land of the Red River and Blue Hills' },
    'AS': { name: 'অসমীয়া', subtitle: 'ৰঙা নদী আৰু নীলা পাহাৰৰ দেশ, অসমত স্বাগতম!' },
    'BN': { name: 'বাংলা', subtitle: 'লাল নদী ও নীল পাহাড়ের ভূমি আসামে আপনাকে স্বাগতম!' },
    'BO': { name: 'बड़ो', subtitle: 'असम राज्ये फयेगु! गजा दैमा आरो निला हाजो!' }
  };

  langSelector.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('lang-badge')) {
      const code = e.target.getAttribute('data-lang');
      const langData = greetings[code] || greetings['EN'];
      
      // Highlight active badge
      document.querySelectorAll('.lang-badge').forEach(b => b.style.background = 'var(--tea-emerald)');
      e.target.style.background = 'var(--primary-red)';

      // Update Subtitle in Hero if present
      const heroSubtitle = document.getElementById('hero-dynamic-tag');
      if (heroSubtitle) {
        heroSubtitle.innerText = langData.subtitle;
      }

      showToast(`Portal interface translated to: ${langData.name}`, '🌐');
    }
  });
}

/* 4. G2C Grievance Redressal & Helpdesk Submission (CPGRAMS / C-Support) */
function setupG2CGrievanceForm() {
  const form = document.getElementById('g2c-help-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const ticketId = 'ASM-G2C-' + Math.floor(100000 + Math.random() * 900000);
    
    form.reset();
    showToast(`Your citizen feedback has been registered! Tracking Ref: ${ticketId}`, '✅');
  });
}

/* 5. Mobile Responsive Burger Toggle */
function setupMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.querySelector('.nav-menu');
  
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isVisible = menu.style.display === 'flex';
      menu.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        menu.style.flexDirection = 'column';
        menu.style.position = 'absolute';
        menu.style.top = '86px';
        menu.style.left = '0';
        menu.style.right = '0';
        menu.style.background = 'var(--bg-surface)';
        menu.style.padding = '1.5rem';
        menu.style.boxShadow = 'var(--shadow-lg)';
        menu.style.zIndex = '95';
      }
    });
  }
}

/* Simulated Safari & Inner Line Permit Booking Kiosk */
function openPermitSimulator() {
  const modalOverlay = document.getElementById('portal-modal');
  const modalBody = document.getElementById('modal-body-content');

  modalBody.innerHTML = `
    <div style="border-bottom: 2px solid var(--primary-red); padding-bottom: 1rem; margin-bottom: 1.5rem;">
      <span class="badge-awesome" style="background: var(--primary-red);">e-District Portal Service</span>
      <h2 style="font-size: 1.8rem; margin-top: 0.5rem;">Single-Window Safari & Forest Permit Kiosk</h2>
      <p style="color: var(--text-muted); font-size: 0.9rem;">Book Kaziranga Elephant Safaris & Sonbeel Boating Permits instantly online.</p>
    </div>

    <form onsubmit="event.preventDefault(); document.getElementById('portal-modal').classList.remove('active'); showToast('Your permit pass has been generated and emailed!', '🎟️');">
      <div style="margin-bottom: 1.2rem;">
        <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.4rem;">Select Wildlife Zone / Service *</label>
        <select required style="width: 100%; padding: 0.7rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm); background: var(--bg-main); color: var(--text-primary);">
          <option value="">-- Choose Official Activity --</option>
          <option>Kaziranga Kohora Range (Dawn Elephant Safari)</option>
          <option>Kaziranga Bagori Range (Afternoon Jeep Safari)</option>
          <option>Sonbeel Wetland (Govt Inspected Wooden Boat Ride)</option>
          <option>Majuli Ferry Cruise (Namatighat to Garamur)</option>
        </select>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
        <div>
          <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.4rem;">Preferred Date *</label>
          <input type="date" required style="width: 100%; padding: 0.7rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm); background: var(--bg-main); color: var(--text-primary);">
        </div>
        <div>
          <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.4rem;">Vehicle / Boat No. of People *</label>
          <input type="number" min="1" max="10" value="2" required style="width: 100%; padding: 0.7rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm); background: var(--bg-main); color: var(--text-primary);">
        </div>
      </div>

      <div style="background: rgba(10, 92, 54, 0.15); border: 1px solid var(--tea-emerald); padding: 1rem; border-radius: var(--radius-sm); margin-bottom: 1.5rem; font-size: 0.85rem; color: var(--text-primary);">
        <strong>ℹ️ Citizen Instruction:</strong> Bring a valid Government Photo ID (Aadhaar / Driving License) for gate scanning at national parks and ferry ghats.
      </div>

      <div style="display: flex; justify-content: flex-end; gap: 1rem;">
        <button type="button" class="btn btn-secondary" onclick="document.getElementById('portal-modal').classList.remove('active')">Cancel</button>
        <button type="submit" class="btn btn-primary">Generate E-Permit Pass ↗</button>
      </div>
    </form>
  `;

  modalOverlay.classList.add('active');
}
