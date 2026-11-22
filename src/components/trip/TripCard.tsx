import type { TripItem } from "@/types/trip";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useEffect } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { GestureDetector, usePanGesture } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";

type TripCardProps = {
  item: TripItem;
  position: "back" | "middle" | "current";
  width: number;
  height: number;
  onSwipeComplete: () => void;
};

export default function TripCard({
  item,
  position,
  width,
  height,
  onSwipeComplete,
}: TripCardProps) {
  const positionStyle =
    position === "back"
      ? styles.backCard
      : position === "middle"
        ? styles.middleCard
        : styles.currentCard;

  const translateY = useSharedValue(0);
  const scale = useSharedValue(
    position === "current" ? 1 : position === "middle" ? 0.91 : 0.82,
  );

  useEffect(() => {
    if (position === "back") {
      scale.value = 0.82;
      return;
    }
    if (position === "current") {
      scale.value = withDelay(100, withSpring(1));
    } else {
      scale.value = withSpring(0.91);
    }
  }, [position]);

  const panGesture = usePanGesture({
    onUpdate: (event) => {
      translateY.value = Math.max(0, event.translationY);
      scale.value = Math.max(0.82, 1 - event.translationY / 2000);
    },
    onFinalize: () => {
      if (translateY.value < 150) {
        translateY.value = withSpring(0);
        scale.value = withSpring(1);
      } else {
        translateY.value = withTiming(700, { duration: 400 }, (finished) => {
          finished === true && scheduleOnRN(onSwipeComplete);
        });
        scale.value = withTiming(0.82, { duration: 400 });
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }, { scale: scale.value }],
  }));
  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View
        pointerEvents={position === "current" ? "auto" : "none"}
        style={[styles.card, { width, height }, positionStyle, animatedStyle]}
      >
        <Image
          source={item.img}
          style={[StyleSheet.absoluteFill, { width: "100%", height: "100%" }]}
          resizeMode="cover"
        />

        <View style={styles.contextWrap}>
          <View>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemPrice}>
              {`$${item.price.toLocaleString("en-US")}`}
            </Text>
          </View>
          <Link
            href={{
              pathname: "/trip/[id]",
              params: { id: item.id },
            }}
            asChild
          >
            <Pressable style={styles.button}>
              <Ionicons
                name="arrow-forward-circle-outline"
                size={40}
                color="#102A43"
              />
            </Pressable>
          </Link>
        </View>
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    top: 0,
    left: 0,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    borderRadius: 16,
    overflow: "hidden",
    boxShadow: "0px -6px 12px rgba(16, 42, 67, 0.5)",
  },
  backCard: {
    zIndex: 1,
    elevation: 1,
    top: "-12.5%",
  },

  middleCard: {
    zIndex: 2,
    elevation: 2,
    top: "-6.5%",
  },

  currentCard: {
    zIndex: 3,
    elevation: 3,
  },
  contextWrap: {
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
  button: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    elevation: 3,
  },
});
