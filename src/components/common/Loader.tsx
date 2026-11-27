import { useEffect, useRef } from "react";
import { Animated, Easing, Image, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Loader() {
  const insets = useSafeAreaInsets();

  const incline = useRef(new Animated.Value(-1)).current;
  const vertical = useRef(new Animated.Value(0)).current;
  const rotate = incline.interpolate({
    inputRange: [-1, 1],
    outputRange: ["-3deg", "3deg"],
  });

  useEffect(() => {
    const inclineAnimation = Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(incline, {
            toValue: 1,
            duration: 1400,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.sin),
          }),
          Animated.timing(vertical, {
            toValue: -7,
            duration: 1400,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.sin),
          }),
        ]),
        Animated.parallel([
          Animated.timing(incline, {
            toValue: -1,
            duration: 1400,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.sin),
          }),
          Animated.timing(vertical, {
            toValue: 0,
            duration: 1400,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.sin),
          }),
        ]),
      ]),
      {
        iterations: -1,
        resetBeforeIteration: false,
      },
    );

    inclineAnimation.start();
  }, [incline, vertical]);

  return (
    <View
      style={[
        styles.background,
        {
          paddingTop: insets.top + 20,
          paddingBottom: insets.bottom + 24,
        },
      ]}
    >
      <Animated.View
        style={{
          transform: [{ rotate }, { translateY: vertical }],
        }}
      >
        <Image
          source={require("../../../assets/images/loader-icon.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>
      <Text style={styles.title}>YachtJet</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#102A43",
    paddingHorizontal: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  logo: {
    width: 240,
    height: 240,
  },
  title: {
    textAlign: "center",
    fontSize: 42,
    fontFamily: "LoraSemiBoldItalic",
    color: "#FFFFFF",
  },
});
