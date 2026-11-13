import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

type BookingButtonProps = {
  tripId: string;
};

export default function BookingButton({ tripId }: BookingButtonProps) {
  const handleBooking = () => {
    router.push({
      pathname: "/booking/[id]",
      params: { id: tripId },
    });
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={handleBooking}>
        <Text style={styles.buttonText}>Book This Trip</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#102A43",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  buttonText: {
    fontFamily: "LoraSemiBold",
    color: "#FFFFFF",
    fontSize: 18,
  },
});
