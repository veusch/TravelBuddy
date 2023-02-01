import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global.js";
import { Formik } from "formik";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import StarRatingg from "./StarRatingComponent.js";
export default function RevieForm({ addJourney }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", days: "", zusammenfassung: "", foto: "" }}
        onSubmit={(values, actions) => {
          addJourney(values);
          actions.resetForm();
        }}
      >
        {(probs) => (
          <View style={globalStyles.WrapperForms}>
            <View style={globalStyles.InputForms}>
              <TextInput style={globalStyles.input} placeholder="Name der Reise" onChangeText={probs.handleChange("title")} value={probs.values.title} />
            </View>
            <View style={globalStyles.InputForms}>
              <TextInput style={globalStyles.input} placeholder="Reiseziel" onChangeText={probs.handleChange("body")} value={probs.values.body} />
            </View>
            <View style={globalStyles.InputForms}>
              <TextInput style={globalStyles.input} placeholder="Reisebeschreibung" onChangeText={probs.handleChange("zusammenfassung")} value={probs.values.zusammenfassung} />
            </View>
            <View style={globalStyles.InputForms}>
              <TextInput style={globalStyles.input} keyboardType="numeric" placeholder="Wie lange" onChangeText={probs.handleChange("days")} value={probs.values.days} />
            </View>

            <View style={globalStyles.InputForms}>
              <TextInput style={globalStyles.input} placeholder="Titelbild" onChangeText={probs.handleChange("foto")} value={probs.values.foto} />
            </View>
            <View style={globalStyles.ButtonFlex}>
              <View style={globalStyles.ButtonForms}>
                <Button title="erstellen" color={"#C7DEF0"} onPress={probs.handleSubmit}></Button>
              </View>
              <View style={globalStyles.ButtonForms}>
                <Button title="erstellen" color={"#C7DEF0"} onPress={probs.handleSubmit}></Button>
              </View>

              <TouchableOpacity onPress={probs.handleSubmit} style={globalStyles.Opac}>
                <Text style={globalStyles.OpacText}>Erstellen</Text>
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
  inputWrapper: {
    backgroundColor: "red",
  },
});
