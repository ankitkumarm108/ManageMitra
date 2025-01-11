// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
// import moment from "moment";

// // Set locale to start the week on Monday
// moment.updateLocale('en', {
//   week: {
//     dow: 1, // Monday is the first day of the week
//   },
// });

// const ReviewSetting = () => {
//   const [currentDate, setCurrentDate] = useState(moment()); // Current month
//   const [selectedDate, setSelectedDate] = useState(moment()); // Selected date

//   // Generate dates for the calendar
//   const generateCalendar = () => {
//     const startOfMonth = currentDate.clone().startOf("month");
//     const endOfMonth = currentDate.clone().endOf("month");

//     const startDate = startOfMonth.clone().startOf("week"); // Start of the first week
//     const endDate = endOfMonth.clone().endOf("week"); // End of the last week

//     const dates = [];
//     let current = startDate.clone();

//     while (current.isBefore(endDate)) {
//       if (current.month() === currentDate.month()) {
//         dates.push(current.clone()); // Only push dates from the current month
//       }
//       current.add(1, "day");
//     }

//     return dates;
//   };

//   const dates = generateCalendar();

//   // Month navigation handlers
//   const goToPreviousMonth = () => {
//     setCurrentDate((prev) => prev.clone().subtract(1, "month"));
//   };

//   const goToNextMonth = () => {
//     setCurrentDate((prev) => prev.clone().add(1, "month"));
//   };

//   // Render individual date cells
//   const renderDate = (date) => {
//     const isCurrentMonth = date.isSame(currentDate, "month");
//     const isSelected = date.isSame(selectedDate, "day");
//     const isToday = date.isSame(moment(), "day");

//     return (
//       <TouchableOpacity
//         key={date.format("YYYY-MM-DD")}
//         style={[
//           styles.dateContainer,
//           isSelected ? styles.selectedDate : {},
//           !isCurrentMonth ? styles.otherMonthDate : {},
//           isToday ? styles.todayDate : {}, // Style for today
//         ]}
//         onPress={() => setSelectedDate(date)}
//       >
//         <Text
//           style={[
//             styles.dateText,
//             !isCurrentMonth ? styles.otherMonthText : {},
//             isSelected ? styles.selectedText : {},
//             isToday ? styles.todayText : {}, // Text style for today
//           ]}
//         >
//           {date.date()}
//         </Text>
//       </TouchableOpacity>
//     );
//   };

//   // Organize dates into weeks
//   const weeks = [];
//   for (let i = 0; i < dates.length; i += 7) {
//     weeks.push(dates.slice(i, i + 7));
//   }
//   console.log("this is weeks",weeks)

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={goToPreviousMonth}>
//           <Text style={styles.navButton}>◀</Text>
//         </TouchableOpacity>
//         <Text style={styles.monthText}>{currentDate.format("MMMM YYYY")}</Text>
//         <TouchableOpacity onPress={goToNextMonth}>
//           <Text style={styles.navButton}>▶</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Weekdays */}
//       <View style={styles.weekdays}>
//         {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
//           <Text key={day} style={styles.weekdayText}>
//             {day}
//           </Text>
//         ))}
//       </View>

//       {/* Calendar Grid */}
//       <FlatList
//         data={weeks}
//         renderItem={({ item: week }) => (
//           <View style={styles.weekRow}>
//             {week.map((date) => renderDate(date))}
//           </View>
//         )}
//         keyExtractor={(item, index) => `week-${index}`}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#fff",
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 16,
//   },
//   monthText: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   navButton: {
//     fontSize: 18,
//     color: "#007bff",
//   },
//   weekdays: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginBottom: 8,
//   },
//   weekdayText: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   weekRow: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginBottom: 8,
//   },
//   dateContainer: {
//     width: 40,
//     height: 40,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 20,
//     backgroundColor: "#f0f0f0",
//   },
//   dateText: {
//     fontSize: 16,
//     color: "#333",
//   },
//   selectedDate: {
//     backgroundColor: "#007bff",
//   },
//   selectedText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   otherMonthDate: {
//     backgroundColor: "#e0e0e0",
//   },
//   otherMonthText: {
//     color: "#999",
//   },
//   todayDate: {
//     backgroundColor: "#ff6347", // Highlight today with a different color
//   },
//   todayText: {
//     color: "#fff", // Today text color
//     fontWeight: "bold",
//   },
// });

