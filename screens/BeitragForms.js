import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { globalStyles } from "../styles/global.js";
import DateTimePicker from "@react-native-community/datetimepicker";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { SelectList } from "react-native-dropdown-select-list";
import { cities } from "../util/cities.js";
import * as yup from "yup";
import MapboxPlacesAutocomplete from "react-native-mapbox-places-autocomplete";
import Config from "react-native-config";

export default function RevieForm({ addJourney, setModalOpen }) {
  const [datePicker, setDatePicker] = useState("");
  const [selected, setSelected] = useState("");
  const [invalidDate, setInvalidDate] = useState(false);
  const [form, setForm] = useState({ reiseTitel: "", reiseLand: "", startDate: new Date(), endDate: new Date(), reiseBeschreibung: "", thumbnail: "" });

  const schema = yup.object({
    reiseTitel: yup.string().required().min(3),
  });

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
    <ScrollView>
      <View style={globalStyles.container}>
        {datePicker === "start" ? <DateTimePicker testID="dateTimePicker" value={form.startDate} mode="date" is24Hour={true} onChange={setStartDate} /> : datePicker === "end" ? <DateTimePicker testID="dateTimePicker" value={form.endDate} mode="date" is24Hour={true} onChange={setEndDate} /> : null}
        <View style={styles.WRapperR}>
          <View style={globalStyles.WrapperForms}>
            <View style={globalStyles.InputForms}>
              <TextInput
                style={globalStyles.input}
                placeholder="Name der Reise"
                multiline
                onChangeText={(e) => {
                  setForm((prev) => ({ ...prev, reiseTitel: e }));
                }}
                value={form.reiseTitel}
              />
            </View>

            <View style={[globalStyles.InputForms, styles.obenDrauf]}>
              <MapboxPlacesAutocomplete
                id="origin"
                placeholder="Wo warst du?"
                accessToken={"sk.eyJ1IjoidmV1c2NoIiwiYSI6ImNsZXI1bTBjMzB0MTEzcW83aW1xNjVoNjgifQ._FF_oDaMCx4TCKvzw33LbQ"}
                onPlaceSelect={(data) => {
                  setForm((prev) => ({ ...prev, reiseLand: data["place_name"] }));
                }}
                onClearInput={({ id }) => {
                  id === "origin";
                }}
                countryId=""
                containerStyle={{
                  marginBottom: 12,
                }}
                inputStyle={{ backgroundColor: "#C7DEF0" }}
              />
              {/* <TextInput
                style={globalStyles.input}
                placeholder="Reiseziel"
                onChangeText={(e) => {
                  setForm((prev) => ({ ...prev, reiseLand: e }));
                }}
                value={form.reiseLand}
              /> */}
            </View>
            <View style={globalStyles.InputForms}>
              <TextInput
                style={globalStyles.input}
                placeholder="Reisebeschreibung"
                multiline
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
    </ScrollView>
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
  obenDrauf: {
    position: "relative",
    zIndex: 100,
  },
});
