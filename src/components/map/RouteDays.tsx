import type { ItineraryDay, TripItem } from "@/types/trip";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

type RouteDaysProps = {
  itinerary: NonNullable<TripItem["itinerary"]>;
  selectedDay: number;
  onDayChange: (day: ItineraryDay) => void;
};

export default function RouteDays({
  itinerary,
  selectedDay,
  onDayChange,
}: RouteDaysProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.daysContainer}
    >
      {itinerary.map((day) => (
        <Pressable
          key={day.day}
          style={[
            styles.dayButton,
            selectedDay === day.day && styles.activeDayButton,
          ]}
          onPress={() => onDayChange(day)}
        >
          <Text
            style={[
              styles.dayButtonText,
              selectedDay === day.day && styles.activeDayButtonText,
            ]}
          >
            Day {day.day}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  daysContainer: {
    gap: 5,
    paddingVertical: 20,
  },
  dayButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#D9E2EC",
    backgroundColor: "#FFFFFF",
  },
  activeDayButton: {
    backgroundColor: "#102A43",
    borderColor: "#102A43",
  },
  dayButtonText: {
    fontFamily: "LoraRegular",
    fontSize: 14,
    color: "#486581",
  },
  activeDayButtonText: {
    color: "#FFFFFF",
  },
});
