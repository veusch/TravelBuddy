import React, { useState, useCallback, useContext, useEffect } from "react";
import { View, Text, Button, StyleSheet, Platform, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard, ScrollView } from "react-native";
import { storeContext } from "../App";
import { generateId } from "../util/generateId";
import { AsyncStorage } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TaskItems(props) {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const {
    navigation,
    navigation: {
      state: {
        params: { taskListId },
      },
    },
  } = props;

  // Das ist Object Destructuring
  // const test = { name: "Peter", age: 20 };
  // const { name } = test;

  // Das ist Array Destructuring
  // const test = ["Peter", 20];
  // const [name] = test;

  const { tasksContext } = useContext(storeContext);
  const [tasks, setTasks] = tasksContext;

  const [taskInput, setTaskInput] = useState();

  const addTaskItem = async () => {
    let temp = tasks;
    temp.find((task) => task.taskListId === taskListId).taskListItems = temp.find((task) => task.taskListId === taskListId).taskListItems || [];
    temp.find((taskList) => taskList.taskListId === taskListId).taskListItems.push({ taskId: generateId(10), taskTitle: taskInput, done: false });
    setTasks(temp);
    await AsyncStorage.setItem("tasks", JSON.stringify(temp));
    setTaskInput("");
    forceUpdate();
  };

  const completeTaskItem = async (taskId) => {
    let temp = tasks;
    temp.find((task) => task.taskListId === taskListId).taskListItems.find((taskListItem) => taskListItem.taskId === taskId).done = !temp.find((task) => task.taskListId === taskListId).taskListItems.find((taskListItem) => taskListItem.taskId === taskId).done;
    setTasks(temp);
    await AsyncStorage.setItem("tasks", JSON.stringify(temp));
    forceUpdate();
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Todays Tasks</Text>
          <View style={styles.items}>
            {tasks
              ?.find((taskList) => taskList.taskListId === taskListId)
              ?.taskListItems?.sort((taskListItem) => taskListItem.done)
              .map((taskListItem) => {
                return (
                  <TouchableOpacity key={taskListItem.taskId} onPress={() => completeTaskItem(taskListItem.taskId)}>
                    <View style={styles.item}>
                      <View style={styles.itemLeft}>
                        {taskListItem.done ? <MaterialIcons size={24} name="check" /> : <View style={styles.square}></View>}
                        <Text style={styles.itemText}>{taskListItem.taskTitle}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
          </View>
        </View>
      </ScrollView>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={"write a Task"} onChangeText={(text) => setTaskInput(text)} value={taskInput} />
        <TouchableOpacity onPress={addTaskItem}>
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
  item: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    flexDirection: "row",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#BCF6",
    opacity: 0.7,
    borderRadius: 5,
  },
  itemText: {
    maxWidth: "80%",
    marginLeft: 15,
  },
  circular: {
    width: 12,
    height: 12,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#55BCF6",
  },
});
