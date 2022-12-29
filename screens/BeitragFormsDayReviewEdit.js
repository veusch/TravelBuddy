import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, FlatList } from "react-native";
import { globalStyles } from "../styles/global.js";
import { Formik } from "formik";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import RevieForm2 from "./BeitragFormsDayReview.js";
import TagNotiz from "../Shared/TagNotiz.js";

//const aiai = navigation.getParam("pic");
const RevieForm3 = (probs, { navigation, addJourney }) => {
  //const rating = navigation.getParam("body1");

  return (
    <View style={globalStyles.container}>
      <Text>Hallo</Text>
      <Formik
        initialValues={{ title: "", body: "", days: "", zusammenfassung: "" }}
        onSubmit={(values, actions) => {
          addJourney(values);
          actions.resetForm();
          console.log(values);
        }}
      >
        {(probs) => (
          <View style={styles.inputWrapper}>
            <View style={styles.input}>
              <TextInput style={globalStyles.input} placeholder={probs.children} onChangeText={probs.handleChange("title")} value={probs.values.title} />
            </View>
            <View style={styles.input}>
              <TextInput style={globalStyles.input} placeholder="Wohin gings" onChangeText={probs.handleChange("body")} value={probs.values.body} />
            </View>
            <View style={styles.input}>
              <TextInput multiline={true} style={globalStyles.input} placeholder="Reisezusammenfassung" onChangeText={probs.handleChange("zusammenfassung")} value={probs.values.zusammenfassung} />
            </View>

            <View style={styles.Buttonv}>
              <Button title="erstellen" color={"green"} onPress={probs.handleSubmit}></Button>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default RevieForm3;

const styles = StyleSheet.create({
  Buttonv: {
    paddingTop: 60,
  },
  input: {
    padding: 10,
  },
});
