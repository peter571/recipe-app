import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ProcedureCardProp } from '../types/types'

export default function ProcedureCard({ instruction, position }: ProcedureCardProp) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.step}>Step {position}</Text>
      <Text style={styles.paragraph}>
        {instruction}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        minHeight: 55,
        backgroundColor: '#D9D9D9',
        borderRadius: 12,
        marginBottom: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    step: {
        fontWeight: '600',
        fontSize: 10,
        lineHeight: 16,
        color: '#121212',
        marginBottom: 5,
        alignSelf: 'flex-start',
        fontFamily: 'PoppinsBold'
    },
    paragraph: {
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 16,
        color: '#A9A9A9',
        alignSelf: 'flex-start',
        fontFamily: 'PoppinsLight'
    }
})
