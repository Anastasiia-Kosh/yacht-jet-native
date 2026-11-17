import EmptyState from "@/components/common/EmptyState";
import { useProfile } from "@/context/ProfileContext";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Profile() {
  const insets = useSafeAreaInsets();
  const { profile, isLoaded } = useProfile();

  const hasProfile = profile.firstName.trim().length > 0;
  if (!isLoaded) {
    return null;
  }
  if (!hasProfile) {
    return (
      <EmptyState
        title={"Welcome aboard!"}
        description={
          "Create your profile and make your YachtJet experience more personal."
        }
        link={"/profile/edit"}
        nameIcon={"arrow-forward-circle-outline"}
        button={"Set up profile"}
      />
    );
  }

  return (
    <View style={styles.background}>
      <Image
        source={require("../../assets/images/profile/profile.webp")}
        style={[StyleSheet.absoluteFill, { width: "100%", height: "100%" }]}
        resizeMode="cover"
      />
      <View style={[styles.profile, { paddingTop: insets.top + 20 }]}>
        <Text style={styles.title}>My Profile</Text>
        <Text style={styles.description}>
          Welcome aboard, {profile.firstName}!
        </Text>

        <View style={styles.avatarWrapper}>
          <View style={styles.avatarContainer}>
            <Image
              source={
                profile.avatar
                  ? { uri: profile.avatar }
                  : require("../../assets/images/profile/default-avatar.png")
              }
              style={styles.avatar}
              resizeMode="cover"
            />
          </View>
          <View style={styles.avatarContext}>
            <Text style={styles.avatarContextTitle}>Your profile photo</Text>
            <Pressable style={styles.avatarButton}>
              <Text style={styles.avatarButtonText}>Change photo</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.profileWrap}>
          <View style={styles.profileContainer}>
            <Ionicons name="person" size={20} color="#627D98" />
            <Text style={styles.profileData}>
              {profile.firstName} {profile.lastName}
            </Text>
          </View>
          <View style={styles.profileContainer}>
            <Ionicons name="flag" size={20} color="#627D98" />
            <Text style={styles.profileData}>{profile.country}</Text>
          </View>
          <View style={styles.profileContainer}>
            <Ionicons name="mail" size={20} color="#627D98" />
            <Text style={styles.profileData}>{profile.email}</Text>
          </View>
          <View style={styles.profileContainer}>
            <Ionicons name="call" size={20} color="#627D98" />
            <Text style={styles.profileData}>{profile.phone}</Text>
          </View>
        </View>

        <Link href="/profile/edit" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Edit profile</Text>
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
  profile: {
    width: "100%",
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontFamily: "LoraSemiBoldItalic",
    fontSize: 28,
    color: "#102A43",
    marginBottom: 18,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#213445",
    fontFamily: "LoraItalic",
    marginBottom: 24,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  avatarWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginBottom: 20,
  },
  avatarContainer: {
    width: 112,
    height: 112,
    borderRadius: 56,
    borderWidth: 2,
    borderColor: "#D6A85C",
    overflow: "hidden",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  avatarContext: {
    flex: 1,
    gap: 14,
    alignItems: "flex-start",
  },
  avatarContextTitle: {
    fontSize: 16,
    lineHeight: 24,
    color: "#213445",
    fontFamily: "LoraMedium",
  },
  avatarButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#D6A85C",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  avatarButtonText: {
    color: "#102A43",
    fontSize: 15,
    fontFamily: "LoraMedium",
  },
  profileWrap: { gap: 14, alignItems: "flex-start" },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 10,
    padding: 14,
    width: "100%",
  },
  profileData: {
    fontFamily: "LoraRegular",
    fontSize: 15,
    lineHeight: 24,
    color: "#102A43",
  },
  button: {
    backgroundColor: "#102A43",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 24,
  },
  buttonText: {
    fontFamily: "LoraMedium",
    color: "#FFFFFF",
    fontSize: 20,
  },
});
