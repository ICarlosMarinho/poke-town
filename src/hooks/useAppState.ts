import { useState } from "react";

const useAppState = (): AppState => {
  const [fetchError, setFetchError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [favorites, setFavorites] = useState<Pokemon[]>(new Array<Pokemon>());
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  return {
    fetchError,
    setFetchError,
    loading,
    setLoading,
    darkMode,
    setDarkMode,
    favorites,
    setFavorites,
    pokemon,
    setPokemon,
  };
};

export default useAppState;
