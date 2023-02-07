import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global.js";
import { Formik } from "formik";
export default function ListenForms({ addTask }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.headline}>Neue Liste{"\n"}erstellen</Text>

      <Formik
        initialValues={{ taskListTitle: "" }}
        onSubmit={(values, actions) => {
          addTask(values);
          actions.resetForm();
        }}
      >
        {(probs) => (
          <View style={styles.WRapperR}>
            <View style={globalStyles.WrapperForms}>
              <View style={globalStyles.InputForms}>
                <TextInput style={globalStyles.input} placeholder="Name der Liste" onChangeText={probs.handleChange("taskListTitle")} value={probs.values.taskListTitle} />
              </View>
            </View>
            <View style={globalStyles.ButtonFlex}>
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
  input: {
    padding: 10,
  },
});
