import { TripItem, trips } from "@/data/trips";
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

export default function Trips() {
  const tripItem: ListRenderItem<TripItem> = ({ item }) => (
    <Link
      href={{
        pathname: "/trip/[id]",
        params: { id: item.id },
      }}
      style={styles.item}
    >
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
        <Text
          style={styles.itemPrice}
        >{`$${item.price.toLocaleString("en-US")}`}</Text>
      </View>
    </Link>
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
    height: 340,
    position: "relative",
    alignItems: "center",
    padding: 14,
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
    fontWeight: "bold",
    color: "#102A43",
  },
  itemPrice: {
    color: "#3d6182",
    fontSize: 16,
    fontWeight: "bold",
  },
  //   itemDescr: {
  //     color: "#102A43",
  //     fontSize: 16,
  //   },
  // itemImage: {
  //   width: "100%",
  //   height: 240,
  //   borderRadius: 10,
  // },
  //   buttonMore: {
  //     backgroundColor: "#102A43",
  //     paddingVertical: 12,
  //     borderRadius: 8,
  //     boxShadow: "2px 2px 3px 1px rgba(5, 13, 21, 0.2)",
  //   },
  //   buttonTextMore: {
  //     color: "white",
  //     fontSize: 16,
  //     textAlign: "center",
  //   },
});
