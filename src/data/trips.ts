import type { TripItem } from "@/types/trip";

export const trips: TripItem[] = [
  {
    id: "1",
    title: "Mediterranean Cruise",
    description:
      "Sail through the beautiful Mediterranean Sea and explore stunning coastal towns. Experience the magic of the Amalfi Coast from the deck of an authentic sailing yacht, stopping at hidden coves and historic ports. Enjoy authentic Italian cuisine, warm sea breezes, and breathtaking sunset views over dramatic cliffs. Create unforgettable memories as you swim in crystal-clear turquoise waters and wander through charming seaside villages.",
    price: 2500,
    location: "Amalfi Coast, Italy",
    duration: "7 days",
    maxGuests: 8,
    yachtType: "Luxury Motor Yacht",
    img: require("../../assets/images/trips/mediterranean.webp"),
    imgDescr: require("../../assets/images/trips/mediterranean2.webp"),
    gallery: [
      {
        id: "salon",
        image: require("../../assets/images/trips/gallery/mediterranean-1.webp"),
        title: "Main Salon",
        description:
          "The heart of the yacht, where guests can relax and socialize. This spacious, elegant interior features comfortable modern furnishings, warm wood finishes, and large panoramic windows overlooking the dramatic Mediterranean coastline. Natural sunlight fills the space, creating a bright and welcoming atmosphere.",
      },
      {
        id: "cabin",
        image: require("../../assets/images/trips/gallery/mediterranean-2.webp"),
        title: "Master Cabin",
        description:
          "A private retreat designed for comfort and relaxation. This full-beam cabin features a spacious double bed, warm wood finishes, and a large panoramic window overlooking the Mediterranean coast. Soft textiles and natural tones create an elegant, peaceful atmosphere.",
      },
      {
        id: "bathroom",
        image: require("../../assets/images/trips/gallery/mediterranean-3.webp"),
        title: "En-suite Bathroom",
        description:
          "An elegant bathroom adjoining the Master Cabin, finished in light marble and natural wood. Modern fixtures and a large mirror enhance the sense of space, while carefully designed lighting creates a bright, refined atmosphere.",
      },
      {
        id: "dining",
        image: require("../../assets/images/trips/gallery/mediterranean-4.webp"),
        title: "Aft Deck Dining",
        description:
          "An inviting outdoor dining area at the stern of the yacht, sheltered by an elegant canopy. Enjoy a meal in the open air as the sun sets over the rugged Mediterranean coastline, with the sea breeze and warm evening light setting the mood.",
      },
    ],
    reviews: [
      {
        id: "review-1",
        tripId: "1",
        name: "Emily Johnson",
        country: "United States",
        date: "August 2026",
        rating: 5,
        title: "A dream come true!",
        text: "The Amalfi Coast was absolutely breathtaking! We loved exploring charming seaside villages, swimming in crystal-clear water, and enjoying beautiful sunsets from the yacht. The crew made us feel welcome from the very first day.",
        avatar: require("../../assets/images/trips/reviews/Emily-Johnson.webp"),
      },
      {
        id: "review-2",
        tripId: "1",
        name: "Daniel Wilson",
        country: "United Kingdom",
        date: "July 2026",
        rating: 5,
        title: "The perfect Mediterranean getaway",
        text: "Everything was beautifully organized. The yacht was comfortable, the food was delicious, and every stop along the coast was more beautiful than the last. A wonderful way to discover Italy!",
        avatar: require("../../assets/images/trips/reviews/Daniel-Wilson.webp"),
      },
      {
        id: "review-3",
        tripId: "1",
        name: "Sophie Martin",
        country: "France",
        date: "June 2026",
        rating: 4,
        title: "Beautiful views and great memories",
        text: "We had an amazing week sailing along the Amalfi Coast. The scenery was unforgettable, and we especially enjoyed the peaceful mornings on deck. It was a little hard to say goodbye!",
        avatar: require("../../assets/images/trips/reviews/Sophie-Martin.webp"),
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Departure from Naples",
        description:
          "Begin your journey in Naples and sail towards the beautiful island of Procida. Enjoy the colorful harbor and your first evening at sea.",
        points: [
          {
            id: "naples",
            name: "Naples",
            description: "Your sailing adventure begins here.",
            latitude: 40.8518,
            longitude: 14.2681,
            activities: ["marina", "sightseeing", "restaurant", "shopping"],
          },
          {
            id: "procida",
            name: "Procida",
            description: "Explore the colorful marina and charming streets.",
            latitude: 40.7608,
            longitude: 14.0147,
            activities: ["marina", "beach", "swimming", "scenicViews"],
          },
        ],
      },
      {
        day: 2,
        title: "Discover Ischia",
        description:
          "Sail to Ischia, an island famous for its thermal springs, lush landscapes, and beautiful coastal views.",
        points: [
          {
            id: "ischia",
            name: "Ischia",
            description:
              "Discover the island's charming villages and coastline.",
            latitude: 40.7272,
            longitude: 13.9481,
            activities: ["swimming", "sightseeing", "scenicViews"],
          },
        ],
      },
      {
        day: 3,
        title: "Sorrento Coast",
        description:
          "Enjoy a scenic cruise towards Sorrento. Admire dramatic cliffs and spend time exploring the historic town.",
        points: [
          {
            id: "sorrento",
            name: "Sorrento",
            description: "Enjoy panoramic views and explore the old town.",
            latitude: 40.6263,
            longitude: 14.3758,
            activities: [
              "sightseeing",
              "restaurant",
              "shopping",
              "scenicViews",
            ],
          },
        ],
      },
      {
        day: 4,
        title: "The Island of Capri",
        description:
          "Discover Capri, with its turquoise waters, spectacular rock formations, and picturesque Marina Grande.",
        points: [
          {
            id: "capri",
            name: "Capri",
            description: "Explore the island and its beautiful coastline.",
            latitude: 40.5532,
            longitude: 14.2222,
            activities: ["swimming", "snorkeling", "scenicViews", "shopping"],
          },
        ],
      },
      {
        day: 5,
        title: "Positano Escape",
        description:
          "Sail along the Amalfi Coast to Positano. Enjoy the colorful hillside houses, beautiful beaches, and relaxed atmosphere.",
        points: [
          {
            id: "positano",
            name: "Positano",
            description:
              "Discover one of Italy's most picturesque coastal towns.",
            latitude: 40.6281,
            longitude: 14.4849,
            activities: ["beach", "swimming", "shopping", "scenicViews"],
          },
        ],
      },
      {
        day: 6,
        title: "Explore Amalfi",
        description:
          "Continue along the coast to Amalfi. Wander through its historic streets and enjoy authentic Italian cuisine.",
        points: [
          {
            id: "amalfi",
            name: "Amalfi",
            description:
              "Visit the historic town and its beautiful waterfront.",
            latitude: 40.634,
            longitude: 14.6027,
            activities: ["sightseeing", "restaurant", "shopping", "beach"],
          },
        ],
      },
      {
        day: 7,
        title: "Return to Naples",
        description:
          "Enjoy your final morning at sea before returning to Naples, taking home unforgettable memories of the Mediterranean.",
        points: [
          {
            id: "naples-return",
            name: "Naples",
            description: "Return to the starting point of your journey.",
            latitude: 40.8518,
            longitude: 14.2681,
            activities: ["marina"],
          },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Caribbean Adventure",
    description:
      "Discover the vibrant culture and pristine beaches of the Caribbean islands aboard a state-of-the-art luxury yacht. Sail across crystal-clear waters to hidden bays, world-class snorkeling spots, and secluded white-sand shores. Immerse yourself in the lively local atmosphere, taste tropical flavors, and relax under swaying palm trees. This ultimate tropical getaway blends thrilling water adventures with absolute comfort and elegance.",
    price: 3000,
    location: "British Virgin Islands",
    duration: "5 days",
    maxGuests: 6,
    yachtType: "Sailing Yacht",
    img: require("../../assets/images/trips/caribbean.webp"),
    imgDescr: require("../../assets/images/trips/caribbean2.webp"),
    gallery: [
      {
        id: "salon",
        image: require("../../assets/images/trips/gallery/caribbean-1.webp"),
        title: "Main Salon",
        description:
          "A warm and inviting living space at the heart of this sailing yacht. Rich teak and mahogany details complement light upholstered furnishings, creating a timeless nautical atmosphere. Portholes and the open companionway bring in natural light and offer glimpses of the Caribbean Sea.",
      },
      {
        id: "cabin",
        image: require("../../assets/images/trips/gallery/caribbean-2.webp"),
        title: "Master Cabin",
        description:
          "A private cabin nestled in the bow of the yacht, designed to make the most of its distinctive hull shape. It features a comfortable double bed, rich wood finishes, and small side portholes. An overhead hatch provides fresh air and natural light, while keeping the Caribbean close at hand.",
      },
      {
        id: "navigation",
        image: require("../../assets/images/trips/gallery/caribbean-3.webp"),
        title: "Navigation Station & Chart Table",
        description:
          "A dedicated navigation corner that captures the spirit of traditional sailing. The classic wooden chart table is equipped with nautical charts and navigation instruments, alongside modern communication and GPS equipment. A functional space that reflects the adventurous character of the yacht.",
      },
      {
        id: "dining",
        image: require("../../assets/images/trips/gallery/caribbean-4.webp"),
        title: "Cockpit Dining Area",
        description:
          "An intimate outdoor dining space in the yacht's cockpit, perfect for relaxed meals and evenings under the stars. A solid teak table, comfortable seating, and warm ambient lighting create a welcoming setting, with views of a palm-fringed Caribbean atoll.",
      },
    ],
    reviews: [
      {
        id: "review-4",
        tripId: "2",
        name: "Olivia Brown",
        country: "Canada",
        date: "August 2026",
        rating: 5,
        title: "Paradise on the water!",
        text: "The Caribbean was everything we imagined and more. Beautiful beaches, warm turquoise water, and fantastic snorkeling spots. The yacht was lovely, and the crew made the whole trip feel effortless.",
        avatar: require("../../assets/images/trips/reviews/Olivia-Brown.webp"),
      },
      {
        id: "review-5",
        tripId: "2",
        name: "James Taylor",
        country: "Australia",
        date: "July 2026",
        rating: 5,
        title: "An unforgettable adventure",
        text: "Every day brought something new. We explored hidden bays, enjoyed amazing local food, and spent hours swimming in the warm sea. The sailing experience was fantastic!",
        avatar: require("../../assets/images/trips/reviews/James-Taylor.webp"),
      },
      {
        id: "review-6",
        tripId: "2",
        name: "Isabella Garcia",
        country: "Spain",
        date: "June 2026",
        rating: 4,
        title: "A perfect tropical escape",
        text: "A wonderful combination of adventure and relaxation. The yacht was comfortable, and the Caribbean sunsets were simply magical. I would definitely recommend this trip!",
        avatar: require("../../assets/images/trips/reviews/Isabella-Garcia.webp"),
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Departure from Tortola",
        description:
          "Begin your Caribbean adventure in Road Town and sail across the turquoise waters to Norman Island. Discover hidden coves, explore the famous sea caves, and enjoy your first evening surrounded by the beauty of the Caribbean.",
        points: [
          {
            id: "caribbean-tortola",
            name: "Road Town, Tortola",
            description:
              "Your Caribbean sailing adventure begins in the lively harbor of Tortola.",
            latitude: 18.4258,
            longitude: -64.6231,
            activities: ["marina", "sightseeing", "restaurant", "shopping"],
          },
          {
            id: "caribbean-norman",
            name: "Norman Island",
            description:
              "Explore secluded bays, mysterious sea caves, and crystal-clear snorkeling waters.",
            latitude: 18.3156,
            longitude: -64.6132,
            activities: ["snorkeling", "swimming", "beach", "scenicViews"],
          },
        ],
      },
      {
        day: 2,
        title: "Relax at Cooper Island",
        description:
          "Sail through the sheltered Sir Francis Drake Channel to Cooper Island. Spend the day swimming in warm turquoise waters, snorkeling among colorful marine life, and relaxing on a beautiful tropical beach.",
        points: [
          {
            id: "caribbean-cooper",
            name: "Cooper Island",
            description:
              "Enjoy a peaceful island escape with sandy beaches, clear waters, and beautiful coastal views.",
            latitude: 18.378,
            longitude: -64.5101,
            activities: ["beach", "swimming", "snorkeling", "scenicViews"],
          },
        ],
      },
      {
        day: 3,
        title: "Discover Virgin Gorda",
        description:
          "Explore the spectacular Baths of Virgin Gorda, where enormous granite boulders create hidden pools, natural tunnels, and secluded sandy beaches. Enjoy a day of swimming, exploring, and taking in the island's extraordinary scenery.",
        points: [
          {
            id: "caribbean-virgin-gorda",
            name: "The Baths, Virgin Gorda",
            description:
              "Discover fascinating granite formations, hidden pools, and one of the Caribbean's most beautiful beaches.",
            latitude: 18.4294,
            longitude: -64.444,
            activities: ["sightseeing", "beach", "swimming", "hiking"],
          },
        ],
      },
      {
        day: 4,
        title: "Tropical Escape to Anegada",
        description:
          "Sail north to the peaceful island of Anegada, famous for its long white-sand beaches, coral reefs, and untouched natural beauty. Spend the day snorkeling, enjoying fresh Caribbean seafood, and relaxing beneath the palm trees.",
        points: [
          {
            id: "caribbean-anegada",
            name: "Anegada",
            description:
              "Experience pristine beaches, vibrant coral reefs, and the relaxed atmosphere of this unique island.",
            latitude: 18.7217,
            longitude: -64.3809,
            activities: ["beach", "swimming", "snorkeling", "restaurant"],
          },
        ],
      },
      {
        day: 5,
        title: "Return to Tortola",
        description:
          "Enjoy your final morning surrounded by the Caribbean Sea before sailing back to Tortola. Take in the beautiful island views, relax on deck, and celebrate the unforgettable memories of your tropical sailing adventure.",
        points: [
          {
            id: "caribbean-tortola-return",
            name: "Road Town, Tortola",
            description:
              "Return to the harbor where your Caribbean adventure began.",
            latitude: 18.4258,
            longitude: -64.6231,
            activities: ["marina", "sightseeing", "restaurant"],
          },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Alaskan Expedition",
    description:
      "Experience the breathtaking landscapes and wildlife of Alaska on a unique sailing trip through the majestic Inside Passage. Witness massive glaciers, snow-capped mountains, and cascading waterfalls directly from the water. Keep your eyes open for awe-inspiring wildlife encounters, including breaching whales, soaring eagles, and playful seals in their natural habitat. This extraordinary voyage offers a perfect mix of pristine wilderness exploration and cozy onboard comfort.",
    price: 4000,
    location: "Inside Passage, Alaska",
    duration: "5 days",
    maxGuests: 10,
    yachtType: "Expedition Yacht",
    img: require("../../assets/images/trips/alaskan.webp"),
    imgDescr: require("../../assets/images/trips/alaskan2.webp"),
    gallery: [
      {
        id: "salon",
        image: require("../../assets/images/trips/gallery/alaskan-1.webp"),
        title: "Main Salon & Observation Lounge",
        description:
          "The heart of this expedition yacht, where comfort meets practicality. Dark wood finishes, industrial metal details, and warm textured fabrics create a rugged yet welcoming interior. Large panoramic windows offer uninterrupted views of glaciers, snow-covered mountains, and Alaska's dramatic wilderness.",
      },
      {
        id: "bridge",
        image: require("../../assets/images/trips/gallery/alaskan-2.webp"),
        title: "Bridge & Navigation Center",
        description:
          "The yacht's command center, designed for safe navigation in challenging waters. A professional captain's chair, modern navigation displays, radar systems, and wide wraparound windows provide excellent visibility. From here, the captain can monitor the surrounding icy fjords and navigate with confidence.",
      },
      {
        id: "expedition",
        image: require("../../assets/images/trips/gallery/alaskan-3.webp"),
        title: "Expedition Lab & Gear Room",
        description:
          "A practical workspace for scientific activities and expedition preparation. Durable metal shelving stores protective suits, climbing equipment, and essential expedition gear. Reinforced portholes and robust finishes reflect the yacht's purpose-built character and readiness for remote environments.",
      },
      {
        id: "dining",
        image: require("../../assets/images/trips/gallery/alaskan-4.webp"),
        title: "Heated Aft Deck Dining",
        description:
          "A sheltered dining area at the stern, designed for comfort in Alaska's cold climate. Transparent weather-protective enclosures and infrared heaters make it possible to enjoy the surrounding scenery even in chilly conditions. Take in the dramatic Alaskan landscape from a warm and cozy space.",
      },
    ],
    reviews: [
      {
        id: "review-7",
        tripId: "3",
        name: "Michael Anderson",
        country: "United States",
        date: "September 2026",
        rating: 5,
        title: "Nature at its most spectacular",
        text: "Seeing glaciers and snow-covered mountains from the water was an incredible experience. We were lucky enough to spot whales during our journey. The yacht was warm and comfortable, even in the chilly weather.",
        avatar: require("../../assets/images/trips/reviews/Michael-Anderson.webp"),
      },
      {
        id: "review-8",
        tripId: "3",
        name: "Charlotte Evans",
        country: "United Kingdom",
        date: "August 2026",
        rating: 5,
        title: "An adventure we'll never forget",
        text: "Alaska exceeded all our expectations. The landscapes were breathtaking, and every day offered something different. We loved the observation lounge and the opportunity to watch wildlife from the yacht.",
        avatar: require("../../assets/images/trips/reviews/Charlotte-Evans.webp"),
      },
      {
        id: "review-9",
        tripId: "3",
        name: "Lucas Schneider",
        country: "Germany",
        date: "July 2026",
        rating: 4,
        title: "A unique sailing experience",
        text: "A fantastic trip for anyone who loves nature and adventure. The scenery was incredible, and the expedition atmosphere made the journey feel truly special. Don't forget warm clothes!",
        avatar: require("../../assets/images/trips/reviews/Lucas-Schneider.webp"),
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Departure from Juneau",
        description:
          "Begin your Alaskan expedition in Juneau and sail into the spectacular wilderness of Tracy Arm. Towering cliffs, cascading waterfalls, and floating icebergs create an unforgettable introduction to Alaska's wild beauty.",
        points: [
          {
            id: "juneau",
            name: "Juneau",
            description:
              "Your expedition begins in Alaska's scenic capital, surrounded by mountains and ocean.",
            latitude: 58.3019,
            longitude: -134.4197,
            activities: ["marina", "sightseeing", "shopping", "scenicViews"],
          },
          {
            id: "tracy-arm",
            name: "Tracy Arm Fjord",
            description:
              "Sail through a dramatic fjord surrounded by steep cliffs, waterfalls, and floating ice.",
            latitude: 57.8,
            longitude: -133.5,
            activities: ["sightseeing", "scenicViews"],
          },
        ],
      },
      {
        day: 2,
        title: "Into the Wild — Endicott Arm",
        description:
          "Explore the remote waters of Endicott Arm, where immense glaciers descend from the mountains into the sea. Watch for seals resting on floating ice and enjoy the peaceful atmosphere of this untouched wilderness.",
        points: [
          {
            id: "endicott-arm",
            name: "Endicott Arm",
            description:
              "Discover a spectacular glacier-carved fjord with icy waters and dramatic mountain scenery.",
            latitude: 57.7,
            longitude: -133.4,
            activities: ["sightseeing", "scenicViews"],
          },
        ],
      },
      {
        day: 3,
        title: "Glacier Bay National Park",
        description:
          "Cruise through the breathtaking landscapes of Glacier Bay, a world of towering glaciers, snow-covered peaks, and pristine waters. Keep an eye out for humpback whales, sea lions, and bald eagles along the way.",
        points: [
          {
            id: "glacier-bay",
            name: "Glacier Bay",
            description:
              "Experience the grandeur of Alaska's glacial wilderness and its remarkable marine wildlife.",
            latitude: 58.4567,
            longitude: -135.883,
            activities: ["sightseeing", "scenicViews"],
          },
        ],
      },
      {
        day: 4,
        title: "Discover Haines",
        description:
          "Arrive in the charming coastal town of Haines, surrounded by rugged mountains and pristine wilderness. Explore scenic trails, admire the dramatic landscapes, and discover the rich wildlife of this remote Alaskan community.",
        points: [
          {
            id: "haines",
            name: "Haines",
            description:
              "Explore a picturesque Alaskan town known for its mountain scenery and abundant wildlife.",
            latitude: 59.2358,
            longitude: -135.445,
            activities: ["hiking", "sightseeing", "scenicViews", "restaurant"],
          },
        ],
      },
      {
        day: 5,
        title: "Final Stop — Skagway",
        description:
          "Conclude your expedition in historic Skagway, a charming town shaped by the Klondike Gold Rush. Wander along its historic streets, enjoy the mountain views, and take home unforgettable memories of Alaska's wild frontier.",
        points: [
          {
            id: "skagway",
            name: "Skagway",
            description:
              "Discover a historic gold-rush town nestled between dramatic mountains and the sea.",
            latitude: 59.4508,
            longitude: -135.328,
            activities: ["sightseeing", "hiking", "shopping", "restaurant"],
          },
        ],
      },
    ],
  },
  {
    id: "4",
    title: "South Pacific Escape",
    description:
      "Relax in paradise as you explore the idyllic islands of the South Pacific on a magnificent sailing yacht. Cruise past dramatic volcanic peaks, lush tropical greenery, and gorgeous coral reefs teeming with marine life. Experience true serenity while anchored in secluded lagoons with warm, turquoise waters. Indulge in world-class relaxation, gentle ocean breezes, and the unmatched beauty of French Polynesia.",
    price: 3500,
    location: "Society Islands, French Polynesia",
    duration: "5 days",
    maxGuests: 8,
    yachtType: "Sailing Catamaran",
    img: require("../../assets/images/trips/south.webp"),
    imgDescr: require("../../assets/images/trips/south2.webp"),
    gallery: [
      {
        id: "salon",
        image: require("../../assets/images/trips/gallery/south-1.webp"),
        title: "Main Salon & Helm Station",
        description:
          "The heart of this spacious catamaran, combining a comfortable lounge with the helm station. Large panoramic windows open up views of turquoise lagoons and distant atolls. Light oak finishes, woven furniture, and airy fabrics in soft turquoise and sandy tones create a relaxed tropical atmosphere.",
      },
      {
        id: "stateroom",
        image: require("../../assets/images/trips/gallery/south-2.webp"),
        title: "Master Stateroom",
        description:
          "A private retreat located in one of the catamaran's hulls. Light wood finishes, natural linen fabrics, and a spacious bed create a calm and inviting atmosphere. A large hull window offers a unique water-level view of the turquoise lagoon, bringing the beauty of the ocean right into the cabin.",
      },
      {
        id: "bathroom",
        image: require("../../assets/images/trips/gallery/south-3.webp"),
        title: "En-suite Bathroom & Vanity",
        description:
          "A bright and elegant bathroom adjoining the Master Stateroom. Polished white marble and light wood create a fresh, refined look, while the vanity area features a window overlooking the lagoon. Natural light and beautiful water views make even the morning routine feel special.",
      },
      {
        id: "dining",
        image: require("../../assets/images/trips/gallery/south-4.webp"),
        title: "Forward Cockpit Dining",
        description:
          "An inviting dining area nestled between the catamaran's hulls at the bow, just beyond the forward nets. Enjoy meals with panoramic views of turquoise lagoons and tropical atolls. As the sun sets, warm golden light transforms this open-air space into a perfect setting for a memorable evening.",
      },
    ],
    reviews: [
      {
        id: "review-10",
        tripId: "4",
        name: "Amelia Wilson",
        country: "New Zealand",
        date: "August 2026",
        rating: 5,
        title: "Pure relaxation in paradise",
        text: "French Polynesia is even more beautiful in person! We spent our days swimming in turquoise lagoons, enjoying delicious meals, and relaxing on the yacht. Everything felt peaceful and perfectly organized.",
        avatar: require("../../assets/images/trips/reviews/Amelia-Wilson.webp"),
      },
      {
        id: "review-11",
        tripId: "4",
        name: "Benjamin Clark",
        country: "United States",
        date: "July 2026",
        rating: 5,
        title: "The ultimate tropical escape",
        text: "The catamaran was spacious and beautiful, with amazing views from every corner. Our favorite moments were dining outdoors and watching the sunset over the lagoons. We didn't want the trip to end!",
        avatar: require("../../assets/images/trips/reviews/Benjamin-Clark.webp"),
      },
      {
        id: "review-12",
        tripId: "4",
        name: "Emma Laurent",
        country: "France",
        date: "June 2026",
        rating: 4,
        title: "A beautiful island experience",
        text: "A lovely journey through some of the most beautiful islands we've ever seen. The water was unbelievably clear, and the yacht offered plenty of space to relax. A truly memorable holiday.",
        avatar: require("../../assets/images/trips/reviews/Emma-Laurent.webp"),
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Departure from Tahiti",
        description:
          "Begin your tropical escape in Tahiti and sail towards the beautiful island of Moorea. Admire its dramatic volcanic peaks, lush green valleys, and crystal-clear lagoon as you arrive in paradise.",
        points: [
          {
            id: "papeete",
            name: "Papeete",
            description:
              "Your South Pacific adventure begins in the vibrant waterfront capital of French Polynesia.",
            latitude: -17.535,
            longitude: -149.569,
            activities: ["marina", "sightseeing", "shopping", "restaurant"],
          },
          {
            id: "moorea",
            name: "Moorea",
            description:
              "Discover a tropical island surrounded by a turquoise lagoon and spectacular volcanic mountains.",
            latitude: -17.516,
            longitude: -149.76,
            activities: ["beach", "swimming", "snorkeling", "scenicViews"],
          },
        ],
      },
      {
        day: 2,
        title: "The Beauty of Huahine",
        description:
          "Sail west to the peaceful island of Huahine, known for its lush tropical landscapes, secluded beaches, and traditional Polynesian charm. Spend the day swimming in clear waters and exploring the island's hidden corners.",
        points: [
          {
            id: "huahine",
            name: "Huahine",
            description:
              "Explore a peaceful island of turquoise lagoons, tropical gardens, and authentic Polynesian culture.",
            latitude: -16.711,
            longitude: -151.037,
            activities: ["beach", "swimming", "snorkeling", "sightseeing"],
          },
        ],
      },
      {
        day: 3,
        title: "Discover Raiatea",
        description:
          "Arrive at Raiatea, an island rich in Polynesian heritage and natural beauty. Explore its lush interior, admire the mountain scenery, and enjoy the calm waters of its beautiful lagoon.",
        points: [
          {
            id: "raiatea",
            name: "Raiatea",
            description:
              "Discover the island's scenic coastline, lush mountains, and fascinating Polynesian heritage.",
            latitude: -16.728,
            longitude: -151.444,
            activities: ["marina", "sightseeing", "hiking", "scenicViews"],
          },
        ],
      },
      {
        day: 4,
        title: "A Lagoon Paradise — Taha'a",
        description:
          "Cruise to the neighboring island of Taha'a, sharing a spectacular lagoon with Raiatea. Spend a relaxing day snorkeling among vibrant coral gardens, swimming in warm turquoise waters, and enjoying the island's peaceful atmosphere.",
        points: [
          {
            id: "tahaa",
            name: "Taha'a",
            description:
              "Enjoy a tranquil island escape surrounded by coral gardens, tropical scenery, and beautiful lagoon waters.",
            latitude: -16.621,
            longitude: -151.5,
            activities: ["snorkeling", "swimming", "beach", "scenicViews"],
          },
        ],
      },
      {
        day: 5,
        title: "The Magic of Bora Bora",
        description:
          "End your journey in the breathtaking lagoon of Bora Bora, framed by the iconic peaks of Mount Otemanu. Swim in crystal-clear waters, discover colorful marine life, and enjoy a final sunset in one of the South Pacific's most beautiful destinations.",
        points: [
          {
            id: "bora-bora",
            name: "Bora Bora",
            description:
              "Experience the iconic turquoise lagoon, white-sand beaches, and dramatic volcanic scenery of Bora Bora.",
            latitude: -16.506,
            longitude: -151.75,
            activities: ["beach", "swimming", "snorkeling", "scenicViews"],
          },
        ],
      },
    ],
  },
  {
    id: "5",
    title: "Baltic Sea Voyage",
    description:
      "Uncover the rich history and stunning architecture of Northern Europe on an exclusive Baltic Sea cruise. Travel in style aboard a luxury yacht as you navigate between fascinating cultural capitals like Stockholm, Helsinki, and Tallinn. Wander through cobblestone medieval streets, marvel at majestic palaces, and sample unique Nordic culinary traditions. This sophisticated journey offers a seamless blend of historical discovery and contemporary maritime luxury.",
    price: 2800,
    location: "Stockholm, Sweden - Helsinki, Finland - Tallinn, Estonia",
    duration: "5 days",
    maxGuests: 6,
    yachtType: "Classic Tall Ship",
    img: require("../../assets/images/trips/baltic.webp"),
    imgDescr: require("../../assets/images/trips/baltic2.webp"),
    gallery: [
      {
        id: "salon",
        image: require("../../assets/images/trips/gallery/baltic-1.webp"),
        title: "Traditional Main Saloon",
        description:
          "The heart of this historic schooner, filled with timeless maritime character. Rich wooden paneling, brass oil lamps, a beautifully carved dining table, and dark leather sofas create a warm, classic atmosphere. Through traditional brass portholes and overhead hatches, guests can enjoy views of Stockholm's historic waterfront and royal palace.",
      },
      {
        id: "cabin",
        image: require("../../assets/images/trips/gallery/baltic-2.webp"),
        title: "Classic Owner's Cabin",
        description:
          "A private cabin nestled in the bow of the vessel, shaped around the graceful lines of its traditional wooden hull. Exposed wooden beams, brass lighting, and a comfortable built-in bed create an intimate, old-world atmosphere. A round porthole offers views of the schooner's mast and the Baltic waterfront.",
      },
      {
        id: "navigation",
        image: require("../../assets/images/trips/gallery/baltic-3.webp"),
        title: "Traditional Chart Table & Library",
        description:
          "An authentic navigation and reading corner inspired by the golden age of exploration. A fold-down wooden chart table holds historic Baltic Sea maps, while a green-shaded desk lamp, brass chronometers, and barometers add to the atmosphere. Shelves of leather-bound logbooks complete this charming maritime workspace.",
      },
      {
        id: "dining",
        image: require("../../assets/images/trips/gallery/baltic-4.webp"),
        title: "Protected Classic Cockpit & Dining",
        description:
          "A cozy outdoor lounge beneath the wooden canopy of the traditional deckhouse. A solid polished teak table and cushioned benches provide a comfortable place to relax and dine. Enjoy views of a historic European harbor, with evening sunlight illuminating the waterfront towers and the schooner's rigging overhead.",
      },
    ],
    reviews: [
      {
        id: "review-13",
        tripId: "5",
        name: "Alexander Moore",
        country: "United Kingdom",
        date: "September 2026",
        rating: 5,
        title: "History, culture, and sailing",
        text: "A wonderful way to explore Northern Europe. Stockholm, Helsinki, and Tallinn each had their own charm. We especially enjoyed the atmosphere aboard the classic sailing vessel. It felt like stepping into another era!",
        avatar: require("../../assets/images/trips/reviews/Alexander-Moore.webp"),
      },
      {
        id: "review-14",
        tripId: "5",
        name: "Anna Fischer",
        country: "Germany",
        date: "August 2026",
        rating: 5,
        title: "A journey full of discoveries",
        text: "We loved the combination of beautiful cities and relaxing time at sea. The yacht had so much character, and the journey was a wonderful balance of sightseeing, culture, and comfort.",
        avatar: require("../../assets/images/trips/reviews/Anna-Fischer.webp"),
      },
      {
        id: "review-15",
        tripId: "5",
        name: "Oliver Smith",
        country: "Canada",
        date: "July 2026",
        rating: 4,
        title: "A charming Northern European cruise",
        text: "The Baltic Sea was a fantastic surprise. Beautiful architecture, fascinating history, and lovely views along the way. The classic yacht made the whole experience even more special.",
        avatar: require("../../assets/images/trips/reviews/Oliver-Smith.webp"),
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Departure from Stockholm",
        description:
          "Begin your Baltic adventure in Stockholm and sail through the beautiful Stockholm archipelago. Navigate between thousands of islands and rocky islets before reaching the peaceful Åland Islands.",
        points: [
          {
            id: "stockholm",
            name: "Stockholm",
            description:
              "Your journey begins in Sweden's elegant capital, surrounded by waterways, historic architecture, and a beautiful archipelago.",
            latitude: 59.3293,
            longitude: 18.0686,
            activities: ["marina", "sightseeing", "shopping", "restaurant"],
          },
          {
            id: "mariehamn",
            name: "Mariehamn",
            description:
              "Discover the charming capital of the Åland Islands, known for its maritime heritage, peaceful harbor, and picturesque waterfront.",
            latitude: 60.0973,
            longitude: 19.9348,
            activities: ["marina", "sightseeing", "scenicViews", "restaurant"],
          },
        ],
      },
      {
        day: 2,
        title: "Island Life in Åland",
        description:
          "Spend a relaxing day exploring the Åland Islands. Enjoy quiet coastal scenery, charming harbors, and the peaceful atmosphere of this unique island region between Sweden and Finland.",
        points: [
          {
            id: "aland-islands",
            name: "Åland Islands",
            description:
              "Explore a beautiful archipelago of rocky shores, small islands, and tranquil seaside villages.",
            latitude: 60.2,
            longitude: 20.0,
            activities: ["sightseeing", "scenicViews", "beach"],
          },
        ],
      },
      {
        day: 3,
        title: "Discover Coastal Finland — Turku",
        description:
          "Sail east towards Turku, one of Finland's oldest cities. Explore its historic riverside, admire the medieval castle, and enjoy the relaxed atmosphere of this coastal destination.",
        points: [
          {
            id: "turku",
            name: "Turku",
            description:
              "Discover a historic Finnish city with a beautiful riverside, lively waterfront, and rich cultural heritage.",
            latitude: 60.4518,
            longitude: 22.2666,
            activities: ["marina", "sightseeing", "shopping", "restaurant"],
          },
        ],
      },
      {
        day: 4,
        title: "Medieval Charm — Tallinn",
        description:
          "Continue across the Baltic Sea to Tallinn, where medieval streets, historic towers, and charming squares create a truly magical atmosphere. Wander through the Old Town and enjoy the city's vibrant cafés and waterfront views.",
        points: [
          {
            id: "tallinn",
            name: "Tallinn",
            description:
              "Explore Estonia's captivating capital, famous for its beautifully preserved medieval Old Town and scenic coastal setting.",
            latitude: 59.437,
            longitude: 24.7536,
            activities: ["marina", "sightseeing", "shopping", "restaurant"],
          },
        ],
      },
      {
        day: 5,
        title: "Final Destination — Helsinki",
        description:
          "Conclude your Baltic voyage in Helsinki, a vibrant seaside capital known for its Nordic architecture, beautiful harbor, and island landscapes. Enjoy a final stroll along the waterfront and celebrate the end of your journey.",
        points: [
          {
            id: "helsinki",
            name: "Helsinki",
            description:
              "Finish your adventure in Finland's coastal capital, surrounded by elegant architecture, lively harbors, and beautiful islands.",
            latitude: 60.1699,
            longitude: 24.9384,
            activities: [
              "marina",
              "sightseeing",
              "shopping",
              "restaurant",
              "scenicViews",
            ],
          },
        ],
      },
    ],
  },
];
