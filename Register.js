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
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Notifications from "./Notifications";

export default function Register({ navigation }) {
  const [text, onChangeText] = React.useState("");
  function registerUser() {
    if (text == "") alert("Please enter your name");
    else {
      saveUser();
      navigation.navigate("Home");
    }
  }

  function saveUser() {
    let user = text;
    AsyncStorage.setItem("user", user);
    AsyncStorage.setItem("currentImage", "0");
    AsyncStorage.setItem("checkInAchievement-Current", "10");
    AsyncStorage.setItem("affirmationsAchievement", "10");
    AsyncStorage.setItem("notificationTimer", "10:00");
    var date = new Date();
    Notifications.schduleNotification(date);
  }
  return (
    <ImageBackground
      source={require("./assets/signIn1.png")}
      style={styles.image}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>Welcome to X</Text>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Enter your first name</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
        </View>
        <TouchableWithoutFeedback onPress={registerUser}>
          <Image style={styles.arrow} source={require("./assets/arrow.png")} />
        </TouchableWithoutFeedback>
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
  heading: {
    marginTop: "15%",
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  headingContainer: {
    backgroundColor: "#39319D",
    width: "85%",
    marginLeft: "7.5%",
    marginTop: "5%",
    borderRadius: 25,
    height: 115,
    marginBottom: "30%",
  },
  headingText: {
    color: "#CAC0C0",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 25,
    marginTop: 15,
  },
  input: {
    height: 40,
    marginHorizontal: 25,
    marginVertical: 12,
    backgroundColor: "#171B7A",
    borderRadius: 10,
    paddingLeft: 10,
    color: "#CAC0C0",
  },
  arrow: {
    height: 50,
    width: 50,
    // marginTop: "70%",
    // marginLeft: "90%",
    transform: [{ rotate: "-90deg" }],
    position: "absolute",
    bottom: 18,
    alignSelf: "flex-end",
  },
});
