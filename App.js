import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  TextInput,
} from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { BlurView } from "expo-blur";

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

      {/* hero text or title */}
      <Text style={styles.title}>Let's Go Places...</Text>

      {/* source and destination selection */}
      <Search />

      {/* search button and seat selection */}
      <View style={styles.findRideContainer}>
      <View style={{width: '55%', marginRight: 10,}}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Select Seats"
            dropDownDirection="BOTTOM"
            style={{
              backgroundColor: "#e3e3e3",
              borderWidth: 0,
              borderRadius: 5,
   
            }}
            dropDownContainerStyle={{
              backgroundColor: "#d3d3d3",
              borderWidth: 0,
              borderRadius: 5,
            }}
            textStyle={{ fontSize: 18, color: "#555" }}
          />
   </View>

        <Pressable
          style={styles.button}
          onPress={() => alert("No rides found")}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Find Ride</Text>
        </Pressable>
      </View>

      {/* bottom navigation bar */}
      <BottomNav />
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
  },
});