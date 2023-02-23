import React, { useState, useContext } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, Button, StyleSheet, AppRegistry, Modal, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard, TextInput, ScrollView, Image } from "react-native";
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import RevieForm2 from "../screens/BeitragFormsDayReview";
import TagNotiz from "./TagNotiz";
import { globalStyles } from "../styles/global";
import StarRatingg from "../screens/StarRatingComponent";
import { AsyncStorage } from "react-native";

import { storeContext } from "../App";

export default function TagReviewCard(props) {
  const [modalOpen, setModalOpen] = useState(false);

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const { reisenContext } = useContext(storeContext);
  const [reisen, setReisen] = reisenContext;

  const {
    navigation,
    navigation: {
      state: {
        params: { reiseId, reiseTagId },
      },
    },
  } = props;

  const addEntry = async (review) => {
    let temp = reisen;

    temp
      ?.find((reise) => reise.reiseId === reiseId)
      ?.reiseTage?.find((reiseTag) => reiseTag.reiseTagId === reiseTagId)
      ?.reiseEntries?.push(review);

    setReisen(temp);

    await AsyncStorage.setItem("reisen", JSON.stringify(temp));
    forceUpdate();
    setModalOpen(false);
  };

  const removeEntry = async (tagebuchEintragId) => {
    // TODO: Funktioniert diese Funktion überhaupt?

    let temp = reisen;

    const entryIndex = temp
      ?.find((reise) => reise.reiseId === reiseId)
      ?.reiseTage?.find((reiseTag) => reiseTag.reiseTagId === reiseTagId)
      ?.reiseEntries?.findIndex((entry) => entry.tagebuchEintragId === tagebuchEintragId);

    temp
      ?.find((reise) => reise.reiseId === reiseId)
      ?.reiseTage?.find((reiseTag) => reiseTag.reiseTagId === reiseTagId)
      ?.reiseEntries?.splice(entryIndex, 1);

    setReisen(temp);

    await AsyncStorage.setItem("reisen", JSON.stringify(temp));
    forceUpdate();
  };

  return (
    <View style={styles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons name="close" style={{ ...styles.modalToggle, ...styles.modalClose }} size={24} onPress={() => setModalOpen(false)} />
            <RevieForm2 addEntry={addEntry}></RevieForm2>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <TouchableOpacity onPress={() => setModalOpen(true)}>
        <Image source={require("../images/neu.png")} style={globalStyles.neu} />
      </TouchableOpacity>
      <ScrollView>
        <Text style={globalStyles.headline}>{new Date(reisen?.find((reise) => reise.reiseId === reiseId)?.reiseTage?.find((reiseTag) => reiseTag.reiseTagId === reiseTagId)?.reiseTagDate).toLocaleDateString("de-DE")}</Text>
        {reisen
          ?.find((reise) => reise.reiseId === reiseId)
          ?.reiseTage?.find((reiseTag) => reiseTag.reiseTagId === reiseTagId)
          ?.reiseEntries?.map((reiseEntry) => (
            <TagNotiz removeEntry={removeEntry} tagebuchEintragId={reiseEntry.tagebuchEintragId} key={reiseEntry.tagebuchEintragId}>
              <Collapse>
                <CollapseHeader>
                  <View>
                    <Text style={styles.titelTagNotiz}>{reiseEntry.tagebucheintragTitle}</Text>
                  </View>
                </CollapseHeader>

                <CollapseBody style={styles.collapse}>
                  <Text style={styles.zusammenfassung}>{reiseEntry.tagebucheintragBody}</Text>
                  <StarRatingg></StarRatingg>
                </CollapseBody>
              </Collapse>
            </TagNotiz>
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  collapse: {
    backgroundColor: "#DFF1FF",
    width: 310,
  },

  tagebuch: {
    backgroundColor: "lightgrey",
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
  },

  zusammenfassung: {
    padding: 15,
  },

  titelTagNotiz: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
    marginBottom: 10,
  },

  textDay: {
    fontWeight: "bold",
    color: "#556076",
  },

  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginBottom: 0,
    marginClose: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "black",
    height: 64,
    margin: 32,
    alignSelf: "stretch",
    borderRadius: 6,
    paddingHorizontal: 16,
    fontSize: 24,
    backgroundColor: "white",
  },

  text: {
    marginTop: 32,
  },

  button: {
    marginTop: 32,
    backgroundColor: "white",
    marginHorizontal: 32,
    alignSelf: "stretch",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 6,
  },
});
