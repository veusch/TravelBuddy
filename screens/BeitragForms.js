import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global.js";
import { Formik } from "formik";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function RevieForm({ addJourney, setModalOpen }) {
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDatePickerOpen(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === "android") {
      setDatePickerOpen(false);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ reiseTitel: "", reiseLand: "", startDate: "", endDate: "", reiseBeschreibung: "", thumbnail: "" }}
        onSubmit={(values, actions) => {
          addJourney(values);
          actions.resetForm();
        }}
        onReset={() => {
          setModalOpen(false);
        }}
      >
        {(props) => (
          <>
            {datePickerOpen && <DateTimePicker testID="dateTimePicker" value={startDate} mode="date" is24Hour={true} onChange={onChange} />}
            <View style={styles.WRapperR}>
              <View style={globalStyles.WrapperForms}>
                <View style={globalStyles.InputForms}>
                  <TextInput style={globalStyles.input} placeholder="Name der Reise" onChangeText={props.handleChange("reiseTitel")} value={props.values.reiseTitel} />
                </View>
                <View style={globalStyles.InputForms}>
                  <TextInput style={globalStyles.input} placeholder="Reiseziel" onChangeText={props.handleChange("reiseLand")} value={props.values.reiseLand} />
                </View>
                <View style={globalStyles.InputForms}>
                  <TextInput style={globalStyles.input} placeholder="Reisebeschreibung" onChangeText={props.handleChange("reiseBeschreibung")} value={props.values.reiseBeschreibung} />
                </View>
                <View style={globalStyles.InputForms}>
                  <TextInput style={globalStyles.input} keyboardType="numeric" placeholder="Startdatum" onChangeText={props.handleChange("startDate")} value={props.values.startDate} />
                </View>
                <View style={globalStyles.InputForms}>
                  <TextInput style={globalStyles.input} keyboardType="numeric" placeholder="Enddatum" onChangeText={props.handleChange("endDate")} value={props.values.endDate} />
                </View>

                <View style={globalStyles.InputForms}>
                  <TextInput style={globalStyles.input} placeholder="Titelbild" onChangeText={props.handleChange("thumbnail")} value={props.values.thumbnail} />
                </View>
              </View>
              <View style={globalStyles.ButtonFlex}>
                <TouchableOpacity onPress={props.handleReset} style={globalStyles.Opac}>
                  <Text style={globalStyles.OpacText}>Abbrechen</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.handleSubmit} style={globalStyles.Opac}>
                  <Text style={globalStyles.OpacText}>Erstellen</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
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
