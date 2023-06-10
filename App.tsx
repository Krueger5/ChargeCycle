import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "./components/Home";
import Stats from "./components/Stats";
import Settings from "./components/Settings";

// creating BottomTabNavigator Object
const Tab = createBottomTabNavigator();

// function for displaying the correct tabBarIcon
function tabBarIconModifier(route, { focused, size, color }) {
  if (route.name == "Home") {
    return focused ? (
      <Ionicons name="home" size={size} color={color} />
    ) : (
      <Ionicons name="home-outline" size={size} color={color} />
    );
  } else if (route.name == "Stats") {
    return focused ? (
      <Ionicons name="stats-chart" size={size} color={color} />
    ) : (
      <Ionicons name="stats-chart-outline" size={size} color={color} />
    );
  } else if (route.name == "Settings") {
    return focused ? (
      <Ionicons name="settings" size={size} color={color} />
    ) : (
      <Ionicons name="settings-outline" size={size} color={color} />
    );
  }
}

// main function
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: tabBarIconModifier.bind(this, route),
          tabBarActiveTintColor: "orange",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Stats" component={Stats} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
