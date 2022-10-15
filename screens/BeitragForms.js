import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { globalStyles } from "../styles/global.js";
import { Formik } from "formik";

export default function RevieForm() {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(probs) => (
          <View>
            <TextInput style={globalStyles.input} placeholder="Review title" onChangeText={probs.handleChange("title")} value={probs.values.title} />

            <TextInput style={globalStyles.input} placeholder="Review body" onChangeText={probs.handleChange("body")} value={probs.values.body} />

            <TextInput style={globalStyles.input} keyboardType="numeric" placeholder="Rating (1-5)" onChangeText={probs.handleChange("rating")} value={probs.values.rating} />

            <Button title="erstellen" color={"maroon"} onPress={probs.handleSubmit}></Button>
          </View>
        )}
      </Formik>
    </View>
  );
}
