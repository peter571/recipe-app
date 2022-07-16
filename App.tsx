import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import Recipes from './screens/Recipes';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Recipe from './screens/Recipe';
import { RecipeProvider } from './context/RecipeContext';

export type RootStackParamList = {
  Recipes: undefined;
  Recipe: { itemId: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  
  return (
    <RecipeProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Recipes" component={Recipes} />
          <Stack.Screen name="Recipe" component={Recipe} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecipeProvider>
  );
}
