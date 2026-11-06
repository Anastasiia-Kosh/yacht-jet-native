import { router } from "expo-router";
import {
    FlatList,
    Image,
    type ImageSourcePropType,
    type ListRenderItem,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

const trips: TripItem[] = [
  {
    id: "1",
    title: "Mediterranean Cruise",
    description:
      "Sail through the beautiful Mediterranean Sea and explore stunning coastal towns.",
    price: 2500,
    img: require("../../assets/images/trips/mediterranean.webp"),
  },
  {
    id: "2",
    title: "Caribbean Adventure",
    description:
      "Discover the vibrant culture and pristine beaches of the Caribbean islands.",
    price: 3000,
    img: require("../../assets/images/trips/caribbean.webp"),
  },
  {
    id: "3",
    title: "Alaskan Expedition",
    description:
      "Experience the breathtaking landscapes and wildlife of Alaska on a unique sailing trip.",
    price: 4000,
    img: require("../../assets/images/trips/alaskan.webp"),
  },
  {
    id: "4",
    title: "South Pacific Escape",
    description:
      "Relax in paradise as you explore the idyllic islands of the South Pacific.",
    price: 3500,
    img: require("../../assets/images/trips/south.webp"),
  },
  {
    id: "5",
    title: "Baltic Sea Voyage",
    description:
      "Uncover the rich history and stunning architecture of Northern Europe on a Baltic Sea cruise.",
    price: 2800,
    img: require("../../assets/images/trips/baltic.webp"),
  },
];

export type TripItem = {
  id: string;
  title: string;
  description: string;
  price: number;
  img: ImageSourcePropType;
};

export default function Trips() {
  const tripItem: ListRenderItem<TripItem> = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.img} style={styles.itemImage} resizeMode="cover" />
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemDescr}>{item.description}</Text>
      <Text
        style={styles.itemPrice}
      >{`$${item.price.toLocaleString("en-US")}`}</Text>
      <Pressable style={styles.buttonMore}>
        <Text style={styles.buttonTextMore}>Learn more</Text>
      </Pressable>
    </View>
  );
  return (
    <View style={styles.background}>
      <Pressable onPress={() => router.back()} style={styles.buttonBack}>
        <Text style={styles.buttonBackText}>← Go back</Text>
      </Pressable>
      <Text style={styles.title}>Explore sea trips</Text>
      <FlatList
        data={trips}
        renderItem={tripItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
        contentContainerStyle={styles.itemList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  buttonBack: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonBackText: {
    color: "#102A43",
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#102A43",
    marginBottom: 20,
  },
  itemList: {
    gap: 24,
  },
  item: {
    padding: 14,
    borderRadius: 10,
    backgroundColor: "white",
    gap: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#102A43",
  },
  itemDescr: {
    color: "#102A43",
    fontSize: 16,
  },
  itemPrice: {
    color: "#3d6182",
    fontSize: 16,
    fontWeight: "bold",
  },
  itemImage: {
    width: "100%",
    height: 240,
    borderRadius: 10,
  },
  buttonMore: {
    backgroundColor: "#102A43",
    paddingVertical: 12,
    borderRadius: 8,
    boxShadow: "2px 2px 3px 1px rgba(5, 13, 21, 0.2)",
  },
  buttonTextMore: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
