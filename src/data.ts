import type { Experience, BookingAddon, Review, Vehicle } from './types';

export const HOME_EXPERIENCES: Experience[] = [
  {
    id: 'jeep-adventure',
    title: 'Mount Batur Sunrise Jeep',
    tagline: 'Volcano & Black Lava 4x4',
    shortDesc: 'Sewa mobil Toyota Kijang Innova premium dengan supir pribadi berpengalaman untuk kenyamanan ekstra menjelajahi keindahan Bali.',
    longDesc: 'Conquer volcanic trails with our private luxury 4x4 Jeep. Rasakan sensasi petualangan epik menyaksikan matahari terbit dari lereng Gunung Batur dengan armada 4x4 Jeep klasik terbuka, dilanjutkan menjelajahi hamparan pasir hitam Black Lava purba berlatar kaldera megah.',
    bgImage: '/bali_volcano_bg_1783528702622.jpg',
    cardImage: '/bali_jeep_adventure_1783528719252.jpg',
    pricePerPerson: 120,
    duration: '8 - 10 Jam',
    location: 'Kintamani, Bangli',
    difficulty: 'Mudah - Sedang',
    rating: 4.9,
    reviewCount: 320,
    tourType: 'SIGNATURE 4X4',
    buttonText: 'Book Now',
    highlights: [
      'Sunrise View Point Gunung Batur',
      'Offroad Black Lava & Black Sand',
      'Pemandian Air Panas Alami Toya Devasya',
      'Perkebunan Kopi Luwak Kintamani'
    ],
    inclusions: [
      'Mobil privat ber-AC antar jemput hotel',
      'Armada 4x4 Classic Jeep & supir lokal profesional',
      'Tiket masuk kawasan Batur & tiket air panas',
      'Sarapan hangat di puncak sunrise',
      'Air mineral dan pemandu berbahasa Inggris'
    ],
    exclusions: [
      'Pengeluaran pribadi & belanja oleh-oleh',
      'Tipping supir dan pemandu (sukarela)'
    ],
    itinerary: [
      { time: '03:00 AM', title: 'Penjemputan Hotel', desc: 'Supir privat kami menjemput Anda langsung dari lobby hotel di Bali.' },
      { time: '04:45 AM', title: 'Tiba di Basecamp & Briefing', desc: 'Peralihan ke armada 4x4 Jeep berlisensi dan pengarahan singkat.' },
      { time: '05:45 AM', title: 'Golden Sunrise Batur', desc: 'Menikmati fajar emas merekah di atas lautan awan kaldera.' },
      { time: '07:00 AM', title: 'Black Lava Track', desc: 'Offroad melintasi batuan vulkanik hitam eksotis peninggalan erupsi purba.' },
      { time: '08:30 AM', title: 'Pemandian Air Panas', desc: 'Berendam santai di kolam air panas alami menghadap Danau Batur.' },
      { time: '11:30 AM', title: 'Kembali ke Hotel', desc: 'Perjalanan kembali dengan nyaman ke akomodasi Anda.' }
    ]
  },
  {
    id: 'ocean-escape',
    title: 'Nusa Penida Yacht & Ocean Luxury Escape',
    tagline: 'Private Yacht Charter',
    shortDesc: 'Sail pristine turquoise waters on a premium yacht, swim with manta rays in crystal bays, and dine under the sunset.',
    longDesc: 'Petualangan bahari privat nan eksklusif mengarungi perairan kristal Nusa Penida menggunakan kapal pesiar modern. Snorkeling bersama ikan pari Manta raksasa, bersantai di pantai tersembunyi, dan santap siang gourmet di atas geladak.',
    bgImage: '/bali_ocean_bg_1783528769356.jpg',
    cardImage: '/ocean_luxury_escape_1783528733687.jpg',
    pricePerPerson: 280,
    duration: 'Full Day (9 Jam)',
    location: 'Nusa Penida & Lembongan',
    difficulty: 'Semua Usia',
    rating: 4.9,
    reviewCount: 215,
    tourType: 'VIP OCEAN CRUISE',
    buttonText: 'Book Now',
    highlights: [
      'Berenang bersama Manta Rays di Manta Point',
      'Pemandangan Tebing Ikonik Kelingking Cliff',
      'Snorkeling Coral Reef di Crystal Bay',
      'Santap Siang Mewah di Atas Kapal'
    ],
    inclusions: [
      'Charter kapal pesiar privat & kru profesional',
      'Peralatan snorkeling lengkap kualitas tinggi',
      'Makan siang prasmanan premium & hidangan laut',
      'Minuman ringan, mocktail & buah segar tropis',
      'Antar-jemput mobil privat hotel ke pelabuhan'
    ],
    exclusions: [
      'Minuman beralkohol berbayar di luar paket',
      'Dokumentasi drone pribadi (tersedia add-on)'
    ],
    itinerary: [
      { time: '07:30 AM', title: 'Penjemputan Privat Hotel', desc: 'Mobil mewah menjemput Anda menuju marina Serangan / Sanur.' },
      { time: '08:30 AM', title: 'Boarding Kapal Pesiar', desc: 'Sambutan selamat datang dengan welcome drink dan pengenalan kru.' },
      { time: '09:45 AM', title: 'Manta Point Snorkeling', desc: 'Berenang di dekat pari Manta yang ramah dan megah.' },
      { time: '12:00 PM', title: 'Gourmet Lunch di Atas Geladak', desc: 'Santap siang lezat diiringi deburan ombak dan angin sepoi laut.' },
      { time: '02:00 PM', title: 'Eksplorasi Crystal Bay', desc: 'Berenang di perairan jernih berpasir putih nan tenang.' },
      { time: '04:30 PM', title: 'Kembali ke Pelabuhan & Hotel', desc: 'Pelayaran santai kembali ke daratan Bali.' }
    ]
  },
  {
    id: 'jungle-retreat',
    title: 'Ubud Serene Jungle Retreat & Spa',
    tagline: 'Holistic Wellness Sanctuary',
    shortDesc: 'Immerse in lush tropical rainforests with private open-air villas, river valley views, and holistic wellness therapies.',
    longDesc: 'Retret ketenangan jiwa di tengah rimba sakral Ubud. Nikmati relaksasi spa holistik khas kerajaan Bali berlatar lembah Sungai Ayung, ritual pembersihan diri Tirta Empul, dan santap malam organik berbintang.',
    bgImage: '/bali_jungle_bg_1783528784335.jpg',
    cardImage: '/serene_jungle_retreat_1783528749017.jpg',
    pricePerPerson: 195,
    duration: '7 - 8 Jam',
    location: 'Ubud, Gianyar',
    difficulty: 'Sangat Santai',
    rating: 4.8,
    reviewCount: 180,
    tourType: 'LUXURY RETREAT',
    buttonText: 'Book Now',
    highlights: [
      'Perawatan Spa Tradisional Bali 120 Menit',
      'Yoga & Meditasi Privat di Shala Bambu',
      'Ritual Melukat di Pura Suci Sebatu / Tirta Empul',
      'Fine Dining Menu Sehat Organik di Tepi Lembah'
    ],
    inclusions: [
      'Transportasi mobil privat ber-AC eksekutif',
      'Sesi spa tubuh, lulur rempah & mandi bunga mawar',
      'Instruktur yoga & meditasi berlisensi',
      'Set lunch organik 3-course di resort bintang 5',
      'Sarung & perlengkapan ritual pembersihan'
    ],
    exclusions: [
      'Pengeluaran pribadi di luar program spa',
      'Pembelian produk aromaterapi tambahan'
    ],
    itinerary: [
      { time: '08:30 AM', title: 'Penjemputan Hotel Santai', desc: 'Penjemputan menggunakan mobil ber-AC sejuk dengan air mineral dingin.' },
      { time: '09:30 AM', title: 'Sesi Yoga & Pranayama', desc: 'Relaksasi pernapasan terarah di shala bambu terbuka menghadap kanopi hutan.' },
      { time: '11:00 AM', title: 'Ritual Tradisional Spa Bali', desc: 'Perawatan pijat relaksasi 2 jam menggunakan minyak atsiri alami.' },
      { time: '01:30 PM', title: 'Santap Siang Organik Tepi Lembah', desc: 'Menikmati kuliner sehat berbahan lokal segar dengan panorama ngarai.' },
      { time: '03:30 PM', title: 'Penyucian Diri Sakral', desc: 'Ritual spiritual melukat di mata air suci untuk ketenangan batin.' },
      { time: '05:30 PM', title: 'Perjalanan Kembali', desc: 'Kembali ke hotel dalam kondisi segar bugar dan relaks.' }
    ]
  }
];

