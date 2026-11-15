
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type FavoritesContextType = {
  favoriteIds: string[];
  isLoaded: boolean;
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType | null>(null);

const STORAGE_KEY = "@yachtjet/favorites";

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Завантажуємо обране зі сховища під час запуску
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem(STORAGE_KEY);

        if (storedFavorites) {
          const parsed: unknown = JSON.parse(storedFavorites);

          if (
            Array.isArray(parsed) &&
            parsed.every((id) => typeof id === "string")
          ) {
            setFavoriteIds(parsed);
          }
        }
      } catch (error) {
        console.warn("Failed to load favorites:", error);
      } finally {
        setIsLoaded(true);
      }
    };

    loadFavorites();
  }, []);

  // Зберігаємо зміни у сховищі
  useEffect(() => {
    if (!isLoaded) return;

    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteIds)).catch(
      (error) => console.warn("Failed to save favorites:", error),
    );
  }, [favoriteIds, isLoaded]);

  // Додаємо або видаляємо подорож з обраного
  const toggleFavorite = useCallback((id: string) => {
    setFavoriteIds((prev) =>
      prev.includes(id)
        ? prev.filter((favoriteId) => favoriteId !== id)
        : [...prev, id],
    );
  }, []);

  // Перевіряємо, чи є подорож в обраному
  const isFavorite = useCallback(
    (id: string) => favoriteIds.includes(id),
    [favoriteIds],
  );

  const value = useMemo(
    () => ({
      favoriteIds,
      isLoaded,
      toggleFavorite,
      isFavorite,
    }),
    [favoriteIds, isLoaded, toggleFavorite, isFavorite],
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }

  return context;
}
