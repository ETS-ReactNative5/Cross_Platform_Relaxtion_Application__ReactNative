import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";

export default function Register() {
  return (
    <ImageBackground source={require("../assets/4.jpg")} style={styles.image}>
      <SafeAreaView style={styles.container}>
        <Text>Welcome to X</Text>

        <StatusBar style="dark" />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
