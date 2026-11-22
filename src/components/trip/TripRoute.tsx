import buildRouteCoordinates from "@/components/map/buildRouteCoordinates";
import RouteDayCard from "@/components/map/RouteDayCard";
import RouteDays from "@/components/map/RouteDays";
import RouteMap from "@/components/map/RouteMap";
import type { ItineraryDay, TripItem } from "@/types/trip";
import { useEffect, useMemo, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import {
  SharedValue,
  useAnimatedReaction,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";
import ScrollSection from "../common/ScrollSection";

type TripRouteProps = {
  itinerary: TripItem["itinerary"];
  scrollY: SharedValue<number>;
};

export default function TripRoute({ itinerary, scrollY }: TripRouteProps) {
  const mapRef = useRef<MapView | null>(null);
  const [selectedDay, setSelectedDay] = useState(1);
  const [visibleCount, setVisibleCount] = useState(1);
  const progress = useSharedValue(1);

  const currentDay = itinerary?.find((day) => day.day === selectedDay);

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

  const coordinates = useMemo(
    () =>
      itinerary?.flatMap((day) =>
        day.points.map((point) => ({
          latitude: point.latitude,
          longitude: point.longitude,
        })),
      ) ?? [],
    [itinerary],
  );

  const routeCoordinates = useMemo(
    () => buildRouteCoordinates(coordinates),
    [coordinates],
  );

  const visibleCoordinates = useMemo(
    () => routeCoordinates.slice(0, visibleCount),
    [routeCoordinates, visibleCount],
  );

  const markerPositions = useMemo(
    () =>
      coordinates.map((_, index) =>
        index === coordinates.length - 1
          ? routeCoordinates.length - 1
          : index * 20,
      ),
    [coordinates, routeCoordinates],
  );

  useEffect(() => {
    if (routeCoordinates.length < 2) return;

    setVisibleCount(1);
    progress.value = 1;
    progress.value = withTiming(routeCoordinates.length, {
      duration: 5000,
    });
  }, [routeCoordinates]);

  useAnimatedReaction(
    () => Math.floor(progress.value),
    (currentCount, previousCount) => {
      if (currentCount !== previousCount) {
        scheduleOnRN(setVisibleCount, currentCount);
      }
    },
  );

  return (
    <View style={styles.route}>
      <View style={styles.divider} />
      <ScrollSection scrollY={scrollY} direction="right">
        <Text style={styles.routeTitle}>Your journey, day by day</Text>
      </ScrollSection>
      <Text style={styles.routeDescription}>
        Follow the journey day by day and discover all the beautiful
        destinations along the way.
      </Text>
      {itinerary && (
        <RouteMap
          mapRef={mapRef}
          itinerary={itinerary}
          coordinates={coordinates}
          visibleCoordinates={visibleCoordinates}
          markerPositions={markerPositions}
          visibleCount={visibleCount}
          selectedDay={selectedDay}
          onMarkerPress={handleDayChange}
        />
      )}
      <RouteDays
        itinerary={itinerary ?? []}
        selectedDay={selectedDay}
        onDayChange={handleDayChange}
      />
      {currentDay && <RouteDayCard currentDay={currentDay} />}
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
});
