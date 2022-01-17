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
  Pressable,
} from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Slider from "@react-native-community/slider";
import moment from "moment";

class CheckInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      value: 1,
      todaysCheckIn: null,
      checkIns: [],
      dates: [],
      values: [],
      timePassed: false,
    };
    this.getData();
    this.getOtherData();
  }

  getRatingEmoji = () => {
    if (this.state.value === 1) {
      return "😡";
    }

    if (this.state.value === 2) {
      return "😫";
    }

    if (this.state.value === 3) {
      return "😶";
    }

    if (this.state.value === 4) {
      return "🙂";
    }

    if (this.state.value === 5) {
      return "😁";
    }
  };

  getData = async () => {
    try {
      var date = moment().format("YYYY-MM-DD");
      date += "-CHECKIN";
      const value = await AsyncStorage.getItem(date);
      // await AsyncStorage.removeItem(date);
      if (value !== null) {
        this.setState({ todaysCheckIn: value });
      }
    } catch (e) {
      console.log(e);
    }
  };

  getOtherData = async () => {
    try {
      const today = moment();
      const res = Array(7)
        .fill()
        .map(() => today.subtract(1, "d").format("YYYY-MM-DD"));
      res.unshift(moment().format("YYYY-MM-DD"));
      var dates = [];
      for (const date of res) {
        var elemnt = date + "-CHECKIN";
        const value = await AsyncStorage.getItem(elemnt);
        var dateCheckIn = {};
        if (value !== null) {
          var tempDate = moment(date);
          console.log(tempDate);
          dateCheckIn[tempDate.format("DD/MM")] = value;
          dates.push(dateCheckIn);
        }
      }

      this.setState({ checkIns: dates });
      this.sortData();
    } catch (e) {
      console.log(e);
    }
  };

  sortData = async () => {
    try {
      console.log("Sort Data");
      var dates = this.state.checkIns;
      var dateKeys = [];
      var valueKeys = [];
      dates.forEach((date) => {
        dateKeys.push(Object.keys(date)[0]);
        valueKeys.push(parseInt(Object.values(date)[0]));
      });
      this.setState({ dates: dateKeys.reverse() });
      console.log(this.state.dates);
      valueKeys = [1, 2, 3, 4, 5];
      this.setState({ values: valueKeys.reverse() });

      console.log(this.state.values);
    } catch (e) {
      console.log(e);
    }
  };

  checkIn = async () => {
    this.setState({ modalVisible: true });
  };

  exitModal = async () => {
    this.setState({ modalVisible: false });
  };

  submitCheckIn = async () => {
    let checkIn = this.state.value;
    var date = moment().format("YYYY-MM-DD");
    // var date = "2022-01-04";
    date += "-CHECKIN";
    AsyncStorage.setItem(date, checkIn.toString());
    alert("Sets " + date + " " + checkIn.toString());
    this.setState({ todaysCheckIn: checkIn.toString() });
    this.setState({ modalVisible: false });
    // window.location.reload(false);
  };

  render() {
    console.log("Render");
    var dates = this.state.values;
    var keys = this.state.dates;
    return (
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Image
            style={styles.image}
            source={require("../assets/iconTop.png")}
          />
          <Text style={styles.welcomeText}>Daily Chesck-in</Text>
          {/* <LineChart
            data={{
              labels: [
                "Jun 21",
                "May 21",
                "Apr 21",
                "Mar 21",
                "Feb 21",
                "Jan 21",
              ], //Array of labels [Jun 21,May 21,Apr 21,Mar 21,Feb 21,Jan 21]
              datasets: [
                {
                  data: this.state.values, //Array of values
                  color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                  strokeWidth: 2, // optional
                },
              ],
            }}
            width={350}
            height={320}
            verticalLabelRotation={70}
            withInnerLines={false}
            chartConfig={{
              backgroundGradientFrom: 0,
              backgroundGradientFromOpacity: 0,
              backgroundGradientTo: 0,
              backgroundGradientToOpacity: 0,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              backgroundColor: (opacity = 0) =>
                `rgba(255, 255, 255, ${opacity})`,
              strokeWidth: 2, // optional, default 3
            }}
            bezier // type of line chart
          /> */}
          <LineChart
            data={{
              labels: keys,
              datasets: [
                {
                  // data: this.state.values,
                  data: [1, 2, 4, 2],
                  strokeWidth: 4, // optional
                },
              ],
              legend: ["Mood Check-In"], // optional
            }}
            width={Dimensions.get("window").width} // from react-native
            height={320}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#08458b",
              backgroundGradientFrom: "#094185",
              backgroundGradientTo: "#6288aa",
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "3",
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
              top: "3%",
            }}
          />
          <StatusBar style="auto" />
        </View>
        {this.state.todaysCheckIn === null ? (
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
                    top: "5%",
                  }}
                >
                  How are you feeling today?
                </Text>
                <Slider
                  style={{ width: 250, height: 30, top: 50 }}
                  minimumValue={1}
                  maximumValue={5}
                  step={1}
                  minimumTrackTintColor="#FFFFFF"
                  maximumTrackTintColor="#000000"
                  onValueChange={(id) => this.setState({ value: id })}
                />
                <Text style={{ fontSize: 40, top: 50 }}>
                  {this.getRatingEmoji()}
                </Text>
                <View
                  style={{
                    // top: 100,
                    alignSelf: "center",
                    backgroundColor: "#2B1463",
                    width: "60%",
                    height: "7%",
                    borderRadius: 15,
                    // justifyContent: "center",
                    // alignContent: "center",
                    // alignSelf: "flex-end",
                    position: "absolute",
                    bottom: 25,
                  }}
                >
                  <Pressable onPress={this.submitCheckIn}>
                    <Text
                      style={{
                        color: "white",
                        textAlign: "center",
                        fontSize: 20,
                        // top: 100,
                      }}
                    >
                      Check-In
                    </Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
            <Pressable onPress={this.checkIn}>
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 20,
                }}
              >
                Check-In
              </Text>
            </Pressable>
          </View>
        ) : (
          <View></View>
        )}
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
