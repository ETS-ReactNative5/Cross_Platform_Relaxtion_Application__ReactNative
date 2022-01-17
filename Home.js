import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
  Modal,
  FlatList,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ProgressChart } from "react-native-chart-kit";

class Home extends Component {
  constructor(props) {
    super(props);
    this.getData();
    this.state = {
      modalVisible: false,
      alarmModalVisible: false,
      username: null,
      checkIns: null,
      affirmations: null,
      affirmationsAchievement: null,
      checkInAchievement: null,
      active: null,
      images: [
        require("./assets/avatar0.png"),
        require("./assets/avatar1.png"),
        require("./assets/avatar2.png"),
        require("./assets/avatar3.png"),
        require("./assets/avatar4.png"),
        require("./assets/avatar5.png"),
      ],
      image: "",
    };
  }

  getData = async () => {
    try {
      const user = await AsyncStorage.getItem("user");
      // await AsyncStorage.removeItem("user");
      const allValues = await AsyncStorage.getAllKeys();
      const checkIns = allValues.filter((value) => value.includes("CHECKIN"));
      const img = await AsyncStorage.getItem("currentImage");
      console.log(img);
      if (img !== null) {
        this.setState({ image: img });
      }
      console.log(this.state.image);
      const affirmations = allValues.filter((value) =>
        value.includes("AFFIRMATION")
      );

      var checkInAchievement = allValues.filter((value) =>
        value.includes("checkInAchievement")
      );
      if (checkInAchievement[0].includes("-Current"))
        this.setState({ active: "Check-ins" });

      checkInAchievement = await AsyncStorage.getItem(checkInAchievement[0]);

      var affirmationsAchievement = allValues.filter((value) =>
        value.includes("affirmationsAchievement")
      );
      if (affirmationsAchievement[0].includes("-Current"))
        this.setState({ active: "Affirmations" });

      affirmationsAchievement = await AsyncStorage.getItem(
        affirmationsAchievement[0]
      );

      if (user !== null) {
        this.setState({ username: user });
      }
      if (checkIns !== 0) {
        this.setState({ checkIns: checkIns.length });
      }
      if (affirmations !== 0) {
        this.setState({ affirmations: affirmations.length });
      }
      if (checkInAchievement !== null) {
        this.setState({ checkInAchievement: checkInAchievement });
      }
      if (affirmationsAchievement !== null) {
        this.setState({ affirmationsAchievement: affirmationsAchievement });
      }
    } catch (e) {
      console.log(e);
    }
  };

  checkIn = async () => {
    this.setState({ modalVisible: true });
  };

  setAlarm = async () => {
    this.setState({ alarmModalVisible: true });
  };

  exitModal = async () => {
    this.setState({ modalVisible: false });
  };

  exitAlarm = async () => {
    this.setState({ alarmModalVisible: false });
  };

  changeProfilePicture = async (index) => {
    var img = `./assets/avatar${index}.png`;
    this.setState({ image: img });
  };

