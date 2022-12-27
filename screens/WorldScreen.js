import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, Button, StyleSheet, AppRegistry, Modal, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard, TextInput } from "react-native";
import BeitragForms from "./BeitragForms";
import RevieForm from "./BeitragForms";
import ReiseCard from "../Shared/ReiseCard";
import ReviewEintraege from "./reviewEintraege";

import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = ({ navigation }) => {
  const [eintraege, setEintraege] = useState([
    { title: "Italienurlaub", rating: 5, body: "Meine Reise nach Italien mit meiner Familie", key: "1" },
    { title: "Tirol Kurztrip", rating: 4, body: "Kurztrip nach Tirol zum Schiefahren", key: "2" },
  ]);
  const [modalOpen, setModalOpen] = useState(false);

  const save = async () => {
    try {
      await AsyncStorage.setItem("data", "value");
    } catch (err) {}
  };

  const getData = async () => {
    try {
      return await AsyncStorage.getItem("data");
    } catch (error) {}
  };

  const [name, setName] = useState();

  const addJourney = (review) => {
    review.key = Math.random().toString();
    setEintraege((currentEintraeg) => {
      return [review, ...currentEintraeg];
    });
    setModalOpen(false);
  };

  return (
    <View style={styles.container}>
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
        data={eintraege}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("reviewEintraege", item)}>
            <ReiseCard>
              <Text>{item.title}</Text>
            </ReiseCard>
          </TouchableOpacity>
        )}
      />
    </View>
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

  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
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
