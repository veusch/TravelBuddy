import React from "react";
import { View, Text, Button, Stylesheet, AppRegistry } from "react-native";

const PostScreen = ({ navigation }) => {
  return (
    <view styles={styles.container}>
      <text>Post Screen</text>
      <Button title="Click here" onPress={() => alert("Button clicked")} />
    </view>
  );
};

export default PostScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
});
