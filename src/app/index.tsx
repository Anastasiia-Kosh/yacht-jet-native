import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.background}>
      <Image
        source={require("../../assets/images/hero1.webp")}
        style={[StyleSheet.absoluteFill, { width: "100%", height: "100%" }]}
        resizeMode="cover"
      />
      <View style={[styles.content, { paddingBottom: insets.bottom + 80 }]}>
        <Image
          source={require("../../assets/images/logo2.png")}
          style={styles.logo}
          resizeMode="cover"
        />
        <Text style={styles.title}>Your next sea adventure starts here</Text>
        <Text style={styles.subtitle}>
          Discover unforgettable sailing trips, explore beautiful destinations
          and find the perfect yacht for your journey
        </Text>
        <Link href="/trips" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Explore Trips</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 70,
    marginBottom: 28,
  },
  title: {
    fontFamily: "LoraSemiBoldItalic",
    textAlign: "center",
    fontSize: 36,
    lineHeight: 34,
    color: "#102A43",
    marginBottom: 18,
  },
  subtitle: {
    fontFamily: "LoraMedium",
    color: "#213445",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#102A43",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: "auto",
  },
  buttonText: {
    fontFamily: "LoraMedium",
    color: "#FFFFFF",
    fontSize: 20,
  },
});
