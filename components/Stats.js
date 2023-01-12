import { StyleSheet, View, Text, Dimensions  } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LineChart } from 'react-native-chart-kit';

const StatsSatck = createNativeStackNavigator();

export default function Stats() {
  return (
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
              Du kannst dein Handy 25% aufladen
          </Text>
        </View>
  </View>
  );
}

const styles = StyleSheet.create({
  mainContent: {

    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
  },

});
