import { TripItem } from "@/data/trips";
import { StyleSheet, View } from "react-native";

export default function TripGallery({ trip }: { trip: TripItem }) {
  return <View style={styles.gallery}></View>;
}

const styles = StyleSheet.create({
  gallery: {
    paddingTop: 24,
    paddingHorizontal: 20,
  },
});
