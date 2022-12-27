import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import WorldScreen from "../screens/WorldScreen";
import ListeBearbeiten from "../screens/ListeBearbeiten";
import SettingScreen from "../screens/SettingScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#ffffff",
          bottom: 2,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 15,
          height: 40,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Reisen" component={WorldScreen} />
      <Tab.Screen name="Listen" component={ListeBearbeiten} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
