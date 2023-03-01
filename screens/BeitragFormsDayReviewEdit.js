import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global.js";
import { Formik } from "formik";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import RevieForm2 from "./BeitragFormsDayReview.js";
import TagNotiz from "../components/TagNotiz.js";

export default function RevieForm3(probs, { navigation, addJourney, setModalOpen }) {
  //const aiai = navigation.getParam("pic");

  //const rating = navigation.getParam("body1");

  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", days: "", zusammenfassung: "" }}
        onSubmit={(values, actions) => {
          addJourney(values);
          actions.resetForm();
        }}
      >
        {(probs) => (
          <View style={styles.inputWrapper}>
            <View style={globalStyles.WrapperForms}>
              <View style={globalStyles.InputForms}>
                <TextInput style={globalStyles.input} placeholder={probs.children} onChangeText={probs.handleChange("title")} value={probs.values.title} />
              </View>
              <View style={globalStyles.InputForms}>
                <TextInput style={globalStyles.input} placeholder="Wohin gings" onChangeText={probs.handleChange("body")} value={probs.values.body} />
              </View>
              <View style={globalStyles.InputForms}>
                <TextInput multiline={true} style={globalStyles.input} placeholder="Reisezusammenfassung" onChangeText={probs.handleChange("zusammenfassung")} value={probs.values.zusammenfassung} />
              </View>
            </View>

            <View style={globalStyles.ButtonFlex}>
              <TouchableOpacity
                onPress={() => {
                  setModalOpen(false);
                }}
                style={globalStyles.Opac}
              >
                <Text style={globalStyles.OpacText}>Abbrechen</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={probs.handleSubmit} style={globalStyles.Opac}>
                <Text style={globalStyles.OpacText}>Erstellen</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  Buttonv: {
    paddingTop: 60,
  },
  input: {
    padding: 10,
  },
});
