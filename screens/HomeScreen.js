import React from "react";
import { View, Text, Button, StyleSheet, AppRegistry } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <view styles={styles.container}>
      <text>Home Screen</text>
      <Button title="Click here" onPress={() => alert("Button clicked")} />
    </view>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
});
