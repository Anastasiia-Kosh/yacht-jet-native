import type { ReviewItem, TripItem } from "@/types/trip";
import { useState } from "react";
import {
  FlatList,
  Image,
  type ListRenderItem,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function TripReviews({ trip }: { trip: TripItem }) {
  const [containerWidth, setContainerWidth] = useState(0);
  const cardWidth = containerWidth - 24;

  const reviewItem: ListRenderItem<ReviewItem> = ({ item }) => (
    <View style={[styles.reviewItem, { width: cardWidth }]}>
      <View style={styles.reviewHeader}>
        <Image
          source={item.avatar}
          style={styles.reviewAvatar}
          accessibilityLabel={item.name}
          resizeMode="cover"
        />

        <View style={styles.reviewUser}>
          <Text style={styles.reviewName}>{item.name}</Text>
          <Text style={styles.reviewCountry}>{item.country}</Text>
          <Text style={styles.reviewDate}>{item.date}</Text>
        </View>
      </View>
      <Text style={styles.reviewRating}>
        {"★".repeat(item.rating)}
        {"☆".repeat(5 - item.rating)}
      </Text>

      <Text style={styles.reviewTitle}>{item.title}</Text>

      <Text style={styles.reviewText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.reviews}>
      <View style={styles.divider} />
      <Text style={styles.title}>Reviews our guest</Text>
      <Text style={styles.description}>
        We’re passionate about creating exceptional sailing experiences and
        making every journey truly special.
      </Text>
      <Text style={styles.description}>
        But don’t just take our word for it! Discover what our guests have to
        say about their time on board and the unforgettable memories they’ve
        made with us.
      </Text>
      <View
        style={{ width: "100%" }}
        onLayout={(event) => setContainerWidth(event.nativeEvent.layout.width)}
      >
        {containerWidth > 0 && (
          <FlatList
            data={trip.reviews}
            renderItem={reviewItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ width: "100%" }}
            snapToInterval={cardWidth + 16}
            decelerationRate="fast"
          />
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  reviews: {
    paddingTop: 24,
    paddingHorizontal: 20,
  },
  divider: {
    height: 1,
    backgroundColor: "#D9E2EC",
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#102A43",
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    lineHeight: 24,
    color: "#627D98",
    marginBottom: 12,
  },
  reviewItem: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 14,
    marginRight: 16,
  },
  reviewHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
  },
  reviewAvatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  reviewUser: {
    flex: 1,
    gap: 3,
  },
  reviewName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#102A43",
  },
  reviewCountry: {
    fontSize: 13,
    color: "#627D98",
  },
  reviewDate: {
    fontSize: 12,
    color: "#829AB1",
  },
  reviewRating: {
    color: "#E5A83B",
    fontSize: 18,
    letterSpacing: 2,
    marginBottom: 10,
  },
  reviewTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#102A43",
    marginBottom: 8,
  },
  reviewText: {
    fontSize: 14,
    lineHeight: 22,
    color: "#627D98",
  },
});
