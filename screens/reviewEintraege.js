import react from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import ReiseCard from "../Shared/ReiseCard";

export default function ReviewEintraege({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };
  return (
    <View style={StyleSheet.container}>
      <ReiseCard>
        <Text>{navigation.getParam("title")}</Text>
        <Text>{navigation.getParam("body")}</Text>
        <Text>{navigation.getParam("rating")}</Text>
      </ReiseCard>
      <Button title="Back to home screen" onPress={pressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    justifyContent: "center",
  },
});
