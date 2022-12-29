import react from "react";
import { StyleSheet, View, Text } from "react-native";

export default function ListenCard(probs) {
  return (
    <View style={styles.ListenCard}>
      <Text style={styles.Testi}>ListenCard</Text>
      <Text style={styles.ListenCardContent}>{probs.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ListenCard: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#556076",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowRadius: 6,
    shadowOpacity: 0.3,
    marginHorizontal: 4,
    marginVertical: 6,
    width: 180,
    heigh: 200,
  },

  Testi: {
    color: "white",
    fontWeight: "bold",
    padding: 10,
  },

  ListenCardContent: {
    marginHorizontal: 18,
    marginVertical: 50,
    color: "white",
    fontWeight: "white",
  },
});
