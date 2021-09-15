declare module "*.svg" {
  const content: any;

  export default content;
}

interface Pokemon {
  id: number;
  name: string;
  height: number;
  imgUrl: string;
  types: string[];
}

interface AppContext {
  darkMode: boolean;
  setDarkMode: ((darkMode: boolean) => void) | null;
  favorites: Pokemon[] | null;
  setFavorites: ((favorites: Pokemon[]) => void) | null;
  pokemon: Pokemon | null;
  setPokemon: ((pokemon: Pokemon) => void) | null;
}

interface ThemeProps {
  darkMode: boolean;
}
