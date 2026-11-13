import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import {
  Lora_400Regular,
  Lora_400Regular_Italic,
  Lora_500Medium,
  Lora_600SemiBold,
  Lora_600SemiBold_Italic,
} from "@expo-google-fonts/lora";

// import {
//   DMSans_400Regular,
//   DMSans_500Medium,
//   DMSans_700Bold,
// } from "@expo-google-fonts/dm-sans";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    // DMSansRegular: DMSans_400Regular,
    // DMSansMedium: DMSans_500Medium,
    // DMSansBold: DMSans_700Bold,

    LoraRegular: Lora_400Regular,
    LoraItalic: Lora_400Regular_Italic,
    LoraMedium: Lora_500Medium,
    LoraSemiBold: Lora_600SemiBold,
    LoraSemiBoldItalic: Lora_600SemiBold_Italic,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
  );
}
