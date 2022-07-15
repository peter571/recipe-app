import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, FlatList, ScrollView } from "react-native";
import { Feather } from '@expo/vector-icons';
import RecipeCard from "../components/RecipeCard";

export default function Recipes() {
  const [searchText, setSearchText] = useState("");
  const handleSearch = (text: string) => setSearchText(text);

  const recipe = () => {
    return <RecipeCard />
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.hello}>Hello,</Text>
        <Text style={styles.question}>What are you Cooking today?</Text>
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
      </View>
      <View style={styles.recipes}>
      <RecipeCard />
      <RecipeCard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  recipes: {
    alignItems: 'center',
    marginVertical: 25
  },
  search: {
    position: 'relative',
    marginTop: 30
  },
  searchIcon: {
    position: 'absolute',
    top: 8,
    left: 4,
    color: '#D9D9D9'
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
    lineHeight: 30
  },
  question: {
    fontWeight: "400",
    fontSize: 11,
    color: "#A9A9A9",
    lineHeight: 16
  },
  input: {
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    paddingLeft: 35
    
  },
});
