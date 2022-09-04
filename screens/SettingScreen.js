import React from "react";
import { View, Text, Button, StyleSheet, AppRegistry } from "react-native";

const SettingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Setting Screen</Text>
      <Button title="Click here" onPress={() => alert("Button clicked")} />
    </View>
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
