import { TripItem } from "@/data/trips";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function TripDetails({ trip }: { trip: TripItem }) {
  return (
    <View style={styles.details}>
      <View style={styles.locationContainer}>
        <Ionicons name="location-outline" size={18} color="#627D98" />
        <Text style={styles.location}>{trip.location}</Text>
      </View>

      <Text style={styles.title}>{trip.title}</Text>

      <View style={styles.priceContainer}>
        <Text style={styles.price}>${trip.price.toLocaleString("en-US")}</Text>
        <Text style={styles.priceLabel}>/ per trip</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.features}>
        <View style={styles.featureItem}>
          <View style={styles.featureIcon}>
            <Ionicons name="calendar-outline" size={24} color="#486581" />
          </View>
          <Text style={styles.featureLabel}>Duration</Text>
          <Text style={styles.featureValue}>{trip.duration}</Text>
        </View>

        <View style={styles.featureItem}>
          <View style={styles.featureIcon}>
            <Ionicons name="people-outline" size={24} color="#486581" />
          </View>
          <Text style={styles.featureLabel}>Guests</Text>
          <Text style={styles.featureValue}>Up to {trip.maxGuests}</Text>
        </View>

        <View style={styles.featureItem}>
          <View style={styles.featureIcon}>
            <Ionicons name="boat-outline" size={24} color="#486581" />
          </View>
          <Text style={styles.featureLabel}>Yacht</Text>
          <Text style={styles.featureValue}>{trip.yachtType}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  details: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 12,
  },
  location: {
    flex: 1,
    fontSize: 14,
    color: "#627D98",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#102A43",
    marginBottom: 16,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 24,
  },
  price: {
    fontSize: 30,
    fontWeight: "700",
    color: "#102A43",
  },
  priceLabel: {
    fontSize: 14,
    color: "#829AB1",
    marginLeft: 6,
  },
  divider: {
    height: 1,
    backgroundColor: "#D9E2EC",
    marginBottom: 24,
  },
  features: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 24,
  },
  featureItem: {
    flex: 1,
    minWidth: 0,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 6,
  },
  featureIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#E8F0F7",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  featureLabel: {
    fontSize: 12,
    color: "#829AB1",
    marginBottom: 6,
  },
  featureValue: {
    fontSize: 13,
    fontWeight: "600",
    color: "#102A43",
    textAlign: "center",
  },
});
