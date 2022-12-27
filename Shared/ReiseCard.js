import react from "react";
import { StyleSheet, View, Text } from "react-native";

export default function ReiseCard(probs) {
  return (
    <View style={styles.ReiseCard}>
      <View style={styles.ReiseCardContent}>{probs.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  ReiseCard: {
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
    heigh: 200,
  },

  ReiseCardContent: {
    marginHorizontal: 18,
    marginVertical: 50,
  },
});
