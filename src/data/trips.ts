import { ImageSourcePropType } from "react-native";


export type TripItem = {
  id: string;
  title: string;
  description: string;
  price: number;
  img: ImageSourcePropType;
};

export const trips: TripItem[] = [
  {
    id: "1",
    title: "Mediterranean Cruise",
    description:
      "Sail through the beautiful Mediterranean Sea and explore stunning coastal towns.",
    price: 2500,
    img: require("../../assets/images/trips/mediterranean.webp"),
  },
  {
    id: "2",
    title: "Caribbean Adventure",
    description:
      "Discover the vibrant culture and pristine beaches of the Caribbean islands.",
    price: 3000,
    img: require("../../assets/images/trips/caribbean.webp"),
  },
  {
    id: "3",
    title: "Alaskan Expedition",
    description:
      "Experience the breathtaking landscapes and wildlife of Alaska on a unique sailing trip.",
    price: 4000,
    img: require("../../assets/images/trips/alaskan.webp"),
  },
  {
    id: "4",
    title: "South Pacific Escape",
    description:
      "Relax in paradise as you explore the idyllic islands of the South Pacific.",
    price: 3500,
    img: require("../../assets/images/trips/south.webp"),
  },
  {
    id: "5",
    title: "Baltic Sea Voyage",
    description:
      "Uncover the rich history and stunning architecture of Northern Europe on a Baltic Sea cruise.",
    price: 2800,
    img: require("../../assets/images/trips/baltic.webp"),
  },
];
