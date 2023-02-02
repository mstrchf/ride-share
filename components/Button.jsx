import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Button() {
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

      onPress={() => alert("Can't book ride")}
    >
      <Text style={{ fontSize: 20, color: "white" }}>Book Ride</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
