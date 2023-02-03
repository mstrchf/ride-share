import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";

import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import Button from "../components/Button";

export default function LoginScreen({ navigation, route }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ justifyContent: "center" }}>
        {/* hero text or title */}
        <Text style={styles.title}>Login</Text>

        <View style={styles.searchContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Phone number"
            ></TextInput>
          </View>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="password"></TextInput>
          </View>
        </View>

        <Button text="Log in" navigation={navigation} route={route} />

        <View style={{ alignItems: "center", marginVertical: 15 }}>
          <Text style={{ fontSize: 20 }}>or</Text>
        </View>

        <Pressable
          style={{
            borderColor: "#3d7a4e",
            borderWidth: 1,
            flex: 1,
            padding: 15,
            marginHorizontal: 20,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
 
        
              alert("Google server unavailable");
        
          }}
        >
          <Text style={{ fontSize: 20, color: "#3d7a4e" }}>Sign In with Google</Text>
        </Pressable>


        <View style={{margin: 20, flexDirection: 'row'}} >
            <Text style={{fontSize: 15, marginRight: 5, color: '#555' }}>Don't have an account?</Text>
            <Pressable onPress={() => {
                console.log(route.name)
                navigation.navigate('Register')}}>
                <Text style={{fontSize: 15, fontWeight: 'bold', color: '#3d7a4e'}}>Register</Text>
            </Pressable>
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  title: {
    fontSize: 30,
    color: "#555",
    margin: 20,
  },

  searchContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
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
    paddingLeft: 10,
    paddingVertical: 15,
    // borderWidth: 1,
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
