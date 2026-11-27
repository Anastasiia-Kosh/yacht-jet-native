import FavoriteButton from "@/components/button/FavoriteButton";
import { useFavorites } from "@/context/FavoritesContext";
import { trips } from "@/data/trips";
import type { TripItem } from "@/types/trip";
import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import {
  FlatList,
  Image,
  type ListRenderItem,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import EmptyState from "../components/common/EmptyState";

export default function Favorites() {
  const insets = useSafeAreaInsets();
  const { favoriteIds } = useFavorites();
  const favoriteTrips = trips.filter((trip) => favoriteIds.includes(trip.id));

  if (favoriteTrips.length === 0) {
    return (
      <EmptyState
        title={"No favorite trips yet"}
        link={"/trips"}
        nameIcon={"arrow-forward-circle-outline"}
        button={"Explore trips"}
      />
    );
  }

  const tripItem: ListRenderItem<TripItem> = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.img} style={styles.itemImage} resizeMode="cover" />
      <View style={styles.wrapper}>
        <View style={styles.context}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <FavoriteButton tripId={item.id} style={styles.favoriteButton} />
        </View>
        <View style={styles.featureContainer}>
          <Ionicons name="location-outline" size={18} color="#627D98" />
          <Text style={styles.feature}>{item.location}</Text>
        </View>
        <View style={styles.featureContainer}>
          <Ionicons name="boat-outline" size={18} color="#627D98" />
          <Text style={styles.feature}>{item.yachtType}</Text>
        </View>
        <View style={styles.featureContainer}>
          <Ionicons name="calendar-outline" size={18} color="#486581" />
          <Text style={styles.feature}>{item.duration} days</Text>
        </View>
        <View style={styles.featureContainer}>
          <Ionicons name="cash-outline" size={18} color="#486581" />
          <Text style={styles.feature}>
            ${item.price.toLocaleString("en-US")}
          </Text>
        </View>
        <Link
          href={{
            pathname: "/trip/[id]",
            params: { id: item.id },
          }}
          asChild
        >
          <Pressable style={styles.buttonViewTrip}>
            <Text style={styles.buttonViewTripText}>View trip</Text>
            <Ionicons
              name="arrow-forward-circle-outline"
              size={20}
              color="#FFFFFF"
            />
          </Pressable>
        </Link>
      </View>
    </View>
  );

  return (
    <View style={styles.background}>
      <FlatList
        data={favoriteTrips}
        renderItem={tripItem}
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
            <Text style={styles.title}>My favorite trips</Text>
            <Text style={styles.description}>
              Your saved sea adventures, all in one place.
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
    gap: 24,
    paddingHorizontal: 20,
  },
  item: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    gap: 5,
    position: "relative",
  },
  wrapper: { padding: 10 },
  itemImage: {
    width: "100%",
    height: 240,
    borderRadius: 10,
  },
  itemTitle: {
    fontSize: 22,
    color: "#102A43",
    fontFamily: "LoraSemiBoldItalic",
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
  context: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  favoriteButton: {
    borderWidth: 1,
    borderColor: "#627D98",
  },
  buttonViewTrip: {
    borderRadius: 10,
    backgroundColor: "#213445",
    paddingVertical: 10,
    paddingHorizontal: 16,
    position: "absolute",
    right: 10,
    bottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  buttonViewTripText: {
    fontFamily: "LoraRegular",
    color: "#FFFFFF",
    fontSize: 17,
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
});
