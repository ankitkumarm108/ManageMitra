import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import moment from "moment";

const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(moment()); // Selected date

  // Generate dates for the current month
  const generateDates = () => {
    const startOfMonth = moment().startOf("month");
    const endOfMonth = moment().endOf("month");
    const startDate = startOfMonth.startOf("week"); // Start of the first week
    const endDate = endOfMonth.endOf("week"); // End of the last week

    const dates = [];
    let currentDate = startDate.clone();

    while (currentDate.isBefore(endDate)) {
      dates.push(currentDate.clone());
      currentDate.add(1, "day");
    }

    return dates;
  };

  const dates = generateDates();

  // Render individual date cells
  const renderDate = (date) => {
    const isSameDay = selectedDate.isSame(date, "day");
    const isSameWeekDay = selectedDate.day() === date.day();

    return (
      <TouchableOpacity
        key={date.format("YYYY-MM-DD")}
        style={[
          styles.dateContainer,
          isSameDay ? styles.selectedDate : {},
          isSameWeekDay ? styles.highlightWeekDay : {},
        ]}
        onPress={() => setSelectedDate(date)}
      >
        <Text style={styles.dateText}>{date.date()}</Text>
      </TouchableOpacity>
    );
  };

  // Render the week rows
  const renderWeek = ({ item: week }) => (
    <View style={styles.weekRow}>
      {week.map((date) => renderDate(date))}
    </View>
  );

  // Organize dates into weeks
  const weeks = [];
  for (let i = 0; i < dates.length; i += 7) {
    weeks.push(dates.slice(i, i + 7));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Custom Date Picker</Text>
      <FlatList
        data={weeks}
        renderItem={renderWeek}
        keyExtractor={(item, index) => `week-${index}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  weekRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 8,
  },
  dateContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
  },
  dateText: {
    fontSize: 16,
    color: "#333",
  },
  selectedDate: {
    backgroundColor: "#007bff",
  },
  highlightWeekDay: {
    borderColor: "#007bff",
    borderWidth: 2,
  },
});

export default CustomDatePicker;
