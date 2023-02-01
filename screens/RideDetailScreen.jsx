import { StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";

import { StatusBar } from "expo-status-bar";

// component imports
import DriverCard from '../components/DriverCard'
import PaymentBar from '../components/PaymentBar'
import Button from '../components/Button'
import DetailCard from "../components/DetailCard";

export default function RideDetailScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* hero text or title */}
        <Text style={styles.title}>Ride Detail</Text>

        <DriverCard />

        <DetailCard
          source="Brikama"
          destination="Bakau"
          date="17 Oct"
          time="18:00"
          price={5.99}
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
    margin: 20,
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
