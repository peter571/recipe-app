import { View, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import IngredientCard, { IngredientCardProp } from './IngredientCard'

export default function Ingredients() {
  const data = ["2 Tomatos", "3 Onions", "3 layed Eggs", "Yum of Africa", "Rice", "Garlics"]

  const ingredient = ({ item }: IngredientCardProp) => {
    return <IngredientCard item={item} />
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList 
      data={data} 
      renderItem={ingredient} 
      scrollEnabled={true} 
      ListFooterComponent={<View style={{height: 20}}/>}
      />
    </View>
  );
}
