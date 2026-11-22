import type { ReactNode } from "react";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  type SharedValue,
} from "react-native-reanimated";

type ScrollSectionProps = {
  children: ReactNode;
  scrollY: SharedValue<number>;
  direction: "left" | "right";
};

export default function ScrollSection({
  children,
  scrollY,
  direction,
}: ScrollSectionProps) {
  const sectionY = useSharedValue(0);
  const hasAnimated = useSharedValue(false);
  const isMeasured = useSharedValue(false);

  const initialX = direction === "left" ? -80 : 80;

  const animatedStyle = useAnimatedStyle(() => {
    const translateX = hasAnimated.value
      ? 0
      : interpolate(
          scrollY.value,
          [sectionY.value - 700, sectionY.value - 200],
          [initialX, 0],
          Extrapolation.CLAMP,
        );

    return {
      transform: [{ translateX }],
    };
  });

  useAnimatedReaction(
    () => isMeasured.value && scrollY.value >= sectionY.value - 200,
    (value) => {
      if (value) {
        hasAnimated.value = true;
      }
    },
  );

  return (
    <Animated.View
      style={animatedStyle}
      onLayout={(event) => {
        sectionY.value = event.nativeEvent.layout.y;
        isMeasured.value = true;
      }}
    >
      {children}
    </Animated.View>
  );
}
