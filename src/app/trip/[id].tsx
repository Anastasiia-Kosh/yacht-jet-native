import TripAbout from "@/components/trip/TripAbout";
import TripDetails from "@/components/trip/TripDetails";
import TripHero from "@/components/trip/TripHero";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { trips } from "../../data/trips";

export default function Trip() {
  const { id } = useLocalSearchParams();
  const trip = trips.find((trip) => trip.id === id);

  if (!trip) {
    return (
      <View style={styles.background}>
        <Text>Trip not found</Text>
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
      <TripAbout description={trip.description} image={trip.imgDescr} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },
  scrollContent: {
    paddingBottom: 30,
  },
});
