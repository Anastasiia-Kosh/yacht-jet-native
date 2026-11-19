import TripCard from "@/components/trip/TripCard";
import { trips } from "@/data/trips";
import { useWindowDimensions, View } from "react-native";
import Pagination from "./Pagination";

export default function TripStack() {
  const { width } = useWindowDimensions();

  const activeIndex = 0;
  const middleIndex = (activeIndex + 1) % trips.length;
  const backIndex = (activeIndex + 2) % trips.length;

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <View style={{ flex: 1, position: "relative" }}>
        <TripCard item={trips[backIndex]} position="back" width={width} />
        <TripCard item={trips[middleIndex]} position="middle" width={width} />
        <TripCard item={trips[activeIndex]} position="current" width={width} />
      </View>

      <Pagination total={trips.length} activeIndex={activeIndex} />
    </View>
  );
}
