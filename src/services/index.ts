import axios from "axios";
import { getFormattedPokemon } from "../utils";

export const fetchPokemon = (
  id: number,
  setPokemon: (pokemon: Pokemon) => void,
  setLoading: (loading: boolean) => void,
  setFetchError: (fetchError: boolean) => void
): void => {
  setLoading(true);

  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}`, { timeout: 5000 })
    .then(({ data }) => setPokemon(getFormattedPokemon(data)))
    .catch(() => setFetchError(true))
    .finally(() => setLoading(false));
};
