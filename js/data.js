/* Assam Tourism Portal — Comprehensive G2C Data Registry */

const DESTINATIONS_DATA = [
  {
    id: "sonbeel",
    title: "Sonbeel Wetland & Seasonal Lake",
    assameseTitle: "শোণবীল, কৰীমনগৰ",
    district: "Karimganj District (Barak Valley)",
    category: "wetland",
    badge: "Asia's 2nd Largest Wetland",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop",
    bestSeason: "Nov — April (Birding) | July — Sept (Boating)",
    shortDesc: "A phenomenal seasonal wetland that transforms into an endless glittering freshwater lake during monsoon, featuring iconic traditional rowing boats and migratory bird colonies.",
    fullDescription: "Sonbeel (or Shonbeel) is one of the most remarkable ecological spectacles in Assam, situated in the Karimganj district of Barak Valley. During winter, the wetland drains out via the Shingla river to become lush farmland and pasture. When monsoon rains arrive, it inundates to form Asia's second-largest seasonal lake! Visitors can rent traditional wooden wooden boats, photograph dramatic sun settings over the reflecting waters, and relish authentic Barak Valley fish delicacies.",
    highlights: ["Traditional Sunrise Boat Expeditions", "Rare Winter Migratory Bird Watching", "Local Fisherman Folk Village tours", "Photographer's Paradise"],
    gpsCoordinates: "24.7118° N, 92.4419° E"
  },
  {
    id: "nagsankar",
    title: "Nagsankar Shiva Temple & Sacred Lake",
    assameseTitle: "নাগশংকৰ মন্দিৰ, বিশ্বনাথ",
    district: "Biswanath District",
    category: "spiritual",
    badge: "4th Century Heritage & Sacred Turtles",
    image: "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?q=80&w=1000&auto=format&fit=crop",
    bestSeason: "Year-Round (Best during Maha Shivaratri)",
    shortDesc: "An ancient 4th-century sanctuary dedicated to Lord Shiva, globally celebrated for its serene temple pond harboring hundreds of revered, century-old softshell turtles.",
    fullDescription: "Built originally in the late 4th century CE by King Nagasankar (and subsequently restored by Ahom King Su-sen-pha), the Nagsankar Temple is a premier spiritual architecture situated near Biswanath Chariali. The temple complex is anchored by an expansive holy pond that acts as a protected natural sanctuary for rare freshwater soft-shell turtles (Mohan/Kürma), some over a century old! Pilgrims and ecotourists alike feed the gentle turtles while admiring fine Ahom dynasty stone sculptures.",
    highlights: ["Interacting with Sacred Temple Turtles", "Maha Shivaratri Grand Fair", "Ancient Architectural Ahom Stone Carvings", "Peacock Sanctuary Walk"],
    gpsCoordinates: "26.7942° N, 93.1830° E"
  },
  {
    id: "kaziranga",
    title: "Kaziranga National Park & Tiger Reserve",
    assameseTitle: "কাজিৰঙা ৰাষ্ট্ৰীয় উদ্যান",
    district: "Golaghat & Nagaon Districts",
    category: "wildlife",
    badge: "UNESCO World Heritage Site",
    image: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=1000&auto=format&fit=crop",
    bestSeason: "November — April",
    shortDesc: "Home to two-thirds of the planet's great one-horned Indian Rhinoceros, wild Asiatic water buffalos, and dense royal Bengal tiger populations across vast elephant grasses.",
    fullDescription: "Spanning the rich floodplains of the mighty Brahmaputra river, Kaziranga National Park represents one of the world's most successful conservation stories. Recognized by UNESCO as a World Heritage Site, this bio-diverse wonderland offers guided open-top jeep safaris and gentle dawn elephant-back excursions across four distinct tourism zones (Kohora, Bagori, Agoratoli, and Burapahar).",
    highlights: ["Dawn Elephant Back Safari", "Off-road Jeep Wildlife Trails", "Orchid & Biodiversity Park Tour", "Dolphins viewing at Brahmaputra lookout"],
    gpsCoordinates: "26.6598° N, 93.3563° E"
  },
  {
    id: "majuli",
    title: "Majuli Island & Neo-Vaishnavite Satras",
    assameseTitle: "মাজুলী নদী দ্বীপ",
    district: "Majuli District",
    category: "heritage",
    badge: "World's Largest River Island",
    image: "https://images.unsplash.com/photo-1621849400072-f554417f7051?q=80&w=1000&auto=format&fit=crop",
    bestSeason: "October — March (Raas Mahotsav)",
    shortDesc: "Cradle of classical Assamese Neo-Vaishnavite culture and monastic traditions, featuring iconic handcrafted bamboo masks, organic pottery, and enchanting sunset ferry rides.",
    fullDescription: "Floating serenely amidst the braided channels of the Brahmaputra, Majuli is the largest inhabited river island on earth. Founded in the 15th century by the saint-reformer Srimanta Sankardev, Majuli preserves Assam's soulful living traditions inside monastic institutions known as Satras. Visitors can witness traditional maskcrafting at Samaguri Satra, un-pottered clay techniques in Salmora village, and enjoy organic Mising tribal hospitalities.",
    highlights: ["Mask Making Demonstrations at Samaguri Satra", "Bhaona & Sattriya Classical Dance Performances", "Sunset Ferry Cruise over Brahmaputra", "Mising Tribal Village Immersion"],
    gpsCoordinates: "26.9535° N, 94.1118° E"
  },
  {
    id: "kamakhya",
    title: "Kamakhya Shaktipith (Nilachal Hills)",
    assameseTitle: "কামাখ্যা মন্দিৰ, গুৱাহাটী",
    district: "Kamrup Metropolitan (Guwahati)",
    category: "spiritual",
    badge: "Supreme Shakti Peetha",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1000&auto=format&fit=crop",
    bestSeason: "Year-round (Ambubachi Mela in June)",
    shortDesc: "Perched atop Nilachal Hill commanding panoramic vistas of Guwahati city and the Brahmaputra, this sacred temple is the most revered Shakta pilgrimage epicenter in India.",
    fullDescription: "The Kamakhya Temple is a celebrated ancient Hindu sanctuary dedicated to the Mother Goddess Kamakhya. Featuring classical Nilachala-style bee-hive shaped shikhara architecture with elaborate sculptured stone relief panels, it represents a synthesis of traditional indigenous and Aryan spiritual legacies. The annual Ambubachi Mela draws millions of mystics and pilgrims globally.",
    highlights: ["Sunset Viewpoint over Brahmaputra River", "Guided Architectural & Mythology Tour", "Nilachal Sacred Pond & Tantric Shrineline", "Quick Citizen Online Darshan Booking"],
    gpsCoordinates: "26.1666° N, 91.7061° E"
  },
  {
    id: "haflong",
    title: "Haflong Hill Station & Jatinga Ridge",
    assameseTitle: "হাফ্লং পাহাৰীয়া চহৰ, ডিমা হাচাও",
    district: "Dima Hasao District",
    category: "hills",
    badge: "The Switzerland of the East",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop",
    bestSeason: "September — November | April — June",
    shortDesc: "Assam's sole elevated hill station, enchanting visitors with crystal blue lakes, misty blue Borail mountain vistas, indigenous flower orchids, and historic train tunnels.",
    fullDescription: "Nestled in the lush highlands of Dima Hasao, Haflong translates to 'Ant Hill' in the regional Dimasa language. Boasting cool weather, tranquil emerald waters at Haflong Lake, and breathtaking vistas of mountain bridges along the vintage railway line, it offers an unblemished nature retreat. Just 9km away is the mysterious birding village of Jatinga, famous for its autumnal ornithological phenomenon.",
    highlights: ["Boating across Haflong Emerald Lake", "Jatinga Bird Sanctuary Night Tower", "Heritage Train Bridge Trek at Harangajao", "Dimasa & Zeme Naga Tribal Culinary Tour"],
    gpsCoordinates: "25.1764° N, 93.0204° E"
  },
  {
    id: "sivasagar",
    title: "Sivasagar & Ahom Dynasty Monuments",
    assameseTitle: "শিৱসાગৰ (আহোম ৰাজকীয় কীৰ্তিস্তম্ভ)",
    district: "Sivasagar District",
    category: "heritage",
    badge: "Asia's Oldest Amphitheater",
    image: "https://images.unsplash.com/photo-1599818296362-e9389a691bc3?q=80&w=1000&auto=format&fit=crop",
    bestSeason: "October — April",
    shortDesc: "The monumental capital of the valiant Ahom dynasty who reigned unbeaten for 600 years, featuring majestic brick palaces, royal amphitheaters, and artificial tanks.",
    fullDescription: "Sivasagar transports citizens back into the glorious era of the Ahom Kingdom (1228–1826 CE). Key landmarks include the iconic 'Rang Ghar'—a distinctive two-story red royal pavilion that served as Asia's oldest amphitheater for buffalo fights and traditional Bihu celebrations—and 'Talatal Ghar', an ingenious subterranean military barracks with escape tunnels leading to the river.",
    highlights: ["Rang Ghar Royal Sports Pavilion Visit", "Talatal Ghar Underground Labyrinth", "Shiva Dol & Sivasagar Boro Pukhuri tank", "Tai-Ahom Royal Museum"],
    gpsCoordinates: "26.9859° N, 94.6319° E"
  }
];

