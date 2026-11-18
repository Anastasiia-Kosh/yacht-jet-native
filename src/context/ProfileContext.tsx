import { profileStorageSchema } from "@/schemas/profileSchema";
import type { UserProfile } from "@/types/profile";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { File, Paths } from "expo-file-system";
import type React from "react";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

const initialProfile: UserProfile = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  avatar: "",
};

type ProfileContextType = {
  profile: UserProfile;
  setProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
  isLoaded: boolean;
  saveProfile: (data: UserProfile) => Promise<void>;
};
export const ProfileContext = createContext<ProfileContextType | null>(null);

const STORAGE_KEY = "@yachtjet/profile";

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState(initialProfile);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const storedProfile = await AsyncStorage.getItem(STORAGE_KEY);

        if (storedProfile) {
          const parsed: unknown = JSON.parse(storedProfile);
          const result = profileStorageSchema.safeParse(parsed);

          if (result.success) {
            setProfile(result.data);
          }
        }
      } catch (error) {
        console.warn("Failed to load profile:", error);
      } finally {
        setIsLoaded(true);
      }
    };
    loadProfile();
  }, []);

  const saveProfile = async (data: UserProfile) => {
    let oldAvatar = "";
    try {
      // 1. Отримуємо старий профіль зі сховища
      const oldProfile = await AsyncStorage.getItem(STORAGE_KEY);
      // 2. Якщо старий профіль існує, дістаємо його аватарку
      if (oldProfile) {
        const parsed: unknown = JSON.parse(oldProfile);
        const result = profileStorageSchema.safeParse(parsed);
        if (result.success) {
          oldAvatar = result.data.avatar;
        }
      }
      // 3. Перетворюємо новий профіль на JSON-рядок
      const newProfile = JSON.stringify(data);
      // 4. Зберігаємо новий профіль
      await AsyncStorage.setItem(STORAGE_KEY, newProfile);
      setProfile(data);
      // 5. Перевіряємо чи була стара аватарка, чи вибрана нова
      if (oldAvatar && oldAvatar !== data.avatar) {
        const oldFile = new File(oldAvatar);
        // 6. Видаляємо старий файл тільки після успішного запису нового профілю
        if (oldFile.uri.startsWith(Paths.document.uri) && oldFile.exists) {
          await oldFile.delete();
        }
      }
    } catch (error) {
      console.warn("Failed to save profile:", error);
      throw error;
    }
  };

  return (
    <ProfileContext.Provider
      value={{ profile, setProfile, isLoaded, saveProfile }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within ProfileProvider");
  }
  return context;
}
