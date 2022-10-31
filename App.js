import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import Navigator from "./stack/homeStack";

const App = () => {
  return (
    (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    ),
    (<Navigator></Navigator>)
  );
};

export default App;
