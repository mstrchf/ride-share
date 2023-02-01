import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

// component imports
import Header from "../components/Header";
import Search from "../components/Search";
import BottomNav from "../components/BottomNav";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>

      <ScrollView>
        {/* hero text or title */}
        <Text style={styles.title}>Let's Go Places...</Text>

        {/* source and destination selection */}
        <Search />

        {/* search button and seat selection */}
        <View style={styles.findRideContainer}>
          <Pressable
            style={{
              flex: 1,
              marginRight: 10,
              borderRightWidth: 1,
              borderColor: "#3D7A4E",
              borderRadius: 0,
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 28, color: "#3d7a4e" }}>1</Text>
            <Text style={{ fontSize: 22, color: "#3d7a4e" }}>Seat(s)</Text>

            <Ionicons name="ios-chevron-down" size={24} color="#555" />
          </Pressable>

          <Pressable style={styles.button}>
            <Text style={{ fontSize: 20, color: "white" }}>Find Ride</Text>
          </Pressable>
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  title: {
    fontSize: 30,
    color: "#555",
    margin: 20,
  },
  findRideContainer: {
    margin: 20,
    flexDirection: "row",
  },
  button: {
    flex: 1,
    backgroundColor: "#3D7A4E",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    paddingVertical: 10,
  },
});
