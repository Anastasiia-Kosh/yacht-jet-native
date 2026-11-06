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
        <Text style={styles.logo}>YACHTJET</Text>
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
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    color: "#102A43",
    marginBottom: 20,
  },
  logo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#102A43",
    marginBottom: 40,
  },
  subtitle: {
    color: "#3d6182",
    textAlign: "center",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#102A43",
    paddingVertical: 12,
    paddingHorizontal: 46,
    borderRadius: 8,
    marginTop: 180,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
