export type Coordinate = {
  latitude: number;
  longitude: number;
};

export default function buildRouteCoordinates(
  coordinates: Coordinate[],
  steps = 20,
): Coordinate[] {
  if (coordinates.length < 2) return coordinates;

  const result: Coordinate[] = [];

  for (let i = 0; i < coordinates.length - 1; i++) {
    const start = coordinates[i];
    const end = coordinates[i + 1];

    for (let step = 0; step < steps; step++) {
      const progress = step / steps;
      result.push({
        latitude: start.latitude + (end.latitude - start.latitude) * progress,
        longitude:
          start.longitude + (end.longitude - start.longitude) * progress,
      });
    }
  }
  result.push(coordinates[coordinates.length - 1]);
  return result;
}
