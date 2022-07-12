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
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {

  return (
    <ImageBackground
      source={require("../assets/welcome.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.view}>
        <MaterialCommunityIcons name="chef-hat" size={48} color="white" />
        <Text style={styles.text1}>100K+ Premium Recipe</Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.text2}>Get {"\n"}Cooking</Text>
        <Text style={styles.text3}>Simple way to find Tasty Recipe</Text>
      </View>
      <Button
        text={"Start Cooking"} onPress={function (event: GestureResponderEvent): void {
          throw new Error("Function not implemented.");
        } }        
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },

  text1: {
    color: 'white',
    fontWeight: "600"
  },

  text2: {
    fontWeight: "600",
    fontSize: 50,
    color: 'white',
    marginVertical: 25
  },

  text3: {
    fontWeight: "400",
    fontSize: 16,
    color: 'white',
    marginVertical: 10
  },

  view: {
    justifyContent: "center",
    alignItems: 'center'
  }
});
