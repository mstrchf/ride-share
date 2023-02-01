import { StyleSheet, Text, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DriverCard() {
  return (
    <Pressable
      style={{
        flexDirection: "row",
        margin: 20,
        padding: 10,
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#d3d3d3",
        borderRadius: 10,
      }}
    >
      <View
        style={{
          borderWidth: 1,
          borderColor: "#d3d3d3",
          padding: 10,
          borderRadius: 40,
          marginRight: 10,
        }}
      >
        <Ionicons name="person" size={35} color="#3d7a4e" />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 18, marginBottom: 5 }}>Foday Sanyang</Text>
        <View>
          <Text style={{ color: "#d3d3d3" }}>license number</Text>
          <Text style={{ fontSize: 17, color: "#555" }}>BJL-1458F</Text>
        </View>
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          height: 50,
        }}
      >
        <Text style={{ fontSize: 15, color: "#555" }}>Driver</Text>
        <Ionicons name="chevron-forward" size={24} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
