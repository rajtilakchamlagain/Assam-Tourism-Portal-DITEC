# Assam Tourism G2C Portal — DITEC Internship Assignment

> [!IMPORTANT]  
> **Academic & Internship Project Disclaimer**  
> This project is a front-end engineering assignment and simulation developed as part of a **DITEC (Directorate of Information Technology, Electronics and Communication) Internship**.  
> **This is NOT an official website or web application of the Government of Assam, the Directorate of Tourism, or the Assam Tourism Development Corporation (ATDC).**  
> All features, contact numbers, lodging prices, and G2C service touchpoints serve purely as an architectural demonstration and mock frontend prototype following official **ePrastuti** framework conventions and **GIGW (Guidelines for Indian Government Websites 3.0)** compliance standards.

---

## 📌 Project Overview

This prototype simulates a modern, ultra-premium **Government-to-Citizen (G2C)** tourism portal for Assam (*"Awesome Assam - Land of the Red River and Blue Hills"*). It demonstrates how official government platforms can maintain strict compliance standards (accessibility, multi-language support, official branding) while delivering world-class visual aesthetics and interactive citizen services without heavy backend dependencies.

---

## ✨ Key Simulated Features

### 🏛️ 1. ePrastuti & GIGW 3.0 Compliance Architecture
- **Official Top Utility Header**: Displays state branding alongside explicit academic assignment disclosures.
- **W3C WCAG 2.1 Accessibility Suite**: 
  - Real-time text typography scaling (**`A-`**, **`A`**, **`A+`**).
  - High Contrast & Dark Theme toggler (**`🌗 Dark Mode` / `⚡ High Contrast` / `☀️ Light Mode`**).
  - Simulated bilingual & multilingual interface translation (**English**, **অসমীয়া (Assamese)**, **বাংলা (Bengali)**, **बड़ो (Bodo)**).

### 🚨 2. Live ASDMA State Flood & Travel Safety Advisory Desk
To address seasonal monsoon dynamics in rivers like the Brahmaputra and Barak, the portal introduces a real-time safety matrix simulation:
- **Live Alert Ticker**: Emulating circulars from the Assam State Disaster Management Authority (ASDMA).
- **Color-Coded Advisory Status Cards**:
  - 🟢 **Open & Safe to Visit**: Normal travel access for Nagsankar Shiva Temple, Haflong Hills, Kamakhya Shaktipith, and Sivasagar monuments.
  - 🟡 **Seasonal Advisory / Active Caution**: Specialized guidance for **Sonbeel Wetland** (water at full seasonal lake capacity, daytime rowing boats active under lifejacket regulations) and **Majuli River Island** (river velocity-regulated ferry schedules).
  - 🔴 **Temporarily Restricted**: Explaining low-lying grassland flood seasons in **Kaziranga National Park** with alternative highland viewpoints.

### 📅 3. Seasonal Tourism Calendar Matrix
An interactive explorer organizing Assam's ecological transformations by season:
- **🌦️ Monsoon Wonders (June–Sept)**: Sonbeel lake transformations, Haflong waterfalls, and Brahmaputra river cruising.
- **🌾 Autumn Heritage & Raas (Oct–Nov)**: Majuli Island Raas Mahotsav mask celebrations and Jatinga bird phenomena.
- **🦏 Winter Wildlife Safaris (Dec–Feb)**: Kaziranga rhino & tiger safari trails and winter migratory birding.
- **🌸 Spring & Rongali Bihu (March–May)**: Historic Rang Ghar Bihu dance celebrations and spring temple fairs.

### 🏡 4. Verified G2C Hospitality Directory (Hostels, Homestays & Lodges)
A simulated zero-commission accommodation registry designed to connect students, citizens, and global backpackers directly with inspected local hosts:
- **🎒 Backpackers Youth Hostels**: Youth transit hubs in Guwahati, Kohora Gate, and Majuli.
- **🏡 Riverside Eco & Tribal Homestays**: Vetted stays like *Sonbeel Riverside Eco-Homestay* (Barak Valley cuisine) and *Mising Bamboo Stilt Cottages*.
- **🏛️ Govt Tourist Lodges & Heritage Hotels**: ATDC Prashanti official lodges and Ahom Royal Tea Palaces.

### ✨ 5. G2C Single-Window Kiosk & Citizen Services
- **Certified Local Tour Guide Registry**: Simulates connecting tourists with licensed bilingual youth guides from local communities.
- **Online Permit Simulator**: Single-window ticket simulations for Kaziranga safaris and ferry crossings.
- **CPGRAMS Feedback & Grievance Desk**: Transparent helpdesk simulation integrating National Tourist Helpline (`1363`) and Police Emergency Dispatch (`112`).

---

## 🛠️ Technology Stack & Portable Engineering

- **HTML5 (Semantic & Accessible)**: Full WAI-ARIA tagging and GIGW 3.0 document outline compliance.
- **Vanilla CSS3 (Design System & Custom Properties)**: Engineered with custom color variables (`--assam-crimson`, `--tea-emerald`, `--silk-gold`), responsive grid layouts, and glassmorphism styling.
- **Modular JavaScript (ES6+)**: Zero NPM packages, zero bundlers (Vite/Webpack/Babel), and zero external library dependencies. 
- **100% Portable Deployment**: The entire multi-module web application launches instantly by opening `index.html` directly in any standard browser or serving via a lightweight HTTP dev server.

---

## 🚀 How to Run the Application Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/<your-username>/Assam-Tourism-Portal-DITEC.git
   cd Assam-Tourism-Portal-DITEC
   ```
2. **Instant Browser Execution**: 
   - Double-click the **`index.html`** file in your desktop File Explorer to run directly.
3. **Local HTTP Dev Server (Optional for WiFi network sharing)**:
   - Run via Python:
     ```bash
     python -m http.server 8080
     ```
   - Open your browser to `http://localhost:8080` (or share `http://<YOUR_LAN_IP>:8080` with devices on your same WiFi network).

---

## 👨‍💻 Internship & Author Details
- **Assignment Context**: Prototype & Architectural Study for G2C Public Portals under **DITEC Internship**.
- **Development Year**: 2026.
- **Framework Compliance Reference**: ePrastuti (Govt of Assam Website Standardization Framework) & GIGW 3.0.
