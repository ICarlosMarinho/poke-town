export const getFormattedPokemon = (pokemon: any): Pokemon => {
  return {
    id: pokemon.id,
    name: pokemon.name,
    height: pokemon.height,
    weight: pokemon.weight,
    stats: {
      attack: pokemon.stats.find((item: any) => item.stat.name === "attack")
        .base_stat,
      defense: pokemon.stats.find((item: any) => item.stat.name === "defense")
        .base_stat,
      hp: pokemon.stats.find((item: any) => item.stat.name === "hp").base_stat,
    },
    imgDefaultUrl: pokemon.sprites.front_default,
    imgShinyUrl: pokemon.sprites.front_shiny,
    types: pokemon.types.map((item: any) => item.type.name),
    abilities: pokemon.abilities.map((item: any) => item.ability.name),
  };
};
