import React, { useEffect, useState, useContext } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, Button, StyleSheet, AppRegistry, Modal, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard, TextInput, ScrollView } from "react-native";
import ListenForms from "./ListenForms";
import ListenCard from "../components/ListenCard";
import { AsyncStorage } from "react-native";
import { globalStyles } from "../styles/global";
import { reisenContext } from "../App";

export default function ListenScreen({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const { tasks, setTasks } = useContext(reisenContext);

  const completeTask = async (task) => {
    setTasks((currentTasks) => currentTasks.filter((item) => item.key !== task.key));
    await AsyncStorage.setItem("tasks", JSON.stringify([task, ...tasks]));
  };

  const addTask = async (task) => {
    task.key = Math.random() * Math.random();
    setTasks((currentTasks) => [task, ...currentTasks]);
    await AsyncStorage.setItem("tasks", JSON.stringify([task, ...tasks]));
    setModalOpen(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Modal visible={modalOpen} animationType="slide">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modalContent}>
              <MaterialIcons name="close" style={{ ...styles.modalToggle, ...styles.modalClose }} size={24} onPress={() => setModalOpen(false)} />
              <ListenForms addTask={addTask}></ListenForms>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <MaterialIcons name="add" size={24} style={styles.modalToggle} onPress={() => setModalOpen(true)} />

        <View style={styles.fllexContainer}>
          {tasks?.map((item) => {
            return (
              <TouchableOpacity key={Math.random() * Math.random()} onPress={() => navigation.navigate("ListeNeu", item)}>
                <ListenCard>
                  <Text>{item.title}</Text>
                  <MaterialIcons style={styles.delete} size={24} name="delete" onPress={() => completeTask(item)} />
                </ListenCard>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.addIt}>
          <TouchableOpacity></TouchableOpacity>
        </View>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  fllexContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
  },

  addIt: {
    backgroundColor: "green",
    width: 200,
    height: 200,
  },

  listenn: {
    marginTop: 20,
  },

  Listen: {
    color: "lightgrey",
  },

  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
    backgroundColor: "lightgrey",
    marginTop: 20,
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
