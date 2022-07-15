import * as React from 'react'
import { API_KEY } from '@env'

interface GlobalContent {
    recipes: any[];
    searchResults: any[];
}

interface ProviderProp {
    children: React.ReactNode;
}

const RecipeContext = React.createContext<GlobalContent>({} as GlobalContent);

export const RecipeProvider = ({ children }: ProviderProp) => {

    const [recipes, setRecipes] = React.useState<any[]>([]);
    const [searchResults, setSearchResults] = React.useState<any[]>([]);

    /**Fetch Recipes */
    const fetchRecipes = async () => {
        try {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': `${API_KEY}`,
                    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
                }
            };
            
            const response = await fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20', options);
            const results = await response.json();
            setRecipes(results?.data);

        } catch (error) {
            
        }
    }

    /**Search Recipes */
    const search = async (searchTerm: string) => {
        
    }

    return (
        <RecipeContext.Provider value={{ recipes, searchResults}}>
            {children}
        </RecipeContext.Provider>
    )
}