import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { storeContext } from "../App";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { globalStyles } from "../styles/global";

export default function AlleReisen({ navigation }) {
  const { reisenContext } = useContext(storeContext);
  const [reisen, setReisen] = reisenContext;

  const deleteReise = async (item) => {
    setReisen((prev) => prev.filter((reise) => reise.reiseId !== item.reiseId));
    await AsyncStorage.setItem("reisen", JSON.stringify(reisen.filter((reise) => reise.reiseId !== item.reiseId)));
  };

  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
      {reisen?.map((item) => (
        <TouchableOpacity style={{ padding: 17, justifyContent: "space-around", alignItems: "center", flexDirection: "row", borderRadius: 20, margin: 5, width: navigation.state.routeName === "Home" ? "47%" : "97%", backgroundColor: "#213049" }} key={item.reiseId} onPress={() => navigation.navigate("reviewEintraege", { reiseId: item.reiseId })}>
          <Text style={{ color: "white", paddingRight: 20 }}>{item.reiseTitel}</Text>
          <TouchableOpacity onPress={() => deleteReise(item)}>
            <MaterialIcons size={30} name="delete" color={"white"} />
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </View>
  );
}
