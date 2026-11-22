import type { TripItem } from "@/types/trip";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import FavoriteButton from "../button/FavoriteButton";

export default function TripHero({
  image,
  tripId,
}: {
  image: TripItem["img"];
  tripId: TripItem["id"];
}) {
  return (
    <View style={styles.imageContainer}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <Link href={"/trips"} asChild>
        <Pressable style={styles.buttonBack}>
          <Ionicons
            name="arrow-back-circle-outline"
            size={20}
            color="#102A43"
          />
          <Text style={styles.buttonBackText}>All trips</Text>
        </Pressable>
      </Link>
      <FavoriteButton tripId={tripId} style={styles.favoriteButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 320,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  buttonBack: {
    position: "absolute",
    top: 10,
    left: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  buttonBackText: {
    color: "#102A43",
    fontSize: 15,
    fontFamily: "LoraRegular",
  },
  favoriteButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});
