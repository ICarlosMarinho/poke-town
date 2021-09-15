import { createContext } from "react";

const AppContext = createContext<AppContext>({
  darkMode: false,
  setDarkMode: null,
  favorites: null,
  setFavorites: null,
  pokemon: null,
  setPokemon: null,
});

export default AppContext;
