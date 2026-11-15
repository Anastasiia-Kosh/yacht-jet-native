import { useFavorites } from "@/context/FavoritesContext";
import { Ionicons } from "@expo/vector-icons";
import {
  Pressable,
  StyleSheet,
  type StyleProp,
  type ViewStyle,
} from "react-native";

type FavoriteButtonProps = {
  tripId: string;
  style?: StyleProp<ViewStyle>;
};

export default function FavoriteButton({ tripId, style }: FavoriteButtonProps) {
  const { toggleFavorite, isFavorite } = useFavorites();

  const favorite = isFavorite(tripId);

  return (
    <Pressable
      style={[styles.button, style]}
      onPress={() => toggleFavorite(tripId)}
      hitSlop={8}
    >
      <Ionicons
        name={favorite ? "heart" : "heart-outline"}
        size={26}
        color={favorite ? "#E5A83B" : "#102A43"}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    elevation: 3,
  },
});