// export default ReviewSetting

// import React, { useState } from "react"; 
// import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native"; 
// import moment from "moment"; 

// // Set locale to start the week on Wednesday
// moment.updateLocale('en', {   
//   week: {     
//     dow: 3, // Wednesday is the first day of the week   
//   }, 
// });  

// const ReviewSetting = () => {   
//   const [currentDate, setCurrentDate] = useState(moment()); // Current month   
//   const [selectedDate, setSelectedDate] = useState(moment()); // Selected date    

//   // Generate dates for the calendar   
//   const generateCalendar = () => {     
//     const startOfMonth = currentDate.clone().startOf("month");     
//     const endOfMonth = currentDate.clone().endOf("month");      
//     const startDate = startOfMonth.clone().startOf("week"); // Start of the first week     
//     const endDate = endOfMonth.clone().endOf("week"); // End of the last week      

//     const dates = [];     
//     let current = startDate.clone();      

//     while (current.isBefore(endDate)) {       
//       if (current.month() === currentDate.month()) {         
//         dates.push(current.clone()); // Only push dates from the current month       
//       }       
//       current.add(1, "day");     
//     }      

//     return dates;   
//   };    

//   const dates = generateCalendar();    

//   // Month navigation handlers   
//   const goToPreviousMonth = () => {     
//     setCurrentDate((prev) => prev.clone().subtract(1, "month"));   
//   };    

//   const goToNextMonth = () => {     
//     setCurrentDate((prev) => prev.clone().add(1, "month"));   
//   };    

//   // Render individual date cells   
//   const renderDate = (date) => {     
//     const isCurrentMonth = date.isSame(currentDate, "month");     
//     const isSelected = date.isSame(selectedDate, "day");     
//     const isToday = date.isSame(moment(), "day");      

//     return (       
//       <TouchableOpacity         
//         key={date.format("YYYY-MM-DD")}         
//         style={[           
//           styles.dateContainer,           
//           isSelected ? styles.selectedDate : {},           
//           !isCurrentMonth ? styles.otherMonthDate : {},           
//           isToday ? styles.todayDate : {}, // Style for today         
//         ]}         
//         onPress={() => setSelectedDate(date)}       
//       >         
//         <Text           
//           style={[             
//             styles.dateText,             
//             !isCurrentMonth ? styles.otherMonthText : {},             
//             isSelected ? styles.selectedText : {},             
//             isToday ? styles.todayText : {}, // Text style for today           
//           ]}         
//         >           
//           {date.date()}         
//         </Text>       
//       </TouchableOpacity>     
//     );   
//   };    

//   // Organize dates into weeks   
//   const weeks = [];   
//   for (let i = 0; i < dates.length; i += 7) {     
//     weeks.push(dates.slice(i, i + 7));   
//   }   

//   return (     
//     <View style={styles.container}>       
//       {/* Header */}       
//       <View style={styles.header}>         
//         <TouchableOpacity onPress={goToPreviousMonth}>           
//           <Text style={styles.navButton}>◀</Text>         
//         </TouchableOpacity>         
//         <Text style={styles.monthText}>{currentDate.format("MMMM YYYY")}</Text>         
//         <TouchableOpacity onPress={goToNextMonth}>           
//           <Text style={styles.navButton}>▶</Text>         
//         </TouchableOpacity>       
//       </View>        

//       {/* Weekdays */}       
//       <View style={styles.weekdays}>         
//         {["Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue"].map((day) => (           
//           <Text key={day} style={styles.weekdayText}>             
//             {day}           
//           </Text>         
//         ))}       
//       </View>        

//       {/* Calendar Grid */}       
//       <FlatList         
//         data={weeks}         
//         renderItem={({ item: week }) => (           
//           <View style={styles.weekRow}>             
//             {week.map((date) => renderDate(date))}           
//           </View>         
//         )}         
//         keyExtractor={(item, index) => `week-${index}`}       
//       />     
//     </View>   
//   ); 
// };

