import { GestureResponderEvent } from "react-native";

export interface RecipeProp {
    id: number;
    videoUrl: string;
    thumbnail: string;
    score: number;
    ingredients: any[];
    instructions: any[];
    name: string;
    numOfServe: number;
    duration: string;
  }

  export interface TagProp {
    item: {
      id: string;
      tag: string;
    };
  }

  export interface ProceduresProp {
    instructions: any[];
  }

  export interface ProcedureCardProp {
    instruction: string;
    position: number;
  }

  export interface IngredientsProp {
    ingredients: any[];
  }

  export interface IngredientCardProp {
    item: any;
  }

  export interface ButtonProp {
    text: string;
    onPress: (event: GestureResponderEvent) => void
}

export interface BtnProp {
    title: string;
    onPress: () => void;
    isSelected: boolean;
}

export interface UrlProp {
  url: string;
}

export interface RecipeCardProp {
  id: number;
  thumbnail: string;
  score: number;
  duration: string;
  name: string;
}

