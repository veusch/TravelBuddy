import React from "react";
import { View, Text, Button, StyleSheet, AppRegistry } from "react-native";

const SettingScreen = ({ navigation }) => {
  return (
    <view styles={styles.container}>
      <text>Setting Screen</text>
      <Button title="Click here" onPress={() => alert("Button clicked")} />
    </view>
  );
};

export default SettingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
});