// const styles = StyleSheet.create({   
//   container: {     
//     flex: 1,     
//     padding: 16,     
//     backgroundColor: "#fff",   
//   },   
//   header: {     
//     flexDirection: "row",     
//     justifyContent: "space-between",     
//     alignItems: "center",     
//     marginBottom: 16,   
//   },   
//   monthText: {     
//     fontSize: 18,     
//     fontWeight: "bold",   
//   },   
//   navButton: {     
//     fontSize: 18,     
//     color: "#007bff",   
//   },   
//   weekdays: {     
//     flexDirection: "row",     
//     justifyContent: "space-around",     
//     marginBottom: 8,   
//   },   
//   weekdayText: {     
//     fontSize: 16,     
//     fontWeight: "bold",     
//     color: "#333",   
//   },   
//   weekRow: {     
//     flexDirection: "row",     
//     justifyContent: "space-around",     
//     marginBottom: 8,   
//   },   
//   dateContainer: {     
//     width: 40,     
//     height: 40,     
//     justifyContent: "center",     
//     alignItems: "center",     
//     borderRadius: 20,     
//     backgroundColor: "#f0f0f0",   
//   },   
//   dateText: {     
//     fontSize: 16,     
//     color: "#333",   
//   },   
//   selectedDate: {     
//     backgroundColor: "#007bff",   
//   },   
//   selectedText: {     
//     color: "#fff",     
//     fontWeight: "bold",   
//   },   
//   otherMonthDate: {     
//     backgroundColor: "#e0e0e0",   
//   },   
//   otherMonthText: {     
//     color: "#999",   
//   },   
//   todayDate: {     
//     backgroundColor: "#ff6347", // Highlight today with a different color   
//   },   
//   todayText: {     
//     color: "#fff", // Today text color     
//     fontWeight: "bold",   
//   }, 
// });  

// export default ReviewSetting;

// import React, { useState } from "react"; 
// import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native"; 
// import moment from "moment"; 

// // Set locale to start the week on Wednesday
// moment.updateLocale('en', {   
//   week: {     
//     dow: 3, // Wednesday is the first day of the week   
//   }, 
// });  

// const ReviewSetting = () => {   
//   const [currentDate, setCurrentDate] = useState(moment()); // Current month   
//   const [selectedDate, setSelectedDate] = useState(moment()); // Selected date    

//   // Generate dates for the calendar   
//   const generateCalendar = () => {     
//     const startOfMonth = currentDate.clone().startOf("month");     
//     const endOfMonth = currentDate.clone().endOf("month");      

//     // Align the start of the calendar to Wednesday
//     const startDate = startOfMonth.clone().startOf("week"); // Start of the first week    
//     const endDate = endOfMonth.clone().endOf("week"); // End of the last week      

//     const dates = [];     
//     let current = startDate.clone();      

//     while (current.isBefore(endDate)) {       
//       if (current.month() === currentDate.month()) {         
//         dates.push(current.clone()); // Only push dates from the current month       
//       }       
//       current.add(1, "day");     
//     }      

//     return dates;   
//   };    

//   const dates = generateCalendar();    

//   // Month navigation handlers   
//   const goToPreviousMonth = () => {     
//     setCurrentDate((prev) => prev.clone().subtract(1, "month"));   
//   };    

//   const goToNextMonth = () => {     
//     setCurrentDate((prev) => prev.clone().add(1, "month"));   
//   };    

//   // Render individual date cells   
//   const renderDate = (date) => {     
//     const isCurrentMonth = date.isSame(currentDate, "month");     
//     const isSelected = date.isSame(selectedDate, "day");     
//     const isToday = date.isSame(moment(), "day");      

//     return (       
//       <TouchableOpacity         
//         key={date.format("YYYY-MM-DD")}         
//         style={[           
//           styles.dateContainer,           
//           isSelected ? styles.selectedDate : {},           
//           !isCurrentMonth ? styles.otherMonthDate : {},           
//           isToday ? styles.todayDate : {}, // Style for today         
//         ]}         
//         onPress={() => setSelectedDate(date)}       
//       >         
//         <Text           
//           style={[             
//             styles.dateText,             
//             !isCurrentMonth ? styles.otherMonthText : {},             
//             isSelected ? styles.selectedText : {},             
//             isToday ? styles.todayText : {}, // Text style for today           
//           ]}         
//         >           
//           {date.date()}         
//         </Text>       
//       </TouchableOpacity>     
//     );   
//   };    

