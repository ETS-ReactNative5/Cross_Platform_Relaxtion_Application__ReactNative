import { StatusBar } from "expo-status-bar";
import React from "react";
import { BlurView } from "expo-blur";
import { StyleSheet, Text, ImageBackground, SafeAreaView } from "react-native";

export default function AffirmationsInfoScreen() {
  return (
    <ImageBackground source={require("../assets/4.jpg")} style={styles.image}>
      <SafeAreaView style={{ height: "100%", top: "5%" }}>
        <BlurView intensity={80} style={styles.container} tint="light">
          <Text style={styles.text}>Benefits of Daily Affirmations</Text>
          <Text style={styles.text2}>
            {"\u2B24   "}
            To be successful with positive affirmations, you must be able to
            regulate your thoughts. This is an important skill to learn because
            once you have control of your mind, you can immediately stop all
            negative ideas. Instead of allowing negative ideas and dread to
            fester in your mind, you should take steps to rectify the issue by
            reorganizing your thoughts.
          </Text>
          <Text style={styles.text2}>
            {"\u2B24   "}
            Positive daily affirmations are a sufficient way to prepare for
            stressful conditions such as public speaking, interviews, etc,
            because they will keep you in the right shape to face any situation.
          </Text>
          <Text style={styles.text2}>
            {"\u2B24   "}
            Affirmations have assisted many individuals in making significant
            changes that changed their lives for the better.
          </Text>
          <Text style={styles.text2}>
            {"\u2B24   "}Affirmations are among the most crucial tools that you
            can use regarding stressful situations. Affirmations should always
            be practised using a positive tone.
          </Text>
        </BlurView>

        <StatusBar style="dark" />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "90%",
    height: "90%",
    alignSelf: "center",
    borderRadius: 50,
    alignItems: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  blurContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  text: {
    top: "5%",
    fontSize: 22,
    fontWeight: "600",
    position: "relative",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  text2: {
    top: "7%",
    fontSize: 15,
    fontWeight: "600",
    position: "relative",
    width: "90%",
    paddingBottom: "8%",
    fontWeight: "bold",
  },
});
