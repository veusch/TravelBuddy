import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, Button, ScrollView, TouchableOpacity } from "react-native";
import TagCard from "../components/TagCard";
//import { ImagePicker, launchImageLibrary, launchCamera } from "react-native-image-picker";
import * as ImagePicker from "react-native-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { storeContext } from "../App";
import { globalStyles } from "../styles/global";

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
    <View style={styles.Wrapper}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={globalStyles.headline2}>{reisen.find((reise) => reise.reiseId === reiseId)?.reiseTitel}</Text>
          <Text style={globalStyles.headline2}>{reisen.find((reise) => reise.reiseId === reiseId)?.reiseLand}</Text>

          <View style={styles.kontext}>
            <Text style={styles.title}>{reisen.find((reise) => reise.reiseId === reiseId)?.reiseBeschreibung}</Text>
          </View>
          {reisen
            .find((reise) => reise.reiseId === reiseId)
            .reiseTage.map((reiseTag) => (
              <TouchableOpacity key={reiseTag.reiseTagId} onPress={() => presshandler(reiseTag.reiseTagId)}>
                <TagCard>
                  <Text style={{ color: "white" }}>{new Date(reiseTag.reiseTagDate).toLocaleDateString("de-DE")}</Text>
                </TagCard>
              </TouchableOpacity>
            ))}
        </View>
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
    backgroundColor: "white",
  },
  Wrapper: {
    backgroundColor: "white",
    flex: 1,
  },

  title: {
    color: "#213049",
    fontFamily: "Regular",
    fontSize: 16,
  },

  kontext: {
    //backgroundColor: "#EFF8FF",
    borderRadius: 20,
    padding: 20,
    margin: 10,
  },
});
