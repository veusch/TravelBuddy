import React, { useState, useCallback, useContext, useEffect } from "react";
import { View, Text, Button, StyleSheet, Platform, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard, ScrollView } from "react-native";
import { reisenContext } from "../App";
import Task from "../components/Tasks";

export default function TaskItems({ navigation, route }) {
  const { tasks, setTasks } = useContext(reisenContext);
  const [taskInput, setTaskInput] = useState();

  // der key sollte eigentlich über route.params mitgegben werden können und nicht extra mit getParam ausgelesen werden müssen ... Tim fragen!
  let key;
  useEffect(() => {
    key = navigation.getParam("key");
  }, []);

  const addTaskItem = async () => {
    // TaskItem zum Context hinzufügen
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Todays Tasks</Text>
          <View style={styles.items}>
            {tasks
              .filter((task) => task.key === key)
              .map((item) => {
                return (
                  <TouchableOpacity
                    key={Math.random() * Math.random()}
                    onPress={() => {
                      // TaskItem aus dem Context löschen
                    }}
                  >
                    <Task key={Math.random() * Math.random()} text={item} />
                  </TouchableOpacity>
                );
              })}
          </View>
        </View>
      </ScrollView>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={"write a Task"} onChangeText={(text) => setTaskInput(text)} value={taskInput} />
        <TouchableOpacity onPress={() => addTaskItem()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <View style={styles.Footer}>
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
    backgroundColor: "lightgrey",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },

  Listen: {
    color: "lightgrey",
  },

  items: {
    marginTop: 30,
  },
  tasksWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  Footer: {
    backgroundColor: "grey",
    alignSelf: "stretch",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 100,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    maxWidth: 250,
    backgroundColor: "white",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#C0C0C0",
  },
  addText: {},
});
