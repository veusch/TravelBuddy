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
import { ImageStore } from "react-native";

const screens = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Übersicht",
      //headerStyle: () => <header></header>,
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
      title: "Meine Listen",
    },
  },

  ListeNeu: {
    screen: TaskItems,
    navigationOptions: {
      title: "Neue Liste",
    },
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
