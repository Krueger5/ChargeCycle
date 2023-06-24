import { StyleSheet, View, Text, Dimensions, ScrollView} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LineChart } from 'react-native-chart-kit';

const StatsSatck = createNativeStackNavigator();
var gesamt=1000;
var a= gesamt/4500*100; 
var handyProzent=a.toFixed(1);

export default function Stats() {
  return (
    <View style={styles.mainContent}>
      <Text style={styles.headline}>Dein Energiegewinn</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.textInfo1}>
            Gesamt:
          </Text>
          <Text style={styles.textInfo2}>
            {gesamt} mAh
          </Text>
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
            data: [0, 2.8, 3.1, 2.7, 2.6, 2.8],
            strokeWidth: 2,
            },
            ],
            }}
            width={Dimensions.get('window').width}
            height={400}
            xAxisLabel="m"
            chartConfig={{
            backgroundColor: 'orange',
            backgroundGradientFrom: '#ef7f0a',
            backgroundGradientTo: 'orange',
            
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
            borderRadius: 16,
            },
            }}
            bezier
            style={{
            marginVertical: 8,
            borderRadius: 16,
            }}
          />
        <View>  
          <Text style={styles.textInfo3}>
            Du kannst dein Handy zu {handyProzent}% aufladen
          </Text>
          <Text style={styles.textInfo3}>
            
          </Text>
        </View>
      </ScrollView>
  </View>
  );
}

const styles = StyleSheet.create({
  mainContent: {
    flex: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 30,
  },

  scrollView: {
    backgroundColor: "orange",
  },

  headline: {
    fontSize: 35,
    paddingBottom: 30,
    //color: "yellow",
    borderRadius: 10,
    //backgroundColor: "",
  },

  textInfo1: {
    fontSize: 35,
    textAlign: "center",
    //color: "#5f1d1d",
    paddingTop: 20,
  },
  textInfo2: {
    fontSize: 30,
    textAlign: "center",
    //color: "#5f1d1d",
    paddingBottom: 30,
  },

  textInfo3: {
    fontSize: 30,
    textAlign: "center",
  }

});
