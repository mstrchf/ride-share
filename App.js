// modules imports
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";

// screens imports
import HomeScreen from "./screens/HomeScreen";
import AvailableRideScreen from "./screens/AvailableRideScreen";
import RideDetailScreen from "./screens/RideDetailScreen";
import DriverDetailScreen from "./screens/DriverDetailScreen";
import RidePublishScreen from "./screens/RidePublishScreen";
import RideHistoryScreen from "./screens/RideHistoryScreen";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Main" component={HomeScreen} />
      <HomeStack.Screen name="Rides" component={AvailableRideScreen}  />
      <HomeStack.Screen name="Detail" component={RideDetailScreen} />
      <HomeStack.Screen name="Driver" component={DriverDetailScreen}/>
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
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

          tabBarActiveTintColor: "#3d7a4e",
          tabBarLabelStyle: { fontSize: 14 },
          tabBarBackground: () => <BlurView />,
        })}
      >
        <Tab.Screen name="Publish" component={RidePublishScreen} />
        <Tab.Screen name="Home" component={HomeStackScreen} options={{headerShown: false}}/>
        <Tab.Screen
          name="History"
          component={RideHistoryScreen}
          options={{
            tabBarBadge: 3,
            tabBarBadgeStyle: {
              fontSize: 10,
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
