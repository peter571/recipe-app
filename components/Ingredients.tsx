import { View, StyleSheet, FlatList, ListRenderItem } from 'react-native'
import React from 'react'
import IngredientCard from './IngredientCard'
import { IngredientsProp, IngredientCardProp } from '../types/types'

export default function Ingredients({ ingredients }: IngredientsProp) {
  
  const ingredient: ListRenderItem<IngredientCardProp> = ({ item }: IngredientCardProp) => {
    return <IngredientCard item={item["raw_text"]} />
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList 
      data={ingredients} 
      renderItem={ingredient} 
      scrollEnabled={true} 
      ListFooterComponent={<View style={{height: 20}}/>}
      />
    </View>
  );
}
