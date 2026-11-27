import EmptyState from "@/components/common/EmptyState";
import ProfileDeleteModal from "@/components/profile/ProfileDeleteModal";
import { useProfile } from "@/context/ProfileContext";
import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Profile() {
  const insets = useSafeAreaInsets();
  const { profile, deleteProfile } = useProfile();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const hasProfile = profile.firstName.trim().length > 0;

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

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  const handleDelete = async () => {
    try {
      await deleteProfile();
      setIsModalVisible(false);
      router.replace("/");
    } catch (error) {
      console.warn("Failed to delete profile:", error);
    }
  };

  return (
    <View style={styles.background}>
      <Image
        source={require("../../assets/images/profile/profile.webp")}
        style={[
          StyleSheet.absoluteFill,
          {
            width: "100%",
            height: "100%",
          },
        ]}
        resizeMode="cover"
      />
      <View
        style={[
          styles.profile,
          { paddingTop: insets.top + 20, paddingBottom: insets.bottom + 24 },
        ]}
      >
        <View style={styles.profileHeader}>
          <View>
            <Text style={styles.title}>My Profile</Text>
            <Text style={styles.description}>Welcome aboard,</Text>
            <Text style={styles.description}>{profile.firstName}!</Text>
          </View>
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
        </View>
        <View style={styles.profileWrap}>
          <View style={styles.profileContainer}>
            <Ionicons name="person" size={20} color="#102A43" />
            <Text style={styles.profileData}>
              {profile.firstName} {profile.lastName}
            </Text>
          </View>
          <View style={styles.profileContainer}>
            <Ionicons name="flag" size={20} color="#102A43" />
            <Text style={styles.profileData}>{profile.country}</Text>
          </View>
          <View style={styles.profileContainer}>
            <Ionicons name="mail" size={20} color="#102A43" />
            <Text style={styles.profileData}>{profile.email}</Text>
          </View>
          <View style={styles.profileContainer}>
            <Ionicons name="call" size={20} color="#102A43" />
            <Text style={styles.profileData}>{profile.phone}</Text>
          </View>
        </View>

        <View style={styles.activityContainer}>
          <Link href="/favorites" asChild>
            <Pressable style={styles.activityButton}>
              <Ionicons name="heart" size={20} color="#102A43" />
              <Text style={styles.activityButtonText}>My favorites</Text>
              <Ionicons
                name="arrow-forward-circle-outline"
                size={24}
                color="#102A43"
              />
            </Pressable>
          </Link>
          <Link href="/my-bookings" asChild>
            <Pressable style={styles.activityButton}>
              <Ionicons name="calendar" size={20} color="#102A43" />
              <Text style={styles.activityButtonText}>My bookings</Text>
              <Ionicons
                name="arrow-forward-circle-outline"
                size={24}
                color="#102A43"
              />
            </Pressable>
          </Link>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable onPress={() => router.back()} style={styles.buttonBack}>
            <Ionicons
              name="arrow-back-circle-outline"
              size={20}
              color="#102A43"
            />
            <Text style={styles.buttonBackText}>Go back</Text>
          </Pressable>

          <View style={styles.buttonEditContainer}>
            <Link href="/profile/edit" asChild>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Edit profile</Text>
              </Pressable>
            </Link>

            <Pressable style={styles.buttonDelete} onPress={handleOpenModal}>
              <Text style={styles.buttonText}>Delete</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <ProfileDeleteModal
        visible={isModalVisible}
        firstName={profile.firstName}
        lastName={profile.lastName}
        onClose={handleCloseModal}
        onDelete={handleDelete}
      />
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
    color: "#FFFFFF",
    marginBottom: 18,
  },
  description: {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "LoraItalic",
    marginBottom: 8,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    overflow: "hidden",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  profileWrap: { gap: 14, alignItems: "flex-start" },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    padding: 10,
    width: "100%",
  },
  profileData: {
    fontFamily: "LoraRegular",
    fontSize: 16,
    lineHeight: 24,
    color: "#102A43",
  },
  activityContainer: {
    gap: 14,
    marginTop: 42,
    marginRight: "auto",
  },
  activityButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#FFFFFF",
  },
  activityButtonText: {
    fontFamily: "LoraMedium",
    fontSize: 16,
    color: "#102A43",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
    width: "100%",
    alignItems: "flex-end",
  },
  buttonEditContainer: {
    alignItems: "flex-end",
    gap: 16,
  },
  button: {
    backgroundColor: "#102A43",
    width: 130,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: "LoraRegular",
    color: "#FFFFFF",
    fontSize: 15,
  },
  buttonDelete: {
    backgroundColor: "#431010",
    width: 130,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  buttonBack: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 30,
    marginTop: 24,
    marginRight: "auto",
  },
  buttonBackText: {
    color: "#102A43",
    fontSize: 15,
    fontFamily: "LoraRegular",
  },
});
