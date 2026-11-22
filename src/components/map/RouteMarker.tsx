import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

type RouteMarkerProps = {
  isStart: boolean;
  isActive: boolean;
};

export default function RouteMarker({ isStart, isActive }: RouteMarkerProps) {
  const scale = useSharedValue(0.5);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  useEffect(() => {
    scale.value = withTiming(1, { duration: 450 });
  }, []);

  return (
    <Animated.View
      style={[
        styles.marker,
        isActive && styles.markerActive,
        isStart && styles.markerStart,
        animatedStyle,
      ]}
    >
      <MaterialCommunityIcons
        name="sail-boat"
        size={isActive ? 23 : 19}
        color={isStart || isActive ? "#FFFFFF" : "#102A43"}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  marker: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#83AFC0",
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  markerActive: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#102A43",
    borderColor: "#FFFFFF",
    borderWidth: 2,
  },
  markerStart: {
    backgroundColor: "#D9A441",
    borderColor: "#FFFFFF",
    borderWidth: 2,
  },
});
