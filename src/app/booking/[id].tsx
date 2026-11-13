import BookingForm from "@/components/booking/BookingForm";
import BookingSuccessModal from "@/components/booking/BookingSuccessModal";
import { trips } from "@/data/trips";
import type { BookingFormData } from "@/schemas/bookingSchema";
import { Ionicons } from "@expo/vector-icons";
import { Link, router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Booking() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const trip = trips.find((trip) => trip.id === id);

  const [firstName, setFirstName] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleBooking = (data: BookingFormData) => {
    console.log(data);
    setFirstName(data.firstName);
    setIsModalVisible(true);
  };
  const handleCloseModal = () => {
    setIsModalVisible(false);

    router.replace({
      pathname: "/trip/[id]",
      params: { id },
    });
  };

  if (!trip) {
    return (
      <View style={styles.backgroundNotFound}>
        <Text style={styles.errorText}>Trip not found</Text>
        <Link href="/trips" asChild>
          <Pressable style={styles.errorButton}>
            <Ionicons
              name="arrow-back-circle-outline"
              size={20}
              color="#FFFFFF"
            />
            <Text style={styles.errorButtonText}>Choose another trip</Text>
          </Pressable>
        </Link>
      </View>
    );
  }
  return (
    <KeyboardAvoidingView
      style={styles.booking}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.imageContainer}>
        <Image source={trip.img} style={styles.image} resizeMode="cover" />
        <ScrollView
          style={[
            styles.bookingContainer,
            { bottom: insets.bottom + 24, top: insets.top + 20 },
          ]}
          contentContainerStyle={styles.bookingContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.featureContainer}>
            <Ionicons name="location-outline" size={18} color="#627D98" />
            <Text style={styles.feature}>{trip.location}</Text>
          </View>
          <View style={styles.featureContainer}>
            <Ionicons name="calendar-outline" size={18} color="#486581" />
            <Text style={styles.feature}>{trip.duration}</Text>
          </View>
          <View style={styles.featureContainer}>
            <Ionicons name="cash-outline" size={18} color="#486581" />
            <Text style={styles.feature}>
              ${trip.price.toLocaleString("en-US")} / per trip
            </Text>
          </View>
          <Text style={styles.title}>Booking {trip.title} trip </Text>
          <BookingForm onSubmit={handleBooking} />
          <BookingSuccessModal
            visible={isModalVisible}
            firstName={firstName}
            tripTitle={trip.title}
            onClose={handleCloseModal}
          />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
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
    fontFamily: "LoraSemiBoldItalic",
    color: "#102A43",
    marginBottom: 14,
  },
  errorButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#102A43",
    paddingVertical: 12,
    paddingHorizontal: 46,
    borderRadius: 8,
    marginTop: 24,
  },
  errorButtonText: {
    fontFamily: "LoraMedium",
    color: "#FFFFFF",
    fontSize: 18,
    textAlign: "center",
  },
  booking: {
    flex: 1,
    backgroundColor: "rgba(232, 240, 247, 1.00)",
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
  bookingContainer: {
    position: "absolute",
    left: 20,
    right: 20,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 10,
  },
  bookingContent: {
    gap: 6,
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: "center",
    flexGrow: 1,
  },
  featureContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  feature: {
    fontFamily: "LoraMedium",
    flex: 1,
    fontSize: 15,
    color: "#213445",
  },
  title: {
    fontSize: 24,
    fontFamily: "LoraSemiBoldItalic",
    color: "#102A43",
    textAlign: "center",
    marginTop: 32,
  },
});
