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

interface AppState {
  searchKey: string;
  setSearchKey: (searchKey: string) => void;
  fetchError: boolean;
  setFetchError: (fetchError: boolean) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  favorites: Pokemon[] | null;
  setFavorites: (favorites: Pokemon[]) => void;
  pokemon: Pokemon | null;
  setPokemon: (pokemon: Pokemon) => void;
}

interface ThemeProps {
  darkMode: boolean;
}

interface SizeProps {
  width?: string;
  height?: string;
}
