import { StatusBar } from "expo-status-bar";
import React from "react";
import { BlurView } from "expo-blur";
import { StyleSheet, Text, ImageBackground, SafeAreaView } from "react-native";

export default function BreathingInfoScreen() {
  return (
    <ImageBackground source={require("../assets/4.jpg")} style={styles.image}>
      <SafeAreaView style={{ height: "100%", top: "5%" }}>
        <BlurView intensity={80} style={styles.container} tint="light">
          <Text style={styles.text}>Benefits of Daily Breathing</Text>
          <Text style={styles.text2}>
            {"\u2B24   "}
            Daily breathing excercises help you relax, lowering the harmful
            effects of the stress hormone cortisol on your body. It lowers your
            heart rate and helps lower your blood pressure.
          </Text>
          <Text style={styles.text2}>
            {"\u2B24   "}
            One of the biggest benefits of daily breathing is reducing stress.
            Being stressed keeps your immune system from working at full
            capacity. This can make you more susceptible to numerous conditions.
          </Text>
          <Text style={styles.text2}>
            {"\u2B24   "}
            Creating a routine can be an excellent way to get in the habit of
            daily breathing exercises. Doing your exercises in the same place
            every day, somewhere that's peaceful and quiet is one habit to
            follow.
          </Text>
          <Text style={styles.text2}>
            {"\u2B24   "}Do breathing exercises at least once or twice daily,
            try to do them at the same time each day to reinforce the habit. Do
            these exercises for about 10-20 minutes at a time and will greatly
            improve your mental wellbeing.
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
