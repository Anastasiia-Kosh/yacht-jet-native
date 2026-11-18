import FavoriteButton from "@/components/trip/FavoriteButton";
import { useProfile } from "@/context/ProfileContext";
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

export default function Trips() {
  const insets = useSafeAreaInsets();
  const user = useProfile();

  const tripItem: ListRenderItem<TripItem> = ({ item }) => (
    <View style={styles.item}>
      <Link
        href={{
          pathname: "/trip/[id]",
          params: { id: item.id },
        }}
        asChild
      >
        <Pressable style={StyleSheet.absoluteFill}>
          <Image
            source={item.img}
            style={[
              StyleSheet.absoluteFill,
              {
                width: "100%",
                height: "100%",
                borderRadius: 10,
              },
            ]}
            resizeMode="cover"
          />

          <View style={styles.context}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemPrice}>
              {`$${item.price.toLocaleString("en-US")}`}
            </Text>
          </View>
        </Pressable>
      </Link>
      <FavoriteButton tripId={item.id} style={styles.favoriteButton} />
    </View>
  );
  return (
    <View style={styles.background}>
      <FlatList
        data={trips}
        renderItem={tripItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
        contentContainerStyle={[
          styles.itemList,
          { paddingBottom: insets.bottom + 24, paddingTop: insets.top + 20 },
        ]}
        ListHeaderComponent={
          <View>
            <Pressable style={styles.buttonMenu}>
              <Ionicons name="menu-outline" size={30} color="#FFFFFF" />
            </Pressable>
            <Text style={styles.title}>Explore sea trips</Text>
            <View style={styles.description}>
              <Text style={styles.paragraph}>
                Explore our offers below and find the trip that perfectly
                matches your preferences.
              </Text>
              <Text style={styles.paragraph}>
                Whether you're dreaming of a relaxing getaway or an exciting
                sailing adventure, our experienced team is here to make your
                journey smooth, comfortable, and unforgettable.
              </Text>
              <Text style={styles.paragraph2}>
                Choose your destination, book your trip, and get ready for an
                unforgettable adventure!
              </Text>
            </View>
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
    paddingHorizontal: 20,
    backgroundColor: "#ecf8ff",
  },
  buttonMenu: {
    width: 46,
    height: 46,
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    elevation: 3,
    backgroundColor: "#102A43",
    position: "absolute",
    top: 0,
    right: 20,
    boxShadow: "2px 3px 8px 0px rgba(16, 42, 67, 0.6)",
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
  title: {
    fontFamily: "LoraSemiBoldItalic",
    fontSize: 28,
    color: "#102A43",
    marginBottom: 18,
  },
  description: {
    gap: 12,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 24,
    color: "#627D98",
    fontFamily: "LoraRegular",
  },
  paragraph2: {
    fontSize: 15,
    lineHeight: 24,
    color: "#627D98",
    fontFamily: "LoraSemiBold",
  },
  itemList: {
    gap: 24,
  },
  item: {
    width: "100%",
    height: 340,
    position: "relative",
    alignItems: "center",
  },
  context: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 4,
    position: "absolute",
    bottom: 14,
    left: 14,
    right: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemTitle: {
    fontSize: 18,
    color: "#102A43",
    fontFamily: "LoraSemiBoldItalic",
  },
  itemPrice: {
    color: "#3d6182",
    fontSize: 16,
    fontFamily: "LoraSemiBold",
  },
  favoriteButton: {
    position: "absolute",
    top: 14,
    right: 14,
  },
});
