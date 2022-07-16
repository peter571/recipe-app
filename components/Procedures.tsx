import { View, Text, FlatList, ListRenderItem } from 'react-native'
import React from 'react'
import ProcedureCard from './ProcedureCard'
import { ProceduresProp } from '../types/types'

export default function Procedures({ instructions }: ProceduresProp) {
  
  const step: ListRenderItem<any> = ({ item }) => {
    return <ProcedureCard instruction={item["display_text"]} position={item.position} />
  }
  
  return (
    <View style={{ flex: 1 }}>
      <FlatList 
      data={instructions} 
      renderItem={step} 
      scrollEnabled={true} 
      ListFooterComponent={<View style={{height: 20}}/>}
      />
    </View>
  )
}