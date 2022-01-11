import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import StackNavigator from "./navigation/StackNavigation1";
import StackNavigator2 from "./navigation/StackNavigation2";
const Stack = createNativeStackNavigator();

class App extends Component {
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
      if (value !== null) {
        this.setState({ username: value });
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    if (this.state.username !== null) {
      return (
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      );
    } else {
      return (
        <NavigationContainer>
          <StackNavigator2 />
        </NavigationContainer>
      );
    }
  }
}

export default App;
