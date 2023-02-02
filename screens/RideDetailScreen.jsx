import { StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";

import { StatusBar } from "expo-status-bar";

// component imports
import DriverCard from '../components/DriverCard'
import PaymentBar from '../components/PaymentBar'
import Button from '../components/Button'
import DetailCard from "../components/DetailCard";

import data from "../data/data";



export default function RideDetailScreen({navigation, route}) {

  const {id} = route.params;

  console.log(id);
  const ride = data.find(item => item.id === id)
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* hero text or title */}
        <Text style={styles.title}>Ride Detail</Text>

        <DriverCard navigation={navigation} ride={ride} />

        <DetailCard
          source={ride.source}
          destination={ride.destination}
          date={ride.date}
          time={ride.time}
          price={ride.price}
        />

        <PaymentBar />
        <Button />

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
    marginTop: 15
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