//   // Organize dates into weeks   
//   const weeks = [];   
//   for (let i = 0; i < dates.length; i += 7) {     
//     weeks.push(dates.slice(i, i + 7));   
//   }   

//   return (     
//     <View style={styles.container}>       
//       {/* Header */}       
//       <View style={styles.header}>         
//         <TouchableOpacity onPress={goToPreviousMonth}>           
//           <Text style={styles.navButton}>◀</Text>         
//         </TouchableOpacity>         
//         <Text style={styles.monthText}>{currentDate.format("MMMM YYYY")}</Text>         
//         <TouchableOpacity onPress={goToNextMonth}>           
//           <Text style={styles.navButton}>▶</Text>         
//         </TouchableOpacity>       
//       </View>        

//       {/* Weekdays header */}       
//       <View style={styles.weekdays}>         
//         {["Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue"].map((day) => (           
//           <Text key={day} style={styles.weekdayText}>             
//             {day}           
//           </Text>         
//         ))}       
//       </View>        

//       {/* Calendar Grid */}       
//       <FlatList         
//         data={weeks}         
//         renderItem={({ item: week }) => (           
//           <View style={styles.weekRow}>             
//             {week.map((date) => renderDate(date))}           
//           </View>         
//         )}         
//         keyExtractor={(item, index) => `week-${index}`}       
//       />     
//     </View>   
//   ); 
// };

// const styles = StyleSheet.create({   
//   container: {     
//     flex: 1,     
//     padding: 16,     
//     backgroundColor: "#fff",   
//   },   
//   header: {     
//     flexDirection: "row",     
//     justifyContent: "space-between",     
//     alignItems: "center",     
//     marginBottom: 16,   
//   },   
//   monthText: {     
//     fontSize: 18,     
//     fontWeight: "bold",   
//   },   
//   navButton: {     
//     fontSize: 18,     
//     color: "#007bff",   
//   },   
//   weekdays: {     
//     flexDirection: "row",     
//     justifyContent: "space-around",     
//     marginBottom: 8,   
//   },   
//   weekdayText: {     
//     fontSize: 16,     
//     fontWeight: "bold",     
//     color: "#333",   
//   },   
//   weekRow: {     
//     flexDirection: "row",     
//     justifyContent: "space-around",     
//     marginBottom: 8,   
//   },   
//   dateContainer: {     
//     width: 40,     
//     height: 40,     
//     justifyContent: "center",     
//     alignItems: "center",     
//     borderRadius: 20,     
//     backgroundColor: "#f0f0f0",   
//   },   
//   dateText: {     
//     fontSize: 16,     
//     color: "#333",   
//   },   
//   selectedDate: {     
//     backgroundColor: "#007bff",   
//   },   
//   selectedText: {     
//     color: "#fff",     
//     fontWeight: "bold",   
//   },   
//   otherMonthDate: {     
//     backgroundColor: "#e0e0e0",   
//   },   
//   otherMonthText: {     
//     color: "#999",   
//   },   
//   todayDate: {     
//     backgroundColor: "#ff6347", // Highlight today with a different color   
//   },   
//   todayText: {     
//     color: "#fff", // Today text color     
//     fontWeight: "bold",   
//   }, 
// });  

// export default ReviewSetting;

// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

// const ReviewSetting = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [showPicker, setShowPicker] = useState(false);

//   const startDate = new Date();
//   const endDate = new Date(2025, 2, 23); // 23 March 2025 (Note: Month is zero-based)

//   const generateDateArray = (start, end) => {
//     const dates = [];
//     let currentDate = new Date(start);
//     while (currentDate <= end) {
//       dates.push(new Date(currentDate));
//       currentDate.setDate(currentDate.getDate() + 1);
//     }
//     return dates;
//   };

//   const dateArray = generateDateArray(startDate, endDate);

//   const handleDateSelect = (date) => {
//     setSelectedDate(date);
//     setShowPicker(false);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={styles.dateDisplay}
//         onPress={() => setShowPicker(!showPicker)}
//       >
//         <Text style={styles.dateText}>
//           {selectedDate.toDateString()}
//         </Text>
//       </TouchableOpacity>