  render() {
    var numberToDisplay = 0;
    var numberOfAchievement = 0;
    if (this.state.active === "Check-ins") {
      numberToDisplay = this.state.checkIns;
      numberOfAchievement = this.state.checkInAchievement;
    } else {
      numberToDisplay = this.state.affirmations;
      numberOfAchievement = this.state.affirmationsAchievement;
    }
    const data = {
      data: [0.2],
    };
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("./assets/iconTop.png")} />
        <View
          style={{
            alignSelf: "flex-end",
            alignItems: "center",
            right: "5%",
            position: "absolute",
            marginTop: Dimensions.get("window").height * 0.2,
          }}
        >
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.alarmModalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setAlarm(!this.alarmModalVisible);
            }}
          >
            <View
              style={{
                height: "60%",
                width: "94%",
                backgroundColor: "#493EB8",
                // alignItems: "center", // Fix this perhgaps
                alignSelf: "center",
                alignContent: "center",
                borderRadius: 25,
                borderColor: "rgba(0, 0, 0, 0.1)",
              }}
            >
              <TouchableHighlight
                onPress={this.exitAlarm}
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
              </TouchableHighlight>
              <Text
                style={{
                  fontSize: 18,
                  color: "white",
                  fontWeight: "bold",
                  top: "5%",
                  // alignSelf: "center",
                  marginHorizontal: "20%",
                }}
              >
                Would you like to change your picture?
              </Text>
            </View>
          </Modal>
          <TouchableHighlight
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#39319D",
              height: 60,
              width: 60,
              borderRadius: 25,
            }}
            underlayColor="#ccc"
            onPress={this.setAlarm}
          >
            <Image
              style={{
                height: 40,
                width: 40,
                // left: "35%",
                position: "absolute",
              }}
              source={require("./assets/alarm.png")}
            />
          </TouchableHighlight>
        </View>
        <View>
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
                height: "60%",
                width: "94%",
                backgroundColor: "#493EB8",
                // alignItems: "center", // Fix this perhgaps
                alignSelf: "center",
                alignContent: "center",
                borderRadius: 25,
                borderColor: "rgba(0, 0, 0, 0.1)",
              }}
            >
              <TouchableHighlight
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
              </TouchableHighlight>
              <Text
                style={{
                  fontSize: 18,
                  color: "white",
                  fontWeight: "bold",
                  top: "5%",
                  // alignSelf: "center",
                  marginHorizontal: "20%",
                }}
              >
                Would you like to change your picture?
              </Text>
              <FlatList
                numColumns={3}
                showsHorizontalScrollIndicator={false}
                data={this.state.images}
                style={{ top: 50, flexWrap: "wrap", alignSelf: "center" }}
                renderItem={({ item, index }) => (
                  <TouchableHighlight onPress={() => alert(index)}>
                    <Image
                      source={item} /* Use item to set the image source */
                      key={index} /* Important to set a key for list items,
                       but it's wrong to use indexes as keys, see below */
                      style={{
                        width: 100,
                        height: 100,
                        resizeMode: "contain",
                        margin: 8,
                        borderRadius: 10,
                      }}
                    />
                  </TouchableHighlight>
                )}
              />
            </View>
          </Modal>
          <TouchableHighlight
            style={styles.profilePicture}
            underlayColor="#ccc"
            onPress={this.checkIn}
          >
            <Image
              style={styles.avatar}
              source={require("./assets/avatar0.png")}
            />
          </TouchableHighlight>
        </View>
        <Text style={styles.welcomeText}>
          Welcome back {this.state.username}
        </Text>
        <View style={styles.infoTextContainer}>
          <View style={styles.informationText}>
            <Text style={styles.infoBigText}>{this.state.checkIns}</Text>
            <Text style={styles.infoSmallText}>CHECK-INS</Text>
          </View>
          <View style={styles.informationText}>
            <Text style={styles.infoBigText}>{this.state.affirmations}</Text>
            <Text style={styles.infoSmallText}>AFFIRMATIONS</Text>
          </View>
        </View>
        <View style={styles.achievementHeader2}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ProgressChart
              data={data}
              width={135}
              height={135}
              strokeWidth={11}
              radius={60}
              // hideLegend={false}
              chartConfig={{
                // backgroundColor: "#39319D",
                backgroundGradientFrom: "#39319D",
                backgroundGradientTo: "#39319D",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, 0.4)`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  // borderRadius: 16,
                  leftMargin: 100,
                },
              }}
              hideLegend={true}
            />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
              justifyContent: "space-around",
            }}
          >
            <Text style={styles.achievementInfo}>Current Achievement</Text>
            <Text style={styles.achievement}>
              {numberToDisplay} / {numberOfAchievement} {this.state.active}
            </Text>
            <Text style={styles.achievementInfo}>3 DAY STREAK</Text>
          </View>
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
    height: Dimensions.get("window").width * 0.25,
    width: Dimensions.get("window").width * 0.25,
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
  achievementHeader2: {
    marginTop: "10%",
    width: "90%",
    height: "28%",
    backgroundColor: "#39319D",
    borderRadius: Dimensions.get("window").width * 0.04,
    flexDirection: "row",
    // justifyContent: "space-around",
    // flex: 2,
    // alignItems: "flex-end",
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
