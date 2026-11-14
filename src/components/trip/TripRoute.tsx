import { activityIcons, activityLabels } from "@/data/icons";
import type { ItineraryDay, RouteActivity, TripItem } from "@/types/trip";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";

export default function TripRoute({
  itinerary,
}: {
  itinerary: TripItem["itinerary"];
}) {
  const mapRef = useRef<MapView | null>(null);
  const [selectedDay, setSelectedDay] = useState(1);
  const currentDay = itinerary?.find((day) => day.day === selectedDay);

  const dayActivities: RouteActivity[] = [
    ...new Set(currentDay?.points.flatMap((point) => point.activities) ?? []),
  ];

  const handleDayChange = (day: ItineraryDay, point = day.points[0]) => {
    setSelectedDay(day.day);

    if (point) {
      mapRef.current?.animateToRegion(
        {
          latitude: point.latitude,
          longitude: point.longitude,
          latitudeDelta: 0.15,
          longitudeDelta: 0.15,
        },
        800,
      );
    }
  };

  const coordinates =
    itinerary?.flatMap((day) =>
      day.points.map((point) => ({
        latitude: point.latitude,
        longitude: point.longitude,
      })),
    ) ?? [];

  return (
    <View style={styles.route}>
      <View style={styles.divider} />
      <Text style={styles.routeTitle}>Your journey, day by day</Text>
      <Text style={styles.routeDescription}>
        Follow the journey day by day and discover all the beautiful
        destinations along the way.
      </Text>
      <MapView
        ref={mapRef}
        style={styles.map}
        onMapReady={() => {
          if (coordinates.length > 0) {
            mapRef.current?.fitToCoordinates(coordinates, {
              edgePadding: {
                top: 40,
                right: 35,
                bottom: 40,
                left: 35,
              },
              animated: false,
            });
          }
        }}
      >
        {coordinates.length > 1 && (
          <Polyline
            coordinates={coordinates}
            strokeColor="#102A43"
            strokeWidth={2}
          />
        )}
        {itinerary?.flatMap((day) =>
          day.points
            .filter((point) => point.id !== "naples-return")
            .map((point) => {
              const isStartFinish = point.id === "naples";
              const isActive = isStartFinish
                ? selectedDay === 1 || selectedDay === 7
                : selectedDay === day.day;

              return (
                <Marker
                  key={point.id}
                  coordinate={{
                    latitude: point.latitude,
                    longitude: point.longitude,
                  }}
                  title={isStartFinish ? "Naples — Start & Finish" : point.name}
                  description={point.description}
                  onPress={() => {
                    const targetDay = isStartFinish
                      ? itinerary.find(
                          (item) => item.day === (selectedDay === 7 ? 7 : 1),
                        )
                      : day;

                    if (targetDay) handleDayChange(targetDay, point);
                  }}
                  anchor={{ x: 0.5, y: 0.5 }}
                >
                  <View
                    style={[
                      styles.marker,
                      isActive && styles.markerActive,
                      isStartFinish && styles.markerStartFinish,
                    ]}
                  >
                    <MaterialCommunityIcons
                      name="sail-boat"
                      size={isActive ? 23 : 19}
                      color={
                        isStartFinish
                          ? "#FFFFFF"
                          : isActive
                            ? "#FFFFFF"
                            : "#102A43"
                      }
                    />
                  </View>
                </Marker>
              );
            }),
        )}
      </MapView>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.daysContainer}
      >
        {itinerary?.map((day) => (
          <Pressable
            key={day.day}
            style={[
              styles.dayButton,
              selectedDay === day.day && styles.activeDayButton,
            ]}
            onPress={() => handleDayChange(day)}
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
      {currentDay && (
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
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  route: {
    paddingTop: 24,
    paddingHorizontal: 20,
  },
  divider: {
    height: 1,
    backgroundColor: "#D9E2EC",
    marginBottom: 24,
  },
  routeTitle: {
    fontFamily: "LoraSemiBoldItalic",
    fontSize: 22,
    color: "#102A43",
    marginBottom: 12,
  },
  routeDescription: {
    fontFamily: "LoraRegular",
    fontSize: 15,
    lineHeight: 24,
    color: "#627D98",
    marginBottom: 12,
  },
  map: {
    width: "100%",
    height: 350,
  },
  marker: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#83AFC0",
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  markerActive: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#102A43",
    borderColor: "#FFFFFF",
    borderWidth: 2,
  },
  markerStartFinish: {
    backgroundColor: "#D9A441",
    borderColor: "#FFFFFF",
    borderWidth: 2,
  },
  daysContainer: {
    gap: 10,
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