export const TOUR_PACKAGES: Experience[] = [
  {
    id: 'ubud-highlights',
    title: 'UBUD HIGHLIGHTS',
    tagline: 'Culture • Nature • Tradition',
    shortDesc: "Discover the heart of Bali with a private journey through Ubud's beautiful rice terraces, sacred temples, waterfalls and traditional Balinese culture.",
    longDesc: "Discover the heart of Bali with a private journey through Ubud's beautiful rice terraces, sacred temples, waterfalls and traditional Balinese culture. Enjoy a completely flexible itinerary with our private air-conditioned vehicle and friendly English-speaking driver.",
    bgImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787397434/c67903ef-d494-4a2d-8614-e2e2964fc934.png',
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787397434/c67903ef-d494-4a2d-8614-e2e2964fc934.png',
    pricePerPerson: 45,
    pricePerCar: 45,
    duration: 'Up to 10 hours',
    location: 'Ubud, Gianyar',
    difficulty: 'Private Tour',
    rating: 4.9,
    reviewCount: 198,
    tourType: 'PRIVATE TOUR',
    extraHourRate: 'USD $5/hour/car',
    buttonText: 'BOOK YOUR UBUD EXPERIENCE',
    highlights: [
      'Tegalalang Rice Terrace',
      'Tirta Empul Holy Water Temple',
      'Ubud Monkey Forest',
      'Ubud Palace',
      'Ubud Art Market',
      'Tegenungan Waterfall'
    ],
    inclusions: [
      'Private air-conditioned car',
      'English-speaking driver',
      'Fuel',
      'Hotel/villa pick-up & drop-off',
      'Flexible itinerary'
    ],
    exclusions: [
      'Entrance tickets, meals and personal expenses.',
      'Extra hour: USD $5/hour/car'
    ],
    itinerary: [
      { time: '08:30 AM', title: 'Hotel / Villa Pick-Up', desc: 'Pick-up with a comfortable private air-conditioned car and English-speaking driver.' },
      { time: '10:00 AM', title: 'Tegalalang Rice Terrace', desc: 'Marvel at Ubud’s iconic terraced rice fields and stunning emerald green vistas.' },
      { time: '11:30 AM', title: 'Tirta Empul Holy Water Temple', desc: 'Visit the sacred water purification temple and experience Balinese culture.' },
      { time: '01:00 PM', title: 'Ubud Palace & Ubud Art Market', desc: 'Explore traditional Balinese royal architecture and browse handmade local Balinese crafts.' },
      { time: '02:30 PM', title: 'Ubud Monkey Forest', desc: 'Walk under ancient jungle canopies and see wild macaque monkeys.' },
      { time: '04:30 PM', title: 'Tegenungan Waterfall', desc: 'Relax and take photos at the roaring tropical waterfall cascade.' },
      { time: '06:00 PM', title: 'Hotel Return Drop-off', desc: 'Safe and comfortable drop-off back at your hotel or villa.' }
    ]
  },
  {
    id: 'uluwatu-sunset',
    title: '🌅 ULUWATU & SUNSET',
    tagline: 'Beaches • Temple • Sunset • Kecak Dance',
    shortDesc: "Explore Bali's spectacular southern coastline and finish your day with the legendary sunset at Uluwatu Temple.",
    longDesc: "Explore Bali's spectacular southern coastline and finish your day with the legendary sunset at Uluwatu Temple. Discover secluded pristine beaches, ancient clifftop temples, and the mesmerizing Kecak Fire Dance.",
    bgImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1788783724/08865608-6a19-42db-aee3-2a8ec628dd1a.png',
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1788783724/08865608-6a19-42db-aee3-2a8ec628dd1a.png',
    pricePerPerson: 45,
    pricePerCar: 45,
    duration: 'Up to 10 hours',
    location: 'Uluwatu & Bukit Peninsula',
    difficulty: 'Private Tour',
    rating: 5.0,
    reviewCount: 265,
    tourType: 'PRIVATE TOUR',
    extraHourRate: 'USD $5/hour/car',
    buttonText: 'BOOK YOUR SUNSET TOUR',
    highlights: [
      'Padang Padang Beach',
      'Thomas Beach',
      'Suluban Beach',
      'Uluwatu Temple',
      'Kecak Fire Dance',
      'Jimbaran Bay'
    ],
    inclusions: [
      'Private air-conditioned car',
      'English-speaking driver',
      'Fuel',
      'Hotel/villa pick-up & drop-off',
      'Flexible itinerary'
    ],
    exclusions: [
      'Entrance tickets, Kecak Dance tickets, meals and personal expenses.',
      'Extra hour: USD $5/hour/car'
    ],
    itinerary: [
      { time: '10:00 AM', title: 'Hotel / Villa Pick-Up', desc: 'Private pickup from your resort or villa by our friendly English-speaking driver.' },
      { time: '11:30 AM', title: 'Thomas Beach & Suluban Beach', desc: 'Explore exotic world-class surf coastlines framed by majestic limestone cliffs.' },
      { time: '02:00 PM', title: 'Padang Padang Beach', desc: 'Soak in the sun on the golden sands made famous worldwide.' },
      { time: '04:30 PM', title: 'Uluwatu Temple Clifftop Walk', desc: 'Walk along the panoramic stone paths towering 70 meters above the Indian Ocean.' },
      { time: '06:00 PM', title: 'Kecak Fire Dance at Sunset', desc: 'Experience the legendary fire and dance performance under the fiery evening sky.' },
      { time: '07:30 PM', title: 'Jimbaran Bay Dinner', desc: 'Optional beachfront seafood feast with candlelight on the sand.' },
      { time: '08:30 PM', title: 'Hotel Return Drop-off', desc: 'Smooth, relaxing private drive back to your resort or villa.' }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  ...HOME_EXPERIENCES,
  ...TOUR_PACKAGES
];

export const BOOKING_ADDONS: BookingAddon[] = [
  {
    id: 'private-photographer',
    name: 'Bespoke Private Photographer',
    description: 'A professional travel photographer to capture candid moments of your adventure (Includes 50+ edited high-res digital shots).',
    price: 95
  },
  {
    id: 'drone-video',
    name: 'Cinematic Drone Videography',
    description: 'Aerial video shooting utilizing 4K cinema drones for dramatic landscape memories (Includes a 1-minute social media reel).',
    price: 120
  },
  {
    id: 'champagne-service',
    name: 'Veuve Clicquot Champagne & Caviar',
    description: 'A chilled bottle of premium champagne accompanied by gourmet local caviar and fresh strawberries on ice.',
    price: 180
  },
  {
    id: 'helicopter-transfer',
    name: 'Ultra-Luxe Helicopter Return (1-Way)',
    description: 'Skip the return roads completely. Fly back directly to southern heliports with jaw-dropping island vistas.',
    price: 850
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Alexander V.',
    rating: 5,
    date: '2026-06-15',
    comment: 'The Ubud Highlights tour was absolutely spectacular! The rice terraces and Tirta Empul temple were breathtaking, and our private driver was so helpful, knowledgeable, and patient with our family.',
    experienceId: 'ubud-highlights',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Charlotte Dubois',
    rating: 5,
    date: '2026-06-28',
    comment: 'The Uluwatu & Sunset tour was incredible. Padang Padang Beach was stunning, and the Kecak fire dance at sunset with the clifftop ocean view was a memory of a lifetime. Highly recommend Gede Bali Trip!',
    experienceId: 'uluwatu-sunset',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Made Suarta',
    rating: 5,
    date: '2026-07-02',
    comment: 'Layanan tour privat dari Gede Bali Trip sangat memuaskan. Mobil bersih, AC dingin, supirnya tepat waktu dan ramah sekali. Fleksibel dan itinerary bisa disesuaikan!',
    experienceId: 'ubud-highlights',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Jonathan K.',
    rating: 5,
    date: '2026-05-19',
    comment: 'Private car tour for $45 was the best decision we made in Bali. Up to 10 hours of comfort, private driver, no rush, and took us to hidden spots in Uluwatu. Recommend 10/10.',
    experienceId: 'uluwatu-sunset',
    verified: true
  }
];

export const FAQS = [
  {
    question: 'Are all tours completely private?',
    answer: 'Yes. Every booking with Gede Bali Trip is 100% private. Your clean air-conditioned vehicle and English-speaking driver are exclusively dedicated to you and your group. We do not combine bookings.'
  },
  {
    question: 'What is the cancellation policy for weather conditions?',
    answer: 'Your safety is our absolute priority. If a tour is cancelled due to heavy rain, strong winds, or volcanic volcanic activity advisories, we offer free rescheduling or a complete 100% refund.'
  },
  {
    question: 'Can dietary restrictions be accommodated?',
    answer: 'Absolutely. Whether you are vegan, gluten-free, keto, halal, or have specific allergen requirements, our private chefs and partner restaurants will craft a customized culinary menu for you. Please indicate your needs when filling out your booking details.'
  },
  {
    question: 'How far in advance should we secure our dates?',
    answer: 'Because we operate exclusively with high-end private charters and highly specialized local guides, our spots are limited. We highly recommend booking at least 2 to 4 weeks in advance, especially during peak seasons.'
  },
  {
    question: 'What should we bring with us?',
    answer: 'For the Volcano Adventure: bring a warm windbreaker/hoodie (temperatures can drop to 12°C/53°F at sunrise), sunglasses, and closed-toe shoes. For the Ocean Cruise: bring swimsuits, high SPF sunblock, and light linen wear. For the Jungle Retreat: bring comfortable walking sandals and a change of garments for the purifying water ritual.'
  }
];

export const GALLERY_PHOTOS = [
  { url: '/bali_volcano_bg_1783528702622.jpg', category: 'volcano', title: 'Mount Batur Caldera Peak' },
  { url: '/bali_jeep_adventure_1783528719252.jpg', category: 'volcano', title: 'Off-road 4x4 Cruisers' },
  { url: '/bali_ocean_bg_1783528769356.jpg', category: 'ocean', title: 'Nusa Penida Yachting' },
  { url: '/ocean_luxury_escape_1783528733687.jpg', category: 'ocean', title: 'Turquoise Escapes' },
  { url: '/bali_jungle_bg_1783528784335.jpg', category: 'jungle', title: 'Ubud River Valleys' },
  { url: '/serene_jungle_retreat_1783528749017.jpg', category: 'jungle', title: 'Tropical Infinity Bliss' }
];

export const VEHICLES: Vehicle[] = [
  {
    id: 'toyota-avanza',
    name: 'New Avanza',
    type: 'car',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1783761973/24693abb-f732-49b4-ba68-28c882af0c16.png',
    passengers: 6,
    transmission: 'Manual / Automatic',
    engine: '1,500 cc',
    priceWithDriverPerDay: 450000,
    priceWithoutDriverPerDay: 300000,
    description: 'Sewa mobil New Avanza terbaru di Bali. Dilengkapi kabin yang nyaman, AC dingin merata, dan suspensi mumpuni untuk keluarga Anda.',
    features: ['6 Kursi Penumpang', 'Driver Profesional', 'Bahan Bakar Minyak (BBM)', 'AC Double Blower', 'Bersih & Wangi']
  },
  {
    id: 'toyota-innova',
    name: 'Innova Reborn',
    type: 'car',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1783762018/64feebd4-e9e7-4ffe-ac80-801b1ab26fd0.png',
    passengers: 6,
    transmission: 'Automatic',
    engine: '2,400 cc Diesel',
    priceWithDriverPerDay: 600000,
    priceWithoutDriverPerDay: 450000,
    description: 'Kabin super luas, suspensi empuk, dan mesin diesel bertenaga tangguh. Kenyamanan perjalanan berkelas VIP bersama keluarga.',
    features: ['6 Kursi Penumpang', 'Driver Profesional', 'Bahan Bakar Minyak (BBM)', 'Kabin Luas & Senyap', 'AC Dingin Maksimal']
  },
  {
    id: 'innova-zenix',
    name: 'Innova Zenix Type Q',
    type: 'car',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1783762059/56d3602a-cd36-437e-9a76-eab2be375ce3.png',
    passengers: 5,
    transmission: 'Automatic',
    engine: '2,000 cc Hybrid',
    priceWithDriverPerDay: 1200000,
    priceWithoutDriverPerDay: 0,
    description: 'Armada premium generasi terbaru dengan teknologi Hybrid senyap, captain seat mewah, dan interior eksklusif kelas VIP.',
    features: ['5 Seat Penumpang', 'Driver VIP & BBM', 'Captain Seat Premium', 'Panoramic Roof', 'Kabin Mewah Senyap']
  },
  {
    id: 'toyota-alphard',
    name: 'Toyota Alphard',
    type: 'car',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1783762106/74503d32-3371-4191-a619-7b1cd976e1d2.png',
    passengers: 5,
    transmission: 'Automatic',
    engine: '2,500 cc',
    priceWithDriverPerDay: 2500000,
    priceWithoutDriverPerDay: 0,
    description: 'Simbol kemewahan sejati dan kenyamanan VIP First-Class. Dilengkapi dengan suspensi udara super empuk dan interior megah.',
    features: ['5 Seat VIP', 'Driver VIP & BBM', 'Kabin First-Class', 'Electric Sliding Doors', 'AC Double Blower']
  },
  {
    id: 'hiace-commuter',
    name: 'Hiace Commuter',
    type: 'car',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1783762136/882d66e6-45b8-429b-a17f-6769179a7221.png',
    passengers: 15,
    transmission: 'Manual',
    engine: '2,500 cc Diesel',
    priceWithDriverPerDay: 1000000,
    priceWithoutDriverPerDay: 0,
    description: 'Mikrobus tangguh untuk rombongan keluarga besar atau rombongan pariwisata. Lapang, nyaman, dan handal menyusuri Bali.',
    features: ['15 Seat Penumpang', 'Sopir Pariwisata & BBM', 'Kabin Sangat Lapang', 'AC Multi-Zone Dingin', 'Sangat Nyaman']
  },
  {
    id: 'bus-29',
    name: 'Bus 29 Seat',
    type: 'car',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1783762175/1dcdb7c6-c3ac-4b4a-b509-fa0697eb985f.png',
    passengers: 29,
    transmission: 'Manual',
    engine: 'Diesel Multi',
    priceWithDriverPerDay: 2000000,
    priceWithoutDriverPerDay: 0,
    description: 'Bus pariwisata medium berkapasitas besar. Sangat nyaman untuk rombongan instansi, korporasi, maupun rombongan keluarga besar.',
    features: ['29 Seat Rombongan', 'Sopir Bus Berlisensi & BBM', 'Bagasi Luas', 'Audio Karaoke', 'AC Dingin Merata']
  }
];

