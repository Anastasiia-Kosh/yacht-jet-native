import EmptyState from "@/components/common/EmptyState";
import { useProfile } from "@/context/ProfileContext";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Profile() {
  const insets = useSafeAreaInsets();
  const { profile } = useProfile();

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

  return (
    <View style={[styles.profile, { paddingTop: insets.top + 20 }]}>
      <Text style={styles.title}>My Profile</Text>
      <Text style={styles.description}>Your personal information</Text>
    </View>
  );
}
// <View style={[styles.profile, { paddingTop: insets.top + 20 }]}>
//   <Text style={styles.title}>My Profile</Text>
//   <Text style={styles.description}>Your personal information</Text>

//   <View style={styles.profileHeader}>
//     <View style={styles.avatarWrap}>
//       <Image
//         source={
//           profile.avatar !== ""
//             ? { uri: profile.avatar }
//             : require("../../assets/images/default-avatar.png")
//         }
//         style={[
//           StyleSheet.absoluteFill,
//           {
//             width: "100%",
//             height: "100%",
//             borderRadius: 50,
//           },
//         ]}
//         resizeMode="cover"
//       />
//     </View>
//     <View style={styles.profileNameWrap}>
//       <Text style={styles.profileName}>
//         {profile.firstName} {profile.lastName}
//       </Text>
//       <Text style={styles.profileCountry}>{profile.country}</Text>
//     </View>
//   </View>
// </View>

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#ECF8FF",
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
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  avatarWrap: {
    height: 100,
    position: "relative",
  },
  profileNameWrap: { gap: 20 },
  profileName: {
    fontFamily: "LoraRegular",
    fontSize: 15,
    lineHeight: 24,
    color: "#627D98",
  },
  profileCountry: {
    fontFamily: "LoraRegular",
    fontSize: 15,
    lineHeight: 24,
    color: "#627D98",
  },
});
