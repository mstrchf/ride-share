import { StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";

import { StatusBar } from "expo-status-bar";

// component imports
import DetailCard from "../components/DetailCard";

const data = [
  {
    source: "Brikama",
    destination: "Bakau",
    date: "17 Oct",
    time: "18:00",
    price: 5.99,
  },
  {
    source: "Banjul",
    destination: "Serrekunda",
    date: "17 Oct",
    time: "18:00",
    price: 5.99,
  },
  {
    source: "Farafenni",
    destination: "Gunjur",
    date: "17 Oct",
    time: "18:00",
    price: 5.99,
  },
  {
    source: "Busumbala",
    destination: "Lamin",
    date: "17 Oct",
    time: "18:00",
    price: 5.99,
  },
];

export default function RideHistoryScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* hero text or title */}
        <Text style={styles.title}>Current Rides</Text>
        {data.map((item, index) => {
          return (
            <DetailCard
              navigation={navigation}
              key={index + 1}
              source={item.source}
              destination={item.destination}
              date={item.date}
              time={item.time}
              price={item.price}
            />
          );
        })}

        {/* hero text or title */}
        <Text style={styles.title}>Past Rides</Text>
        {data.map((item, index) => {
          return (
            <DetailCard
              navigation={navigation}
              key={index + 1}
              source={item.source}
              destination={item.destination}
              date={item.date}
              time={item.time}
              price={item.price}
            />
          );
        })}
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
    marginHorizontal: 20,
    marginTop: 10
  },
  findRideContainer: {
    margin: 20,
    flexDirection: "row",
  },
  button: {
    flex: 1,
    backgroundColor: "#3D7A4E",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    paddingVertical: 10,
  },
});
