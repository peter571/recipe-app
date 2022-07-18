import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { RecipeCardProp } from "../types/types";

export default function RecipeCard(props: RecipeCardProp) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { id, thumbnail, score, name, duration } = props;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Recipe", {
          itemId: id,
        })
      }
      style={[styles.cardWrapper, isLoaded && styles.load]}
      activeOpacity={0.8}
    >
      <ImageBackground
        source={{ uri: thumbnail }}
        resizeMode="cover"
        style={styles.thumbnail}
        onLoad={() => setIsLoaded(true)}
      >
        <LinearGradient
          colors={["#000", "transparent"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0.2 }}
          style={styles.gradient}
        >
          <View style={styles.ratingWrapper}>
            <Entypo name="star" size={17} color="#FFAD30" />
            <Text style={styles.rating}>{score}</Text>
          </View>
          <View style={styles.duration}>
            <Fontisto name="stopwatch" size={17} color="#D9D9D9" />
            <Text style={styles.time} numberOfLines={1}>
              {duration} Min
            </Text>
          </View>
          <Text style={styles.foodTitle} numberOfLines={2}>
            {name}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
    height: 150,
    width: "100%",
    position: "relative",
    marginVertical: 10,
    display: 'none'
  },
  load: {
    display: "flex"
  },
  thumbnail: {
    flex: 1,
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
    fontFamily: 'PoppinsLight'
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
    fontFamily: 'PoppinsLight'
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
    fontSize: 10,
    fontFamily: 'PoppinsLight'
  },
});
