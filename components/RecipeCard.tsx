import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

interface RecipeCardProp {
  thumbnail: string;
  rating: string;
  recipeTitle: string;
  duration: string;
  id: string;
}

export default function RecipeCard() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Recipe")}
      style={styles.cardWrapper}
    >
      <ImageBackground
        source={require("../assets/welcome.jpg")}
        resizeMode="cover"
        style={styles.thumbnail}
      >
        <LinearGradient
          colors={["#000", "transparent"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0.2 }}
          style={styles.gradient}
        >
          <View style={styles.ratingWrapper}>
            <Entypo name="star" size={17} color="#FFAD30" />
            <Text style={styles.rating}>4.0</Text>
          </View>
          <View style={styles.duration}>
            <Fontisto name="stopwatch" size={17} color="#D9D9D9" />
            <Text style={styles.time} numberOfLines={1}>
              20 Min
            </Text>
          </View>
          <Text style={styles.foodTitle} numberOfLines={2}>
            Traditional spare ribs baked baked baked baked baked baked baked baked baked baked baked baked baked baked baked baked baked baked
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    height: 150,
    width: "100%",
    position: "relative",
    marginVertical: 10,
  },
  thumbnail: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
  },
  gradient: {
    height: "100%",
  },
  foodTitle: {
    position: "absolute",
    bottom: 10,
    left: 10,
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 21,
    color: "#FFF",
    width: "60%",
  },
  duration: {
    flexDirection: "row",
    alignItems: "baseline",
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  time: {
    color: "#D9D9D9",
    marginLeft: 5,
  },
  ratingWrapper: {
    backgroundColor: "#FFE1B3",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "baseline",
    position: "absolute",
    top: 10,
    right: 10,
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 20,
  },
  rating: {
    color: "#000",
    fontWeight: "400",
    lineHeight: 12,
    fontSize: 12,
  },
});
