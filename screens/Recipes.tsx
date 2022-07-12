import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function Recipes() {
  const [searchText, setSearchText] = useState('');

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.hello}>Hello,</Text>
        <Text style={styles.question}>What are you Cooking today?</Text>
      </View>

      <View>
        <TextInput 
        style={styles.input}
        onChangeText={text => setSearchText(text)}
        value={searchText}
        placeholder="e.g Omlet"
        keyboardType="default" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '195',
  },
  hello: {
    fontWeight: "600",
    fontSize: 20,
    color: '#000000'
  },
  question: {
    fontWeight: "400",
    fontSize: 11,
    color: '#A9A9A9'
  },
  input: {

  }
})