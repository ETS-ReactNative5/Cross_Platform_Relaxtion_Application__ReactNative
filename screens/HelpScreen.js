import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Linking } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function HelpScreen() {
  return (
    <ImageBackground source={require("../assets/4.jpg")} style={styles.image}>
      <View style={{ top: "10%" }}>
        <Text style={styles.welcomeText}>Need Emergency Help?</Text>
        <Text style={styles.contactText}>Contacts Below</Text>
        <View style={{ top: "20%" }}>
          <Text style={styles.info}>Mental Health Ireland</Text>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={styles.info2}>Call </Text>
            <Text
              onPress={() => {
                Linking.openURL("tel:012841166");
              }}
              style={styles.info3}
            >
              📞01 284 1166
            </Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={styles.info2}>
              Email <MaterialIcons name="email" size={24} color="black" />{" "}
            </Text>
            <Text
              onPress={() => {
                Linking.openURL("mailto:info@mentalhealthireland.ie");
              }}
              style={styles.info3}
            >
              info@mentalhealthireland.ie
            </Text>
          </View>
        </View>
        <View style={{ top: "40%" }}>
          <Text style={styles.info}>Aware</Text>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={styles.info2}>Call </Text>
            <Text
              onPress={() => {
                Linking.openURL("tel:1800804848");
              }}
              style={styles.info3}
            >
              📞1800 80 48 48
            </Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={styles.info2}>
              Email <MaterialIcons name="email" size={24} color="black" />{" "}
            </Text>
            <Text
              onPress={() => {
                Linking.openURL("mailto:supportmail@aware.ie");
              }}
              style={styles.info3}
            >
              supportmail@aware.ie
            </Text>
          </View>
        </View>
        <StatusBar style="dark" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  welcomeText: {
    alignSelf: "center",
    color: "white",
    fontSize: 24,
    textAlign: "center",
  },
  contactText: {
    alignSelf: "center",
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
  info: {
    alignSelf: "center",
    color: "white",
    fontSize: 24,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  info2: {
    alignSelf: "center",
    color: "white",
    fontSize: 20,
    textAlign: "center",
    top: "1%",
  },
  info3: {
    alignSelf: "center",
    color: "purple",
    fontSize: 20,
    textAlign: "center",
    top: "1%",
  },
});
