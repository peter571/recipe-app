import { View, Text, TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

interface ButtonProp {
    text: string;
    onPress: (event: GestureResponderEvent) => void
}

export default function Button({text, onPress }: ButtonProp) {
  return (
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.btnText}>
            {text}
        </Text>
        <AntDesign style={styles.icon} name="arrowright" size={20} color="white" />
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#129575',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'nowrap',
    },

    btnText: {
        color: '#FFFFFF',
        textAlign: 'center',
        alignItems: 'center',
        fontWeight: '600',
        fontSize: 16,
        paddingHorizontal: 5
    },

    icon: {
        paddingHorizontal: 5
    }
})