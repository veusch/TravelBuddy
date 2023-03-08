import React, { createContext, useEffect, useState } from "react";
import Navigator from "./stack/homeStack";
import { useFonts } from "expo-font";
import { AsyncStorage } from "react-native";

export const storeContext = createContext();

const App = () => {
  const [reisen, setReisen] = useState();
  const [tasks, setTasks] = useState();
  const [backgroundImageNumber, setBackgroundImageNumber] = useState(1);
  const [fontsLoaded] = useFonts({
    Bold: require("./assets/fonts/SF-Pro-Rounded-Bold.otf"),
    Medium: require("./assets/fonts/SF-Pro-Rounded-Medium.otf"),
    Light: require("./assets/fonts/SF-Pro-Rounded-Light.otf"),
    Regular: require("./assets/fonts/SF-Pro-Rounded-Regular.otf"),
  });

  useEffect(() => {
    async function getDataFromStorage() {
      let tempReisen = await AsyncStorage.getItem("reisen");
      let tempTasks = await AsyncStorage.getItem("tasks");
      let tempBackgroundImageNumber = await AsyncStorage.getItem("backgroundImageNumber");

      // await AsyncStorage.clear();

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

      if (tempBackgroundImageNumber !== null) {
        setBackgroundImageNumber(JSON.parse(tempBackgroundImageNumber));
      } else {
        setBackgroundImageNumber(1);
      }
    }

    getDataFromStorage();
  }, []);

  if (!fontsLoaded) return null;

  return (
    <storeContext.Provider value={{ reisenContext: [reisen, setReisen], tasksContext: [tasks, setTasks], backgroundContext: [backgroundImageNumber, setBackgroundImageNumber] }}>
      <Navigator />
    </storeContext.Provider>
  );
};

export default App;
