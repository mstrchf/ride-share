import { StyleSheet, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.header}>
      <Pressable>
        <Ionicons name="reorder-three-outline" size={34} color="#555" />
      </Pressable>

      <Pressable>
        <Ionicons name="ios-person-circle-outline" size={30} color="#666" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#d3d3d3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
});
