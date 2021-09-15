import React, { FC } from "react";
import { ThemeProvider } from "styled-components";

import AppContext from "./hooks/AppContext";
import useAppState from "./hooks/useAppState";
import GlobalStyle from "./style";
import themes from "./themes";
import Home from "./views/Home";

const App: FC = () => {
  const state = useAppState();

  return (
    <>
      <AppContext.Provider value={state}>
        <ThemeProvider theme={themes}>
          <GlobalStyle />
          <Home />
        </ThemeProvider>
      </AppContext.Provider>
    </>
  );
};

export default App;
