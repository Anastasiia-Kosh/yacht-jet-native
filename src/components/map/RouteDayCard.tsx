
import { activityIcons, activityLabels } from "@/data/icons";
import type { RouteActivity, ItineraryDay } from "@/types/trip";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type RouteDayCardProps = {
  currentDay: ItineraryDay;
};

export default function RouteDayCard({ currentDay }: RouteDayCardProps) {
  const dayActivities: RouteActivity[] = [
    ...new Set(currentDay.points.flatMap((point) => point.activities)),
  ];

  return (
    <View style={styles.dayCard}>
      <Text style={styles.dayLabel}>
        DAY {String(currentDay.day).padStart(2, "0")}
      </Text>
      <Text style={styles.dayTitle}>{currentDay.title}</Text>
      <Text style={styles.dayDescription}>{currentDay.description}</Text>

      <View style={styles.dividerActivities} />

      <View style={styles.activitiesContainer}>
        {dayActivities.map((activity) => (
          <View key={activity} style={styles.activityItem}>
            <MaterialCommunityIcons
              name={activityIcons[activity]}
              size={22}
              color="#6096A8"
            />
            <Text style={styles.activityText}>
              {activityLabels[activity]}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dayCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
  },
  dayLabel: {
    fontFamily: "LoraSemiBold",
    fontSize: 12,
    letterSpacing: 1.5,
    color: "#6096A8",
    marginBottom: 10,
  },
  dayTitle: {
    fontFamily: "LoraSemiBoldItalic",
    fontSize: 22,
    color: "#102A43",
    marginBottom: 10,
  },
  dayDescription: {
    fontFamily: "LoraRegular",
    fontSize: 14,
    lineHeight: 22,
    color: "#627D98",
    marginBottom: 12,
  },
  dividerActivities: {
    height: 1,
    backgroundColor: "#D9E2EC",
    marginBottom: 12,
  },
  activitiesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 18,
    rowGap: 14,
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  activityText: {
    fontFamily: "LoraRegular",
    fontSize: 12,
    color: "#486581",
  },
});
