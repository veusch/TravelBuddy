import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import WorldScreen from "../screens/WorldScreen";
import PostScreen from "../screens/PostScreen";
import SettingScreen from "../screens/SettingScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="World" component={WorldScreen} />
      <Tab.Screen name="Post" component={PostScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;