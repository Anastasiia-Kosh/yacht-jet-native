import { useProfile } from "@/context/ProfileContext";
import { ProfileFormData, profileSchema } from "@/schemas/profileSchema";
import { Ionicons } from "@expo/vector-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { File, Paths } from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type ProfileFormProps = {
  onSubmit: (data: ProfileFormData) => void;
};

export default function ProfileForm({ onSubmit }: ProfileFormProps) {
  const { profile } = useProfile();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    mode: "onBlur",
    defaultValues: {
      ...profile,
    },
  });

  const hasProfile = profile.firstName.trim().length > 0;
  const [focusedField, setFocusedField] = useState<
    keyof ProfileFormData | null
  >(null);

  const avatar = watch("avatar");
  const previousAvatar = profile.avatar;

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (result.canceled) return;
    const imageUri = result.assets[0].uri;
    const fileName = `avatar-${Date.now()}.jpg`;
    const avatarFile = new File(Paths.document, fileName);
    const sourceFile = new File(imageUri);
    await sourceFile.copy(avatarFile);
    setValue("avatar", avatarFile.uri);
  };

  return (
    <View style={styles.profileForm}>
      <Text style={styles.title}>
        {hasProfile ? "Edit your profile" : "Create your profile"}
      </Text>
      <View style={styles.formContainer}>
        <View style={styles.avatarWrapper}>
          <View style={styles.avatarContainer}>
            <Image
              source={
                avatar
                  ? { uri: avatar }
                  : require("../../../assets/images/profile/default-avatar.png")
              }
              style={styles.avatar}
              resizeMode="cover"
            />
          </View>
          <Pressable style={styles.avatarButton} onPress={pickImage}>
            <Ionicons name="camera-outline" size={20} color="#102A43" />
            <Text style={styles.avatarButtonText}>Select a photo</Text>
          </Pressable>
        </View>

        <Controller
          control={control}
          name="firstName"
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <TextInput
                placeholder="First name"
                placeholderTextColor="#627D98"
                value={value}
                onChangeText={onChange}
                style={[
                  styles.input,
                  focusedField === "firstName" && styles.inputFocused,
                  errors.firstName && styles.inputError,
                ]}
                onBlur={() => {
                  onBlur();
                  setFocusedField(null);
                }}
                onFocus={() => setFocusedField("firstName")}
              />
              {errors.firstName && (
                <Text style={styles.errorMessage}>
                  {errors.firstName.message}
                </Text>
              )}
            </View>
          )}
        />
        <Controller
          control={control}
          name="lastName"
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <TextInput
                placeholder="Last name"
                placeholderTextColor="#627D98"
                value={value}
                onChangeText={onChange}
                style={[
                  styles.input,
                  focusedField === "lastName" && styles.inputFocused,
                  errors.lastName && styles.inputError,
                ]}
                onBlur={() => {
                  onBlur();
                  setFocusedField(null);
                }}
                onFocus={() => setFocusedField("lastName")}
              />
              {errors.lastName && (
                <Text style={styles.errorMessage}>
                  {errors.lastName.message}
                </Text>
              )}
            </View>
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <TextInput
                autoCapitalize="none"
                keyboardType="email-address"
                placeholder="Email"
                placeholderTextColor="#627D98"
                value={value}
                onChangeText={onChange}
                style={[
                  styles.input,
                  focusedField === "email" && styles.inputFocused,
                  errors.email && styles.inputError,
                ]}
                onBlur={() => {
                  onBlur();
                  setFocusedField(null);
                }}
                onFocus={() => setFocusedField("email")}
              />
              {errors.email && (
                <Text style={styles.errorMessage}>{errors.email.message}</Text>
              )}
            </View>
          )}
        />
        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <TextInput
                keyboardType="phone-pad"
                placeholder="Phone number"
                placeholderTextColor="#627D98"
                value={value}
                onChangeText={onChange}
                style={[
                  styles.input,
                  focusedField === "phone" && styles.inputFocused,
                  errors.phone && styles.inputError,
                ]}
                onBlur={() => {
                  onBlur();
                  setFocusedField(null);
                }}
                onFocus={() => setFocusedField("phone")}
              />
              {errors.phone && (
                <Text style={styles.errorMessage}>{errors.phone.message}</Text>
              )}
            </View>
          )}
        />
        <Controller
          control={control}
          name="country"
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <TextInput
                placeholder="Country"
                placeholderTextColor="#627D98"
                value={value}
                onChangeText={onChange}
                style={[
                  styles.input,
                  focusedField === "country" && styles.inputFocused,
                  errors.country && styles.inputError,
                ]}
                onBlur={() => {
                  onBlur();
                  setFocusedField(null);
                }}
                onFocus={() => setFocusedField("country")}
              />
              {errors.country && (
                <Text style={styles.errorMessage}>
                  {errors.country.message}
                </Text>
              )}
            </View>
          )}
        />
        <Pressable
          style={styles.button}
          onPress={() => handleSubmit(onSubmit)()}
        >
          <Text style={styles.buttonText}>
            {hasProfile ? "Save changes" : "Save profile"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileForm: {
    flex: 1,
    width: "100%",
  },
  title: {
    fontFamily: "LoraSemiBoldItalic",
    fontSize: 28,
    color: "#FFFFFF",
    marginBottom: 18,
  },
  formContainer: {
    marginTop: 14,
    width: "100%",
    flex: 1,
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
    borderColor: "#FFFFFF",
    overflow: "hidden",
    alignSelf: "center",
    position: "relative",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  avatarButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    color: "#102A43",
    borderColor: "#102A43",
    borderWidth: 1,
    flexDirection: "row",
    gap: 8,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  avatarButtonText: {
    color: "#102A43",
    fontSize: 15,
    fontFamily: "LoraMedium",
  },
  input: {
    fontFamily: "LoraRegular",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    marginTop: 18,
    color: "#102A43",
    borderColor: "#102A43",
    borderWidth: 1,
  },
  inputFocused: {
    borderColor: "#102A43",
    borderWidth: 2,
  },
  inputError: {
    borderColor: "#D32F2F",
  },
  errorMessage: {
    fontFamily: "LoraRegular",
    color: "#D32F2F",
    fontSize: 13,
    marginTop: 4,
  },
  button: {
    backgroundColor: "#102A43",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 32,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "LoraMedium",
  },
});
