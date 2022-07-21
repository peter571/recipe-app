import * as React from "react";
import { API_KEY } from "@env";
import { useState } from "react";

interface GlobalContent {
  recipes: any[];
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  search: (searchTerm: string) => Promise<void>;
  fetchRecipes: () => Promise<void>;
  searchWithTags: (tag: string) => Promise<void>;
  loading: boolean;
  tag: string;
  setTags: React.Dispatch<React.SetStateAction<string>>;
}

interface ProviderProp {
  children: React.ReactNode;
}

export const RecipeContext = React.createContext<GlobalContent>(
  {} as GlobalContent
);

export const RecipeProvider = ({ children }: ProviderProp) => {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [tag, setTags] = useState('all');

  /**Format the returned results array */
  const formatResults = (results: any[]) => {
    const filtered = results.filter((item: any) => {
      if (
        item["id"] &&
        item["thumbnail_url"] &&
        item["instructions"] &&
        item["name"] &&
        item["num_servings"]
      ) {
        return item;
      }
    });

    return filtered.map((item) => {
      let newScore = item["user_ratings"].score ? item["user_ratings"].score.toFixed(1) * 5 : '';

      return {
        id: item["id"],
        videoUrl: item["original_video_url"],
        thumbnail: item["thumbnail_url"],
        score: newScore,
        ingredients: item.sections[0].components,
        instructions: item["instructions"],
        name: item["name"],
        numOfServe: item["num_servings"],
        duration: item["total_time_minutes"],
      };
    })
  };

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${API_KEY}`,
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  /**Fetch Recipes */
  const fetchRecipes = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://tasty.p.rapidapi.com/recipes/list?from=0&size=100",
        options
      );
      const { results } = await response.json();
      const formatedResults = formatResults(results);

      setRecipes(formatedResults);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  /**Search Recipes */
  const search = async (searchTerm: string) => {
    let value = searchTerm.toLowerCase();
    try {
      setLoading(true);
      const response = await fetch(
        `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=${value}`,
        options
      );
      const { results } = await response.json();
      const formatedResults = formatResults(results);
      setRecipes(formatedResults);
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false);
    }
  };

  /**Search with Tags */
  const searchWithTags = async (tag: string) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=${tag}`,
        options
      );
      const { results } = await response.json();
      const formatedResults = formatResults(results);
      setRecipes(formatedResults);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    const fetchData = async () => {
      await fetchRecipes();
    };
    fetchData();
  }, []);

  React.useEffect(() => {
    const fetchData = async () => {
      await search(searchQuery);
    };
    fetchData();
  }, [searchQuery]);

  React.useEffect(() => {
    const fetchData = async () => {
      if (tag === 'all') {
        await fetchRecipes();
      } else {
        await searchWithTags(tag);
      }
    };
    fetchData();
  }, [tag]);

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        searchQuery,
        setSearchQuery,
        fetchRecipes,
        search,
        searchWithTags,
        loading,
        tag,
        setTags
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
