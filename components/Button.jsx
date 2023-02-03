import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Button({text, navigation, route}) {
  return (
    <Pressable
      style={{
        backgroundColor: "#3d7a4e",
        flex: 1,
        padding: 15,
        marginHorizontal: 20,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
      }}

      onPress={() => {
        if(navigation) {
          if(route.name == 'Login') navigation.navigate('Tab')
        } else {
          alert("Can't book ride", )
        }
      }}
    >
      <Text style={{ fontSize: 20, color: "white" }}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
