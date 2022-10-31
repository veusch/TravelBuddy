import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { globalStyles } from "../styles/global.js";
import { Formik } from "formik";

export default function RevieForm() {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", days: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(probs) => (
          <View>
            <TextInput style={globalStyles.input} placeholder="Journey Title" onChangeText={probs.handleChange("title")} value={probs.values.title} />

            <TextInput style={globalStyles.input} placeholder="Where" onChangeText={probs.handleChange("body")} value={probs.values.body} />

            <TextInput style={globalStyles.input} keyboardType="numeric" placeholder="Travel Days?" onChangeText={probs.handleChange("days")} value={probs.values.days} />

            <Button title="erstellen" color={"maroon"} onPress={probs.handleSubmit}></Button>
          </View>
        )}
      </Formik>
    </View>
  );
}
