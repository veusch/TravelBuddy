import react from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import TagReviewCard from "../components/TagReviewCard";

export default function TagCard(probs, { navigation }) {
  return (
    <View style={styles.ReiseCard}>
      <View style={styles.ReiseCardContent}>{probs.children}</View>
      <Text>TagCarte</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ReiseCard: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#213049",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowRadius: 6,
    shadowOpacity: 0.3,
    marginHorizontal: 4,
    marginVertical: 6,
    width: 400,
    heigh: 200,
  },

  ReiseCardContent: {
    marginHorizontal: 18,
    marginVertical: 50,
  },
});
