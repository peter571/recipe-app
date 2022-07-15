import { View, Text, StyleSheet, Button } from "react-native";
import React, { useRef, useState } from "react";
import { Video, AVPlaybackStatus, ResizeMode } from "expo-av";
import Ingredients from "../components/Ingredients";
import Procedures from "../components/Procedures";
import Btn from "../components/Btn";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Recipe() {
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
          uri: "https://vid.tasty.co/output/215487/hls24_1631150838.m3u8",
        }}
        useNativeControls
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={styles.titleWrapper}>
        <Text style={styles.recipeTitle} numberOfLines={2}>
          Spicy chicken burger with French fries
        </Text>
        <Text style={styles.reviews}>(13k Reviews)</Text>
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
          <Text style={styles.numItems}>1 Serve</Text>
        </View>
        <Text style={styles.numItems}>10 items</Text>
      </View>

      <View style={{ flex: 1 }} >{tabs ? <Procedures /> : <Ingredients />}</View>
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
});
