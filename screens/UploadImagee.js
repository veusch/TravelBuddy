import React, { useState, useEffect } from "react";
import { Image, View, Platform, TouchableOpacity, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
export default function UploadImage() {
  useEffect(() => {
    checkForCameraRollPermission();
  }, []);

  const checkForCameraRollPermission = async () => {
    const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
    // if (status !== "granted") {
    //   alert("Bitte erteilen Sie in den Einstellungen Ihres Systems Kamera-Berechtigungen");
    // }
  };
  const [image, setImage] = useState(null);

  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!_image.cancelled) {
      setImage(_image.uri);
      console.log(_image.uri);
    }
  };
  return (
    <View style={imageUploaderStyles.container}>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <View style={imageUploaderStyles.uploadBtnContainer}>
        <TouchableOpacity onPress={addImage} style={imageUploaderStyles.uploadBtn}>
          <Text>{image ? "Edit" : "Upload"} Image</Text>
          <AntDesign name="camera" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const imageUploaderStyles = StyleSheet.create({
  container: {
    elevation: 2,
    height: 200,
    width: 200,
    backgroundColor: "#213049",
    position: "relative",
    borderRadius: 999,
    overflow: "hidden",
  },
  uploadBtnContainer: {
    opacity: 0.7,
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "lightgrey",
    width: "100%",
    height: "25%",
  },
  uploadBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
