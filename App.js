import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  ScrollView,
} from "react-native";
import { Ionicons, Octicons } from "@expo/vector-icons";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

// component imports
import Header from "./components/Header";
import Search from "./components/Search";
import BottomNav from "./components/BottomNav";

export default function App() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {
      label: "One",
      value: 1,
      icon: () => <Ionicons name="person-outline" size={18} color="#666" />,
    },
    {
      label: "Two",
      value: 2,
      icon: () => <Ionicons name="person-outline" size={18} color="#666" />,
    },
    {
      label: "Three",
      value: 3,
      icon: () => <Ionicons name="person-outline" size={18} color="#666" />,
    },
    {
      label: "Four",
      value: 4,
      icon: () => <Ionicons name="person-outline" size={18} color="#666" />,
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <Header />

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

          <Pressable
            style={styles.button}
            onPress={function () {
              alert("No rides found");
            }}
          >
            <Text style={{ fontSize: 20, color: "white" }}>Find Ride</Text>
          </Pressable>
        </View>

        <Pressable style={{flexDirection: 'row', borderWidth: 2, borderColor: '#d3d3d3', borderRadius: 10, padding: 10, margin: 20}}>
          <View>
            <Ionicons name="md-location" size={24} />
            <Octicons name="arrow-both" size={24} style={{transform: [{rotate: '90deg'}], marginVertical: 10 }}/>
            <Ionicons name="md-location" size={24} />
          </View>
          <View style={{ flex: 1, justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', }}>

              <View>
                <Text style={{color: '#d3d3d3'}}>Pickup point</Text>
                <Text style={{fontSize: 20}}>Banjul</Text>
              </View>

              <View>
                <View>
                  <Text>17 July</Text>
                </View>
                <View>
                  <Text>18:00</Text>
                </View>
              </View>

            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', }}>
              <View>
                <Text style={{color: '#d3d3d3'}}>Drop point</Text>
                <Text style={{fontSize: 20}}>Serrekunda</Text>
              </View>
              <View>
                <Text>Price</Text>
                <Text>$30.00</Text>
              </View>
            </View>
          </View>
        </Pressable>
      </ScrollView>
      {/* bottom navigation bar */}
      <BottomNav />

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
