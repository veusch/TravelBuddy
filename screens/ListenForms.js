import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { globalStyles } from "../styles/global.js";
import { Formik } from "formik";
export default function ListenForms({ addTask }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "" }}
        onSubmit={(values, actions) => {
          addTask(values);
          actions.resetForm();
        }}
      >
        {(probs) => (
          <View style={styles.inputWrapper}>
            <View style={styles.input}>
              <TextInput style={globalStyles.input} placeholder="Name der Liste" onChangeText={probs.handleChange("title")} value={probs.values.title} />
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
