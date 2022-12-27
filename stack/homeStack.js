import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import ReviewEintraege from "../screens/reviewEintraege";
import TagReviewCard from "../Shared/TagReviewCard";

const screens = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Übersicht",
      //headerStyle: { backgroundColor: "#333" },
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
};
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#eee", height: 70 },
  },
});

export default createAppContainer(HomeStack);
