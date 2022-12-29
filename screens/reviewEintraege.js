import react from "react";
import { StyleSheet, View, Text, Button, ScrollView } from "react-native";
import ReiseCard from "../Shared/ReiseCard";
import TagCard from "../Shared/TagCard";
//import { ImagePicker, launchImageLibrary, launchCamera } from "react-native-image-picker";
import * as ImagePicker from "react-native-image-picker";
import { MaterialIcons } from "@expo/vector-icons";

export default function ReviewEintraege({ navigation }) {
  const presshandler = () => {
    navigation.navigate("reviewDay");
  };

  const handleChoosePhoto = () => {
    const options = {};
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log("response", response);
    });
  };

  const rating = navigation.getParam("days");
  var losge = [];
  for (let i = 0; i < rating; i++) {
    losge.push(
      <TagCard key={i}>
        <Text>Tag {i}</Text>
        <Button title="Edit" onPress={presshandler} />
      </TagCard>
    );
  }

  return (
    <ScrollView style={StyleSheet.container}>
      <ReiseCard>
        <Text style={styles.title}>{navigation.getParam("title")}</Text>
        <Text>{navigation.getParam("body")}</Text>
        <Text>{navigation.getParam("days")}</Text>

        <Text>"Hallo das ist die Reise Card"</Text>
      </ReiseCard>
      {losge}

      <Button title="Choose Photo" onPress={handleChoosePhoto}></Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: "white",
    fontWeight: "bold",
  },
});
