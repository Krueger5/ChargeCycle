import { useState } from "react";
import { StyleSheet, View, Text, Pressable, Modal, Button} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";


import Calendar from "./Calendar";

export default function Home() 
{
  
  
    /*insertRecord=()=>
    {
      var time=3;
      var duration=5;
      var volt=10;  
      var ampere=30;

      var InsertAPIURL="http://192.168.2.104/api/insert.php";
      
      var headers={
        'Accept':'application/json',
        'Content-Type':'application.json'
      };
      var Data={
        time:time,  
        duration:duration,
        volt:volt,
        ampere:ampere,
      };
      fetch(InsertAPIURL,
      {
        method:'POST',
        headers:headers,
        body: JSON.stringify(Data)
      })
      .then((response)=>response.json())
      .then((response)=>
      {
        alert(response[0].Message);
      })
      .catch((error)=>
      {
          alert("Error"+error);
      })
    }
*/




  
  // state for updating calendar Icon
 // const [calendarIcon, updateCalendarIcon] = useState("calendar-outline");
  // state for updating the calendar visibility
  //const [calendarVisibility, changeCalendarVisibility] = useState(false);

  return (
    <View style={styles.appContainer}>  
      <View style={styles.mainContent}>
        <Pressable
          onPress={() => {
            
            }}
          style={styles.ButtonSync}
          
            
          >
            <Text style={styles.ButtonText}>
              SYNC
            </Text>  
          </Pressable>
        
      
      
      
        
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
  ButtonSync: {
    borderRadius: 50,
    padding: 6,
    marginTop: 200,
    backgroundColor: "#fbc727",
    width: 300,

  },
  ButtonText: {
    fontSize: 50,
    textAlign: "center",


  }
});
