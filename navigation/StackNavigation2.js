import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Register from "../Register";
import Tabs from "./tabs";
import Help from "../screens/HelpScreen";
import Lifestyle from "../screens/LifestyleChangesScreen";
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
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
        <Stack.Screen
          name="Lifestyle"
          component={Lifestyle}
          // options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
export default StackNavigator;
