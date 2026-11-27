import BookingForm from "@/components/booking/BookingForm";
import BookingSuccessModal from "@/components/booking/BookingSuccessModal";
import { useBooking } from "@/context/BookingContext";
import { trips } from "@/data/trips";
import type { BookingFormData } from "@/schemas/bookingSchema";
import { NewBooking } from "@/types/booking";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import EmptyState from "../../components/common/EmptyState";

export default function Booking() {
  const insets = useSafeAreaInsets();
  const { addBooking } = useBooking();
  const { id } = useLocalSearchParams<{ id: string }>();
  const trip = trips.find((trip) => trip.id === id);

  const [firstName, setFirstName] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  if (!trip) {
    return (
      <EmptyState
        title={"Trip for book not found"}
        link={"/trips"}
        nameIcon={"arrow-back-circle-outline"}
        button={"Choose another trip"}
      />
    );
  }

  const handleBooking = (data: BookingFormData) => {
    setFirstName(data.firstName);
    const returnDate = new Date(`${data.departureDate}T12:00:00`);
    returnDate.setDate(returnDate.getDate() + trip.duration - 1);
    const newBooking: NewBooking = {
      trip: {
        id: trip.id,
        title: trip.title,
        location: trip.location,
        price: trip.price,
        duration: trip.duration,
        yachtType: trip.yachtType,
      },
      customer: data,
      returnDate: returnDate.toISOString().split("T")[0],
    };
    addBooking(newBooking);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);

    router.replace({
      pathname: "/trip/[id]",
      params: { id },
    });
  };

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
            { bottom: insets.bottom + 20, top: insets.top + 20 },
          ]}
          contentContainerStyle={styles.bookingContent}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.title}>Booking {trip.title} trip </Text>
          <View style={styles.featureContainer}>
            <Ionicons name="location-outline" size={18} color="#213445" />
            <Text style={styles.feature}>{trip.location}</Text>
          </View>
          <View style={styles.featureContainer}>
            <Ionicons name="calendar-outline" size={18} color="#213445" />
            <Text style={styles.feature}>{trip.duration} days</Text>
          </View>
          <View style={styles.featureContainer}>
            <Ionicons name="cash-outline" size={18} color="#213445" />
            <Text style={styles.feature}>
              ${trip.price.toLocaleString("en-US")} / per trip
            </Text>
          </View>

          <BookingForm
            onSubmit={handleBooking}
            maxGuests={trip.maxGuests}
            duration={trip.duration}
            isModalVisible={isModalVisible}
          />
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
    paddingVertical: 20,
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
  },
});
