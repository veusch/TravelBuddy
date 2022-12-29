import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard, FlatList } from "react-native";
import TagReviewCard from "./TagReviewCard";
import RevieForm3 from "../screens/BeitragFormsDayReviewEdit";
import ReiseCard from "./ReiseCard";
import { MaterialIcons } from "@expo/vector-icons";

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

      <View style={styles.ReiseCardContent}>{probs.children}</View>
      <Text>TagNotizzz</Text>
      <Text>Edit</Text>
      <TouchableOpacity onPress={() => setModalOpen(true)}>
        <Text>Edit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  ReiseCard: {
    flex: 1,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowRadius: 6,
    shadowOpacity: 0.3,
    marginHorizontal: 4,
    marginVertical: 6,
    width: 200,
  },

  ReiseCardContent: {
    marginHorizontal: 18,
    marginVertical: 15,
  },
});
