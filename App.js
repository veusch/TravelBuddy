import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import Navigator from "./stack/homeStack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";
import UploadImage from "./screens/UploadImagee";

const App = () => {
  return (
    //<Context></Context>
    <Navigator>
      <UploadImage></UploadImage>
    </Navigator>
  );
};

export default App;
