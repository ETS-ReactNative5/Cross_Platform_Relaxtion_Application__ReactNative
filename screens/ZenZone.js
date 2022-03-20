import React from "react";
import { Text, View } from "react-native";

export default function ZenZone() {
  return (
    <View
      style={{
        position: "absolute",
        top: "3%",
        zIndex: 1,
      }}
    >
      <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
        ZenZone
      </Text>
    </View>
  );
}
