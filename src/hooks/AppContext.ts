import { createContext } from "react";

const AppContext = createContext<AppState>({
  darkMode: false,
  setDarkMode: () => null,
  favorites: new Array<Pokemon>(),
  setFavorites: () => null,
  fetchError: false,
  setFetchError: () => null,
  loading: false,
  setLoading: () => null,
  pokemon: null,
  setPokemon: () => null,
});

export default AppContext;
