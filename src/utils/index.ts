export const getFormattedPokemon = (pokemon: any): Pokemon => {
  return {
    id: pokemon.id,
    name: pokemon.name,
    height: pokemon.height,
    imgUrl: pokemon.sprites.front_default,
    types: pokemon.types.map((slot: any) => slot.type.name),
  };
};
