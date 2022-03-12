import { StatusBar } from "expo-status-bar";
import React from "react";
import { BlurView } from "expo-blur";
import { StyleSheet, Text, ImageBackground, SafeAreaView } from "react-native";

export default function CheckInInfoScreen() {
  return (
    <ImageBackground source={require("../assets/4.jpg")} style={styles.image}>
      <SafeAreaView style={{ height: "100%", top: "5%" }}>
        <BlurView intensity={80} style={styles.container} tint="light">
          <Text style={styles.text}>Benefits of Daily Self-Monitoring</Text>
          <Text style={styles.text2}>
            {"\u2B24   "}
            Self-monitoring is the cornerstone of improving mental wellbeing and
            reducing stress and anxiety. Self-monitoring increases awareness,
            curiosity and consciousness within the user.
          </Text>
          <Text style={styles.text2}>
            {"\u2B24   "}
            Self-monitoring along with daily affirmations can really help
            identify and solve a users problems. Daily self-monitoring helps a
            user identify their mood, while daily affirmations help put their
            mood into words.
          </Text>
          <Text style={styles.text2}>
            {"\u2B24   "}
            The graph allows the user to plot and see their mood over the past 7
            days, giving them a real understanding of mood triggers such as
            anxiety and stress aswell as when they are ecstatic and feeling
            themselves.
          </Text>
          <Text style={styles.text2}>
            {"\u2B24   "}Consecutive good daily check-ins can help a person stay
            on track with their good mood helping to reduce stress and anxiety.
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
