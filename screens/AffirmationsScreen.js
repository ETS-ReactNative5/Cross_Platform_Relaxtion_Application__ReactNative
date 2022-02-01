import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
  TextInput,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";
import InfoScreenButton from "./InfoScreenButton";

class CheckInScreen extends Component {
  constructor(props) {
    super(props);
    this.getData();

    this.state = {
      text: "",
      todaysDate: "Today",
      numberOfDays: 5,
      date: moment(),
      affirmation: null,
    };
  }

  saveAffirmation = async () => {
    if (this.state.text !== "") {
      let affirmation = this.state.text;
      var date = moment().format("YYYY-MM-DD");
      date += "-AFFIRMATION";
      AsyncStorage.setItem(date, affirmation);
      this.setState({ affirmation: affirmation });
    } else alert("You must enter an affirmation first.");
  };

  getData = async () => {
    try {
      var date = moment().format("YYYY-MM-DD");
      date += "-AFFIRMATION";
      const value = await AsyncStorage.getItem(date);
      // await AsyncStorage.removeItem(date);
      if (value !== null) {
        this.setState({ affirmation: value });
      }
    } catch (e) {
      console.log(e);
    }
  };

  minusDay = async () => {
    if (this.state.numberOfDays > 0) {
      var date = this.state.date;
      date = date.subtract(1, "days");
      this.setState((state) => {
        return { numberOfDays: state.numberOfDays - 1 };
      });

      this.setState((state) => {
        return { date: date };
      });

      var dateFormatted = date.format("DD-MM");
      this.setState((state) => {
        return { todaysDate: dateFormatted };
      });

      var dateFormatted2 = date.format("YYYY-MM-DD");
      dateFormatted2 += "-AFFIRMATION";
      const value = await AsyncStorage.getItem(dateFormatted2);
      if (value !== null) {
        this.setState({ affirmation: value });
      } else
        this.setState({
          affirmation: "No affirmation was entered on this date.",
        });
    }
  };

  plusDay = async () => {
    var todaysDate = moment();
    if (
      this.state.date.format("YYYY-MM-DD") !== todaysDate.format("YYYY-MM-DD")
    ) {
      var date = this.state.date;
      date = date.add(1, "days");
      this.setState((state) => {
        return { numberOfDays: state.numberOfDays + 1 };
      });

      this.setState((state) => {
        return { date: date };
      });

      var dateFormatted = date.format("DD-MM");
      if (dateFormatted != todaysDate.format("DD-MM")) {
        this.setState((state) => {
          return { todaysDate: dateFormatted };
        });
      } else {
        this.setState((state) => {
          return { todaysDate: "Today" };
        });
      }

      var dateFormatted2 = date.format("YYYY-MM-DD");
      dateFormatted2 += "-AFFIRMATION";
      const value = await AsyncStorage.getItem(dateFormatted2);
      if (value !== null) {
        this.setState({ affirmation: value });
      } else if (dateFormatted != todaysDate.format("DD-MM")) {
        this.setState({
          affirmation: "No affirmation was entered on this date.",
        });
      } else {
        this.setState({
          affirmation: null,
        });
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <InfoScreenButton
          navigation={this.props.navigation}
          nextScreen={"AffirmationsInfo"}
        />
        <Image style={styles.image} source={require("../assets/iconTop.png")} />
        <View style={styles.heading}>
          <TouchableWithoutFeedback onPress={this.minusDay}>
            <Image
              style={styles.arrow1}
              source={require("../assets/arrow.png")}
            />
          </TouchableWithoutFeedback>
          <Text style={styles.welcomeText}>Daily Affirmations</Text>
          <TouchableWithoutFeedback onPress={this.plusDay}>
            <Image
              style={styles.arrow2}
              source={require("../assets/arrow.png")}
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={{ top: "1%" }}>
          <Text style={{ color: "white", fontSize: 24 }}>
            {this.state.todaysDate}
          </Text>
        </View>

        <View style={styles.affirmationsContainer}>
          {this.state.affirmation === null ? (
            <ScrollView>
              <View style={{ width: "94%" }}>
                <Text style={styles.infoBigText}>Daily Affirmations</Text>
                <Text style={styles.infoSmallText}>
                  Note something you are grateful for or something you want to
                  accomplish
                </Text>
                <TextInput
                  style={{
                    color: "white",
                    fontSize: 18,
                    top: "3%",
                    left: "3%",
                    height: "50%", //60%
                  }}
                  multiline={true}
                  textAlignVertical={"top"}
                  maxLength={150}
                  numberOfLines={11}
                  placeholder="Enter your affirmation here"
                  onChangeText={(text) => this.setState({ text })}
                  value={this.state.text}
                  require={true}
                ></TextInput>
              </View>
              <TouchableWithoutFeedback onPress={this.saveAffirmation}>
                <Text style={styles.button}>SUBMIT</Text>
              </TouchableWithoutFeedback>
            </ScrollView>
          ) : (
            <View
              style={{
                // height: "95%",
                width: "98%",
                flex: 1,
                justifyContent: "flex-end",
              }}
            >
              <ScrollView>
                <Text style={styles.infoBigText2}>
                  Today's Daily Affirmation
                </Text>

                <Text style={styles.infoSmallText2}>
                  {this.state.affirmation}
                </Text>
              </ScrollView>
            </View>
          )}
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
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#171B7A",
  },
  welcomeText: {
    marginTop: "3%",
    color: "white",
    fontSize: 25,
    textAlign: "center",
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
    fontSize: 24,
    top: "3%",
    left: "3%",
  },
  infoSmallText: {
    color: "white",
    fontSize: 18,
    top: "3%",
    left: "3%",
  },
  infoBigText2: {
    color: "white",
    fontSize: 24,
    top: "3%",
    left: "3%",
  },
  infoSmallText2: {
    color: "white",
    fontSize: 18,
    top: "3%",
    left: "3%",
    // flexWrap: "wrap",
  },
  arrow1: {
    width: 60,
    height: 60,
    transform: [{ rotate: "90deg" }],
    alignSelf: "flex-start",
  },
  arrow2: {
    width: 60,
    height: 60,
    transform: [{ rotate: "-90deg" }],
    alignSelf: "flex-start",
  },
  heading: {
    flexDirection: "row",
  },
  affirmationsContainer: {
    width: "90%",
    height: "43%",
    borderRadius: 15,
    backgroundColor: "#39319D",
    top: "5%",
  },
  button: {
    height: 40,
    width: "90%",
    borderRadius: 15,
    color: "#333478",
    fontSize: 18,
    backgroundColor: "#fee486",
    alignSelf: "center",
    textAlign: "center",
    // justifyContent: "center",
    top: "5%",
    textAlignVertical: "center",
    // flex: 1,
    justifyContent: "flex-end",
  },
});

export default CheckInScreen;
