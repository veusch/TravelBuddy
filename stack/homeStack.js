import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import ReviewEintraege from "../screens/reviewEintraege";
import TagReviewCard from "../components/TagReviewCard";
import ReisenScreen from "../screens/ReisenScreen";
import SettingScreen from "../screens/SettingScreen";
import ListenScreen from "../screens/ListenScreen";
import TaskItems from "../screens/TaskItems";
import UploadImage from "../screens/UploadImagee";
import Impressum from "../screens/Impressum";
import Datenschutzerklärung from "../screens/Datenschutz";
import Hintergrund from "../screens/Hintergrund";
import testAutocomplete from "../screens/test-autocomplete";
import HelpCenter from "../screens/HelpCenter";

import { ImageStore } from "react-native";
import Nutzungsbedingungen from "../screens/Nutzungsbedingungen";
Nutzungsbedingungen;
const screens = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Übersicht",
      //headerStyle: () => <header></header>,
    },
  },

  HelpCenter: { screen: HelpCenter, navigationOptions: { title: "" } },

  testAutocomplete: {
    screen: testAutocomplete,
    navigationOptions: { title: "" },
  },

  Hintergrund: {
    screen: Hintergrund,
    navigationOptions: { title: "" },
  },

  Impressum: {
    screen: Impressum,
    navigationOptions: {
      title: "",
    },
  },
  reviewEintraege: {
    screen: ReviewEintraege,
    navigationOptions: {
      title: "Reise",
      //headerStyle: { backgroundColor: "#eee" },
    },
  },
  reviewDay: {
    screen: TagReviewCard,
    navigationOptions: {
      title: "DayReview",
      //headerStyle: { backgroundColor: "#333" },
    },
  },

  settings: {
    screen: SettingScreen,
    navigationOptions: {
      title: "Settings",
    },
  },

  image: {
    screen: UploadImage,
    navigationOptions: {
      title: "Upload",
    },
  },

  Reisen: {
    screen: ReisenScreen,
    navigationOptions: {
      title: "",
    },
  },

  Listen: {
    screen: ListenScreen,
    navigationOptions: {
      title: "",
    },
  },

  ListeNeu: {
    screen: TaskItems,
    navigationOptions: {
      title: "Neue Liste",
    },
  },

  Datenschutzerklärung: {
    screen: Datenschutzerklärung,
    navigationOptions: {
      title: "",
    },
  },
  Nutzungsbedingungen: {
    screen: Nutzungsbedingungen,
    navigationOptions: { title: "" },
  },
};
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "white", height: 80 },
    headerTitleStyle: { alignSelf: "center" },
    //headerBackImage:
  },
});

export default createAppContainer(HomeStack);
