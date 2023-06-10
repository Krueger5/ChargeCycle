import { StyleSheet, View, Text, Pressable } from "react-native";

export default function Calendar() {
  // object having the number of days for each month
  const monthsDayCount = {
    Jan: "31",
    Feb: "28",
    Mar: "31",
    Apr: "30",
    May: "31",
    June: "30",
    July: "31",
    Aug: "31",
    Sept: "30",
    Oct: "31",
    Nov: "30",
    Dec: "31",
  };
  // list having just the months in correct order
  const monthsList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  // caleder in list format already with the first row (daynames) in it
  let calendarList = [["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]];

  // calculating the list index of the first day of the current month
  let currentDayNum = Date().slice(8, 10);
  let currentDayName = Date().slice(0, 3);
  let currentMonth = Date().slice(4, 7);
  let firstDayOfMonth = calendarList[0].indexOf(
    [...calendarList[0], ...calendarList[0]][
      calendarList[0].indexOf(currentDayName) + (7 - (currentDayNum % 7) + 1)
    ]
  );
  let additionalDays =
    7 - (parseInt(monthsDayCount[currentMonth]) % 7) - firstDayOfMonth;
  let iterationLimit =
    parseInt(monthsDayCount[currentMonth]) +
    (additionalDays < 7 ? additionalDays : 0);
  // generating the other rows
  for (let d = 1 - firstDayOfMonth; d <= iterationLimit; d++) {
    // if new week / row pushing a new list
    (d + firstDayOfMonth - 1) % 7 == 0 ? calendarList.push([]) : "";
    // pushing dayNumber
    calendarList[Math.floor((d + firstDayOfMonth - 1) / 7 + 1)].push(
      d < 1
        ? parseInt(
            monthsDayCount[monthsList[monthsList.indexOf(currentMonth) - 1]]
          ) + d
        : d <= monthsDayCount[currentMonth]
        ? d
        : d - monthsDayCount[currentMonth]
    );
  }

  return (
    <View style={styles.month}>
      {/* converting calendar list to JSX calendar which will look like:
      <View...> one View / row for the daynames
        <Preassable...><Text>{day}</Text></Preassable> one Preassable for each cell / day in the Week (dayname)
        <Preassable...><Text>{day}</Text></Preassable>
        <Preassable...><Text>{day}</Text></Preassable>
        ...
      </View>
      <View...> one View for each row / week
        <Preassable...><Text>{day}</Text></Preassable> one Preassable for each cell / day in the Week (daynumber in month)
        <Preassable...><Text>{day}</Text></Preassable>
        <Preassable...><Text>{day}</Text></Preassable>
        ...
      </View> */}
      {calendarList.map((week) => {
        return (
          <View
            key={calendarList.indexOf(week)}
            style={week[0] == "Sun" ? styles.dayNameBar : styles.week}
          >
            {week.map((day) => {
              return (
                <Pressable
                  key={day}
                  style={week[0] == "Sun" ? styles.dayName : styles.day}
                >
                  <Text style={{ fontSize: 18 }}>{day}</Text>
                </Pressable>
              );
            })}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  month: {
    flex: 20,
    justifyContent: "space-around",
    margin: 20,
  },
  week: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  day: {
    width: 40,
    height: 25,
    alignItems: "center",
    borderRadius: 5,
  },
  dayNameBar: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  dayName: {
    width: 40,
    height: 25,
    alignItems: "center",
    borderRadius: 5,
  },
});
