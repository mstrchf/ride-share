import { StyleSheet, Text, SafeAreaView, ScrollView, View, Pressable } from "react-native";

import { StatusBar } from "expo-status-bar";

import data from "../data/data";
import { Ionicons } from "@expo/vector-icons";

export default function DriverDetailScreen({ route }) {
  const { id } = route.params;

  console.log(id);
  const ride = data.find((item) => item.id === id);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* hero text or title */}

        <View style={{ alignItems: "center", margin: 25 }}>
          <View>
            <Ionicons name="person" size={70} color="#3d7a4e" />
          </View>

          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 30, marginBottom: 5 }}>
              {ride.driver.name}
            </Text>
            <Text style={{ fontSize: 15, color: "#555" }}>
              {ride.driver.address}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            borderColor: "#3d7a4e",
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <View
            style={{
              alignItems: "center",
              flex: 1,
              backgroundColor: "#3d7a4e",
              paddingVertical: 10,
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 30, color: "white", marginRight: 5 }}>
                {ride.driver.completed}
              </Text>
              <Ionicons name="car" size={30} color="white" />
            </View>
            <Text style={{ color: "white" }}>Completed Rides</Text>
          </View>

          <View style={{ alignItems: "center", flex: 1, paddingVertical: 10 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 30, color: "#3d7a4e", marginRight: 5 }}>
                {ride.driver.rating}
              </Text>
              <Ionicons name="star-half" size={25} color="#3d7a4e" />
            </View>
            <Text style={{ color: "#3d7a4e" }}>Average Rating</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginVertical: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>Car</Text>
            <Text style={{ fontSize: 15, color: "#555" }}>
              Type: {ride.driver.car}
            </Text>
            <Text style={{ fontSize: 15, color: "#555" }}>
              License: {ride.driver.license}
            </Text>
          </View>
          <View>
            <Ionicons name="car" size={100} color="#3d7a4e" />
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Pressable
            style={{
              backgroundColor: "#3d7a4e",
              flex: 1,
              borderColor: "#3d7a4e",
              borderWidth: 1,
              paddingVertical: 12,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 5
            }}
            onPress={() => {
              alert("Google server unavailable");
            }}
          >
            <Text style={{ fontSize: 20, color: "#fff" }}>
              Call Now
            </Text>
          </Pressable>

          <Pressable
            style={{
              borderColor: "#3d7a4e",
              borderWidth: 1,
              flex: 1,
         paddingVertical: 12,
              
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              alert("Google server unavailable");
            }}
          >
            <Text style={{ fontSize: 20, color: "#3d7a4e" }}>
              Message
            </Text>
          </Pressable>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: "#555",
  },

  container: {
    flex: 1,
    marginHorizontal: 20,
  },
});
