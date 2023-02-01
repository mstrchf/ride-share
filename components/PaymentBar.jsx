import { StyleSheet, Text, View, Pressable } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

export default function PaymentBar() {
  return (
    <View style={{ flexDirection: "row", margin: 20 }}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
          borderBottomWidth: 1,
          borderColor: "#d3d3d3",
        }}
      >
        <Text>select seats</Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: 10,
          }}
        >
          <Pressable>
            <AntDesign name="minuscircle" size={24} color="#3d7a4e" />
          </Pressable>

          <Text style={{ fontSize: 28, marginHorizontal: 20 }}>1</Text>

          <Pressable>
            <AntDesign name="pluscircle" size={24} color="#3d7a4e" />
          </Pressable>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          paddingHorizontal: 10,
          borderLeftWidth: 1,
          borderBottomWidth: 1,
          borderColor: "#d3d3d3",
        }}
      >
        <Text>payment method</Text>
        <Pressable
          style={{
            flex: 1,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 18 }}>Cash</Text>
          <Ionicons name="chevron-down" size={24} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
