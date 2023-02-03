import { StyleSheet, View, Pressable, TextInput } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";


export default function Search() {
  return (
    <View style={styles.searchContainer}>
      <View
        style={[
          styles.inputContainer,
          { borderBottomWidth: 1, borderColor: "#d3d3d3" },
        ]}
      >
        <FontAwesome name="circle-o" size={20} color="#555" />
        <TextInput style={styles.input} placeholder="Source"></TextInput>
      </View>

      <Pressable style={styles.switch}>
        <AntDesign name="swap" size={38} color="#555" />
      </Pressable>

      <View style={styles.inputContainer}>
        <FontAwesome name="circle-o" size={20} color="#555" />
        <TextInput style={styles.input} placeholder="Destination"></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    margin: 20,
    paddingHorizontal: 25,
    borderRadius: 10,
    backgroundColor: "#fafafa",
    borderWidth: 2,
    borderColor: "#d3d3d3",
  },
  inputContainer: {
    flexDirection: "row",
  
    alignItems: "center",
  },
  input: {
    marginLeft: 10,
    paddingVertical: 20,
    fontSize: 20,
    width: '100%'
  },

  switch: {
    transform: [{ rotate: "90deg" }],
    backgroundColor: "white",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#d3d3d3",

    position: "absolute",
    top: 32,
    right: 25,
  },
});
