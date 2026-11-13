import { StyleSheet, Text, View } from "react-native";

export default function TripAction() {
  return (
    <View style={styles.action}>
      <View style={styles.divider} />
      <Text style={styles.actionTitle}>Ready for your next sea adventure?</Text>
      <Text style={styles.actionDescription}>
        Choose this destination and let us make your journey unforgettable.
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  action: {
    paddingTop: 24,
    paddingHorizontal: 20,
  },
  divider: {
    height: 1,
    backgroundColor: "#D9E2EC",
    marginBottom: 24,
  },
  actionTitle: {
    fontFamily: "LoraSemiBoldItalic",
    fontSize: 22,
    color: "#102A43",
    marginBottom: 12,
  },
  actionDescription: {
    fontFamily: "LoraRegular",
    fontSize: 15,
    lineHeight: 24,
    color: "#627D98",
    marginBottom: 24,
  },
});
