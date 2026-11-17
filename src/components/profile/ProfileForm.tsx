import { useProfile } from "@/context/ProfileContext";
import { ProfileFormData, profileSchema } from "@/schemas/profileSchema";
import { zodResolver } from "@hookform/resolvers/zod";
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

  return (
    <View style={styles.profileForm}>
      <Text style={styles.title}>
        {hasProfile ? "Edit your profile" : "Create your profile"}
      </Text>

      <View style={styles.formContainer}>
        <View style={styles.avatarContainer}>
          <Image
            source={require("../../../assets/images/profile/default-avatar.png")}
            style={styles.avatar}
            resizeMode="cover"
          />
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
    color: "#102A43",
    marginBottom: 18,
  },
  formContainer: {
    marginTop: 14,
    width: "100%",
    flex: 1,
  },
  avatarContainer: {
    width: 112,
    height: 112,
    borderRadius: 56,
    overflow: "hidden",
    alignSelf: "center",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  input: {
    fontFamily: "LoraRegular",
    backgroundColor: "#FFFFFF",
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
