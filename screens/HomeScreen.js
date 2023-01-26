import React, { useState, useContext } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AsyncStorage } from "react-native";
import { View, Text, Button, StyleSheet, AppRegistry, Modal, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard, TextInput, ScrollView, RecyclerViewBackedScrollView } from "react-native";
import BeitragForms from "./BeitragForms";
import RevieForm from "./BeitragForms";
import ReiseCard from "../Shared/ReiseCard";
import ReviewEintraege from "./reviewEintraege";
//import WorldMap from "react-svg-worldmap";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import UploadImage from "./UploadImagee";
import StarRatingg from "./StarRatingComponent";
import { globalStyles } from "../styles/global";

import { reisenContext } from "../App";

const HomeScreen = ({ navigation }) => {
  const { reisen, setReisen } = useContext(reisenContext);
  // const [eintraege, setEintraege] = useState([
  //   { title: "Italienurlaub", rating: 5, body: "Meine Reise nach Italien mit meiner Familie", key: "1" },
  //   { title: "Tirol Kurztrip", rating: 4, body: "Kurztrip nach Tirol zum Schiefahren", key: "2" },
  // ]);
  const [modalOpen, setModalOpen] = useState(false);

  // const save = async () => {
  //   try {
  //     await AsyncStorage.setItem("data", "value");
  //   } catch (err) {}
  // };

  const deleteReise = async (item) => {
    setReisen((prev) => prev.filter((reise) => reise.key !== item.key));
    await AsyncStorage.setItem("reisen", JSON.stringify(reisen.filter((reise) => reise.key !== item.key)));
  };

  // const getData = async () => {
  //   try {
  //     return await AsyncStorage.getItem("data");
  //   } catch (error) {}
  // };

  const [name, setName] = useState();

  const addJourney = async (review) => {
    review.key = Math.random().toString();
    console.log(review);
    await AsyncStorage.setItem("reisen", JSON.stringify([...reisen, review]));

    setReisen((currentEintraeg) => {
      return [review, ...currentEintraeg];
    });
    setModalOpen(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Modal visible={modalOpen} animationType="slide">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modalContent}>
              <MaterialIcons name="close" style={{ ...styles.modalToggle, ...styles.modalClose }} size={24} onPress={() => setModalOpen(false)} />
              <RevieForm addJourney={addJourney}> </RevieForm>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        <MaterialIcons name="add" size={24} style={styles.modalToggle} onPress={() => setModalOpen(true)} />

        <FlatList
          data={reisen}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("reviewEintraege", item)}>
              <ReiseCard>
                <Text>{item.title}</Text>

                <MaterialIcons style={styles.delete} size={24} name="delete" onPress={() => deleteReise(item)} />
              </ReiseCard>
            </TouchableOpacity>
          )}
        />
        <StarRatingg></StarRatingg>
        <Text>{name}</Text>
        <Text style={styles.text}>Whats your name</Text>
        <TextInput style={styles.input} onChangeText={(text) => setName(text)}></TextInput>
        <TouchableOpacity>
          <Text style={styles.button}> Save my name</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.button}> Remove my name</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={globalStyles.Footer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.Home}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Reisen")}>
          <Text style={styles.Reisen}>Reisen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Listen")}>
          <Text style={styles.Listen}>Listen</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("settings")}>
          <Text style={styles.Settings}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("image")}>
          <Text style={styles.image}>Image</Text>
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

  Home: {
    color: "lightgrey",
  },

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

  delete: {},

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
