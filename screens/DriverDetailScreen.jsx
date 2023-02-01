import { StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";

import { StatusBar } from "expo-status-bar";

import data from "../data/data";

export default function DriverDetailScreen() {

    
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{padding: 20}}>
        {/* hero text or title */}
        <Text style={styles.title}>Driver Detail</Text>

        {data.map(item => {
            return (
                
                <Text key={item.driver.phone}>Name: {item.driver.name}</Text>

                
            )
        })}
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
});
