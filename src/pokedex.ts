import type { Pokemon } from "./pokeapi.js";
import { State } from "./state.js";

export type Pokedex = Record<string, Pokemon>;

export function initPokedex(): Pokedex {
  return {};
}

export function addPokemonToPokedex(state: State, pokemon: Pokemon) {
  if (state.pokedex[pokemon.name]) {
    return;
  }
  state.pokedex[pokemon.name] = pokemon;
}

export function getPokemonFromPokedex(
  state: State,
  pokemonName: string
): Pokemon | undefined {
  return state.pokedex[pokemonName];
}
