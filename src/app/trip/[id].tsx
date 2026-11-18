import BookingButton from "@/components/trip/BookingButton";
import TripAbout from "@/components/trip/TripAbout";
import TripAction from "@/components/trip/TripAction";
import TripDetails from "@/components/trip/TripDetails";
import TripGallery from "@/components/trip/TripGallery";
import TripHero from "@/components/trip/TripHero";
import TripReviews from "@/components/trip/TripReviews";
import TripRoute from "@/components/trip/TripRoute";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import EmptyState from "../../components/common/EmptyState";
import { trips } from "../../data/trips";

export default function Trip() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const trip = trips.find((trip) => trip.id === id);

  if (!trip) {
    return (
      <EmptyState
        title={"Trip not found"}
        link={"/trips"}
        nameIcon={"arrow-back-circle-outline"}
        button={"Choose another trip"}
      />
    );
  }

  return (
    <ScrollView
      style={styles.background}
      contentContainerStyle={{
        paddingBottom: insets.bottom + 24,
        paddingTop: insets.top + 20,
      }}
      showsVerticalScrollIndicator={false}
    >
      <TripHero image={trip.img} tripId={trip.id} />
      <TripDetails trip={trip} />
      <BookingButton tripId={trip.id} />
      <TripAbout description={trip.description} image={trip.imgDescr} />
      <TripRoute itinerary={trip.itinerary} />
      <TripGallery trip={trip} />
      <TripReviews trip={trip} />
      <TripAction />
      <BookingButton tripId={trip.id} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#ECF8FF",
  },
});
