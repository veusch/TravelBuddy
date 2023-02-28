import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import ReiseCard from "../components/ReiseCard";
import { storeContext } from "../App";
import { MaterialIcons } from "@expo/vector-icons";
import { AsyncStorage } from "react-native";

export default function AlleReisen({ navigation }) {
  const { reisenContext } = useContext(storeContext);
  const [reisen, setReisen] = reisenContext;

  const deleteReise = async (item) => {
    setReisen((prev) => prev.filter((reise) => reise.reiseId !== item.reiseId));
    await AsyncStorage.setItem("reisen", JSON.stringify(reisen.filter((reise) => reise.reiseId !== item.reiseId)));
  };

  return (
    <View>
      {reisen?.map((item) => {
        return (
          <TouchableOpacity style={{ alignItems: "center", width: "100%" }} key={item.reiseId} onPress={() => navigation.navigate("reviewEintraege", { reiseId: item.reiseId })}>
            <ReiseCard small={navigation.state.routeName === "Home"}>
              <Text>{item.reiseTitel}</Text>
              <TouchableOpacity onPress={() => deleteReise(item)}>
                <MaterialIcons size={30} name="delete" color={"white"} />
              </TouchableOpacity>
            </ReiseCard>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
