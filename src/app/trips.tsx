import TripStack from "@/components/trip/TripStack";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Trips() {
  const insets = useSafeAreaInsets();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const favoriteTranslateX = useSharedValue(0);
  const favoriteTranslateY = useSharedValue(0);
  const profileTranslateX = useSharedValue(0);
  const profileTranslateY = useSharedValue(0);
  const bookingsTranslateX = useSharedValue(0);
  const bookingsTranslateY = useSharedValue(0);
  const menuRotation = useSharedValue(0);

  const animatedStyleFavorite = useAnimatedStyle(() => {
    return {
      zIndex: 2,
      transform: [
        { translateX: favoriteTranslateX.value },
        { translateY: favoriteTranslateY.value },
      ],
    };
  });
  const animatedStyleProfile = useAnimatedStyle(() => {
    return {
      zIndex: 2,
      transform: [
        { translateX: profileTranslateX.value },
        { translateY: profileTranslateY.value },
      ],
    };
  });
  const animatedStyleBookings = useAnimatedStyle(() => {
    return {
      zIndex: 2,
      transform: [
        { translateX: bookingsTranslateX.value },
        { translateY: bookingsTranslateY.value },
      ],
    };
  });
  const animatedStyleMenu = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: `${interpolate(menuRotation.value, [0, 1], [0, 90])}deg` },
      ],
    };
  });
  const closeMenu = () => {
    setIsMenuOpen(false);
    favoriteTranslateX.value = withSpring(0);
    favoriteTranslateY.value = withSpring(0);
    profileTranslateX.value = withSpring(0);
    profileTranslateY.value = withSpring(0);
    bookingsTranslateX.value = withSpring(0);
    bookingsTranslateY.value = withSpring(0);
    menuRotation.value = withSpring(0);
  };
  const toggleMenu = () => {
    if (isMenuOpen === false) {
      setIsMenuOpen(true);
      favoriteTranslateX.value = withSpring(0);
      favoriteTranslateY.value = withSpring(60);
      profileTranslateX.value = withSpring(-60);
      profileTranslateY.value = withSpring(0);
      bookingsTranslateX.value = withSpring(-45);
      bookingsTranslateY.value = withSpring(45);
      menuRotation.value = withSpring(1);
    } else {
      closeMenu();
    }
  };

  return (
    <View
      style={[
        styles.background,
        { paddingBottom: insets.bottom + 10, paddingTop: insets.top + 20 },
      ]}
    >
      <View style={styles.listHeader}>
        <Pressable style={styles.buttonMenu} onPress={toggleMenu}>
          <Animated.View style={animatedStyleMenu}>
            <Ionicons
              name={isMenuOpen ? "close-outline" : "menu-outline"}
              size={30}
              color="#FFFFFF"
            />
          </Animated.View>
        </Pressable>
        <Animated.View style={animatedStyleFavorite}>
          <Link href="/favorites" onPress={closeMenu} asChild>
            <Pressable style={styles.buttonMenuPoint}>
              <Ionicons name={"heart"} size={20} color="#FFFFFF" />
            </Pressable>
          </Link>
        </Animated.View>
        <Animated.View style={animatedStyleProfile}>
          <Link href="/profile" onPress={closeMenu} asChild>
            <Pressable style={styles.buttonMenuPoint}>
              <Ionicons name={"person"} size={20} color="#FFFFFF" />
            </Pressable>
          </Link>
        </Animated.View>
        <Animated.View style={animatedStyleBookings}>
          <Link href="/profile" onPress={closeMenu} asChild>
            <Pressable style={styles.buttonMenuPoint}>
              <Ionicons name={"calendar"} size={20} color="#FFFFFF" />
            </Pressable>
          </Link>
        </Animated.View>
        <Text style={styles.title}>Explore sea trips</Text>
        <Text style={styles.description}>
          Explore our offers below and find the trip that perfectly matches your
          preferences.
        </Text>
      </View>
      <View style={styles.cardsContainer}>
        <TripStack />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#ecf8ff",
  },
  listHeader: {
    marginBottom: 35,
    paddingHorizontal: 20,
  },
  buttonMenu: {
    width: 46,
    height: 46,
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 3,
    elevation: 3,
    backgroundColor: "#102A43",
    boxShadow: "2px 3px 8px 0px rgba(16, 42, 67, 0.6)",
    position: "absolute",
    top: 0,
    right: 20,
  },
  buttonMenuPoint: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    elevation: 3,
    backgroundColor: "#102A43",
    boxShadow: "2px 3px 8px 0px rgba(16, 42, 67, 0.6)",
    position: "absolute",
    top: 0,
    right: 0,
  },

  title: {
    fontFamily: "LoraSemiBoldItalic",
    fontSize: 28,
    color: "#102A43",
    marginBottom: 18,
  },
  description: {
    fontSize: 15,
    lineHeight: 24,
    color: "#627D98",
    fontFamily: "LoraRegular",
  },
  cardsContainer: {
    flex: 1,
    width: "100%",
    position: "relative",
    overflow: "visible",
  },
});
