import { BookingFormData, bookingSchema } from "@/schemas/bookingSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type BookingFormProps = {
  onSubmit: (data: BookingFormData) => void;
};

export default function BookingForm({ onSubmit }: BookingFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });

  const [focusedField, setFocusedField] = useState<
    keyof BookingFormData | null
  >(null);

  return (
    <View style={styles.formContainer}>
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
              <Text style={styles.errorMessage}>{errors.lastName.message}</Text>
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
      <Pressable style={styles.button} onPress={() => handleSubmit(onSubmit)()}>
        <Text style={styles.buttonText}>Book Now</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 14,
    width: "100%",
    flex: 1,
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
