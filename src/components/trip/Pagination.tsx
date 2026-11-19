import { StyleSheet, View } from "react-native";

type PaginationProps = {
  total: number;
  activeIndex: number;
};

export default function Pagination({ total, activeIndex }: PaginationProps) {
  return (
    <View style={styles.pagination}>
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.paginationDot,
            activeIndex === index && styles.activeDot,
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D0D5DD",
  },
  activeDot: {
    width: 20,
    backgroundColor: "#102A43",
  },
});
