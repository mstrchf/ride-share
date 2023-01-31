import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import React from "react";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable>
          <FontAwesome name="user-circle" size={24} color="black" />
        </Pressable>

        <Pressable>
          <FontAwesome name="user-circle" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 30,
  },
  searchContainer: {},
});
