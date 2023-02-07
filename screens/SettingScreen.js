import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from "react-native";
import UploadImage from "./UploadImagee";
import { globalStyles } from "../styles/global";

const SettingScreen = ({ navigation }) => {
  const [name, setName] = useState();
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.pic}>
          <UploadImage></UploadImage>
        </View>
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
      </ScrollView>

      <View style={globalStyles.Footer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          {/*Home*/}
          <Image source={require("../images/home.png")} style={globalStyles.iconNavigator} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Reisen")}>
          {/*Reisen*/}
          <Image source={require("../images/eintrag.png")} style={globalStyles.iconNavigator} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Listen")}>
          {/*Listen*/}
          <Image source={require("../images/home.png")} style={globalStyles.iconNavigator} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("settings")}>
          {/*Settings*/}
          <Image source={require("../images/profil.png")} style={globalStyles.iconNavigator} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  pic: {
    padding: 20,
  },

  SettingsNav: {
    color: "lightgrey",
  },

  Settings: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#DFF1FF",
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
    justifyContent: "center",
    alignItems: "center",
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
