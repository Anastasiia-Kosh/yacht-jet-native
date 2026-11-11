import type { GalleryItem, TripItem } from "@/types/trip";
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
  const [galleryWidth, setGalleryWidth] = useState(0);
  const [maxCardHeight, setMaxCardHeight] = useState(0);

  const galleryItem: ListRenderItem<GalleryItem> = ({ item, index }) => (
    <View
      style={[
        styles.galleryItem,
        { width: galleryWidth, minHeight: maxCardHeight || undefined },
      ]}
      onLayout={(event) => {
        const height = event.nativeEvent.layout.height;

        setMaxCardHeight((prev) => Math.max(prev, height));
      }}
    >
      <View style={styles.imageWrap}>
        <Image
          source={item.image}
          style={styles.galleryImage}
          accessibilityLabel={item.title}
          resizeMode="cover"
        />
      </View>
      <View style={styles.context}>
        <View style={styles.contextHeader}>
          <Text style={styles.contextTitle}>{item.title}</Text>
          <Text style={styles.counterText}>
            {index + 1} / {trip.gallery.length}
          </Text>
        </View>

        <Text style={styles.contextDescr}>{item.description}</Text>
      </View>
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
      <View style={styles.pagination}>
        {trip.gallery.map((item, index) => (
          <View
            key={item.id}
            style={[
              styles.paginationDot,
              activeIndex === index && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gallery: {
    paddingTop: 24,
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
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 10,
    flexShrink: 0,
  },
  imageWrap: {
    height: 300,
  },
  galleryImage: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  context: {
    paddingVertical: 10,
    paddingHorizontal: 10,
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
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginTop: 16,
  },

  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D0D5DD",
  },

  activeDot: {
    width: 20,
    backgroundColor: "#102A43",
  },
});
