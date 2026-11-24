import { StyleSheet, View } from "react-native";
import { Calendar, type CalendarProps } from "react-native-calendars";

type BookingCalendarProps = {
  value: string;
  onChange: (date: string) => void;
  duration: number;
};

export default function BookingCalendar({
  value,
  onChange,
  duration,
}: BookingCalendarProps) {
  const returnDate = value ? new Date(`${value}T12:00:00`) : null;

  if (returnDate) {
    returnDate.setDate(returnDate.getDate() + duration - 1);
  }

  const markedDates: NonNullable<CalendarProps["markedDates"]> = {};

  if (value && returnDate) {
    const departure = new Date(`${value}T12:00:00`);

    for (
      const date = new Date(departure);
      date <= returnDate;
      date.setDate(date.getDate() + 1)
    ) {
      const dateString = date.toISOString().split("T")[0];

      markedDates[dateString] = {
        color: "#D9E5EF",
        textColor: "#102A43",
      };
    }

    markedDates[value] = {
      startingDay: true,
      color: "#102A43",
      textColor: "#FFFFFF",
    };

    const returnDateString = returnDate.toISOString().split("T")[0];

    markedDates[returnDateString] = {
      endingDay: true,
      color: "#102A43",
      textColor: "#FFFFFF",
    };
  }

  const today = new Date();
  const maxDate = new Date(today);
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  const todayString = new Date().toISOString().split("T")[0];
  if (!value || !markedDates[todayString]) {
    markedDates[todayString] = {
      textColor: "#6fbbf9",
    };
  }

  return (
    <View>
      <Calendar
        style={styles.calendar}
        onDayPress={(day) => {
          onChange(day.dateString);
        }}
        markingType="period"
        markedDates={markedDates}
        minDate={new Date().toISOString().split("T")[0]}
        maxDate={maxDate.toISOString().split("T")[0]}
        theme={{
          backgroundColor: "#FFFFFF",
          calendarBackground: "#FFFFFF",
          textSectionTitleColor: "#102A43",
          monthTextColor: "#102A43",
          textDayFontFamily: "LoraRegular",
          textDayFontWeight: "400",
          textMonthFontFamily: "LoraRegular",
          textDayHeaderFontFamily: "LoraRegular",
          textDayFontSize: 15,
          textMonthFontSize: 18,
          textDayHeaderFontSize: 13,
          arrowColor: "#102A43",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  calendar: {
    borderRadius: 8,
    borderColor: "#102A43",
    borderWidth: 1,
  },
});
