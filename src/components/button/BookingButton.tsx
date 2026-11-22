import { router } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, TouchableOpacity } from "react-native";

type BookingButtonProps = {
  tripId: string;
};

export default function BookingButton({ tripId }: BookingButtonProps) {
  const opacityAnim = useRef(new Animated.Value(1)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    // Створюємо нескінченний цикл анімації
    const pulseAnimation = Animated.loop(
      Animated.sequence([
        // Фаза 1: зменшуємо прозорість і трохи збільшуємо кнопку
        Animated.parallel([
          Animated.timing(opacityAnim, {
            toValue: 0.9,
            duration: 700,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 1.05,
            duration: 700,
            useNativeDriver: true,
          }),
        ]),
        // Фаза 2: повертаємо до початкового стану
        Animated.parallel([
          Animated.timing(opacityAnim, {
            toValue: 1,
            duration: 700,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 700,
            useNativeDriver: true,
          }),
        ]),
      ]),
    );

    pulseAnimation.start();

    // Зупиняємо анімацію при розмонтуванні компонента
    return () => pulseAnimation.stop();
  }, [opacityAnim, scaleAnim]);

  const handleBooking = () => {
    router.push({
      pathname: "/booking/[id]",
      params: { id: tripId },
    });
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: opacityAnim,
          transform: [{ scale: scaleAnim }],
        },
      ]}
    >
      <TouchableOpacity
        style={styles.button}
        onPress={handleBooking}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Book This Trip</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#102A43",
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
    elevation: 5, // Тінь для Android
    shadowColor: "#102A43", // Тінь для iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  buttonText: {
    fontFamily: "LoraMedium",
    color: "#FFFFFF",
    fontSize: 18,
  },
});

// import { router } from "expo-router";
// import { Pressable, StyleSheet, Text, View } from "react-native";

// type BookingButtonProps = {
//   tripId: string;
// };

// export default function BookingButton({ tripId }: BookingButtonProps) {
//   const handleBooking = () => {
//     router.push({
//       pathname: "/booking/[id]",
//       params: { id: tripId },
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Pressable style={styles.button} onPress={handleBooking}>
//         <Text style={styles.buttonText}>Book This Trip</Text>
//       </Pressable>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 20,
//   },
//   button: {
//     backgroundColor: "#102A43",
//     paddingVertical: 14,
//     paddingHorizontal: 24,
//     borderRadius: 8,
//     alignItems: "center",
//     marginBottom: 12,
//   },
//   buttonText: {
//     fontFamily: "LoraMedium",
//     color: "#FFFFFF",
//     fontSize: 18,
//   },
// });
