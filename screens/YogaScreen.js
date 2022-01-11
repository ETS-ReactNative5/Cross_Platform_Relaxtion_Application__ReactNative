import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  ImageBackground,
} from "react-native";
import { Video } from "react-native-video";
import video2 from "../assets/Yoga.mp4";
export default function YogaScreen() {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text>My Video</Text>
      <Video
        source={video2}
        style={{ width: 300, height: 300 }}
        controls={true}
        ref={(ref) => {
          this.player = ref;
        }}
      />
    </View>
  );
}
