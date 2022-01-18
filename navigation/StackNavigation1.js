import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./tabs";
import Help from "../screens/HelpScreen";
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Tabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Help"
        component={Help}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default StackNavigator;
