import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard, FlatList, Image } from "react-native";
import TagReviewCard from "./TagReviewCard";
import RevieForm3 from "../screens/BeitragFormsDayReviewEdit";
import ReiseCard from "./ReiseCard";
import { MaterialIcons } from "@expo/vector-icons";
import StarRatingg from "../screens/StarRatingComponent";
import { globalStyles } from "../styles/global";

export default function TagNotiz(probs, { navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [eintraege, setEintraege] = useState([]);
  const addJourney = (review) => {
    review.key = Math.random().toString();
    setEintraege((currentEintraeg) => {
      return [review, ...currentEintraeg];
    });
    setModalOpen(false);
  };

  return (
    <View style={styles.ReiseCard}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons name="close" style={{ ...styles.modalToggle, ...styles.modalClose }} size={24} onPress={() => setModalOpen(false)} />
            <RevieForm3 addJourney={addJourney}> </RevieForm3>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <View style={styles.besides}>
        <View style={styles.ReiseCardContent}>{probs.children}</View>
        <View style={styles.bearbeitenIcon}>
          <TouchableOpacity onPress={() => setModalOpen(true)}>
            <Image source={require("../images/bearbeiten.png")} style={globalStyles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ReiseCard: {
    flex: 1,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#213049",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowRadius: 6,
    shadowOpacity: 0.3,
    marginHorizontal: 4,
    marginVertical: 6,
    width: 310,
  },
  bearbeitenIcon: {
    backgroundColor: "green",
    width: 40,
    height: 40,
    alignItems: "center",
  },

  Edit: {
    color: "white",
    padding: "10%",
  },

  ReiseCardContent: {
    marginHorizontal: 18,
    marginVertical: 15,
    color: "white",
  },

  besides: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
  },
});
