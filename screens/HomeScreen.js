import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, Button, StyleSheet, AppRegistry, Modal } from "react-native";
import BeitragForms from "./BeitragForms";
import RevieForm from "./BeitragForms";

const HomeScreen = ({ navigation }) => {
  const [modalOpen, setModalOpen] = useState(false);
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

      <Button title="Click here" onPress={() => alert("Button clicked")} />
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
});
