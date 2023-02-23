import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, Button, ScrollView, TouchableOpacity } from "react-native";
import ReiseCard from "../components/ReiseCard";
import TagCard from "../components/TagCard";
//import { ImagePicker, launchImageLibrary, launchCamera } from "react-native-image-picker";
import * as ImagePicker from "react-native-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { storeContext } from "../App";

export default function ReviewEintraege(props) {
  const { reisenContext } = useContext(storeContext);
  const [reisen, setReisen] = reisenContext;

  const presshandler = (id) => {
    navigation.navigate("reviewDay", { reiseTagId: id, reiseId: reiseId });
  };

  const {
    navigation,
    navigation: {
      state: {
        params: { reiseId },
      },
    },
  } = props;

  return (
    <View style={styles.container}>
      <ScrollView>
        <ReiseCard>
          <Text style={styles.title}>{reisen.find((reise) => reise.reiseId === reiseId)?.reiseBeschreibung}</Text>
        </ReiseCard>
        {reisen
          .find((reise) => reise.reiseId === reiseId)
          .reiseTage.map((reiseTag) => (
            <TouchableOpacity key={reiseTag.reiseTagId} onPress={() => presshandler(reiseTag.reiseTagId)}>
              <TagCard>
                <Text style={{ color: "white" }}>{new Date(reiseTag.reiseTagDate).toLocaleDateString("de-DE")}</Text>
              </TagCard>
            </TouchableOpacity>
          ))}
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
