import React, { createContext, useEffect, useState } from "react";
import Navigator from "./stack/homeStack";
import { AsyncStorage } from "react-native";
import UploadImage from "./screens/UploadImagee";

export const storeContext = createContext();

const App = () => {
  const [reisen, setReisen] = useState();
  const [tasks, setTasks] = useState();

  useEffect(() => {
    async function getDataFromStorage() {
      let tempReisen = await AsyncStorage.getItem("reisen");
      let tempTasks = await AsyncStorage.getItem("tasks");

      if (tempReisen !== null) {
        setReisen(JSON.parse(tempReisen));
      } else {
        setReisen([]);
      }

      if (tempTasks !== null) {
        setTasks(JSON.parse(tempTasks));
      } else {
        setTasks([]);
      }
    }

    getDataFromStorage();
  }, []);

  return (
    <storeContext.Provider value={{ reisenContext: [reisen, setReisen], tasksContext: [tasks, setTasks] }}>
      <Navigator>
        <UploadImage></UploadImage>
      </Navigator>
    </storeContext.Provider>
  );
};

export default App;
