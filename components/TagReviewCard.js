import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, Button, StyleSheet, AppRegistry, Modal, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard, TextInput, ScrollView, Image } from "react-native";
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import RevieForm2 from "../screens/BeitragFormsDayReview";
import TagNotiz from "./TagNotiz";
import { globalStyles } from "../styles/global";
import StarRatingg from "../screens/StarRatingComponent";

const HomeScreen = (probs, { navigation }) => {
  const [eintraege, setEintraege] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

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
            <RevieForm2 addJourney={addJourney}> </RevieForm2>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <TouchableOpacity onPress={() => setModalOpen(true)}>
        <Image source={require("../images/neu.png")} style={globalStyles.neu} />
      </TouchableOpacity>
      <Text style={globalStyles.headline}>Reise</Text>

      <FlatList
        data={eintraege}
        renderItem={({ item }) => (
          <TagNotiz>
            <Collapse>
              <CollapseHeader>
                <View>
                  <Text style={styles.titelTagNotiz}>{item.title}</Text>
                </View>
              </CollapseHeader>

              <CollapseBody style={styles.collapse}>
                <Text style={styles.zusammenfassung}>{item.zusammenfassung}</Text>
                <StarRatingg></StarRatingg>
              </CollapseBody>
            </Collapse>
          </TagNotiz>
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
    backgroundColor: "white",
  },

  collapse: {
    backgroundColor: "#DFF1FF",
    width: 310,
  },

  tagebuch: {
    backgroundColor: "lightgrey",
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
  },

  zusammenfassung: {
    padding: 15,
  },

  titelTagNotiz: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
    marginBottom: 10,
  },

  textDay: {
    fontWeight: "bold",
    color: "#556076",
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
