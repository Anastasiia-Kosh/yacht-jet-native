import { Ionicons } from "@expo/vector-icons";
import { type Href, Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type EmptyStateProps = {
  title: string;
  button: string;
  description?: string;
  nameIcon: keyof typeof Ionicons.glyphMap;
  link: Href;
};

export default function EmptyState({
  title,
  button,
  description,
  nameIcon,
  link,
}: EmptyStateProps) {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.background}>
      <Image
        source={require("../../../assets/images/profile/profile.webp")}
        style={[StyleSheet.absoluteFill, { width: "100%", height: "100%" }]}
        resizeMode="cover"
      />
      <View style={[styles.context, { paddingTop: insets.top + 20 }]}>
        <Image
          source={require("../../../assets/images/empty.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>{title}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
        <Link href={link} asChild>
          <Pressable style={styles.button}>
            <Ionicons name={nameIcon} size={20} color="#FFFFFF" />
            <Text style={styles.buttonText}>{button}</Text>
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
  context: {
    paddingHorizontal: 20,
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  logo: {
    width: 280,
    height: 280,
    marginBottom: 18,
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontFamily: "LoraSemiBoldItalic",
    color: "#102A43",
    marginBottom: 14,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  description: {
    fontSize: 15,
    lineHeight: 24,
    color: "#102A43",
    textAlign: "center",
    fontFamily: "LoraRegular",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
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
