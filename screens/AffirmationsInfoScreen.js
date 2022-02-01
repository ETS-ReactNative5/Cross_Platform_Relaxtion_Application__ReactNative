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
            Virtually any form of exercise, from aerobics to yoga, can act as a
            stress reliever. If you're not an athlete or even if you're out of
            shape, you can still make a little exercise go a long way toward
            stress management.
          </Text>
          <Text style={styles.text2}>
            {"\u2B24   "}
            It pumps up your endorphins. Physical activity may help bump up the
            production of your brain's feel-good neurotransmitters reducing
            stress and anxiety.
          </Text>
          <Text style={styles.text2}>
            {"\u2B24   "}
            Regular exercise can increase self-confidence, improve your mood,
            help you relax, and lower symptoms of mild stress and anxiety.
            Exercise can also improve your sleep, which is often disrupted by
            stress, depression and anxiety.
          </Text>
          <Text style={styles.text2}>
            {"\u2B24   "}A number of studies have shown that yoga may help
            reduce stress and anxiety. Yoga can enhance your mood and overall
            sense of well-being. Yoga might also help you manage your symptoms
            of depression and anxiety that are due to difficult situations.
          </Text>
          <Text style={styles.text2}>
            {"\u2B24   "}Yoga can help reduce risk factors for chronic diseases,
            such as heart disease and high blood pressure. Yoga may also help
            manage low back pain, neck pain and menopause symptoms.
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
