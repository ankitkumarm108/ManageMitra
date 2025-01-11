import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import moment from "moment";

// Set locale to start the week on Monday
moment.updateLocale('en', {
  week: {
    dow: 1, // Monday is the first day of the week
  },
});

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
      if (current.month() === currentDate.month()) {
        dates.push(current.clone()); // Only push dates from the current month
      }
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
    const isToday = date.isSame(moment(), "day");

    return (
      <TouchableOpacity
        key={date.format("YYYY-MM-DD")}
        style={[
          styles.dateContainer,
          isSelected ? styles.selectedDate : {},
          !isCurrentMonth ? styles.otherMonthDate : {},
          isToday ? styles.todayDate : {}, // Style for today
        ]}
        onPress={() => setSelectedDate(date)}
      >
        <Text
          style={[
            styles.dateText,
            !isCurrentMonth ? styles.otherMonthText : {},
            isSelected ? styles.selectedText : {},
            isToday ? styles.todayText : {}, // Text style for today
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
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
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
  todayDate: {
    backgroundColor: "#ff6347", // Highlight today with a different color
  },
  todayText: {
    color: "#fff", // Today text color
    fontWeight: "bold",
  },
});

export default App;

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
// } from "react-native";
// import moment from "moment";

// const App = () => {
//   const [selectedDate, setSelectedDate] = useState(moment());
//   const [currentMonth, setCurrentMonth] = useState(moment());

//   // Generate days of the week (Monday to Sunday)
//   const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

//   // Get days for the current month
//   const generateCalendar = () => {
//     const startOfMonth = currentMonth.clone().startOf("month");
//     const endOfMonth = currentMonth.clone().endOf("month");
//     const startDate = startOfMonth.clone().startOf("week").add(1, "day"); // Ensure Monday starts the week
//     const endDate = endOfMonth.clone().endOf("week").add(1, "day");

//     const days = [];
//     let currentDay = startDate;

//     while (currentDay.isBefore(endDate)) {
//       days.push(currentDay.clone());
//       currentDay.add(1, "day");
//     }

//     return days;
//   };

//   const calendarDays = generateCalendar();

//   const handleDayPress = (day) => {
//     setSelectedDate(day);
//   };

//   const handlePrevMonth = () => {
//     setCurrentMonth(currentMonth.clone().subtract(1, "month"));
//   };

//   const handleNextMonth = () => {
//     setCurrentMonth(currentMonth.clone().add(1, "month"));
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={handlePrevMonth}>
//           <Text style={styles.navButton}>{"<"}</Text>
//         </TouchableOpacity>
//         <Text style={styles.headerText}>
//           {currentMonth.format("MMMM YYYY")}
//         </Text>
//         <TouchableOpacity onPress={handleNextMonth}>
//           <Text style={styles.navButton}>{">"}</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Days of the Week */}
//       <View style={styles.weekRow}>
//         {daysOfWeek.map((day, index) => (
//           <Text key={index} style={styles.weekDay}>
//             {day}
//           </Text>
//         ))}
//       </View>

//       {/* Calendar Days */}
//       <FlatList
//         data={calendarDays}
//         numColumns={7}
//         keyExtractor={(item) => item.format("YYYY-MM-DD")}
//         renderItem={({ item }) => {
//           const isCurrentMonth = item.isSame(currentMonth, "month");
//           const isSelected = item.isSame(selectedDate, "day");

//           return (
//             <TouchableOpacity
//               style={[
//                 styles.dayContainer,
//                 isSelected && styles.selectedDay,
//                 !isCurrentMonth && styles.otherMonthDay,
//               ]}
//               onPress={() => handleDayPress(item)}
//             >
//               <Text
//                 style={[
//                   styles.dayText,
//                   !isCurrentMonth && styles.otherMonthDayText,
//                 ]}
//               >
//                 {item.format("D")}
//               </Text>
//             </TouchableOpacity>
//           );
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     backgroundColor: "#fff",
//     flex: 1,
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 16,
//   },
//   headerText: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   navButton: {
//     fontSize: 18,
//     color: "#007BFF",
//   },
//   weekRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 8,
//   },
//   weekDay: {
//     flex: 1,
//     textAlign: "center",
//     fontWeight: "bold",
//     color: "#555",
//   },
//   dayContainer: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     margin: 2,
//     padding: 10,
//     borderRadius: 4,
//   },
//   selectedDay: {
//     backgroundColor: "#007BFF",
//   },
//   dayText: {
//     fontSize: 14,
//     color: "#000",
//   },
//   otherMonthDay: {
//     backgroundColor: "#f0f0f0",
//   },
//   otherMonthDayText: {
//     color: "#aaa",
//   },
// });

// export default App;
