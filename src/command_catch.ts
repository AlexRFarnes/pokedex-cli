import { Pokemon } from "./pokeapi.js";
import { addPokemonToPokedex } from "./pokedex.js";
import type { State } from "./state.js";

export async function commandCatch(
  state: State,
  ...args: string[]
): Promise<void> {
  const pokemonName = args[0].toLowerCase();
  if (!pokemonName) {
    throw new Error("Pokemon name is required");
  }

  const pokemon = await state.pokeapi.fetchPokemon(pokemonName);
  console.log(`Throwing a Pokeball at ${pokemon.name}...`);
  const success = tryToCatchPokemon(pokemon);
  if (success) {
    console.log(`${pokemon.name} was caught!`);
    console.log("You may now inspect it with the inspect command.");
    addPokemonToPokedex(state, pokemon);
  } else {
    console.log(`${pokemon.name} escaped!`);
  }
  return;
}

function tryToCatchPokemon(pokemon: Pokemon): boolean {
  let baseCatchChance = 0;
  switch (true) {
    case pokemon.base_experience <= 100:
      baseCatchChance = 0.8;
      break;
    case pokemon.base_experience <= 200:
      baseCatchChance = 0.6;
      break;
    case pokemon.base_experience <= 300:
      baseCatchChance = 0.4;
      break;
    default:
      baseCatchChance = 0.3;
      break;
  }

  return Math.random() <= baseCatchChance;
}
