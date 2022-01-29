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
} from "react-native";
import { Video } from "expo-av";
import * as ScreenOrientation from "expo-screen-orientation";

export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  function setOrientation() {
    if (Dimensions.get("window").height > Dimensions.get("window").width) {
      //Device is in portrait mode, rotate to landscape mode.
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    } else {
      //Device is in landscape mode, rotate to portrait mode.
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  }

  return (
    <ImageBackground source={require("../assets/4.jpg")} style={styles.image}>
      <SafeAreaView>
        <View
          style={{
            alignSelf: "center",
            backgroundColor: "#fee486",
            width: "50%",
            height: 50,
            borderRadius: 15,
            justifyContent: "center",
            marginVertical: "20%",
          }}
        >
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View
              style={{
                height: 450,
                width: "90%",
                backgroundColor: "#493EB8",
                alignItems: "center",
                alignSelf: "center",
                borderRadius: 25,
                borderColor: "rgba(0, 0, 0, 0.1)",
              }}
            >
              <Pressable
                onPress={() => setModalVisible(!modalVisible)}
                style={{
                  alignSelf: "flex-end",
                  margin: 10,
                  backgroundColor: "#2B1463",
                  height: 30,
                  width: 30,
                  borderRadius: 30 / 2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "#493EB8",
                    fontWeight: "bold",
                  }}
                >
                  X
                </Text>
              </Pressable>
              <Video
                ref={video}
                source={require("../assets/Yoga.mp4")}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                style={styles.video}
                onFullscreenUpdate={setOrientation}
              />
            </View>
          </Modal>
          <Pressable onPress={() => setModalVisible(true)}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 20,
                color: "#333478",
              }}
            >
              Yoga
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            alignSelf: "center",
            backgroundColor: "#fee486",
            width: "50%",
            height: 50,
            borderRadius: 15,
            justifyContent: "center",
            marginVertical: "20%",
          }}
        >
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible2}
            onRequestClose={() => {
              setModalVisible2(!modalVisible2);
            }}
          >
            <View
              style={{
                height: 450,
                width: "90%",
                backgroundColor: "#493EB8",
                alignItems: "center",
                alignSelf: "center",
                borderRadius: 25,
                borderColor: "rgba(0, 0, 0, 0.1)",
              }}
            >
              <Pressable
                onPress={() => setModalVisible2(!modalVisible2)}
                style={{
                  alignSelf: "flex-end",
                  margin: 10,
                  backgroundColor: "#2B1463",
                  height: 30,
                  width: 30,
                  borderRadius: 30 / 2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "#493EB8",
                    fontWeight: "bold",
                  }}
                >
                  X
                </Text>
              </Pressable>
              <Video
                ref={video}
                source={require("../assets/Excercise.mp4")}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                style={styles.video}
                onFullscreenUpdate={setOrientation}
              />
            </View>
          </Modal>
          <Pressable onPress={() => setModalVisible2(true)}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 20,
                color: "#333478",
              }}
            >
              Excercise
            </Text>
          </Pressable>
        </View>
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
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
});