/* 🚨 ASDMA State Flood & Travel Safety Advisory Registry */
const FLOOD_ADVISORY_DATA = [
  {
    id: "adv-nagsankar",
    destination: "Nagsankar Shiva Temple & Pond",
    district: "Biswanath",
    status: "OPEN_SAFE",
    statusText: "🟢 Open & Safe to Visit",
    statusColor: "#0A5C36",
    statusBg: "rgba(10, 92, 54, 0.15)",
    waterLevel: "Normal (No Inundation)",
    ferryRoadStatus: "All NH-15 highway approach roads completely clear.",
    advisoryMessage: "Temple complex and sacred softshell turtle sanctuary operating normally under serene sunny weather. Pilgrims can access daily darshan without hindrance.",
    updatedAt: "Today, 09:30 AM IST (ASDMA Direct)"
  },
  {
    id: "adv-haflong",
    destination: "Haflong Hill Station & Jatinga",
    district: "Dima Hasao",
    status: "OPEN_SAFE",
    statusText: "🟢 Open & Safe to Visit",
    statusColor: "#0A5C36",
    statusBg: "rgba(10, 92, 54, 0.15)",
    waterLevel: "Hill Terrain (No Flood Risk)",
    ferryRoadStatus: "Lumding-Haflong highway scenic route open & well-maintained.",
    advisoryMessage: "Weather is pleasant and misty. Boating at Haflong Emerald Lake and trekking along Borail Range bridges are fully active for tourists.",
    updatedAt: "Today, 10:15 AM IST (Dima Hasao Admin)"
  },
  {
    id: "adv-kamakhya",
    destination: "Kamakhya Shaktipith (Nilachal Hills)",
    district: "Kamrup Metro (Guwahati)",
    status: "OPEN_SAFE",
    statusText: "🟢 Open & Safe to Visit",
    statusColor: "#0A5C36",
    statusBg: "rgba(10, 92, 54, 0.15)",
    waterLevel: "Elevated Hilltop (100% Safe)",
    ferryRoadStatus: "Guwahati City & Nilachal motorable roadways functioning smoothly.",
    advisoryMessage: "Supreme Shakti Peetha is completely unaffected by river water fluctuations. Ropeway and taxi services to hilltop operating on regular schedules.",
    updatedAt: "Today, 08:45 AM IST (Kamrup Admin)"
  },
  {
    id: "adv-sivasagar",
    destination: "Sivasagar Rang Ghar & Shiva Dol",
    district: "Sivasagar",
    status: "OPEN_SAFE",
    statusText: "🟢 Open & Safe to Visit",
    statusColor: "#0A5C36",
    statusBg: "rgba(10, 92, 54, 0.15)",
    waterLevel: "Normal (Historic artificial tanks stable)",
    ferryRoadStatus: "Upper Assam roadways & express railway connects fully clear.",
    advisoryMessage: "All heritage monuments of the Ahom Empire (Rang Ghar, Talatal Ghar, Ahom Museum) open from sunrise to sunset with professional tourist guides.",
    updatedAt: "Today, 10:00 AM IST (ASI & ATDC)"
  },
  {
    id: "adv-sonbeel",
    destination: "Sonbeel Wetland & Monsoon Lake",
    district: "Karimganj (Barak Valley)",
    status: "CAUTION_ACTIVE",
    statusText: "🟡 Monsoon Lake Active (Day Boating Only)",
    statusColor: "#B45309",
    statusBg: "rgba(245, 158, 11, 0.18)",
    waterLevel: "Full Monsoon Inundation (Lake Mode)",
    ferryRoadStatus: "Approach roads via Ramchandi intact; wetland flooded as per natural seasonal cycle.",
    advisoryMessage: "Sonbeel has successfully transformed into Asia's 2nd largest lake! Boating tours are open during daylight hours (8 AM — 4 PM) with mandatory Govt lifejackets. Night boat travel is strictly restricted.",
    updatedAt: "Today, 11:10 AM IST (Karimganj Disaster Mgmt)"
  },
  {
    id: "adv-majuli",
    destination: "Majuli River Island & Satras",
    district: "Majuli / Jorhat",
    status: "CAUTION_ACTIVE",
    statusText: "🟡 Regulated Ferry Service (Monsoon Caution)",
    statusColor: "#B45309",
    statusBg: "rgba(245, 158, 11, 0.18)",
    waterLevel: "Brahmaputra Current Moderate",
    ferryRoadStatus: "Ro-Pax & Timber Ferry frequency adjusted based on river water velocity.",
    advisoryMessage: "Satras (Samaguri, Kamalabari) and eco-homestays on elevated embankments are safe and operational. However, tourists must check live ferry timing updates at Namati Ghat before crossing during rainy spells.",
    updatedAt: "Today, 07:45 AM IST (Inland Waterways Authority)"
  },
  {
    id: "adv-kaziranga",
    destination: "Kaziranga National Park & Tiger Reserve",
    district: "Golaghat / Nagaon",
    status: "TEMPORARY_RESTRICTED",
    statusText: "🔴 Lowland Jeep/Elephant Safaris Paused",
    statusColor: "#D32F2F",
    statusBg: "rgba(211, 47, 47, 0.15)",
    waterLevel: "Highland Flood Stage (Wildlife Protection Mode)",
    ferryRoadStatus: "NH-715 Highway clear, but vehicles must observe strict 40km/hr speed limits for animal corridors.",
    advisoryMessage: "Core lowland grasslands are currently inundated as part of the annual ecosystem replenishment. Off-road Jeep & Elephant safaris inside Kohora/Bagori interior trails are temporarily suspended. Tourists can still visit Orchid Parks, ATDC Lodges, and viewpoint lookouts.",
    updatedAt: "Today, 06:30 AM IST (Forest Chief Conservator / ASDMA)"
  }
];

