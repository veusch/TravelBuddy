import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global.js";
import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object({
  taskListTitle: yup.string().required().min(4),
});

export default function ListenForms({ addTask, setModalOpen }) {
  // TODO: Formik und Yup global raushauen und Input Validierung selber machen

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.headline}>Neue Liste{"\n"}erstellen</Text>
      <Formik
        initialValues={{ taskListTitle: "" }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          addTask(values);
          actions.resetForm();
        }}
      >
        {(probs) => (
          <View style={styles.WRapperR}>
            <View style={globalStyles.WrapperForms}>
              <View style={globalStyles.InputForms}>
                <TextInput style={globalStyles.input} onBlur={probs.handleBlur("taskListTitle")} placeholder="Name der Liste" onChangeText={probs.handleChange("taskListTitle")} value={probs.values.taskListTitle} />
              </View>
              <Text style={globalStyles.errorNachricht}>{probs.touched.taskListTitle && probs.errors.taskListTitle}</Text>
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
  input: {
    padding: 10,
  },
});
