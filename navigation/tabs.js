import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AffirmationsScreen from "../screens/AffirmationsScreen";
const Tab = createBottomTabNavigator();
import Home from "../Home";
import BreathingScreen from "../screens/BreathingScreen";
import CheckInScreen from "../screens/CheckInScreen";
import YogaScreen from "../screens/YogaScreen";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#39319D",
          position: "absolute",
          bottom: -5,
          elevation: 0,
          // borderRadius: 15,
          height: 65,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="HOME"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../assets/icons/home.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 10 }}
              >
                HOME
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="CHECK-IN"
        component={CheckInScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../assets/icons/check.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 10 }}
              >
                CHECK-IN
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="BREATHING"
        component={BreathingScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../assets/icons/lungs.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 10 }}
              >
                BREATHING
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AFFIRMATIONS"
        component={AffirmationsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../assets/icons/notes.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 10 }}
              >
                AFFIRMATIONS
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="YOGA"
        component={YogaScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../assets/icons/yoga.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 10 }}
              >
                YOGA
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
