import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.background}>
      <Image
        source={require("../../assets/images/hero.webp")}
        style={[StyleSheet.absoluteFill, { width: "100%", height: "100%" }]}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Image
          source={require("../../assets/images/logo.png")}
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
    // backgroundColor: "rgba(255, 255, 255, 0.1)",
    flex: 1,
    paddingTop: 40,
    paddingBottom: 120,
    paddingHorizontal: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 40,
    marginBottom: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    color: "#102A43",
    marginBottom: 14,
  },
  subtitle: {
    color: "#213445",
    textAlign: "center",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#102A43",
    paddingVertical: 12,
    paddingHorizontal: 46,
    borderRadius: 8,
    marginTop: "auto",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
