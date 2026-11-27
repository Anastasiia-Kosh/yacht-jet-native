import { useBooking } from "@/context/BookingContext";
import { useFavorites } from "@/context/FavoritesContext";
import { useProfile } from "@/context/ProfileContext";
import { ReactNode } from "react";
import Loader from "./Loader";

type AppLoaderGateProps = {
  children: ReactNode;
};

export default function AppLoaderGate({ children }: AppLoaderGateProps) {
  const { isLoaded: isProfileLoaded } = useProfile();
  const { isLoaded: areFavoritesLoaded } = useFavorites();
  const { isLoaded: areBookingsLoaded } = useBooking();
  if (!isProfileLoaded || !areFavoritesLoaded || !areBookingsLoaded) {
    return <Loader />;
  }
  return children;
}
