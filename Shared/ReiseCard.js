import react from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function ReiseCard(probs) {
  return (
    <View style={styles.ReiseCard}>
      <Text style={styles.Testi}>ReiseCarte</Text>
      <Text style={styles.ReiseCardContent}>{probs.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ReiseCard: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#556076",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowRadius: 6,
    shadowOpacity: 0.3,
    marginHorizontal: 4,
    marginVertical: 6,
    width: 200,
    heigh: 200,
  },

  Testi: {
    color: "white",
    fontWeight: "bold",
    padding: 10,
  },

  ReiseCardContent: {
    marginHorizontal: 18,
    marginVertical: 50,
    color: "white",
    fontWeight: "white",
  },
});
