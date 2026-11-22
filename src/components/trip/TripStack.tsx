import TripCard from "@/components/trip/TripCard";
import { trips } from "@/data/trips";
import { useState } from "react";
import { useWindowDimensions, View } from "react-native";
import Pagination from "./Pagination";

export default function TripStack() {
  const { width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsHeight, setCardsHeight] = useState(0);

  const middleIndex = (activeIndex + 1) % trips.length;
  const backIndex = (activeIndex + 2) % trips.length;

  const indexChange = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % trips.length);
  };

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <View
        style={{ flex: 1, position: "relative" }}
        onLayout={(event) => {
          setCardsHeight(event.nativeEvent.layout.height);
        }}
      >
        <TripCard
          item={trips[backIndex]}
          position="back"
          width={width}
          height={cardsHeight}
          onSwipeComplete={indexChange}
          key={trips[backIndex].id}
        />
        <TripCard
          item={trips[middleIndex]}
          position="middle"
          width={width}
          height={cardsHeight}
          onSwipeComplete={indexChange}
          key={trips[middleIndex].id}
        />
        <TripCard
          item={trips[activeIndex]}
          position="current"
          width={width}
          height={cardsHeight}
          onSwipeComplete={indexChange}
          key={trips[activeIndex].id}
        />
      </View>
      <Pagination total={trips.length} activeIndex={activeIndex} />
    </View>
  );
}
