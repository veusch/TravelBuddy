import react from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import TagReviewCard from "./TagReviewCard";

export default function TagNotiz(probs, { navigation }) {
  return (
    <View style={styles.ReiseCard}>
      <View style={styles.ReiseCardContent}>{probs.children}</View>
      <Text>TagNotiz</Text>
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
