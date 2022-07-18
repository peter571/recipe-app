import React from "react";
import { View } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import Recipes from "./screens/Recipes";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Recipe from "./screens/Recipe";
import { RecipeProvider } from "./context/RecipeContext";
import { useFonts } from "expo-font";

export type RootStackParamList = {
  Recipes: undefined;
  Recipe: { itemId: number };
  Welcome: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [loaded] = useFonts({
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    PoppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsLight: require("./assets/fonts/Poppins-Light.ttf"),
    PoppinsExtraLight: require("./assets/fonts/Poppins-ExtraLight.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <RecipeProvider>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
          <Stack.Screen
            name="Recipes"
            component={Recipes}
            options={{
              title: "Let's Cook",
              headerTitleStyle: { fontFamily: "PoppinsBold" },
              headerBackground() {
                return <View style={{ backgroundColor: "transparent" }} />;
              },
            }}
          />
          <Stack.Screen
            name="Recipe"
            component={Recipe}
            options={{
              headerTitleStyle: { fontFamily: "PoppinsSemiBold" },
              headerBackground() {
                return <View style={{ backgroundColor: "transparent" }} />;
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RecipeProvider>
  );
}
