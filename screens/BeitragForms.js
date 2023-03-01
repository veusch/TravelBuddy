import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global.js";
import DateTimePicker from "@react-native-community/datetimepicker";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function RevieForm({ addJourney, setModalOpen }) {
  const [datePicker, setDatePicker] = useState("");
  const [invalidDate, setInvalidDate] = useState(false);
  const [form, setForm] = useState({ reiseTitel: "", reiseLand: "", startDate: new Date(), endDate: new Date(), reiseBeschreibung: "", thumbnail: "" });

  const setStartDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDatePicker("");
    setForm((prev) => ({ ...prev, startDate: currentDate }));
  };

  const setEndDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDatePicker("");
    setForm((prev) => ({ ...prev, endDate: currentDate }));
  };

  const handleSubmit = () => {
    if (new Date(form.startDate).valueOf() - new Date(form.endDate).valueOf() <= 0) {
      addJourney(form);
      setForm({ reiseTitel: "", reiseLand: "", startDate: new Date(), endDate: new Date(), reiseBeschreibung: "", thumbnail: "" });
      setInvalidDate(false);
    } else {
      setInvalidDate(true);
    }
  };

  return (
    <View style={globalStyles.container}>
      {datePicker === "start" ? (
        <DateTimePicker testID="dateTimePicker" value={form.startDate} mode="date" is24Hour={true} onChange={setStartDate} />
      ) : datePicker === "end" ? (
        <DateTimePicker testID="dateTimePicker" value={form.endDate} mode="date" is24Hour={true} onChange={setEndDate} />
      ) : null}
      <View style={styles.WRapperR}>
        <View style={globalStyles.WrapperForms}>
          <View style={globalStyles.InputForms}>
            <TextInput
              style={globalStyles.input}
              placeholder="Name der Reise"
              onChangeText={(e) => {
                setForm((prev) => ({ ...prev, reiseTitel: e }));
              }}
              value={form.reiseTitel}
            />
          </View>
          <View style={globalStyles.InputForms}>
            {/* <TextInput
              style={globalStyles.input}
              placeholder="Reiseziel"
              onChangeText={(e) => {
                setForm((prev) => ({ ...prev, reiseLand: e }));
              }}
              value={form.reiseLand}
            /> */}
            <AddressAutofill accessToken="pk.eyJ1IjoidmV1c2NoIiwiYSI6ImNsZXBrZWo3ODBkYjIzc281bGVkYjJzYnMifQ.fPN5YRFzmO34d2p12mPCgw">
              <input name="address" placeholder="Address" type="text" autoComplete="address-line1" />
            </AddressAutofill>
          </View>
          <View style={globalStyles.InputForms}>
            <TextInput
              style={globalStyles.input}
              placeholder="Reisebeschreibung"
              onChangeText={(e) => {
                setForm((prev) => ({ ...prev, reiseBeschreibung: e }));
              }}
              value={form.reiseBeschreibung}
            />
          </View>
          <View style={globalStyles.InputForms}>
            <TouchableOpacity onPress={() => setDatePicker("start")} style={styles.reset}>
              <Text style={globalStyles.InputForms}>{form.startDate.toLocaleDateString("de-DE").toString()}</Text>
            </TouchableOpacity>
          </View>
          <View style={[globalStyles.InputForms, invalidDate && styles.invalid]}>
            <TouchableOpacity onPress={() => setDatePicker("end")} style={styles.reset}>
              <Text style={[globalStyles.InputForms, invalidDate && styles.invalid]}>{form.endDate.toLocaleDateString("de-DE").toString()}</Text>
            </TouchableOpacity>
          </View>

          <View style={globalStyles.InputForms}>
            <TextInput style={globalStyles.input} placeholder="Titelbild" onChangeText={() => {}} value={form.thumbnail} />
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
          <TouchableOpacity onPress={handleSubmit} style={globalStyles.Opac}>
            <Text style={globalStyles.OpacText}>Erstellen</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  reset: {
    margin: 0,
    padding: 0,
  },
  invalid: {
    backgroundColor: "red",
  },
});
