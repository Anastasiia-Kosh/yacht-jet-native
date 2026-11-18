import { Ionicons } from "@expo/vector-icons";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

type ProfileDeleteModalProps = {
  visible: boolean;
  firstName: string;
  lastName: string;
  onClose: () => void;
  onDelete: () => void;
};

export default function ProfileDeleteModal({
  visible,
  firstName,
  lastName,
  onClose,
  onDelete,
}: ProfileDeleteModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Ionicons name="trash-outline" size={52} color="#431010" />

          <Text style={styles.title}>
            {firstName} {lastName}
          </Text>

          <Text style={styles.message}>
            Are you sure you want to delete your profile?
          </Text>

          <Text style={styles.description}>This action cannot be undone.</Text>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.buttonDelete} onPress={onDelete}>
              <Text style={styles.buttonText}>Yes, delete</Text>
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
    paddingHorizontal: 24,
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
  button: {
    backgroundColor: "#102A43",
    paddingVertical: 14,
    width: "60%",
    borderRadius: 8,
    alignItems: "center",
  },
  buttonDelete: {
    backgroundColor: "#431010",
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
