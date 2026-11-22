import type { ItineraryDay, TripItem } from "@/types/trip";
import type { RefObject } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import type { Coordinate } from "./buildRouteCoordinates";
import RouteMarker from "./RouteMarker";

type RouteMapProps = {
  itinerary: NonNullable<TripItem["itinerary"]>;
  coordinates: Coordinate[];
  visibleCoordinates: Coordinate[];
  markerPositions: number[];
  visibleCount: number;
  selectedDay: number;
  mapRef: RefObject<MapView | null>;
  onMarkerPress: (
    day: ItineraryDay,
    point: ItineraryDay["points"][number],
  ) => void;
};

export default function RouteMap({
  itinerary,
  coordinates,
  visibleCoordinates,
  markerPositions,
  visibleCount,
  selectedDay,
  mapRef,
  onMarkerPress,
}: RouteMapProps) {
  const startPointId = itinerary[0]?.points[0]?.id;
  const lastPoint = itinerary.at(-1)?.points.at(-1);

  const isReturnToStart =
    startPointId === lastPoint?.id ||
    (itinerary[0]?.points[0].latitude === lastPoint?.latitude &&
      itinerary[0]?.points[0].longitude === lastPoint?.longitude);

  return (
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
          coordinates={visibleCoordinates}
          strokeColor="#102A43"
          strokeWidth={2}
        />
      )}

      {itinerary.flatMap((day) =>
        day.points
          .filter((point) => !(isReturnToStart && point === lastPoint))
          .map((point) => {
            const isStart = point.id === startPointId;
            const isActive = selectedDay === day.day;

            const coordinateIndex = itinerary
              .flatMap((item) => item.points)
              .findIndex((item) => item.id === point.id);

            const markerIndex = markerPositions[coordinateIndex];
            const isVisible = visibleCount > markerIndex;

            return isVisible ? (
              <Marker
                key={point.id}
                coordinate={{
                  latitude: point.latitude,
                  longitude: point.longitude,
                }}
                title={isStart ? `${point.name} — Start` : point.name}
                description={point.description}
                onPress={() => onMarkerPress(day, point)}
                anchor={{ x: 0.5, y: 0.5 }}
              >
                <RouteMarker isStart={isStart} isActive={isActive} />
              </Marker>
            ) : null;
          }),
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: 350,
  },
});
