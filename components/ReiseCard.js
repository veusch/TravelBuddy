import react from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";

export default function ReiseCard(probs) {
  return (
    <View style={[globalStyles.ReiseCard, probs.small ? { width: "44%" } : { width: "100%" }]}>
      <Text style={styles.ReiseCardContent}>{probs.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ReiseCardContent: {
    color: "white",
    fontWeight: "white",
    padding: "7%",
    justifyContent: "space-around",
  },
});
