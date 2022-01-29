import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import React from "react";
import { SwiperFlatList } from "react-native-swiper-flatlist";

export default function LifestyleChangesScreen() {
  return (
    <ImageBackground
      source={require("../assets/lifestyle/lifestyle.jpg")}
      style={styles.image}
    >
      {/* <SafeAreaView style={styles.container}> */}
      <Text style={styles.welcomeText}>Lifestyle Change Tips</Text>
      <View style={styles.container2}>
        <SwiperFlatList
          autoplay
          autoplayDelay={6}
          autoplayLoop
          index={0}
          showPagination
        >
          <View style={[styles.child]}>
            <Image
              style={{
                height: 230,
                width: 230,
                // left: "35%",
                top: "5%",
                // position: "absolute",
                tintColor: "white",
              }}
              source={require("../assets/lifestyle/sleep.png")}
            />
            <Text style={styles.text}>
              Getting a good night's sleep, between 7 - 9 hours, can improve
              your mental well-being and help you to better manage your anxiety
              and stress.
            </Text>
          </View>
          <View style={[styles.child]}>
            <Image
              style={{
                height: 270,
                width: 200,
                // left: "35%",
                top: "5%",
                // position: "absolute",
                tintColor: "white",
              }}
              source={require("../assets/lifestyle/food.png")}
            />
            <Text style={styles.text}>
              Eating a balanced and nutritious diet is key to helping our bodies
              to manage stress and anxiety.
            </Text>
          </View>
          <View style={[styles.child]}>
            <Image
              style={{
                height: 230,
                width: "90%",
                // left: "35%",
                top: "10%",
                // position: "absolute",
                tintColor: "white",
                resizeMode: "contain",
              }}
              source={require("../assets/lifestyle/smoking.png")}
            />
            <Text style={styles.text}>
              Reducing caffine and nicotine consumption is associated with
              reduced stress and anxiety.
            </Text>
          </View>
          <View style={[styles.child]}>
            <Image
              style={{
                height: 290,
                width: "90%",
                // left: "35%",
                top: "5%",
                // position: "absolute",
                tintColor: "white",
                resizeMode: "contain",
              }}
              source={require("../assets/lifestyle/talking.png")}
            />
            <Text style={styles.text}>
              Talking about our problems and sharing our negative emotions with
              someone we trust can be profoundly healing, reducing stress and
              anxiety.
            </Text>
          </View>
        </SwiperFlatList>
      </View>

      <StatusBar style="dark" />
      {/* </SafeAreaView> */}
    </ImageBackground>
  );
}
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    // justifyContent: "center",
    // top: "8%",
    backgroundColor: "#876dc1",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  container2: { height: "90%", top: "5%" },
  image: {
    flex: 1,
    // justifyContent: "center",
  },
  welcomeText: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    top: "5%",
  },
  child: { width, alignItems: "center" },
  text: {
    width: "95%",
    fontSize: 20,
    position: "absolute",
    textAlign: "center",
    color: "white",
    top: "50%",
  },
});
