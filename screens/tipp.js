import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import PieChart from "react-native-expo-pie-chart";

export default function App() {
  return (
    <View style={styles.container}>
      <PieChart
        data={[
          {
            key: "First Data",
            count: 0,
            color: "blue",
          },
          {
            key: "Second Data",
            count: 50,
            color: "yellow",
          },
          {
            key: "Third Data",
            count: 50,
            color: "green",
          },
          {
            key: "Forth Data",
            count: 0,
            color: "orange",
          },
        ]}
        length={200}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
