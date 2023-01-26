import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import ReviewEintraege from "../screens/reviewEintraege";
import TagReviewCard from "../components/TagReviewCard";
import ReisenScreen from "../screens/WorldScreen";
import SettingScreen from "../screens/SettingScreen";
import ListeBearbeiten from "../screens/ListeBearbeiten";
import ListeBearbeiten1 from "../screens/ListeBearbeiten1";
import UploadImage from "../screens/UploadImagee";

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
      title: "ReisenScreen",
    },
  },

  Listen: {
    screen: ListeBearbeiten,
    navigationOptions: {
      title: "Meine Listen",
    },
  },

  ListeNeu: {
    screen: ListeBearbeiten1,
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
  },
});

export default createAppContainer(HomeStack);
