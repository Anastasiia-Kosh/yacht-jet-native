import { Ionicons } from "@expo/vector-icons";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

type BookingSuccessModalProps = {
  visible: boolean;
  firstName: string;
  tripTitle: string;
  onClose: () => void;
};

export default function BookingSuccessModal({
  visible,
  firstName,
  tripTitle,
  onClose,
}: BookingSuccessModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Ionicons name="checkmark-circle" size={64} color="#2E9D70" />

          <Text style={styles.title}>Booking successful!</Text>

          <Text style={styles.message}>Thank you, {firstName}!</Text>

          <Text style={styles.description}>
            Your booking request "{tripTitle}" has been received.
          </Text>

          <Pressable style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Got it</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  modalContainer: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 28,
    alignItems: "center",
    gap: 16,
  },
  title: {
    fontSize: 22,
    fontFamily: "LoraSemiBoldItalic",
    color: "#102A43",
    textAlign: "center",
  },
  message: {
    fontFamily: "LoraRegular",
    fontSize: 18,
    color: "#102A43",
    textAlign: "center",
  },
  description: {
    fontFamily: "LoraRegular",
    fontSize: 15,
    lineHeight: 22,
    color: "#486581",
    textAlign: "center",
  },
  button: {
    width: "100%",
    backgroundColor: "#102A43",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "LoraMedium",
  },
});
