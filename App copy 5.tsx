import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import moment from "moment";

const App = () => {
  const [currentDate, setCurrentDate] = useState(moment()); // Current month
  const [selectedDate, setSelectedDate] = useState(moment()); // Selected date

  // Generate dates for the calendar
  const generateCalendar = () => {
    const startOfMonth = currentDate.clone().startOf("month");
    const endOfMonth = currentDate.clone().endOf("month");

    const startDate = startOfMonth.clone().startOf("week"); // Start of the first week
    const endDate = endOfMonth.clone().endOf("week"); // End of the last week

    const dates = [];
    let current = startDate.clone();

    while (current.isBefore(endDate)) {
      dates.push(current.clone());
      current.add(1, "day");
    }

    return dates;
  };

  const dates = generateCalendar();

  // Month navigation handlers
  const goToPreviousMonth = () => {
    setCurrentDate((prev) => prev.clone().subtract(1, "month"));
  };

  const goToNextMonth = () => {
    setCurrentDate((prev) => prev.clone().add(1, "month"));
  };

  // Render individual date cells
  const renderDate = (date) => {
    const isCurrentMonth = date.isSame(currentDate, "month");
    const isSelected = date.isSame(selectedDate, "day");

    return (
      <TouchableOpacity
        key={date.format("YYYY-MM-DD")}
        style={[
          styles.dateContainer,
          isSelected ? styles.selectedDate : {},
          !isCurrentMonth ? styles.otherMonthDate : {},
        ]}
        onPress={() => setSelectedDate(date)}
      >
        <Text
          style={[
            styles.dateText,
            !isCurrentMonth ? styles.otherMonthText : {},
            isSelected ? styles.selectedText : {},
          ]}
        >
          {date.date()}
        </Text>
      </TouchableOpacity>
    );
  };

  // Organize dates into weeks
  const weeks = [];
  for (let i = 0; i < dates.length; i += 7) {
    weeks.push(dates.slice(i, i + 7));
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goToPreviousMonth}>
          <Text style={styles.navButton}>◀</Text>
        </TouchableOpacity>
        <Text style={styles.monthText}>{currentDate.format("MMMM YYYY")}</Text>
        <TouchableOpacity onPress={goToNextMonth}>
          <Text style={styles.navButton}>▶</Text>
        </TouchableOpacity>
      </View>

      {/* Weekdays */}
      <View style={styles.weekdays}>
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <Text key={day} style={styles.weekdayText}>
            {day}
          </Text>
        ))}
      </View>

      {/* Calendar Grid */}
      <FlatList
        data={weeks}
        renderItem={({ item: week }) => (
          <View style={styles.weekRow}>
            {week.map((date) => renderDate(date))}
          </View>
        )}
        keyExtractor={(item, index) => week-${index}}
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  monthText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  navButton: {
    fontSize: 18,
    color: "#007bff",
  },
  weekdays: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 8,
  },
  weekdayText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
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
  selectedText: {
    color: "#fff",
    fontWeight: "bold",
  },
  otherMonthDate: {
    backgroundColor: "#e0e0e0",
  },
  otherMonthText: {
    color: "#999",
  },
});

export default App;