import { StyleSheet, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { BlurView } from "expo-blur";
import { useState } from "react";

export default function BottomNav() {
    const [active, setActive] = useState('search');
  return (
    <BlurView tint="light" intensity={50} style={styles.bottomNav}>
      <Pressable style={styles.navItem} onPress={() => setActive('publish')}>
        <Ionicons name="add-circle-outline" size={30} color={active == 'publish' ? '#3d7a4e' : '#555'} />
        <Text style={[styles.navItemText, { color: active == 'publish' ? "#3D7A4E" : '#555' }]}>publish</Text>
      </Pressable>

      <Pressable style={styles.navItem} onPress={() => setActive('search')}>
        <Ionicons name="search-outline" size={30} color={active == 'search' ? '#3d7a4e' : '#555'} />
        <Text style={[styles.navItemText, { color: active == 'search' ? "#3D7A4E" : '#555' }]}>search</Text>
      </Pressable>

      <Pressable style={styles.navItem} onPress={() => setActive('ride')}>
        <Ionicons name="car-outline" size={30} color={active == 'ride' ? '#3d7a4e' : '#555'} />
        <Text style={[styles.navItemText, { color: active == 'ride' ? "#3D7A4E" : '#555' }]}>your rides</Text>
      </Pressable>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,

    borderTopWidth: 1,
    borderColor: "#d3d3d3",
    width: "100%",

    position: "absolute",
    bottom: 0,
  },

  navItem: {
    justifyContent: "center",
    alignItems: "center",
  },

  navItemText: {
    color: "#777",
  },
});
