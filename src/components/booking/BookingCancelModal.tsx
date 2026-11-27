import { Ionicons } from "@expo/vector-icons";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

type BookingCancelModalProps = {
  visible: boolean;
  firstName: string;
  tripTitle: string;
  onClose: () => void;
  onCancel: () => void;
};

export default function BookingCancelModal({
  visible,
  firstName,
  tripTitle,
  onClose,
  onCancel,
}: BookingCancelModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Ionicons name="ban-outline" size={54} color="#9c0909" />

          <Text style={styles.title}>Cancel booking</Text>

          <Text style={styles.message}>
            {firstName}, are you sure you want to cancel this booking?
          </Text>

          <Text style={styles.description}>
            Your booking request "{tripTitle}" will be cancelled.
          </Text>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.buttonCancel} onPress={onCancel}>
              <Text style={styles.buttonText}>Cancel booking</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>No</Text>
            </Pressable>
          </View>
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
    paddingHorizontal: 20,
  },
  modalContainer: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
    gap: 10,
    width: "100%",
  },

  buttonCancel: {
    backgroundColor: "#431010",
    paddingVertical: 14,
    width: "60%",
    borderRadius: 8,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#102A43",
    paddingVertical: 14,
    width: "40%",
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "LoraMedium",
  },
});
