import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./tabs";
import Help from "../screens/HelpScreen";

import Lifestyle from "../screens/LifestyleChangesScreen";
import YogaInfo from "../screens/YogaInfoScreen";
import AffirmationsInfo from "../screens/AffirmationsInfoScreen";
import BreathingInfoScreen from "../screens/BreathingInfoScreen";
import CheckInInfoScreen from "../screens/CheckInInfoScreen";
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
      <Stack.Screen
        name="Lifestyle"
        component={Lifestyle}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="YogaInfo"
        component={YogaInfo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AffirmationsInfo"
        component={AffirmationsInfo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BreathingInfo"
        component={BreathingInfoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CheckInInfo"
        component={CheckInInfoScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default StackNavigator;
