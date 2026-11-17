import ProfileForm from "@/components/profile/ProfileForm";
import { useProfile } from "@/context/ProfileContext";
import { ProfileFormData } from "@/schemas/profileSchema";
import { useRouter } from "expo-router";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ProfileEdit() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { setProfile, isLoaded } = useProfile();

  const handleProfileSubmit = (data: ProfileFormData) => {
    setProfile(data);
    router.replace("/profile");
  };

  if (!isLoaded) {
    return null;
  }
  return (
    <KeyboardAvoidingView
      style={styles.background}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <Image
          source={require("../../../assets/images/profile/profile.webp")}
          style={styles.image}
          resizeMode="cover"
        />
        <ScrollView
          style={[
            styles.bookingContainer,
            { bottom: insets.bottom + 24, top: insets.top + 20 },
          ]}
          contentContainerStyle={styles.bookingContent}
          keyboardShouldPersistTaps="handled"
        >
          <ProfileForm onSubmit={handleProfileSubmit} />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "rgba(232, 240, 247, 1.00)",
  },
  container: {
    position: "relative",
    width: "100%",
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  bookingContainer: {
    position: "absolute",
    left: 20,
    right: 20,
  },
  bookingContent: {
    gap: 6,
    alignItems: "center",
    flexGrow: 1,
  },
});
