import BookingButton from "@/components/trip/BookingButton";
import TripAbout from "@/components/trip/TripAbout";
import TripDetails from "@/components/trip/TripDetails";
import TripGallery from "@/components/trip/TripGallery";
import TripHero from "@/components/trip/TripHero";
import TripReviews from "@/components/trip/TripReviews";
import { Link, useLocalSearchParams } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { trips } from "../../data/trips";

export default function Trip() {
  const { id } = useLocalSearchParams();
  const trip = trips.find((trip) => trip.id === id);

  if (!trip) {
    return (
      <View style={styles.backgroundNotFound}>
        <Text style={styles.errorText}>Trip not found</Text>
        <Link href="/trips" asChild>
          <Pressable style={styles.errorButton}>
            <Text style={styles.errorButtonText}>← Choose another trip</Text>
          </Pressable>
        </Link>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.background}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <TripHero image={trip.img} />
      <TripDetails trip={trip} />
      <BookingButton tripId={trip.id} />
      <TripAbout description={trip.description} image={trip.imgDescr} />
      <TripGallery trip={trip} />
      <TripReviews trip={trip} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "rgba(232, 240, 247, 1.00)",
  },
  scrollContent: {
    paddingBottom: 48,
  },
  backgroundNotFound: {
    paddingHorizontal: 20,
    paddingTop: 24,
    flex: 1,
    backgroundColor: "rgba(232, 240, 247, 1.00)",
  },
  errorText: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    color: "#102A43",
    marginBottom: 14,
  },
  errorButton: {
    backgroundColor: "#102A43",
    paddingVertical: 12,
    paddingHorizontal: 46,
    borderRadius: 8,
    marginTop: 24,
  },
  errorButtonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
