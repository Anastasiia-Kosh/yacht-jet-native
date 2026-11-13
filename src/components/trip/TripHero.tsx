import type { TripItem } from "@/types/trip";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function TripHero({ image }: { image: TripItem["img"] }) {
  return (
    <View style={styles.imageContainer}>
      <Image source={image} style={styles.image} resizeMode="cover" />

      <Pressable onPress={() => router.back()} style={styles.buttonBack}>
        <Ionicons name="arrow-back-circle-outline" size={20} color="#102A43" />
        <Text style={styles.buttonBackText}>Go back</Text>
      </Pressable>
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
    top: 20,
    left: 20,
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
});
