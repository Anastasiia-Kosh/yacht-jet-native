import BookingCancelModal from "@/components/booking/BookingCancelModal";
import EmptyState from "@/components/common/EmptyState";
import { useBooking } from "@/context/BookingContext";
import type { Booking } from "@/types/booking";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Image,
  ListRenderItem,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function MyBookings() {
  const insets = useSafeAreaInsets();
  const { bookings, cancelBooking } = useBooking();
  const [selectedBookingId, setSelectedBookingId] = useState<string | null>(
    null,
  );

  const handleCloseModal = () => {
    setSelectedBookingId(null);
  };
  const hasBookings = bookings.length > 0;

  if (!hasBookings) {
    return (
      <EmptyState
        title={"No bookings trips yet"}
        description={
          "Choose your destination and let us make your journey unforgettable."
        }
        link={"/trips"}
        nameIcon={"arrow-forward-circle-outline"}
        button={"Explore trips"}
      />
    );
  }

  const handleCancel = async (id: string) => {
    cancelBooking(id);
    setSelectedBookingId(null);
  };

  const bookingItem: ListRenderItem<Booking> = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.statusContainer}>
        <View style={styles.brandContainer}>
          <Image
            source={require("../../assets/images/logo2.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.brand}>YachtJet · Booking</Text>
        </View>
        <Text
          style={[
            styles.status,
            {
              color: item.status === "pending" ? "#2E9D70" : "#9c0909",
              backgroundColor:
                item.status === "pending" ? "#4fc99871" : "#d4373779",
            },
          ]}
        >
          {item.status}
        </Text>
      </View>
      <Text style={styles.itemTitle}>{item.trip.title}</Text>
      <Text style={styles.itemLocation}>{item.trip.location}</Text>
      <View style={styles.divider} />

      <View style={styles.routeInfo}>
        <View style={styles.routeTimeline}>
          <View style={styles.routePoint}>
            <Ionicons name="location-outline" size={20} color="#213445" />
          </View>

          <View style={styles.routeLine} />

          <View style={styles.routePoint}>
            <Ionicons name="boat-outline" size={20} color="#213445" />
          </View>

          <View style={styles.routeLine} />

          <View style={styles.routePoint}>
            <Ionicons name="flag-outline" size={20} color="#213445" />
          </View>
        </View>

        <View style={styles.routeDetails}>
          <View style={styles.routeDetailsItem}>
            <Text style={styles.routeLabel}>Departure</Text>
            <Text style={styles.routeDate}>
              {new Date(item.customer.departureDate).toLocaleDateString(
                "en-GB",
                {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                },
              )}
            </Text>
          </View>

          <View>
            <Text style={styles.routeDuration}>
              {item.trip.duration} days at sea
            </Text>
          </View>

          <View style={styles.routeDetailsItem}>
            <Text style={styles.routeLabel}>Return</Text>
            <Text style={styles.routeDate}>
              {new Date(item.returnDate).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.infoDetails}>
        <View style={styles.infoDetailsItem}>
          <Text style={styles.routeLabel}>GUESTS</Text>
          <Text style={styles.routeDate}>
            {item.customer.guests}{" "}
            {item.customer.guests === 1 ? "guest" : "guests"}
          </Text>
        </View>

        <View style={styles.infoDetailsItem}>
          <Text style={styles.routeLabel}>YACHT TYPE</Text>
          <Text style={styles.routeDate}>{item.trip.yachtType}</Text>
        </View>
        <View style={styles.infoDetailsItem}>
          <Text style={styles.routeLabel}>BOOKING PRICE</Text>
          <Text style={styles.routeDate}>
            $ {item.trip.price.toLocaleString("en-US")}
          </Text>
        </View>
        <View style={styles.infoDetailsItem}>
          <Text style={styles.routeLabel}>BOOKING DATE</Text>
          <Text style={styles.routeDate}>
            {new Date(item.createdAt).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </Text>
        </View>
      </View>
      {item.status === "pending" && (
        <>
          <View style={styles.divider} />
          <Pressable
            style={styles.button}
            onPress={() => setSelectedBookingId(item.id)}
          >
            <Ionicons name="ban-outline" size={20} color="#9c0909" />
            <Text style={styles.buttonText}>Cancel booking</Text>
          </Pressable>
        </>
      )}

      <BookingCancelModal
        visible={selectedBookingId === item.id}
        firstName={item.customer.firstName}
        tripTitle={item.trip.title}
        onClose={handleCloseModal}
        onCancel={() => handleCancel(item.id)}
      />
    </View>
  );

  return (
    <View style={styles.background}>
      <FlatList
        data={bookings}
        renderItem={bookingItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
        contentContainerStyle={[
          styles.itemList,
          {
            paddingBottom: insets.bottom + 24,
            paddingTop: insets.top + 20,
          },
        ]}
        ListHeaderComponent={
          <View>
            <Text style={styles.title}>My bookings</Text>
            <Text style={styles.description}>
              Your saved bookings sea adventures, all in one place.
            </Text>
          </View>
        }
        ListFooterComponent={
          <Pressable onPress={() => router.back()} style={styles.buttonBack}>
            <Ionicons
              name="arrow-back-circle-outline"
              size={20}
              color="#102A43"
            />
            <Text style={styles.buttonBackText}>Go back</Text>
          </Pressable>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#ECF8FF",
  },
  title: {
    fontFamily: "LoraSemiBoldItalic",
    fontSize: 28,
    color: "#102A43",
    marginBottom: 18,
  },
  description: {
    fontFamily: "LoraRegular",
    fontSize: 15,
    lineHeight: 24,
    color: "#627D98",
  },
  itemList: {
    paddingHorizontal: 20,
    gap: 24,
  },
  buttonBack: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 8,
  },
  buttonBackText: {
    fontFamily: "LoraRegular",
    color: "#102A43",
    fontSize: 16,
  },
  item: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    position: "relative",
    borderWidth: 1,
    borderColor: "#BCCCDC",
  },
  brandContainer: {
    flexDirection: "row",
    gap: 1,
    alignItems: "center",
  },
  brand: {
    fontFamily: "LoraMedium",
    color: "#102A43",
    fontSize: 16,
  },
  logo: {
    width: 40,
    height: 25,
  },
  itemLocation: {
    fontFamily: "LoraMedium",
    fontSize: 15,
    color: "#627D98",
    marginBottom: 14,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  status: {
    fontFamily: "LoraMedium",
    fontSize: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 30,
  },
  itemTitle: {
    fontFamily: "LoraSemiBold",
    fontSize: 18,
    color: "#102A43",
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#D9E2EC",
    marginBottom: 14,
  },
  routeInfo: {
    flexDirection: "row",
    marginBottom: 18,
  },
  routeTimeline: {
    alignItems: "center",
  },
  routePoint: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ECF8FF",
    borderRadius: 20,
  },
  routeLine: {
    width: 1,
    height: 32,
    backgroundColor: "#BCCCDC",
  },
  routeDetails: {
    flex: 1,
    justifyContent: "space-between",
  },
  routeDetailsItem: {
    marginLeft: 14,
  },
  routeLabel: {
    fontFamily: "LoraMedium",
    fontSize: 14,
    color: "#627D98",
  },
  routeDate: {
    fontFamily: "LoraSemiBold",
    fontSize: 15,
    color: "#213445",
  },
  routeDuration: {
    fontFamily: "LoraSemiBold",
    fontSize: 14,
    color: "#213445",
    marginLeft: 14,
  },
  infoDetails: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 20,
    marginBottom: 16,
  },
  infoDetailsItem: {
    gap: 2,
    width: "50%",
  },
  button: {
    alignItems: "center",
    flexDirection: "row",
    gap: 6,
    marginLeft: "auto",
  },
  buttonText: {
    fontFamily: "LoraMedium",
    fontSize: 16,
    color: "#9c0909",
  },
});
