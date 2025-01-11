import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import moment from 'moment';

const { width } = Dimensions.get('screen'); // Screen width

const App = ({ onDateChange, calendarWidth = width * 0.9 }) => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [selectedDate, setSelectedDate] = useState(null);

  const dayWidth = Math.floor(calendarWidth / 7); // Divide the width evenly among 7 days
  const startOfMonth = currentDate.clone().startOf('month');
  const endOfMonth = currentDate.clone().endOf('month');
  const daysInMonth = endOfMonth.date();
  const firstDayIndex = startOfMonth.day(); // Weekday index of the 1st day (0 for Sunday, 6 for Saturday)

  const handleDayPress = (day) => {
    const newSelectedDate = currentDate.clone().date(day);
    setSelectedDate(newSelectedDate);
    onDateChange?.(newSelectedDate); // Notify parent of the selected date
  };

  const handlePrevMonth = () => setCurrentDate(currentDate.clone().subtract(1, 'month'));
  const handleNextMonth = () => setCurrentDate(currentDate.clone().add(1, 'month'));

  // Build calendar array with placeholders
  const daysArray = Array.from({ length: firstDayIndex }, () => null) // Empty slots before the first day
    .concat(Array.from({ length: daysInMonth }, (_, i) => i + 1)) // Days of the current month
    .concat(
      Array.from({ length: 42 - (firstDayIndex + daysInMonth) }, () => null) // Fill up to 42 days (6 rows)
    );

  return (
    <View style={[styles.container, { width: calendarWidth }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePrevMonth}>
          <Text style={styles.navText}>❮</Text>
        </TouchableOpacity>
        <Text style={styles.monthText}>{currentDate.format('MMMM YYYY')}</Text>
        <TouchableOpacity onPress={handleNextMonth}>
          <Text style={styles.navText}>❯</Text>
        </TouchableOpacity>
      </View>

      {/* Weekdays */}
      <View style={styles.weekdays}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <Text key={day} style={[styles.weekdayText, { width: dayWidth }]}>
            {day}
          </Text>
        ))}
      </View>

      {/* Days */}
      <View style={styles.days}>
        {daysArray.map((day, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.day,
              { width: dayWidth, height: dayWidth },
              day &&
                selectedDate?.isSame(currentDate.clone().date(day), 'day') && styles.selectedDay,
            ]}
            onPress={() => day && handleDayPress(day)}
            disabled={!day} // Disable placeholders
          >
            <Text style={styles.dayText}>{day || ''}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  monthText: { fontSize: 18, fontWeight: 'bold' },
  navText: { fontSize: 18, fontWeight: 'bold' },
  weekdays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  weekdayText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  days: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  day: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 4, // Small gap between rows
  },
  dayText: { fontSize: 16, textAlign: 'center' },
  selectedDay: {
    backgroundColor: '#4CAF50',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
