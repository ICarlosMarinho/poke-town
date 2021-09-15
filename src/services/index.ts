import axios from "axios";
import { getFormattedPokemon } from "../utils";

export const fetchPokemon = async (id: number): Promise<Pokemon> => {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

  return getFormattedPokemon(data);
};
