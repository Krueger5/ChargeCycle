import { useState } from "react";
import { StyleSheet, View, Text, Pressable, Modal, Button} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { BleManager } from "react-native-ble-plx";
import base64 from "react-native-base64";

import Calendar from "./Calendar";


const BLEManager = new BleManager();

export default function Home() 
{
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
        onPress={() => {Sync()}}
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

// Sync function. Executed when Sync button is pressed
function Sync() {
  PermissionsAndroid.requestMultiple(
    [
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_ADVERTISE,
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT
    ]
  ).then((answer) => {
    console.log("LOG: scanning");
    BLEManager.startDeviceScan(null, null, (error, scannedDevice) => {
      if (error) {
        console.warn("WARN: ", JSON.stringify(error));
      }
      if (scannedDevice.id == "38:AB:41:3C:D4:6F") {
        deviceScanned = true;
        console.log("Connecting to device: " + scannedDevice.name);
        scannedDevice.connect().then((device) => {
          device.discoverAllServicesAndCharacteristics().then((device) => {
            console.log("Successfully connected to Device: " + device.name)
            BLEManager.stopDeviceScan();
            device.monitorCharacteristicForService("", "", (error, characteristic) => {
              if (error) {
                alert("ERROR --> " + error);
                return
              }
              if (!characteristic?.value) {
                alert("no data received");
                return
              }
              const data = base64.decode(characteristic.value);
              console.log("Data: " + data.Text);
            });
            // --DEBUG--
            device.services().then((services) => {
              console.log(services);
              services.forEach((service) => {
                service.characteristics().then((characteristic) => {
                  characteristics.push(characteristic);
                })
              })
            })
          })
        })
      }
    })
  })
  /*
  let data = {
    sessionID: 1,
    time: 1683033317551,
    ampere: 5.0,
    volt: 2.0
  };
  
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application.json'
  };

  fetch("http://172.22.168.206/api/insert.php", {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
  })
  .then((response)=>response.json())
  .then((response)=>{
    alert(response[0].Message);
  })
  .catch((error)=>{
    alert("Error --> " + error);
  });
  */
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
    backgroundColor: "#0",
    width: 300
  },
  ButtonText: {
    fontSize: 50,
    textAlign: "center",
  }
});

