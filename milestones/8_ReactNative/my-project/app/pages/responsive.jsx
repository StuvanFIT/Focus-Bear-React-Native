import React from "react";
import { View, Text, useWindowDimensions, StyleSheet } from "react-native";

function Responsive() {
  const { width, height } = useWindowDimensions();
  const isTablet = width > 768;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Width: {width.toFixed(0)}</Text>
      <Text style={styles.text}>Height: {height.toFixed(0)}</Text>
      <Text style={styles.text}>
        Device Type: {isTablet ? "Big Device" : "Phone"}
      </Text>
    </View>
  );
}

export default Responsive;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    margin: 5,
  },
});
