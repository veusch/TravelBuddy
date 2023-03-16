import React, { useContext } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from "react-native";
import UploadImage from "./UploadImagee";
import { globalStyles } from "../styles/global";
import { storeContext } from "../App";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingScreen = ({ navigation }) => {
  const { backgroundContext, profileContext } = useContext(storeContext);
  const [backgroundImageNumber, setBackgroundImageNumber] = backgroundContext;
  const [profile, setProfile] = profileContext;

  return (
    <View style={styles.container}>
      <Image
        style={{ position: "absolute", opacity: 0.25, resizeMode: "repeat", top: 0, left: 0, width: "100%", height: "100%", zIndex: -100 }}
        source={
          backgroundImageNumber === 1
            ? require(`../images/Hintergruende/hintergrund_1.png`)
            : backgroundImageNumber === 2
            ? require(`../images/Hintergruende/hintergrund_2.png`)
            : backgroundImageNumber === 3
            ? require(`../images/Hintergruende/hintergrund_3.png`)
            : backgroundImageNumber === 4
            ? require(`../images/Hintergruende/hintergrund_4.png`)
            : backgroundImageNumber === 5
            ? require(`../images/Hintergruende/hintergrund_5.png`)
            : backgroundImageNumber === 6
            ? require(`../images/Hintergruende/hintergrund_6.png`)
            : require(`../images/Hintergruende/hintergrund_1.png`)
        }
      />
      <ScrollView>
        <View>
          <View style={styles.pic}>
            <UploadImage />
          </View>
          <View style={styles.name}>
            <TextInput
              onChangeText={async (e) => {
                setProfile((prev) => ({ ...prev, profileName: e }));
                await AsyncStorage.setItem("profile", JSON.stringify({ ...profile, profileName: e }));
              }}
              editable
              multiline
              numberOfLines={4}
              value={profile.profileName}
              defaultValue={"Dein Name"}
              maxLength={30}
              fontSize={26}
              textAlign={"center"}
            ></TextInput>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("Hintergrund")}>
            <View style={styles.Settings}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.textSettings}> Hintergrund</Text>
                <Image source={require("../images/right.png")} style={styles.right} />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.Settings}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.textSettings}> Privatsphäre</Text>
                <Image source={require("../images/right.png")} style={styles.right} />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Impressum")}>
            <View style={styles.Settings}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.textSettings}> Impressum</Text>
                <Image source={require("../images/right.png")} style={styles.right} />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.Settings}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.textSettings} onPress={() => navigation.navigate("Datenschutzerklärung")}>
                  {" "}
                  Datenschutzerklärung
                </Text>
                <Image source={require("../images/right.png")} style={styles.right} />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.Settings}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.textSettings} onPress={() => navigation.navigate("Nutzungsbedingungen")}>
                  Nutzungbedingungen
                </Text>
                <Image source={require("../images/right.png")} style={styles.right} />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Accounteinstellungen")}>
            <View style={styles.Settings}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.textSettings}> Accounteinstellungen</Text>
                <Image source={require("../images/right.png")} style={styles.right} />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("HelpCenter")}>
            <View style={styles.Settings}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.textSettings}> Helpcenter</Text>
                <Image source={require("../images/right.png")} style={styles.right} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={globalStyles.Footer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          {/*Home*/}
          <Image source={require("../images/home.png")} style={globalStyles.iconNavigator} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Reisen")}>
          {/*Reisen*/}
          <Image source={require("../images/eintrag.png")} style={globalStyles.iconNavigator} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Listen")}>
          {/*Listen*/}
          <Image source={require("../images/liste.png")} style={globalStyles.iconNavigator} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("settings")}>
          {/*Settings*/}
          <Image source={require("../images/profil-white.png")} style={globalStyles.iconNavigator} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  pic: {
    padding: 20,
  },

  right: {
    height: 18.5,
    width: 11,
  },

  textSettings: {
    fontFamily: "Regular",
  },
  Settings: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#DFF1FF",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowRadius: 6,
    shadowOpacity: 0.3,
    marginHorizontal: 4,
    marginVertical: 4,
    width: 250,
    heigh: 300,
    padding: 15,
    fontFamily: "Regular",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    height: 64,
    margin: 32,
    alignSelf: "stretch",
    borderRadius: 6,
    paddingHorizontal: 16,
    fontSize: 24,
    backgroundColor: "white",
  },

  text: {
    marginTop: 32,
    justifyContent: "center",
    alignItems: "center",
  },

  picture: {
    backgroundColor: "grey",
    height: 100,
    width: 100,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
    marginTop: 10,
  },
  name: { padding: 10, alignContent: "center", justifyContent: "center" },

  button: {
    marginTop: 10,
    backgroundColor: "white",
    marginHorizontal: 10,
    alignSelf: "stretch",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
});
