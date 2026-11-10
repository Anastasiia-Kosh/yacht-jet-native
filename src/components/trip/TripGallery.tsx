import type { GalleryItem, TripItem } from "@/data/trips";
import { useState } from "react";
import {
    FlatList,
    Image,
    type ListRenderItem,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function TripGallery({ trip }: { trip: TripItem }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = trip.gallery[activeIndex];

  const [galleryWidth, setGalleryWidth] = useState(0);

  const galleryItem: ListRenderItem<GalleryItem> = ({ item }) => (
    <View style={[styles.galleryItem, { width: galleryWidth }]}>
      <Image
        source={item.image}
        style={styles.galleryImage}
        accessibilityLabel={item.title}
        resizeMode="cover"
      />
    </View>
  );

  return (
    <View style={styles.gallery}>
      <View style={styles.divider} />
      <Text style={styles.galleryTitle}>Explore our yacht</Text>
      <View
        style={{ width: "100%" }}
        onLayout={(event) => setGalleryWidth(event.nativeEvent.layout.width)}
      >
        {galleryWidth > 0 && (
          <FlatList
            data={trip.gallery}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={galleryItem}
            onMomentumScrollEnd={(event) => {
              const offsetX = event.nativeEvent.contentOffset.x;

              const index = Math.round(offsetX / galleryWidth);

              setActiveIndex(index);
            }}
          />
        )}
      </View>

      {activeItem && (
        <View style={styles.context}>
          <View style={styles.contextHeader}>
            <Text style={styles.contextTitle}>{activeItem.title}</Text>
            <Text style={styles.counterText}>
              {activeIndex + 1} / {trip.gallery.length}
            </Text>
          </View>

          <Text style={styles.contextDescr}>{activeItem.description}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  gallery: {
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
  divider: {
    height: 1,
    backgroundColor: "#D9E2EC",
    marginBottom: 24,
  },
  galleryTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#102A43",
    marginBottom: 12,
  },
  galleryItem: {
    height: 300,
    flexShrink: 0,
  },
  galleryImage: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  contextHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 12,
  },
  counterText: {
    fontSize: 14,
    color: "#888",
  },
  context: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  contextTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#102A43",
  },
  contextDescr: {
    fontSize: 15,
    lineHeight: 24,
    color: "#627D98",
  },
});
