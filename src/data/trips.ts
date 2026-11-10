import type { ImageSourcePropType } from "react-native";

export type TripItem = {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  duration: string;
  maxGuests: number;
  yachtType: string;
  img: ImageSourcePropType;
  imgDescr: ImageSourcePropType;
  gallery: ImageSourcePropType[];
};

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
      require("../../assets/images/trips/gallery/mediterranean-1.webp"),
      require("../../assets/images/trips/gallery/mediterranean-2.webp"),
      require("../../assets/images/trips/gallery/mediterranean-3.webp"),
      require("../../assets/images/trips/gallery/mediterranean-4.webp"),
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
      require("../../assets/images/trips/gallery/caribbean-1.webp"),
      require("../../assets/images/trips/gallery/caribbean-2.webp"),
      require("../../assets/images/trips/gallery/caribbean-3.webp"),
      require("../../assets/images/trips/gallery/caribbean-4.webp"),
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
      require("../../assets/images/trips/gallery/alaskan-1.webp"),
      require("../../assets/images/trips/gallery/alaskan-2.webp"),
      require("../../assets/images/trips/gallery/alaskan-3.webp"),
      require("../../assets/images/trips/gallery/alaskan-4.webp"),
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
      require("../../assets/images/trips/gallery/south-1.webp"),
      require("../../assets/images/trips/gallery/south-2.webp"),
      require("../../assets/images/trips/gallery/south-3.webp"),
      require("../../assets/images/trips/gallery/south-4.webp"),
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
      require("../../assets/images/trips/gallery/baltic-1.webp"),
      require("../../assets/images/trips/gallery/baltic-2.webp"),
      require("../../assets/images/trips/gallery/baltic-3.webp"),
      require("../../assets/images/trips/gallery/baltic-4.webp"),
    ],
  },
];