/* 📅 Seasonal Destinations & Festival Matrix */
const SEASONAL_DESTINATIONS_DATA = {
  monsoon: {
    seasonTitle: "🌦️ Monsoon Wonders (June — September)",
    seasonSubtitle: "Witness lush emerald landscapes, overflowing seasonal lakes, and drifting mountain cloudscapes.",
    recommendationBadge: "Best for Boating & Waterfall Enthusiasts",
    destinations: [
      {
        name: "Sonbeel Seasonal Lake",
        district: "Karimganj District",
        highlight: "Monsoon Transformation Spectacular",
        desc: "During monsoon, Sonbeel inundates to become a massive shimmering freshwater lake! Rent wooden fishing boats and witness ethereal cloud reflections.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
        tip: "Pack waterproof raincoats and opt for afternoon sunset boat cruises.",
        destId: "sonbeel"
      },
      {
        name: "Haflong & Borail Cloud Ridge",
        district: "Dima Hasao",
        highlight: "Misty Mountain Waterfalls",
        desc: "Assam's sole hill station turns into a paradise of drifting fogs, roaring seasonal roadside waterfalls, and blossoming green mountain orchids.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
        tip: "Stay in hilltop timber homestays with fireplace heating and hot Dimasa tea.",
        destId: "haflong"
      },
      {
        name: "Brahmaputra River Monsoon Cruise",
        district: "Guwahati & Umananda",
        highlight: "Mighty River Expansion",
        desc: "Experience the sheer power and majesty of the Brahmaputra River from official government cruise vessels equipped with glass dining decks.",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop",
        tip: "Book sunset dinner cruises departing from Fancy Bazar Promenade.",
        destId: "kamakhya"
      }
    ]
  },
  autumn: {
    seasonTitle: "🌾 Autumn & Sacred Heritage (October — November)",
    seasonSubtitle: "Golden harvest vibes, pleasant crisp air, and grand island monastic festival celebrations.",
    recommendationBadge: "Best for Cultural Immersion & Raas Mahotsav",
    destinations: [
      {
        name: "Majuli Island Raas Mahotsav",
        district: "Majuli District",
        highlight: "4-Day Classical Vaishnavite Epic",
        desc: "Autumn marks the legendary Raas Mahotsav across Majuli's Satras, featuring vibrant bamboo masks, classical Sattriya dances, and all-night folk theater.",
        image: "https://images.unsplash.com/photo-1621849400072-f554417f7051?q=80&w=800&auto=format&fit=crop",
        tip: "Book Mising bamboo stilt homestays well in advance for October/November.",
        destId: "majuli"
      },
      {
        name: "Jatinga Bird Phenomenon Ridge",
        district: "Dima Hasao (Near Haflong)",
        highlight: "Mysterious Autumn Ornithology",
        desc: "During moonless autumn nights with gentle fog, rare avian species are drawn toward village light towers in this enigmatic mountain valley.",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
        tip: "Accommodate in certified Dima Hasao homestays with guided night excursions.",
        destId: "haflong"
      },
      {
        name: "Nagsankar Turtle Pond Serenity",
        district: "Biswanath",
        highlight: "Clear Autumn Shrine Visit",
        desc: "Autumn offers crystal blue skies over the 4th-century Shiva temple pond, making it perfect for feeding sacred softshell turtles and relaxing in shrine gardens.",
        image: "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?q=80&w=800&auto=format&fit=crop",
        tip: "Combine your trip with peaceful drives through Biswanath tea estates.",
        destId: "nagsankar"
      }
    ]
  },
  winter: {
    seasonTitle: "🦏 Winter Wildlife & Safari Expeditions (December — February)",
    seasonSubtitle: "Cool morning mists, dry savannah grasses, and peak season for spotting wild Rhinos & Royal Bengal Tigers.",
    recommendationBadge: "Best for Safari Adventurers & Wildlife Photographers",
    destinations: [
      {
        name: "Kaziranga National Park",
        district: "Golaghat & Nagaon",
        highlight: "Peak Rhino & Tiger Safaris",
        desc: "Winter grasses recede, granting unobstructed views of one-horned rhinos, wild buffalo herds, and exotic migratory waterfowls across four active safari zones.",
        image: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=800&auto=format&fit=crop",
        tip: "Reserve early morning dawn elephant safaris at Kohora range via G2C kiosk.",
        destId: "kaziranga"
      },
      {
        name: "Sivasagar Ahom Dynasty Trails",
        district: "Sivasagar",
        highlight: "Pleasant Monument Exploration",
        desc: "Enjoy comfortable cool weather while walking through subterranean military labyrinths at Talatal Ghar and climbing Shiva Dol monuments.",
        image: "https://images.unsplash.com/photo-1599818296362-e9389a691bc3?q=80&w=800&auto=format&fit=crop",
        tip: "Stay at The Ahom Heritage Royal Resort and experience traditional winter Assamese thali.",
        destId: "sivasagar"
      },
      {
        name: "Sonbeel Winter Wetland Farm & Birding",
        district: "Karimganj",
        highlight: "Migratory Siberian Bird Haven",
        desc: "In winter, the floodwaters drain out into Shingla River, exposing rich green farmlands attracting flocks of Siberian winter bird migratory colonies.",
        image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=800&auto=format&fit=crop",
        tip: "Bring binoculars for birding and interact with local Barak Valley farm households.",
        destId: "sonbeel"
      }
    ]
  },
  spring: {
    seasonTitle: "🌸 Spring & Rongali Bihu Jubilation (March — May)",
    seasonSubtitle: "Blooming orchids (Kopou Phool), warm festive hospitality, and the grand Rongali Bihu New Year celebrations.",
    recommendationBadge: "Best for Bihu Folk Festivals & Tea Tourism",
    destinations: [
      {
        name: "Rang Ghar Royal Bihu Festival",
        district: "Sivasagar District",
        highlight: "Historic Amphitheater Celebration",
        desc: "Celebrate Rongali Bihu (Assamese New Year in April) in front of Rang Ghar—where Ahom monarchs once watched traditional Bihu dancers and indigenous sports.",
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop",
        tip: "Wear traditional Gamusa and experience festive open-air Bihu stage dances.",
        destId: "sivasagar"
      },
      {
        name: "Nagsankar Maha Shivaratri Mela",
        district: "Biswanath",
        highlight: "Grand Spring Temple Fair",
        desc: "Spring welcomes Maha Shivaratri festivities at Nagsankar Temple! Thousands of lamps light up the sacred turtle lake amidst spiritual folk music.",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop",
        tip: "Participate in evening arti lighting and stay in heritage temple bungalows.",
        destId: "nagsankar"
      },
      {
        name: "Majuli Island Spring Satra Visits",
        district: "Majuli",
        highlight: "Mask Crafting & Sunny Ferry Rides",
        desc: "Spring offers calm Brahmaputra waters for sunny ferry boat crossings. Visit Samaguri Satra to craft traditional masks with master artisans.",
        image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=800&auto=format&fit=crop",
        tip: "Rent bicycles at backpackers hostels to tour island villages under gentle sunshine.",
        destId: "majuli"
      }
    ]
  }
};

