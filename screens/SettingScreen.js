import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";

const SettingScreen = ({ navigation }) => {
  const [name, setName] = useState();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.picture}></View>
        <View style={styles.nameinput}>
          <Text style={styles.nameProfil}>{name}</Text>
        </View>
        <Text style={styles.text}>Whats your name</Text>
        <TextInput style={styles.input} onChangeText={(text) => setName(text)}></TextInput>
        <TouchableOpacity>
          <Text style={styles.button}> Save my name</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.Settings}> Privatsphäre</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Settings}> Impressum</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Settings}> Datenschutzerklärung</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Settings}> Nutzungbedingungen</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Settings}> Accounteinstellungen</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  Settings: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowRadius: 6,
    shadowOpacity: 0.3,
    marginHorizontal: 4,
    marginVertical: 4,
    width: 250,
    heigh: 300,
    padding: 15,
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

  picture: {
    backgroundColor: "grey",
    height: 100,
    width: 100,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
    marginTop: 10,
  },

  button: {
    marginTop: 10,
    backgroundColor: "white",
    marginHorizontal: 10,
    alignSelf: "stretch",
    paddingHorizontal: 10,
    paddingVertical: 6,
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
