import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function NotFoundPage() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.backgroundNotFound, { paddingTop: insets.top + 20 }]}>
      <Image
        source={require("../../assets/images/empty.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Page not found</Text>
      <Link href="/" asChild>
        <Pressable style={styles.button}>
          <Ionicons
            name="arrow-back-circle-outline"
            size={20}
            color="#FFFFFF"
          />
          <Text style={styles.buttonText}>To home page</Text>
        </Pressable>
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  backgroundNotFound: {
    paddingHorizontal: 20,
    paddingTop: 24,
    flex: 1,
    backgroundColor: "rgba(232, 240, 247, 1.00)",
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 18,
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontFamily: "LoraSemiBoldItalic",
    color: "#102A43",
    marginBottom: 14,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#102A43",
    paddingVertical: 12,
    paddingHorizontal: 46,
    borderRadius: 8,
    marginTop: 24,
  },
  buttonText: {
    fontFamily: "LoraMedium",
    color: "#FFFFFF",
    fontSize: 18,
    textAlign: "center",
  },
});
