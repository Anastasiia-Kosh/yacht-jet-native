import { router, useLocalSearchParams } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { trips } from "../../data/trips";


export default function Trip() {
  const { id } = useLocalSearchParams();
  const trip = trips.find((trip) => trip.id === id);
  return (
    <View style={styles.background}>
      <Pressable onPress={() => router.back()} style={styles.buttonBack}>
        <Text style={styles.buttonBackText}>← Go back</Text>
      </Pressable>
      {trip ? (
        <Text>Trip Name: {trip.title}</Text>
      ) : (
        <Text>Trip not found</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f0f4f8",
  },
  buttonBack: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonBackText: {
    color: "#102A43",
    fontSize: 16,
  },
});
