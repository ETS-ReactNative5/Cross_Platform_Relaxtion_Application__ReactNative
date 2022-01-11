import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Modal,
  Pressable,
} from "react-native";
import { Video } from "react-native-video";

class CheckInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  yoga = async () => {
    this.setState({ modalVisible: true });
  };

  exitModal = async () => {
    this.setState({ modalVisible: false });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Image
            style={styles.image}
            source={require("../assets/iconTop.png")}
          />
          <Text style={styles.welcomeText}>Daily Chesck-in</Text>
          <StatusBar style="auto" />
        </View>
        <View
          style={{
            top: "5%",
            alignSelf: "center",
            backgroundColor: "#2B1463",
            width: "60%",
            height: "7%",
            borderRadius: 15,
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!this.modalVisible);
            }}
          >
            <View
              style={{
                height: "90%",
                width: "90%",
                backgroundColor: "#39319D",
                alignItems: "center",
                alignSelf: "center",
                borderRadius: 25,
                borderColor: "rgba(0, 0, 0, 0.1)",
              }}
            >
              <Pressable
                onPress={this.exitModal}
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
              <Text
                style={{
                  fontSize: 24,
                  color: "black",
                  fontWeight: "bold",
                  top: "3%",
                }}
              >
                Follow along
              </Text>

              <View>
                <Video
                  source={{
                    uri: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1",
                  }}
                  style={{ width: 300, height: 300 }}
                  controls={true}
                  ref={(ref) => {
                    this.player = ref;
                  }}
                />
              </View>
            </View>
          </Modal>
          <Pressable onPress={this.yoga}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 20,
              }}
            >
              Yoga
            </Text>
          </Pressable>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    height: Dimensions.get("window").height * 0.35,
    width: Dimensions.get("window").height * 0.35,
    marginTop: Dimensions.get("window").height * -0.15,
    transform: [{ rotate: "180deg" }],
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#171B7A",
  },
  welcomeText: {
    marginTop: "10%",
    color: "white",
    fontSize: 20,
    textAlign: "center",
    letterSpacing: 3,
  },
  infoTextContainer: {
    marginTop: "8%",
    flexDirection: "row",
    justifyContent: "space-around",
    textAlign: "center",
    width: "100%",
  },
  infoBigText: {
    color: "white",
    fontSize: 44,
    textAlign: "center",
  },
  infoSmallText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default CheckInScreen;
