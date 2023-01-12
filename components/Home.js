import { useState } from "react";
import { StyleSheet, View, Text, Pressable, Modal, Dimensions, TouchableOpacity,} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LineChart } from 'react-native-chart-kit'

import Calendar from "./Calendar";

export default function Home() {
  // state for updating calendar Icon
  const [calendarIcon, updateCalendarIcon] = useState("calendar-outline");
  // state for updating the calendar visibility
  const [calendarVisibility, changeCalendarVisibility] = useState(false);
  
  return (
    <View style={styles.appContainer}>
      {/* Modal which is displayed if calendar button is pressed, containing a calendar */}
      <Modal visible={calendarVisibility}>
        {/* calendar button */}
        <View style={styles.calendarButtonActive}>
          <Pressable
            onPressIn={() => {
              updateCalendarIcon("calendar-outline");
              changeCalendarVisibility(false);
            }}
            style={{
              alignItems: "flex-end",
            }}
          >
            <Ionicons name={calendarIcon} size={26} color={"orange"} />
          </Pressable>
        </View>
        {/* calendar component */}
        <Calendar />
      </Modal>
      {/* default home screen */}
      {/* calendar button */}
      <View style={styles.calendarButtonHome}>
        <Pressable
          onPressIn={() => {
            updateCalendarIcon("calendar");
            changeCalendarVisibility(true);
          }}
          style={{
            alignItems: "flex-end",
          }}
        >
          <Ionicons name={calendarIcon} size={26} color={"orange"} />
        </Pressable>
      </View>
      <View style={styles.mainContent}>
        <Text style={{ fontSize: 22, paddingBottom: 30}}>So viel Strom hast du erzeugt!</Text>
        
          <View style={styles.container}>
            <View>
              {/*example: linechart for energie gain*/}
              <LineChart data={{
                labels: [
                '0',
                '5',
                '10',
                '15',
                '20',
                '25',
                '30',
                ],
                datasets: [
                {
                data: [0, 20 , 50, 45, 40, 43],
                strokeWidth: 2,
                },
                ],
                }}
                width={Dimensions.get('window').width}
                height={400}
                xAxisLabel="min"
                chartConfig={{
                backgroundColor: 'orange',
                backgroundGradientFrom: 'orange',
                backgroundGradientTo: 'orange',
                
               
                
                decimalPlaces: 1,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                borderRadius: 16,
                },
                }}
                bezier
                style={{ marginVertical: 8,
                borderRadius: 16,
                }}
              />
            </View>
          </View>
        <View >
          <Text style={{
            
            fontSize: 22,
            alignItems: "center",
            paddingBottom: 30,
            }}>
            Gesamtmenge: Beispielwert
          </Text>
          <Text style={{
            fontSize: 22,
            alignItems: "center",
            }}>
              Du kannst dein Handy zu 25% aufladen
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },

  calendarButtonHome: {
    flex: 1,
    alignItems: "flex-end",
    margin: 10,
  },
  calendarButtonActive: {
    flex: 1,
    alignItems: "flex-end",
    marginTop: 65,
    marginRight: 10,
  },
  mainContent: {
    flex: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
