import type { TripItem } from "@/types/trip";
import { Image, StyleSheet, Text, View } from "react-native";

export default function TripAbout({
  description,
  image,
}: {
  description: TripItem["description"];
  image: TripItem["imgDescr"];
}) {
  return (
    <>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.about}>
        <Text style={styles.aboutTitle}>About this trip</Text>
        <Text style={styles.aboutDescription}>{description}</Text>
      </View>
    </>
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
  about: {
    paddingTop: 24,
    paddingHorizontal: 20,
  },
  aboutTitle: {
    fontFamily: "LoraSemiBoldItalic",
    fontSize: 22,
    color: "#102A43",
    marginBottom: 12,
  },
  aboutDescription: {
    fontFamily: "LoraRegular",
    fontSize: 15,
    lineHeight: 24,
    color: "#627D98",
  },
});
