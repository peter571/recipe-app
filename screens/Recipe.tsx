import { View, Text, StyleSheet, Button } from "react-native";
import React, { useContext, useRef, useState } from "react";
import { Video, AVPlaybackStatus, ResizeMode } from "expo-av";
import Ingredients from "../components/Ingredients";
import Procedures from "../components/Procedures";
import Btn from "../components/Btn";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RecipeContext } from "../context/RecipeContext";
import { RootStackParamList } from "../App";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { recipes } from "./Recipes";

export default function Recipe() {
  //const { recipes } = useContext(RecipeContext);
  const route = useRoute<RouteProp<RootStackParamList>>();
  const id = route.params?.itemId;

  const item = recipes.find((recipe) => recipe.id === id);

  const {
    videoUrl,
    thumbnail,
    score,
    ingredients,
    instructions,
    name,
    numOfServe,
    duration,
  } = item!;

  const video = useRef(null);
  const [status, setStatus] = useState({});
  const [tabs, setTabs] = useState(false);
  const [selected, setSelected] = useState({
    ingredient: true,
    procedures: false,
  });

  const onPressIngredients = () => {
    setTabs(false);
    setSelected({ ingredient: true, procedures: false });
  };

  const onPressProcedures = () => {
    setTabs(true);
    setSelected({ ingredient: false, procedures: true });
  };

  return (
    <View style={styles.recipeWrapper}>
      <Video
        ref={video}
        style={styles.video}
        resizeMode={ResizeMode.CONTAIN}
        source={{
          uri: videoUrl,
        }}
        useNativeControls
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={styles.titleWrapper}>
        <Text style={styles.recipeTitle} numberOfLines={2}>
          {name}
        </Text>
        <View style={styles.ratingWrapper}>
          <Entypo name="star" size={17} color="#FFAD30" />
          <Text style={styles.rating}>{score * 5}</Text>
        </View>
        <View style={styles.duration}>
            <Fontisto name="stopwatch" size={17} color="#000" />
            <Text style={styles.time} numberOfLines={1}>
              {duration}{" "}Min
            </Text>
          </View>
      </View>
      <View style={styles.btns}>
        <Btn
          title="Ingredients"
          onPress={onPressIngredients}
          isSelected={selected.ingredient}
        />
        <Btn
          title="Procedures"
          onPress={onPressProcedures}
          isSelected={selected.procedures}
        />
      </View>
      <View style={styles.wrapper}>
        <View style={styles.serve}>
          <MaterialCommunityIcons
            style={{ marginRight: 5 }}
            name="food-turkey"
            size={17}
            color="#A9A9A9"
          />
          <Text style={styles.numItems}>
            {numOfServe == 1 ? numOfServe + " serve" : numOfServe + " serves"}
          </Text>
        </View>
        <Text style={styles.numItems}>
          {selected.ingredient
            ? ingredients.length + " items"
            : instructions.length + " steps"}
        </Text>
      </View>

      <View style={{ flex: 1 }}>
        {tabs ? (
          <Procedures instructions={instructions} />
        ) : (
          <Ingredients ingredients={ingredients} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  recipeWrapper: {
    flex: 1,
    marginHorizontal: 10,
  },
  video: {
    alignSelf: "center",
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  recipeTitle: {
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 21,
    color: "#000",
    width: "60%",
  },
  reviews: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 20,
    color: "#A9A9A9",
  },
  btns: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  serve: {
    flexDirection: "row",
  },
  numItems: {
    color: "#A9A9A9",
    fontWeight: "400",
    fontSize: 11,
    lineHeight: 16,
  },
  ratingWrapper: {
    backgroundColor: "#FFE1B3",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "baseline",
    position: "absolute",
    top: 0,
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
  duration: {
    flexDirection: "row",
    alignItems: "baseline",
    position: "absolute",
    bottom: 0,
    right: 10,
  },
  time: {
    color: "#000",
    marginLeft: 5,
  },
});