//       {showPicker && (
//         <View style={styles.pickerContainer}>
//           <FlatList
//             data={dateArray}
//             keyExtractor={(item, index) => index.toString()}
//             renderItem={({ item }) => (
//               <TouchableOpacity
//                 style={[
//                   styles.dateItem,
//                   selectedDate.toDateString() === item.toDateString()
//                     ? styles.selectedDate
//                     : null,
//                 ]}
//                 onPress={() => handleDateSelect(item)}
//               >
//                 <Text style={styles.dateItemText}>{item.toDateString()}</Text>
//               </TouchableOpacity>
//             )}
//           />
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   dateDisplay: {
//     padding: 15,
//     backgroundColor: '#007AFF',
//     borderRadius: 5,
//   },
//   dateText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//   },
//   pickerContainer: {
//     marginTop: 20,
//     height: 300,
//     width: '90%',
//     backgroundColor: '#F5F5F5',
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#DDD',
//     padding: 10,
//   },
//   dateItem: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#EEE',
//   },
//   selectedDate: {
//     backgroundColor: '#007AFF',
//   },
//   dateItemText: {
//     color: '#333',
//     fontSize: 14,
//   },
// });

// export default ReviewSetting;

// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

// const ReviewSetting = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   const startDate = new Date(); // Current day
//   const endDate = new Date(2025, 2, 23); // 23 March 2025 (Month is zero-based)

//   const generateCalendarData = (start, end) => {
//     const dates = [];
//     let currentDate = new Date(start);
//     while (currentDate <= end) {
//       dates.push(new Date(currentDate));
//       currentDate.setDate(currentDate.getDate() + 1);
//     }
//     return dates;
//   };

//   const calendarData = generateCalendarData(startDate, endDate);

//   const getCalendarGrid = (dates) => {
//     const weeks = [];
//     let week = Array(7).fill(null); // Initialize empty week

//     dates.forEach((date) => {
//       const dayOfWeek = date.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6
//       week[dayOfWeek] = date;

//       if (dayOfWeek === 6) {
//         weeks.push(week);
//         week = Array(7).fill(null); // Reset for the next week
//       }
//     });

//     if (week.some((day) => day !== null)) {
//       weeks.push(week); // Add the last week if it has dates
//     }

//     return weeks;
//   };

//   const calendarGrid = getCalendarGrid(calendarData);

//   const handleDateSelect = (date) => {
//     if (date) setSelectedDate(date);
//   };

//   const renderCalendarRow = (week, index) => (
//     <View key={index} style={styles.calendarRow}>
//       {week.map((day, idx) => (
//         <TouchableOpacity
//           key={idx}
//           style={[
//             styles.calendarCell,
//             day && selectedDate.toDateString() === day.toDateString()
//               ? styles.selectedDate
//               : null,
//           ]}
//           onPress={() => handleDateSelect(day)}
//         >
//           <Text style={day ? styles.dateText : styles.emptyCellText}>
//             {day ? day.getDate() : ''}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.headerText}>
//         Selected Date: {selectedDate.toDateString()}
//       </Text>
//       <View style={styles.calendarContainer}>
//         <View style={styles.dayRow}>
//           {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, idx) => (
//             <Text key={idx} style={styles.dayHeader}>
//               {day}
//             </Text>
//           ))}
//         </View>
//         {calendarGrid.map(renderCalendarRow)}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 10,
//     backgroundColor: '#F5F5F5',
//   },
//   headerText: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   calendarContainer: {
//     borderWidth: 1,
//     borderColor: '#DDD',
//     borderRadius: 10,
//     padding: 5,
//     backgroundColor: '#FFF',
//   },
//   dayRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 5,
//   },
//   dayHeader: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     width: 40,
//   },
//   calendarRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//   },
//   calendarCell: {
//     width: 40,
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#DDD',
//     margin: 2,
//     borderRadius: 5,
//   },
//   selectedDate: {
//     backgroundColor: '#007AFF',
//   },
//   dateText: {
//     fontSize: 14,
//     color: '#333',
//   },
//   emptyCellText: {
//     color: 'transparent',
//   },
// });

// export default ReviewSetting;

// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

// const ReviewSetting = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   // Define the start and end range
//   const startMonth = new Date(2025, 0, 1); // January 2025
//   const endMonth = new Date(2025, 2, 31); // March 2025

//   const generateMonthData = (month, year) => {
//     const firstDay = new Date(year, month, 1); // First day of the month
//     const lastDay = new Date(year, month + 1, 0); // Last day of the month

//     // Get days of the week for alignment
//     const daysBefore = Array(firstDay.getDay()).fill(null);
//     const daysAfter = Array(6 - lastDay.getDay()).fill(null);

//     // Generate all days of the month
//     const days = [];
//     for (let i = 1; i <= lastDay.getDate(); i++) {
//       days.push(new Date(year, month, i));
//     }

//     // Combine to create a full week-aligned month
//     return [...daysBefore, ...days, ...daysAfter];
//   };

//   const renderMonth = (month, year) => {
//     const monthData = generateMonthData(month, year);
//     const monthName = new Date(year, month).toLocaleString("default", {
//       month: "long",
//     });

//     return (
//       <View key={`${month}-${year}`} style={styles.monthContainer}>
//         <Text style={styles.monthHeader}>{monthName} {year}</Text>
//         <View style={styles.dayRow}>
//           {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, idx) => (
//             <Text key={idx} style={styles.dayHeader}>
//               {day}
//             </Text>
//           ))}
//         </View>
//         <View style={styles.calendarGrid}>
//           {monthData.map((date, index) => (
//             <TouchableOpacity
//               key={index}
//               style={[
//                 styles.calendarCell,
//                 date &&
//                 selectedDate.toDateString() === date.toDateString()
//                   ? styles.selectedDate
//                   : null,
//               ]}
//               onPress={() => date && setSelectedDate(date)}
//             >
//               <Text style={date ? styles.dateText : styles.emptyCellText}>
//                 {date ? date.getDate() : ""}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//     <ScrollView>
//       <Text style={styles.headerText}>
//         Selected Date: {selectedDate.toDateString()}
//       </Text>
//       <View>
//         {/* Render months from January 2025 to March 2025 */}
//         {Array.from({ length: 3 }, (_, index) =>
//           renderMonth(index, 2025)
//         )}
//       </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: "#F5F5F5",
//   },
//   headerText: {
//     fontSize: 16,
//     textAlign: "center",
//     marginVertical: 10,
//   },
//   monthContainer: {
//     marginBottom: 20,
//     backgroundColor: "#FFF",
//     borderRadius: 10,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: "#DDD",
//   },
//   monthHeader: {
//     fontSize: 18,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 10,
//   },
//   dayRow: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginBottom: 5,
//   },
//   dayHeader: {
//     fontSize: 14,
//     fontWeight: "bold",
//     textAlign: "center",
//     width: 40,
//   },
//   calendarGrid: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "center",
//   },
//   calendarCell: {
//     width: 40,
//     height: 40,
//     justifyContent: "center",
//     alignItems: "center",
//     margin: 2,
//     borderWidth: 1,
//     borderColor: "#DDD",
//     borderRadius: 5,
//   },
//   selectedDate: {
//     backgroundColor: "#007AFF",
//   },
//   dateText: {
//     fontSize: 14,
//     color: "#333",
//   },
//   emptyCellText: {
//     color: "transparent",
//   },
// });

// export default ReviewSetting;

// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// const ReviewSetting = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   // Define the start and end range
//   const startMonth = new Date(2025, 0, 1); // January 2025
//   const endMonth = new Date(2025, 2, 31); // March 2025

//   const generateMonthData = (month, year) => {
//     const firstDay = new Date(year, month, 1); // First day of the month
//     const lastDay = new Date(year, month + 1, 0); // Last day of the month

//     // Get days of the week for alignment
//     const daysBefore = Array(firstDay.getDay()).fill(null);
//     const daysAfter = Array(6 - lastDay.getDay()).fill(null);

//     // Generate all days of the month
//     const days = [];
//     for (let i = 1; i <= lastDay.getDate(); i++) {
//       days.push(new Date(year, month, i));
//     }

//     // Combine to create a full week-aligned month
//     const allDays = [...daysBefore, ...days, ...daysAfter];

//     // Ensure we have exactly 6 rows (42 cells total)
//     while (allDays.length < 42) {
//       allDays.push(null); // Fill remaining cells with null
//     }

//     return allDays;
//   };

//   const renderMonth = (month, year) => {
//     const monthData = generateMonthData(month, year);
//     const monthName = new Date(year, month).toLocaleString("default", {
//       month: "long",
//     });

//     return (
//       <View key={`${month}-${year}`} style={styles.monthContainer}>
//         <Text style={styles.monthHeader}>{monthName} {year}</Text>
//         <View style={styles.dayRow}>
//           {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, idx) => (
//             <Text key={idx} style={styles.dayHeader}>
//               {day}
//             </Text>
//           ))}
//         </View>
//         <View style={styles.calendarGrid}>
//           {monthData.map((date, index) => (
//             <TouchableOpacity
//               key={index}
//               style={[
//                 styles.calendarCell,
//                 date &&
//                 selectedDate.toDateString() === date.toDateString()
//                   ? styles.selectedDate
//                   : null,
//               ]}
//               onPress={() => date && setSelectedDate(date)}
//             >
//               <Text style={date ? styles.dateText : styles.emptyCellText}>
//                 {date ? date.getDate() : ""}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.headerText}>
//         Selected Date: {selectedDate.toDateString()}
//       </Text>
//       <View>
//         {/* Render months from January 2025 to March 2025 */}
//         {Array.from({ length: 3 }, (_, index) =>
//           renderMonth(index, 2025)
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: "#F5F5F5",
//   },
//   headerText: {
//     fontSize: 16,
//     textAlign: "center",
//     marginVertical: 10,
//   },
//   monthContainer: {
//     marginBottom: 20,
//     backgroundColor: "#FFF",
//     borderRadius: 10,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: "#DDD",
//   },
//   monthHeader: {
//     fontSize: 18,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 10,
//   },
//   dayRow: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginBottom: 5,
//   },
//   dayHeader: {
//     fontSize: 14,
//     fontWeight: "bold",
//     textAlign: "center",
//     width: 40,
//   },
//   calendarGrid: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "center",
//   },
//   calendarCell: {
//     width: 40,
//     height: 40,
//     justifyContent: "center",
//     alignItems: "center",
//     margin: 2,
//     borderWidth: 1,
//     borderColor: "#DDD",
//     borderRadius: 5,
//   },
//   selectedDate: {
//     backgroundColor: "#007AFF",
//   },
//   dateText: {
//     fontSize: 14,
//     color: "#333",
//   },
//   emptyCellText: {
//     color: "transparent",
//   },
// });

// export default ReviewSetting;

// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// const ReviewSetting = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   // Define the range: January to March 2025
//   const startMonth = new Date(2025, 0, 1); // January 2025
//   const endMonth = new Date(2025, 2, 31); // March 2025

//   const generateMonthData = (month, year) => {
//     const firstDay = new Date(year, month, 1); // First day of the month
//     const lastDay = new Date(year, month + 1, 0); // Last day of the month

//     // Calculate padding for the first and last weeks
//     const daysBefore = Array(firstDay.getDay()).fill(null); // Days before the first day
//     const daysAfter = Array(6 - lastDay.getDay()).fill(null); // Days after the last day

//     // Generate all dates in the current month
//     const days = [];
//     for (let i = 1; i <= lastDay.getDate(); i++) {
//       days.push(new Date(year, month, i));
//     }

//     // Combine the dates with padding
//     const allDays = [...daysBefore, ...days, ...daysAfter];

//     // Ensure we have exactly 42 cells (6 rows × 7 days)
//     while (allDays.length < 42) {
//       allDays.push(null); // Add trailing nulls if needed
//     }

//     return allDays;
//   };

//   const renderMonth = (month, year) => {
//     const monthData = generateMonthData(month, year);
//     const monthName = new Date(year, month).toLocaleString("default", {
//       month: "long",
//     });

//     return (
//       <View key={`${month}-${year}`} style={styles.monthContainer}>
//         {/* Month Name */}
//         <Text style={styles.monthHeader}>{monthName} {year}</Text>

//         {/* Day Headers */}
//         <View style={styles.dayRow}>
//           {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, idx) => (
//             <Text key={idx} style={styles.dayHeader}>
//               {day}
//             </Text>
//           ))}
//         </View>

//         {/* Dates Grid */}
//         <View style={styles.calendarGrid}>
//           {monthData.map((date, index) => (
//             <TouchableOpacity
//               key={index}
//               style={[
//                 styles.calendarCell,
//                 date &&
//                 selectedDate.toDateString() === date.toDateString()
//                   ? styles.selectedDate
//                   : null,
//               ]}
//               onPress={() => date && setSelectedDate(date)}
//             >
//               <Text style={date ? styles.dateText : styles.emptyCellText}>
//                 {date ? date.getDate() : ""}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.headerText}>
//         Selected Date: {selectedDate.toDateString()}
//       </Text>
//       <View>
//         {/* Render months from January 2025 to March 2025 */}
//         {Array.from({ length: 3 }, (_, index) =>
//           renderMonth(index, 2025)
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: "#F5F5F5",
//   },
//   headerText: {
//     fontSize: 16,
//     textAlign: "center",
//     marginVertical: 10,
//   },
//   monthContainer: {
//     marginBottom: 20,
//     backgroundColor: "#FFF",
//     borderRadius: 10,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: "#DDD",
//   },
//   monthHeader: {
//     fontSize: 18,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 10,
//   },
//   dayRow: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginBottom: 5,
//   },
//   dayHeader: {
//     fontSize: 14,
//     fontWeight: "bold",
//     textAlign: "center",
//     width: 40,
//   },
//   calendarGrid: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "center",
//   },
//   calendarCell: {
//     width: 40,
//     height: 40,
//     justifyContent: "center",
//     alignItems: "center",
//     margin: 2,
//     borderWidth: 1,
//     borderColor: "#DDD",
//     borderRadius: 5,
//   },
//   selectedDate: {
//     backgroundColor: "#007AFF",
//   },
//   dateText: {
//     fontSize: 14,
//     color: "#333",
//   },
//   emptyCellText: {
//     color: "transparent",
//   },
// });

// export default ReviewSetting;


import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ReviewSetting = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const generateMonthData = (month, year) => {
    const firstDay = new Date(year, month, 1); // First day of the month
    const lastDay = new Date(year, month + 1, 0); // Last day of the month

    // Calculate leading and trailing blank cells
    const daysBefore = Array(firstDay.getDay()).fill(null);
    const daysAfter = Array(6 - lastDay.getDay()).fill(null);

    // Generate days of the month
    const days = [];
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }

    // Combine and ensure 42 cells (6 rows × 7 columns)
    const allDays = [...daysBefore, ...days, ...daysAfter];
    while (allDays.length < 42) {
      allDays.push(null);
    }

    return allDays;
  };

  const renderMonth = (month, year) => {
    const monthData = generateMonthData(month, year);
    const monthName = new Date(year, month).toLocaleString("default", {
      month: "long",
    });

    return (
      <View key={`${month}-${year}`} style={styles.monthContainer}>
        {/* Month Header */}
        <Text style={styles.monthHeader}>{monthName} {year}</Text>

        {/* Weekday Headers */}
        <View style={styles.weekRow}>
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, idx) => (
            <Text key={idx} style={styles.weekDay}>
              {day}
            </Text>
          ))}
        </View>

        {/* Dates Grid */}
        <View style={styles.dateGrid}>
          {monthData.map((date, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.dateCell,
                date &&
                selectedDate.toDateString() === date.toDateString()
                  ? styles.selectedDate
                  : null,
              ]}
              onPress={() => date && setSelectedDate(date)}
            >
              <Text style={date ? styles.dateText : styles.emptyCellText}>
                {date ? date.getDate() : ""}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Selected Date: {selectedDate.toDateString()}
      </Text>

      {/* Render Calendar for January to March 2025 */}
      {Array.from({ length: 3 }, (_, index) =>
        renderMonth(index, 2025)
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:200,
    padding: 10,
    backgroundColor: "#F5F5F5",
  },
  header: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "bold",
  },
  monthContainer: {
    marginBottom: 20,
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 10,
    elevation: 2, // Adds shadow for Android
    shadowColor: "#000", // Adds shadow for iOS
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  monthHeader: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  weekRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  weekDay: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    width: 40,
  },
  dateGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  dateCell: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
  },
  selectedDate: {
    backgroundColor: "#007AFF",
    borderColor: "#007AFF",
  },
  dateText: {
    fontSize: 14,
    color: "#333",
  },
  emptyCellText: {
    color: "transparent",
  },
});

export default ReviewSetting;
