import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

export interface IngredientCardProp {
  item: string;
}

export default function IngredientCard({ item }: IngredientCardProp) {
  return (
    <View style={styles.wrapper}>
      <AntDesign style={styles.rightCircle} name="rightcircle" size={14} color="#129575" />
      <Text style={styles.ingredients}>{item}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        minHeight: 55,
        backgroundColor: '#D9D9D9',
        borderRadius: 12,
        marginBottom: 10,
        alignItems: 'center',
        paddingVertical: 12,
        paddingRight: 10,
        paddingLeft: 30,
        position: 'relative'
    },
    ingredients: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        color: '#121212',
        alignSelf: 'flex-start'
    },
    rightCircle: {
      marginRight: 5,
      position: 'absolute',
      left: 10,
      top: 20
    }
})
