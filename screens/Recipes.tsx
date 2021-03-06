import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import RecipeCard from "../components/RecipeCard";
import { RecipeContext } from "../context/RecipeContext";
import { TagProp } from "../types/types";
import Loader from "../components/Loader";

const tags = [
  {
    id: "all",
    tag: "All",
  },
  {
    id: "italian",
    tag: "Italian",
  },
  {
    id: "mexican",
    tag: "Mexican",
  },
  {
    id: "vegan",
    tag: "Vegan",
  },
  {
    id: "halloween",
    tag: "Halloween",
  },
  {
    id: "appetizers",
    tag: "Appetizers",
  },
  {
    id: "snacks",
    tag: "Snacks",
  },
];

export default function Recipes() {
  const { recipes, setTags, setSearchQuery, loading } = useContext(RecipeContext);

  const [searchText, setSearchText] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>("all");
  
  const handleSearch = (text: string) => setSearchText(text);

  const tag = ({ item }: TagProp) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedId(item.id);
          setTags(item.id);
        }}
        style={[
          styles.tagBtn,
          item.id === selectedId && styles.tagBackgroundColor,
        ]}
      >
        <Text style={[styles.tagText, item.id === selectedId && styles.idTag]}>
          {item.tag}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.hello}>What are you Cooking today?</Text>
      </View>
      <View style={styles.search}>
        <TextInput
          style={styles.input}
          onChangeText={handleSearch}
          value={searchText}
          placeholder="e.g Omlet"
          keyboardType="default"
        />
        <Feather style={styles.searchIcon} name="search" size={24} />
        <Feather
          onPress={() => setSearchQuery(searchText)}
          style={styles.searchBtn}
          name="search"
          size={20}
        />
      </View>
      <View style={styles.tagsWrapper}>
        <FlatList
          data={tags}
          renderItem={tag}
          scrollEnabled={true}
          horizontal={true}
          ListFooterComponent={<View style={{ height: 20 }} />}
        />
      </View>
        {loading ? (
          <Loader />
        ) : (
          <View style={{ flex: 1 }}>
          {recipes.length === 0 ? (
            <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={styles.zeroText}>No Recipes Found!</Text>
            </View>
          ) : (
            <ScrollView style={styles.recipes}>
            {recipes.map((item) => {
              return <RecipeCard key={item.id} {...item} />;
            })}
          </ScrollView>
          )}
          </View>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  recipes: {
    flex: 1,
    marginTop: 10,
  },
  zeroText: {
    color: '#000',
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: 'PoppinsLight'
  },
  search: {
    position: "relative",
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchIcon: {
    position: "absolute",
    top: 8,
    left: 4,
    color: "#D9D9D9",
  },
  searchBtn: {
    backgroundColor: "#129575",
    color: "#fff",
    alignSelf: "center",
    borderRadius: 10,
    padding: 10,
  },
  tagsWrapper: {
    paddingVertical: 10,
  },
  tagBtn: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 7,
    marginHorizontal: 10,
  },
  tagBackgroundColor: {
    backgroundColor: "#129575",
  },
  idTag: {
    color: "#FFF",
    fontFamily: 'PoppinsLight'
  },
  tagText: {
    color: "#129575",
    fontWeight: "600",
    fontSize: 11,
    lineHeight: 16,
    fontFamily: 'PoppinsLight'
  },
  container: {
    flex: 1,
    margin: 12,
  },
  header: {
    width: 195,
  },
  hello: {
    fontWeight: "600",
    fontSize: 20,
    color: "#000000",
    lineHeight: 30,
    fontFamily: 'PoppinsSemiBold'
  },
  input: {
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    paddingLeft: 35,
    width: "85%",
  },
});
