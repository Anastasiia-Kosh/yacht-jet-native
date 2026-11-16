import { profileStorageSchema } from "@/schemas/profileSchema";
import type { UserProfile } from "@/types/profile";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

  useEffect(() => {
    if (!isLoaded) return;

    const saveProfile = async () => {
      try {
        const newProfile = JSON.stringify(profile);
        await AsyncStorage.setItem(STORAGE_KEY, newProfile);
      } catch (error) {
        console.warn("Failed to save profile:", error);
      }
    };

    saveProfile();
  }, [profile, isLoaded]);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
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
