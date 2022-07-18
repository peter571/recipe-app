import { ActivityIndicator, StyleSheet, View } from "react-native";
import React from "react";

export default function Loader() {
  return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#129575" />
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    }
  });
