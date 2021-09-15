import axios from "axios";
import { getFormattedPokemon } from "../utils";

export const fetchPokemon = (
  searchKey: string,
  setPokemon: (pokemon: Pokemon) => void,
  setLoading: (loading: boolean) => void,
  setFetchError: (fetchError: boolean) => void
): void => {
  setLoading(true);

  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${searchKey}`, { timeout: 5000 })
    .then(({ data }) => setPokemon(getFormattedPokemon(data)))
    .catch((error: Error) => {
      setFetchError(true);
      console.log(error);
    })
    .finally(() => setLoading(false));
};
