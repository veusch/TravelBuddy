import React, { useEffect, useState, useContext } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, Button, StyleSheet, AppRegistry, Modal, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard, TextInput, ScrollView, Image } from "react-native";
import ListenForms from "./ListenForms";
import ListenCard from "../components/ListenCard";
import { AsyncStorage } from "react-native";
import { globalStyles } from "../styles/global";
import { storeContext } from "../App";
import { generateId } from "../util/generateId";

export default function ListenScreen({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const { tasksContext } = useContext(storeContext);
  const [tasks, setTasks] = tasksContext;

  const completeTask = async (taskListId) => {
    setTasks((currentTasks) => currentTasks.filter((item) => item.taskListId !== taskListId));
    await AsyncStorage.setItem("tasks", JSON.stringify(tasks.filter((item) => item.taskListId !== taskListId)));
  };

  const addTask = async (task) => {
    task.taskListId = generateId(10);
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
              <ListenForms addTask={addTask} />
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <MaterialIcons name="add" size={24} style={styles.modalToggle} onPress={() => setModalOpen(true)} />

        <View style={styles.fllexContainer}>
          {tasks?.map((taskList) => {
            return (
              <TouchableOpacity key={taskList.taskListId} onPress={() => navigation.navigate("ListeNeu", { taskListId: taskList.taskListId })}>
                <ListenCard>
                  <Text>{taskList.taskListTitle}</Text>
                  <MaterialIcons style={styles.delete} size={24} name="delete" onPress={() => completeTask(taskList.taskListId)} />
                </ListenCard>
              </TouchableOpacity>
            );
          })}
          <View style={globalStyles.addListe}>
            <TouchableOpacity></TouchableOpacity>
          </View>
        </View>
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
    backgroundColor: "white",
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