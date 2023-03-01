import React, { useEffect } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import HintergrundCard from "../components/HintergrundCard";
import ListenCard from "../components/ListenCard";
import { globalStyles } from "../styles/global";
import { useState } from "react";

export default function Hintergrund() {
  const [border, setBorder] = useState({ styles });
  const handlePress = () => {
    console.log("hallo");
  };

  return (
    <View style={styles.container}>
      <Text style={globalStyles.impHeadline}>Hintergrund</Text>
      <View style={styles.hintergrundWrapper}>
        <TouchableOpacity
          onPress={() => {
            handlePress;
          }}
        >
          <Image source={require("../images/Hintergruende/blatter.png")} style={styles.HintergrundCard} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require("../images/Hintergruende/Flieger.png")} style={styles.HintergrundCard} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require("../images/Hintergruende/Koffer.png")} style={styles.HintergrundCard} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require("../images/Hintergruende/Raeder.png")} style={styles.HintergrundCard} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require("../images/Hintergruende/Zuege.png")} style={styles.HintergrundCard} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require("../images/Hintergruende/Wolken.png")} style={styles.HintergrundCard} />
        </TouchableOpacity>
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
  container: {
    backgroundColor: "white",
    flex: 1,
  },

  img: {
    width: "40%",
    height: "20%",
    backgroundColor: "red",
  },

  HintergrundCard: {
    borderRadius: 20,
    backgroundColor: "white",
    marginHorizontal: 7,
    marginVertical: 10,
    width: 150,
    height: 120,
    borderColor: "lightgrey",
    borderWidth: 2,
  },

  hintergrundWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
  },
});
