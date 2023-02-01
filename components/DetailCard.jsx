import { StyleSheet, Text, View, Pressable } from "react-native";
import { Ionicons, Octicons } from "@expo/vector-icons";

export default function DetailCard({source, destination, date, time, price}) {
  return (
    <Pressable
      style={{
        flexDirection: "row",
        borderWidth: 2,
        borderColor: "#d3d3d3",
        borderRadius: 10,
        padding: 10,
        margin: 20,
      }}
    >
      <View>
        <Ionicons name="md-location" size={24} color="#3d7a4e" />
        <Octicons
          name="arrow-both"
          size={24}
          style={{ transform: [{ rotate: "90deg" }], marginVertical: 15 }}
        />
        <Ionicons name="md-location" size={24} color="#3d7a4e" />
      </View>
      <View style={{ flex: 1, justifyContent: "space-between", marginLeft: 5 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={{ color: "#d3d3d3" }}>Pickup point</Text>
            <Text style={{ fontSize: 20, color: "#555" }}>{source}</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#3d7a4e",
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#3d7a4e",
                paddingVertical: 10,
                paddingHorizontal: 5,
              }}
            >
              <Text style={{ color: "white", fontSize: 16 }}>{date}</Text>
            </View>
            <View style={{ paddingHorizontal: 5 }}>
              <Text style={{ color: "#3d7a4e", fontSize: 16 }}>{time}</Text>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={{ color: "#d3d3d3" }}>Drop point</Text>
            <Text style={{ fontSize: 20, color: "#555" }}>{destination}</Text>
          </View>
          <View>
            <Text style={{ color: "#555" }}>Price</Text>
            <Text style={{ fontSize: 20, color: "#3d7a4e" }}>${price}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
