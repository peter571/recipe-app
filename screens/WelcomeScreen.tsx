import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React, { useState } from "react";
import Button from "../components/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

export default function WelcomeScreen() {
  const [loaded, setLoaded] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
      <ImageBackground
        source={require("../assets/welcome.jpg")}
        resizeMode="cover"
        style={[styles.image, loaded && styles.load]}
        blurRadius={2}
        onLoad={() => setLoaded(true)}
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
        text={"Start Cooking"}
        onPress={() => navigation.navigate("Recipes")}
      />
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    display: 'none'
  },
  load: {
    display: 'flex',
  },
  text1: {
    color: "white",
    fontWeight: "600",
    fontFamily: 'PoppinsLight'
  },
  text2: {
    fontWeight: "600",
    fontSize: 40,
    color: "white",
    marginVertical: 15,
    fontFamily: 'PoppinsSemiBold'
  },
  text3: {
    fontWeight: "400",
    fontSize: 16,
    color: "white",
    marginVertical: 10,
    fontFamily: 'PoppinsLight'
  },
  view: {
    justifyContent: "center",
    alignItems: "center",
  },
});
