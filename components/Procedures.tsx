import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ProcedureCard, { ProcedureCardProp } from './ProcedureCard'

interface StepProp {
  item: ProcedureCardProp
}

export default function Procedures() {
  const data = [
    {
      position: 1,
      instruction:
        "In a large bowl, whisk the eggs until well combined. Add the milk, heavy cream, brown sugar, salt, cinnamon, and vanilla bean paste and whisk until completely combined.",
    },
    {
      position: 2,
      instruction:
        "In a large bowl, whisk the eggs until well combined. Add the milk, heavy cream, brown sugar, salt, cinnamon, and vanilla bean paste and whisk until completely combined.",
    },
    {
      position: 3,
      instruction:
        "In a large bowl, whisk the eggs until well combined. Add the milk, heavy cream, brown sugar, salt, cinnamon, and vanilla bean paste and whisk until completely combined.",
    },
    {
      position: 4,
      instruction:
        "In a large bowl, whisk the eggs until well combined. Add the milk, heavy cream, brown sugar, salt, cinnamon, and vanilla bean paste and whisk until completely combined.",
    },
    {
      position: 5,
      instruction:
        "In a large bowl, whisk the eggs until well combined. Add the milk, heavy cream, brown sugar, salt, cinnamon, and vanilla bean paste and whisk until completely combined.",
    },
  ];

  const step = ({ item }: StepProp) => {
    return <ProcedureCard instruction={item.instruction} position={item.position} />
  }
  
  return (
    <View style={{ flex: 1 }}>
      <FlatList 
      data={data} 
      renderItem={step} 
      scrollEnabled={true} 
      ListFooterComponent={<View style={{height: 20}}/>}
      />
    </View>
  )
}