import React, { useState, useContext } from "react";
import { AsyncStorage } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, Button, StyleSheet, AppRegistry, Modal, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard, TextInput, ScrollView, RecyclerViewBackedScrollView, Image } from "react-native";
import RevieForm from "./BeitragForms";
import { globalStyles } from "../styles/global";
import { storeContext } from "../App";
import AlleReisen from "../components/AlleReisen";
import { generateId } from "../util/generateId";

const HomeScreen = ({ navigation }) => {
  const { reisenContext } = useContext(storeContext);
  const [reisen, setReisen] = reisenContext;
  const [modalOpen, setModalOpen] = useState(false);

  function addDays(date, days) {
    date.setDate(date.getDate() + days);
    return date;
  }

  const addJourney = async (journey) => {
    journey.reiseId = generateId(10);

    let dayCount = Math.ceil((new Date(journey.endDate).getTime() - new Date(journey.startDate).getTime()) / (1000 * 3600 * 24)) + 1;

    journey.reiseTage = [];

    for (let i = 0; i < dayCount; i++) {
      journey.reiseTage.push({
        reiseTagId: generateId(10),
        reiseTagDate: addDays(new Date(journey.startDate), i),
        reiseEntries: [],
      });
    }

    await AsyncStorage.setItem("reisen", JSON.stringify([...reisen, journey]));

    setReisen((currentEintraeg) => {
      return [journey, ...currentEintraeg];
    });
    setModalOpen(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Modal visible={modalOpen} animationType="slide">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modalContent}>
              <RevieForm setModalOpen={setModalOpen} addJourney={addJourney}></RevieForm>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <TouchableOpacity onPress={() => setModalOpen(true)}>
          <Image source={require("../images/neu.png")} style={globalStyles.neu} />
        </TouchableOpacity>
        <Text style={styles.name}>Name</Text>
        <Text style={styles.wasErlebt}>Was hast du heute erlebt?</Text>
        <View style={styles.statistik}></View>
        <Text style={globalStyles.headline}>Meine Tagebücher</Text>
        <View style={styles.flex}>
          <AlleReisen navigation={navigation} />
        </View>
      </ScrollView>

      <View style={globalStyles.Footer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          {/*Home*/}
          <Image source={require("../images/home-white.png")} style={globalStyles.iconNavigator} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Reisen")}>
          {/*Reisen*/}
          <Image source={require("../images/eintrag.png")} style={globalStyles.iconNavigator} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Listen")}>
          {/*Listen*/}
          <Image source={require("../images/liste.png")} style={globalStyles.iconNavigator} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("settings")}>
          {/*Settings*/}
          <Image source={require("../images/profil.png")} style={globalStyles.iconNavigator} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  statistik: {
    marginTop: 20,
    marginBottom: 20,
    width: 340,
    height: 210,
    backgroundColor: "#EFF8FF",
    alignSelf: "center",
    borderRadius: 10,
  },

  Home: {
    color: "lightgrey",
  },
  name: {
    fontFamily: "Medium",
    fontSize: 26,
  },
  wasErlebt: {
    fontSize: 20,
    fontFamily: "Light",
  },

  modalContent: {},

  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 30,
  },
  modalClose: {
    marginBottom: 0,
    marginClose: 20,
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
});
