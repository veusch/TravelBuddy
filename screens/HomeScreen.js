import React, { useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, Button, StyleSheet, AppRegistry, Modal, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard, TextInput, ScrollView, RecyclerViewBackedScrollView, Image } from "react-native";
import RevieForm from "./BeitragForms";
import { globalStyles } from "../styles/global";
import { storeContext } from "../App";
import AlleReisen from "../components/AlleReisen";
import { generateId } from "../util/generateId";

const HomeScreen = ({ navigation }) => {
  const { reisenContext, backgroundContext, profileContext } = useContext(storeContext);
  const [reisen, setReisen] = reisenContext;
  const [profile, setProfile] = profileContext;
  const [backgroundImageNumber, setBackgroundImageNumber] = backgroundContext;
  const [modalOpen, setModalOpen] = useState(false);

  function getTotalDays() {
    let count = 0;
    reisen?.forEach((reise) => {
      count += reise.reiseTage.length;
    });
    return count;
  }

  function getTotalCountries() {
    let countyIds = [];

    reisen?.forEach((reise) => {
      // console.log(reise.reiseLand.countryId);
      if (!countyIds.includes(reise.reiseLand.countryId)) {
        countyIds.push(reise.reiseLand.countryId);
      }
    });

    return countyIds.length;
  }

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
      <Image
        style={{ position: "absolute", opacity: 0.25, resizeMode: "repeat", top: 0, left: 0, width: "100%", height: "100%", zIndex: -100 }}
        source={
          backgroundImageNumber === 1
            ? require(`../images/Hintergruende/hintergrund_1.png`)
            : backgroundImageNumber === 2
            ? require(`../images/Hintergruende/hintergrund_2.png`)
            : backgroundImageNumber === 3
            ? require(`../images/Hintergruende/hintergrund_3.png`)
            : backgroundImageNumber === 4
            ? require(`../images/Hintergruende/hintergrund_4.png`)
            : backgroundImageNumber === 5
            ? require(`../images/Hintergruende/hintergrund_5.png`)
            : backgroundImageNumber === 6
            ? require(`../images/Hintergruende/hintergrund_6.png`)
            : require(`../images/Hintergruende/hintergrund_1.png`)
        }
      />
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

        <Text style={styles.name}>{profile.profileName}</Text>

        <Text style={styles.wasErlebt}>Was hast du heute erlebt?</Text>
        <View style={styles.statistik}></View>
        <View style={styles.flex2}>
          <View style={styles.besucht}>
            <Text style={{ textAlign: "center", alignItems: "center", padding: 15, fontSize: 16 }}>
              Du hast insgesamt <Text style={{ color: "orange", fontWeight: "bold" }}>{getTotalCountries()}/195 Länder </Text> bereist!
            </Text>
          </View>
          <View style={styles.besucht}>
            <Text style={{ textAlign: "center", alignItems: "center", padding: 15, fontSize: 16 }}>
              Du warst insgesamt <Text style={{ color: "orange", fontWeight: "bold" }}>{getTotalDays()} Tage lang </Text> unterwegs!
            </Text>
          </View>
        </View>
        <Text style={globalStyles.headline}>Meine Tagebücher</Text>
        <View style={styles.flex}>
          <AlleReisen setModalOpen={setModalOpen} navigation={navigation}>
            <TouchableOpacity onPress={() => setModalOpen(true)} style={{ justifyContent: "space-around", alignItems: "center", flexDirection: "row", borderRadius: 20, margin: 5, width: "47%", height: navigation.state.routeName === "Home" ? 80 : 150, backgroundColor: "#213049" }}>
              <Text style={styles.addText}>Neues Tagebuch erstellen</Text>
            </TouchableOpacity>
          </AlleReisen>
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

  neu: {
    width: "47%",
    // flex: 1,
    backgroundColor: "#213049",
    margin: 5,
    borderRadius: 20,
  },

  addText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Medium",
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    margin: 10,
  },

  statistik: {
    marginTop: 20,

    width: 340,
    height: 210,
    backgroundColor: "#EFF8FF",
    alignSelf: "center",
    borderRadius: 10,
  },

  besucht: {
    marginTop: 20,
    marginBottom: 20,
    margin: 5,

    width: 150,
    height: 130,
    backgroundColor: "#EFF8FF",
    alignSelf: "center",
    borderRadius: 10,
  },

  flex: {
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  flex2: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  Home: {
    color: "lightgrey",
  },
  name: {
    fontFamily: "Medium",
    fontSize: 26,
    paddingLeft: 15,
  },
  wasErlebt: {
    fontSize: 20,
    fontFamily: "Light",
    paddingLeft: 15,
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
