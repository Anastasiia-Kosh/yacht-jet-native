import ScrollSection from "@/components/common/ScrollSection";
import BookingButton from "@/components/button/BookingButton";
import TripAbout from "@/components/trip/TripAbout";
import TripAction from "@/components/trip/TripAction";
import TripDetails from "@/components/trip/TripDetails";
import TripGallery from "@/components/trip/TripGallery";
import TripHero from "@/components/trip/TripHero";
import TripReviews from "@/components/trip/TripReviews";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import EmptyState from "../../components/common/EmptyState";
import { trips } from "../../data/trips";

export default function Trip() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const trip = trips.find((trip) => trip.id === id);

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  if (!trip) {
    return (
      <EmptyState
        title={"Trip not found"}
        link={"/trips"}
        nameIcon={"arrow-back-circle-outline"}
        button={"Choose another trip"}
      />
    );
  }

  return (
    <Animated.ScrollView
      onScroll={scrollHandler}
      style={styles.background}
      contentContainerStyle={{
        paddingBottom: insets.bottom + 24,
        paddingTop: insets.top + 20,
      }}
      showsVerticalScrollIndicator={false}
    >
      <TripHero image={trip.img} tripId={trip.id} />
      <TripDetails trip={trip} />
      <BookingButton tripId={trip.id} />
      <ScrollSection scrollY={scrollY} direction="left">
        <TripAbout description={trip.description} image={trip.imgDescr} />
      </ScrollSection>
      {/* <ScrollSection scrollY={scrollY} direction="right">
        <TripRoute itinerary={trip.itinerary} />
      </ScrollSection> */}
      <ScrollSection scrollY={scrollY} direction="left">
        <TripGallery trip={trip} />
      </ScrollSection>
      <ScrollSection scrollY={scrollY} direction="right">
        <TripReviews trip={trip} />
      </ScrollSection>
      <TripAction />
      <BookingButton tripId={trip.id} />
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#ECF8FF",
  },
});
