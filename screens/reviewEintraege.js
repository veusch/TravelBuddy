import React from "react";
import { StyleSheet, View, Text, Button, ScrollView, TouchableOpacity } from "react-native";
import ReiseCard from "../components/ReiseCard";
import TagCard from "../components/TagCard";
//import { ImagePicker, launchImageLibrary, launchCamera } from "react-native-image-picker";
import * as ImagePicker from "react-native-image-picker";
import { MaterialIcons } from "@expo/vector-icons";

export default function ReviewEintraege({ navigation }) {
  const presshandler = () => {
    navigation.navigate("reviewDay");
  };

  // TODO: WTF passiert hier?

  const rating = navigation.getParam("days");
  let tageAnzeigen = [];
  for (let i = 0; i < rating; i++) {
    tageAnzeigen.push(
      <TouchableOpacity onPress={presshandler}>
        <TagCard key={i}>
          <Text>Tag {i + 1}</Text>
        </TagCard>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <ReiseCard>
          <Text style={styles.title}>{navigation.getParam("title")}</Text>
          <Text>{navigation.getParam("body")}</Text>
          <Text>{navigation.getParam("days")}</Text>

          <Text>"Hallo das ist die Reise Card"</Text>
        </ReiseCard>
        {tageAnzeigen}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },

  title: {
    color: "white",
    fontWeight: "bold",
  },
});
