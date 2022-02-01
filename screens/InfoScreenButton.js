import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  ImageBackground,
  SafeAreaView,
  Dimensions,
  TouchableHighlight,
  Image,
} from "react-native";

export default function InfoScreenButton({ navigation, nextScreen }) {
  function navigateLifestyleScreen(screen) {
    navigation.navigate(screen);
  }

  return (
    <View
      style={{
        position: "absolute",
        top: "5%",
        alignSelf: "flex-end",
        right: "2%",
      }}
    >
      <TouchableHighlight
        style={{
          // justifyContent: "center",
          // alignItems: "center",
          backgroundColor: "#39319D",
          height: 30,
          width: 30,
          borderRadius: 25,
        }}
        underlayColor="#ccc"
        onPress={() => navigateLifestyleScreen(nextScreen)}
      >
        <Image
          style={{
            height: 30,
            width: 30,
            // left: "35%",
            // position: "absolute",
            tintColor: "white",
          }}
          source={require("../assets/info.png")}
        />
      </TouchableHighlight>
    </View>
  );
}
