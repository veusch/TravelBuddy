import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { globalStyles } from "../styles/global.js";
import { Formik } from "formik";
import { HeaderStyleInterpolators } from "react-navigation-stack";

export default function RevieForm({ addJourney }) {
  return (
    <View style={globalStyles.container}>
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
              <TextInput style={globalStyles.input} placeholder="Titel" onChangeText={probs.handleChange("title")} value={probs.values.title} />
            </View>
            <View style={styles.input}>
              <TextInput style={globalStyles.input} placeholder="Wo" onChangeText={probs.handleChange("body")} value={probs.values.body} />
            </View>
            <View style={styles.input}>
              <TextInput style={globalStyles.input} placeholder="Reisezusammenfassung" onChangeText={probs.handleChange("zusammenfassung")} value={probs.values.zusammenfassung} />
            </View>
            <View style={styles.input}>
              <TextInput style={globalStyles.input} keyboardType="numeric" placeholder="Wie lange" onChangeText={probs.handleChange("days")} value={probs.values.days} />
            </View>
            <View style={styles.Buttonv}>
              <Button title="erstellen" color={"green"} onPress={probs.handleSubmit}></Button>
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
