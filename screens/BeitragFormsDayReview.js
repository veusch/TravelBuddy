import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global.js";
import { Formik } from "formik";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import UploadImage from "./UploadImagee.js";
import StarRatingg from "./StarRatingComponent.js";
import { generateId } from "../util/generateId.js";
import * as yup from "yup";

const schema = yup.object({
  tagebucheintragTitle: yup.string().required().min(3),

  tagebucheintragBody: yup.string().required().min(4),
  tagebuchEintragZiel: yup.string().required(),
});

export default function RevieForm2({ addEntry, navigation, setModalOpen }) {
  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <Formik
          initialValues={{ tagebucheintragTitle: "", tagebuchEintragTime: new Date(), tagebuchEintragZiel: "", tagebucheintragBody: "", tagebucheintragImage: "", tagebuchEintragId: generateId(10) }}
          validationSchema={schema}
          onSubmit={(values, actions) => {
            addEntry(values);

            actions.resetForm();
          }}
        >
          {(probs) => (
            <View style={styles.inputWrapper}>
              <View style={globalStyles.WrapperForms}>
                <View style={globalStyles.InputForms}>
                  <TextInput multiline style={globalStyles.input} placeholder="Titel" onBlur={probs.handleBlur("tagebucheintragTitle")} onChangeText={probs.handleChange("tagebucheintragTitle")} value={probs.values.title} />
                </View>
                <Text style={globalStyles.errorNachricht}>{probs.touched.tagebucheintragTitle && probs.errors.tagebucheintragTitle}</Text>

                <View style={globalStyles.InputForms}>
                  <TextInput multiline style={globalStyles.input} placeholder="Wohin gings" onChangeText={probs.handleChange("tagebuchEintragZiel")} value={probs.values.body1} />
                </View>
                <Text style={globalStyles.errorNachricht}>{probs.touched.tagebuchEintragZiel && probs.errors.tagebuchEintragZiel}</Text>

                <View style={globalStyles.InputForms}>
                  <TextInput multiline={true} style={globalStyles.input} placeholder="Was hast du erlebt?" onChangeText={probs.handleChange("tagebucheintragBody")} onBlur={probs.handleBlur("tagebucheintragBody")} value={probs.values.zusammenfassung} />
                </View>
                <Text style={globalStyles.errorNachricht}>{probs.touched.tagebucheintragBody && probs.errors.tagebucheintragBody}</Text>

                <View style={globalStyles.InputForms}>
                  <TextInput style={globalStyles.input} placeholder="Foto hinzufügen" onChangeText={probs.handleChange("tagebucheintragImage")} value={probs.values.pic} />
                </View>

                <UploadImage></UploadImage>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  Buttonv: {
    paddingTop: 60,
  },
  input: {
    padding: 10,
  },
});
