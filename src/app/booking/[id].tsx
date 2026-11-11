import { trips } from "@/data/trips";
import { Ionicons } from "@expo/vector-icons";
import { Link, useLocalSearchParams } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Booking() {
  const { id } = useLocalSearchParams<{ id: string }>();
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
    <View style={styles.booking}>
      <View style={styles.imageContainer}>
        <Image source={trip.img} style={styles.image} resizeMode="cover" />
        <View style={styles.featuresContainer}>
          <View style={styles.featureContainer}>
            <Ionicons name="location-outline" size={18} color="#627D98" />
            <Text style={styles.feature}>{trip.location}</Text>
          </View>
          <View style={styles.featureContainer}>
            <Ionicons name="calendar-outline" size={18} color="#486581" />
            <Text style={styles.feature}>{trip.duration}</Text>
          </View>
          <View style={styles.featureContainer}>
            <Text style={styles.feature}>
              ${trip.price.toLocaleString("en-US")} / per trip
            </Text>
          </View>
          <Text style={styles.title}>Booking {trip.title} trip </Text>
          <View style={styles.formContainer}>
            <Text>First Name</Text>
            <Text>Last Name</Text>
            <Text>Email</Text>
            <Text>Phone number</Text>
            <Text>Comment</Text>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Book Now</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  booking: {
    flex: 1,
    backgroundColor: "rgba(232, 240, 247, 1.00)",
  },
  backButton: {
    fontSize: 16,
    color: "#102A43",
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#102A43",
    textAlign: "center",
    marginTop: 32,
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  buttonBack: {
    width: 120,
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
    fontWeight: "500",
  },
  featuresContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    gap: 6,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  featureContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  feature: {
    flex: 1,
    fontSize: 15,
    color: "#213445",
  },
  formContainer: {
    marginTop: 24,
    width: "100%",
    flex: 1,
  },
  button: {
    backgroundColor: "#102A43",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: "center",
    marginTop: "auto",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
});
