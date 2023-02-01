// modules imports
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// screens imports
import HomeScreen from "./screens/HomeScreen";
import AvailableRideScreen from "./screens/AvailableRideScreen";
import RideDetailScreen from "./screens/RideDetailScreen";
import { BlurView } from "expo-blur";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "search" : "search-outline";
            } else if (route.name === "Publish") {
              iconName = focused ? "add-circle" : "add-circle-outline";
            } else {
              iconName = focused ? "car" : "car-outline";
            }

            return <Ionicons name={iconName} size={30} color={color} />;
          },

          tabBarActiveTintColor: '#3d7a4e',
          tabBarLabelStyle: {fontSize: 14},
          tabBarBackground: () => <BlurView />
        })}
      >
        <Tab.Screen name="Publish" component={RideDetailScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Ride" component={AvailableRideScreen} options={{tabBarBadge: 3, tabBarBadgeStyle: {
          fontSize: 12
        }}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
