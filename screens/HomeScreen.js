import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, Button, StyleSheet, AppRegistry, Modal, FlatList, TouchableOpacity } from "react-native";
import BeitragForms from "./BeitragForms";
import RevieForm from "./BeitragForms";
import ReiseCard from "../Shared/ReiseCard";

const HomeScreen = ({ navigation }) => {
  const [eintraege, setEintraege] = useState([
    { title: "haha", rating: 5, body: "lorem ipsum", key: "1" },
    { title: "haha2", rating: 4, body: "lorem ipsum", key: "2" },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const addJourney = (review) => {};
  const pressHandler = () => {
    navigation.navigate("reviewEintraege");
  };
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.modalContent}>
          <MaterialIcons name="close" style={{ ...styles.modalToggle, ...styles.modalClose }} size={24} onPress={() => setModalOpen(false)} />
          <RevieForm> </RevieForm>
        </View>
      </Modal>
      <MaterialIcons name="add" size={24} style={styles.modalToggle} onPress={() => setModalOpen(true)} />
      <Button title="Eintrag" onPress={pressHandler} />
      <Button title="Click here" onPress={() => alert("Button clicked")} />
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
    padding: 20,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginBottom: 0,
    marginClose: 20,
  },
});
