import {
  View,
  Text,
  StyleSheet,
  GestureResponderEvent,
  ImageBackground,
} from "react-native";
import React from "react";
import Button from "../components/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function WelcomeScreen() {
  const goToRecipes = (event: GestureResponderEvent) => {};

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/welcome.jpg')} resizeMode="cover" style={styles.image}>
        <View>
          <MaterialCommunityIcons name="chef-hat" size={48} color="white" />
          <Text>100K+ Premium Recipe</Text>
        </View>
        <View>
          <Text style={styles.text2}>Get{"\n"}Cooking</Text>
          <Text style={styles.text3}>Simple way to find Tasty Recipe</Text>
        </View>
        <Button
          text={"Start Cooking"}
          onPress={function (event: GestureResponderEvent): void {
            throw new Error("Function not implemented.");
          }}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },

  text2: {
    fontWeight: "600",
    fontSize: 50,
  },

  text3: {
    fontWeight: "400",
    fontSize: 16,
  },
});
