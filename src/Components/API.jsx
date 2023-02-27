const API_POKEDEX = 'https://pokeapi.co/api/v2/pokemon/';

export const listPokemon = async () => {
  return await fetch(API_POKEDEX);
};