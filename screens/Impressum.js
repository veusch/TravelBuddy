import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function Impressum() {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.impHeadline}>Impressum</Text>
      <View style={styles.Bgd}>
        <Text>
          Angaben gem. § 5 TMG{"\n"}
          <Text style={globalStyles.impBold}>Vorname, Name:</Text> <Text style={globalStyles.impLight}>Verena Eusch </Text>
          {"\n"}
          <Text style={globalStyles.impBold}>Adresse:</Text> Baumfeldweg 12 {"\n"}
          <Text style={globalStyles.impBold}>PLZ:</Text> 5020 Salzburg {"\n"} {"\n"}
          <Text style={globalStyles.impBold}>Telefon:</Text> +43664/657955 {"\n"}
          <Text style={globalStyles.impBold}>Fax:{"\n"}</Text>
          <Text style={globalStyles.impBold}>Mail:</Text> diplomprojekt@htl-salzburg.ac.at {"\n"}
          {"\n"}
          <Text style={globalStyles.impBold}>Umsatzsteuer-ID {"\n"}</Text> {"\n"}
          <Text style={globalStyles.impBold}>Umsatzsteuer-Identifikationsnummer</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Bgd: {
    backgroundColor: "#DFF1FF",
    width: "90%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 20,
  },
  container: { backgroundColor: "white", flex: 1 },
});
