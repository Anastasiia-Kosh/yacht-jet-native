import type { ImageSourcePropType } from "react-native";

export type GalleryItem = {
  id: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
};
export type ReviewItem = {
  id: string;
  tripId: string;
  name: string;
  country: string;
  date: string;
  rating: number;
  title: string;
  text: string;
  avatar: ImageSourcePropType;
};
export type RoutePoint = {
  id: string;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  activities: RouteActivity[];
};

export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
  points: RoutePoint[];
};

export type RouteActivity =
  | "swimming"
  | "restaurant"
  | "sightseeing"
  | "scenicViews"
  | "marina"
  | "beach"
  | "hiking"
  | "shopping"
  | "snorkeling";

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
  gallery: GalleryItem[];
  reviews: ReviewItem[];
  itinerary: ItineraryDay[];
};