const LODGING_DATA = [
  /* Backpackers Hostels & Youth Campuses */
  {
    id: "hostel-1",
    name: "Brahmaputra Backpackers Youth Hostel",
    type: "hostel",
    location: "Guwahati (Near Uzan Bazar)",
    district: "Kamrup Metro",
    price: "499",
    unit: "per dorm bed / night",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1000&auto=format&fit=crop",
    verifiedBy: "Assam Tourism Certified (G2C)",
    rating: "4.8 ★",
    amenities: ["High-speed Wi-Fi", "Common Assamese Kitchen", "Locker Rooms", "Rooftop River Jam Space"],
    description: "An vibrant community hub engineered for young domestic and international backpackers. Walking distance from the scenic Brahmaputra riverfront Promenade."
  },
  {
    id: "hostel-2",
    name: "Kaziranga Wanderers Hostels & Camps",
    type: "hostel",
    location: "Kohora Gate, Kaziranga",
    district: "Golaghat",
    price: "599",
    unit: "per bunk bed / night",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1000&auto=format&fit=crop",
    verifiedBy: "ATDC Youth Hub Approved",
    rating: "4.9 ★",
    amenities: ["Evening Bonfire", "Shared Jeep Safari Pooling", "Free Breakfast", "Bicycle Rental"],
    description: "The ideal launchpad for solo travelers visiting Kaziranga. Organize shared jeep safaris directly at the reception and meet wildlife photographers from around the world."
  },
  {
    id: "hostel-3",
    name: "Majuli Island Youth Transit Camp",
    type: "hostel",
    location: "Garamur, Majuli Island",
    district: "Majuli",
    price: "450",
    unit: "per bed / night",
    image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=1000&auto=format&fit=crop",
    verifiedBy: "G2C Certified Hostel",
    rating: "4.7 ★",
    amenities: ["Bicycle Complimentary Use", "Solar Power Backup", "Organic Farm Breakfast", "Satrio Cultural Nights"],
    description: "Eco-friendly thatched hostel huts allowing students and backpackers to experience simple monastic island lifestyles without straining their travel budget."
  },

  /* Eco-Homestays (Citizen Hospitality Connect) */
  {
    id: "homestay-1",
    name: "Sonbeel Riverside Eco-Homestay",
    type: "homestay",
    location: "Ramchandi Village, Near Sonbeel Lake",
    district: "Karimganj",
    price: "1200",
    unit: "per private room / night",
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=1000&auto=format&fit=crop",
    verifiedBy: "Govt Eco-Tourism Homestay",
    rating: "4.9 ★",
    amenities: ["Home-cooked Barak Valley Meals", "Private Boat Arrangement", "Wetland Viewing Deck", "Solar Hot Water"],
    description: "Stay directly with an indigenous fisherman family on the elevated embankments of Sonbeel Lake. Includes traditional home-cooked Assamese bamboo shoot and river fish recipes."
  },
  {
    id: "homestay-2",
    name: "Nagsankar Temple Heritage Homestay",
    type: "homestay",
    location: "Biswanath Chariali (Near Shrine Gate)",
    district: "Biswanath",
    price: "1500",
    unit: "per suite / night",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop",
    verifiedBy: "Assam Heritage Hospitality",
    rating: "4.8 ★",
    amenities: ["Temple Pond View", "Traditional Assamese Breakfast (Pitha/Laru)", "AC Rooms", "Garden Courtyard"],
    description: "A tranquil ancestral Assamese tea-bungalow styled house located just 500 meters from Nagsankar Shiva Temple. Wake up to serene temple chimes and gentle garden views."
  },
  {
    id: "homestay-3",
    name: "Mising Stilt Riverside Bamboo Homestay",
    type: "homestay",
    location: "Kamalabari, Majuli",
    district: "Majuli",
    price: "1100",
    unit: "per bamboo cottage",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1000&auto=format&fit=crop",
    verifiedBy: "Majuli Tourism Board Certified",
    rating: "4.9 ★",
    amenities: ["Authentic Mising Stilt Architecture", "Handloom Weaving Workshop", "River Fishing Guide", "Organic Dinner Included"],
    description: "Experience genuine indigenous Mising tribal architecture raised on eco-friendly timber stilts. Host family guides guests through traditional silk loom weaving demonstrations."
  },
  {
    id: "homestay-4",
    name: "Cloud Ridge Borail Homestay",
    type: "homestay",
    location: "Upper Haflong Hilltop",
    district: "Dima Hasao",
    price: "1800",
    unit: "per villa room / night",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
    verifiedBy: "Dima Hasao Govt Tourism Seal",
    rating: "4.7 ★",
    amenities: ["Mountain Valley Balcony", "Fireplace Heating", "Home-brewed Local Tea", "Jatinga Escorted Trek"],
    description: "Perched high among drifting fog and mountain orchids, offering majestic panoramic views of the Borail Range. Enjoy traditional Dimasa warm soups during chilly evenings."
  },

  /* Government Lodges & Hotels */
  {
    id: "lodge-1",
    name: "ATDC Prashanti Tourist Lodge (Official)",
    type: "lodge",
    location: "Kohora Central Range, Kaziranga",
    district: "Golaghat",
    price: "2800",
    unit: "per luxury AC double room",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
    verifiedBy: "Govt of Assam Direct Property",
    rating: "4.6 ★",
    amenities: ["VIP Safari Counter", "Multi-cuisine Govt Restaurant", "Spacious Conference Hall", "Ample Car Parking"],
    description: "The official state tourism guest house complex operated by the Assam Tourism Development Corporation (ATDC). Offers prompt assistance for forest permit clearances and elephant safari ticketing."
  },
  {
    id: "hotel-1",
    name: "The Ahom Heritage Royal Tea Palace",
    type: "hotel",
    location: "Near Rang Ghar, Sivasagar",
    district: "Sivasagar",
    price: "3500",
    unit: "per deluxe room / night",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1000&auto=format&fit=crop",
    verifiedBy: "Certified Premium Heritage Hotel",
    rating: "4.9 ★",
    amenities: ["Ahom Royal Architecture Theme", "Swimming Pool", "Heritage Museum onsite", "Assamese Gourmet Thali"],
    description: "A luxury boutique hotel that commemorates the architectural grandeur of the 600-year Ahom empire. Perfect luxury resting spot when visiting historical monuments."
  },
  {
    id: "lodge-2",
    name: "Brahmaputra Riverfront Guest House (ATDC)",
    type: "lodge",
    location: "Fancy Bazar / Kharghuli, Guwahati",
    district: "Kamrup Metro",
    price: "2200",
    unit: "per riverview room",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop",
    verifiedBy: "Govt of Assam Direct Property",
    rating: "4.7 ★",
    amenities: ["Direct Sunset River Balcony", "Airport Shuttle Available", "24/7 Security & Power", "Helipad Accessibility"],
    description: "Official government guest facility commanding sweeping views over the mighty Brahmaputra river and peacock island (Umananda Temple)."
  }
];

const TOURIST_GUIDES_REGISTRY = [
  { name: "Prasenjit Phukan", district: "Kaziranga & Sivasagar", languages: "English, Assamese, Hindi", certId: "ASM-GU-1049", rating: "4.9 ★" },
  { name: "Anomita Das", district: "Majuli & Jorhat", languages: "English, Assamese, Bengali", certId: "ASM-GU-2291", rating: "4.8 ★" },
  { name: "Bikramjit Purkayastha", district: "Sonbeel & Barak Valley", languages: "English, Bengali, Sylheti", certId: "ASM-GU-3810", rating: "5.0 ★" },
  { name: "David Dimasa", district: "Haflong & Jatinga", languages: "English, Hindi, Dimasa, Zeme", certId: "ASM-GU-4102", rating: "4.9 ★" }
];
