import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

class Home extends Component {
  state = {
    username: null,
  };

  constructor(props) {
    super(props);
    this.getData();
  }

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      // await AsyncStorage.removeItem("user");
      if (value !== null) {
        this.setState({ username: value });
      }
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("./assets/iconTop.png")} />
        <TouchableHighlight
          style={styles.profilePicture}
          underlayColor="#ccc"
          onPress={() => alert("Yaay!")}
        >
          <Image
            style={styles.avatar}
            source={require("./assets/avatar.png")}
          />
        </TouchableHighlight>
        <Text style={styles.welcomeText}>
          Welcome back {this.state.username}
        </Text>
        <View style={styles.infoTextContainer}>
          <View style={styles.informationText}>
            <Text style={styles.infoBigText}>34</Text>
            <Text style={styles.infoSmallText}>CHECK-INS</Text>
          </View>
          <View style={styles.informationText}>
            <Text style={styles.infoBigText}>28</Text>
            <Text style={styles.infoSmallText}>AFFIRMATIONS</Text>
          </View>
        </View>
        <View style={styles.achievementHeader}>
          <Text style={styles.achievementInfo}>Current Achievement</Text>
          <Text style={styles.achievement}>34 / 50 Check-ins</Text>
          <Text style={styles.achievementInfo}>3 DAY STREAK</Text>
        </View>
        <StatusBar style="auto" />
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
  avatar: {
    height: Dimensions.get("window").width * 0.15,
    width: Dimensions.get("window").width * 0.15,
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#171B7A",
  },
  profilePicture: {
    width: Dimensions.get("window").width * 0.23,
    height: Dimensions.get("window").width * 0.23,
    backgroundColor: "#fff",
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,

    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
  },
  welcomeText: {
    marginTop: "1%",
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
  achievementHeader: {
    marginTop: "10%",
    width: "90%",
    height: "25%",
    backgroundColor: "#39319D",
    borderRadius: Dimensions.get("window").width * 0.04,
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  achievementInfo: {
    color: "#CAC0C0",
    fontSize: 16,
    textAlign: "left",
    marginRight: "5%",
  },
  achievement: {
    color: "white",
    fontSize: 16,
    textAlign: "left",
    marginRight: "5%",
  },
});

export default Home;
