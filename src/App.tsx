import React, { FC, useState } from "react";
import { ThemeProvider } from "styled-components";

import AppContext from "./hooks/AppContext";
import GlobalStyle from "./style";
import themes from "./themes";
import Home from "./views/Home";

const App: FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [favorites, setFavorites] = useState<Pokemon[] | null>(null);
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  return (
    <>
      <AppContext.Provider
        value={{
          darkMode,
          setDarkMode,
          favorites,
          setFavorites,
          pokemon,
          setPokemon,
        }}>
        <ThemeProvider theme={themes}>
          <GlobalStyle />
          <Home />
        </ThemeProvider>
      </AppContext.Provider>
    </>
  );
};

export default App;
