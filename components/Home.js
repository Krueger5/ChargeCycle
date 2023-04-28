import { useState } from "react";
import { StyleSheet, View, Text, Pressable, Modal, Button} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";


import Calendar from "./Calendar";

export default function Home() 
{
  
  
    insertRecord=()=>
    {
      var time=3;
      var duration=5;
      var volt=10;  
      var ampere=30;

      var InsertAPIURL="https://10.0.2.2:80/api/insert.php";
      
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
      <Pressable 
        style={styles.ButtonSync}
        onPressIn={() => {
          insertRecord
        }}
      >
        <Text>SYNC</Text>
        
      </Pressable> 
      <Button
        onPress={
          insertRecord()
        }
        title={"SYNC"}
      
      />
      
        
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
  margin: 20,
  backgroundcolour: "orange",
  


  },
});
