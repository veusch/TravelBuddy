import React, { createContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import Navigator from "./stack/homeStack";
// import AsyncStorage  from "@react-native-async-storage/async-storage";
import { AsyncStorage } from "react-native";

import AppLoading from "expo-app-loading";
import UploadImage from "./screens/UploadImagee";

export const reisenContext = createContext();

const App = () => {
  const [reisen, setReisen] = useState();

  useEffect(() => {
    async function getDataFromStorage() {
      let tempReisen = await AsyncStorage.getItem("reisen");

      if (tempReisen !== null) {
        setReisen(JSON.parse(tempReisen));
      }
    }

    getDataFromStorage();
  }, []);

  return (
    <reisenContext.Provider value={{ reisen, setReisen }}>
      <Navigator>
        <UploadImage></UploadImage>
      </Navigator>
    </reisenContext.Provider>
  );
};

export default App;
