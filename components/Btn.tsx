import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

interface BtnProp {
    title: string;
    onPress: () => void;
    isSelected: boolean;
}

export default function Btn({ title, onPress, isSelected }: BtnProp) {
  return (
    <TouchableOpacity style={[styles.btn, isSelected && styles.selectedBg]} onPress={onPress}>
      <Text style={[styles.title, isSelected && styles.selectedTitle]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    width: 150,
    backgroundColor: "transparent",
    alignItems: "center",
    paddingVertical: 8,
    borderRadius: 10,
  },
  title: {
    color: "#129575",
    fontWeight: "600",
    fontSize: 11,
    lineHeight: 16,
  },
  selectedBg: {
    backgroundColor: '#129575',
  },
  selectedTitle: {
    color: '#FFF'
  }
})
