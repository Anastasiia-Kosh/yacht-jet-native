import { StyleSheet, Text, View } from "react-native";

export default function TripRoute() {
  return (
    <View style={styles.route}>
      <View style={styles.divider} />
      <Text style={styles.routeTitle}>Route this trip</Text>
      <Text style={styles.routeDescription}>
        Якийсь опис, якщо треба
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  route: {
    paddingTop: 24,
    paddingHorizontal: 20,
  },
  divider: {
    height: 1,
    backgroundColor: "#D9E2EC",
    marginBottom: 24,
  },
  routeTitle: {
    fontFamily: "LoraSemiBoldItalic",
    fontSize: 22,
    color: "#102A43",
    marginBottom: 12,
  },
  routeDescription: {
    fontFamily: "LoraRegular",
    fontSize: 15,
    lineHeight: 24,
    color: "#627D98",
    marginBottom: 24,
  },
});