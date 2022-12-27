import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from "react-native";

const SettingScreen = ({ navigation }) => {
  const [name, setName] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.nameinput}>
        <Text style={styles.nameProfil}>{name}</Text>
      </View>
      <Text style={styles.text}>Whats your name</Text>
      <TextInput style={styles.input} onChangeText={(text) => setName(text)}></TextInput>
      <TouchableOpacity>
        <Text style={styles.button}> Save my name</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.button}> Remove my name</Text>
      </TouchableOpacity>
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

  input: {
    borderWidth: 1,
    borderColor: "black",
    height: 64,
    margin: 32,
    alignSelf: "stretch",
    borderRadius: 6,
    paddingHorizontal: 16,
    fontSize: 24,
    backgroundColor: "white",
  },

  text: {
    marginTop: 32,
  },

  button: {
    marginTop: 32,
    backgroundColor: "white",
    marginHorizontal: 32,
    alignSelf: "stretch",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 6,
  },
  nameinput: {
    backgroundColor: "lightgrey",
    padding: 20,
    borderRadius: 20,
  },

  nameProfil: {
    fontWeight: "bold",
    fontSize: 24,
  },
});
