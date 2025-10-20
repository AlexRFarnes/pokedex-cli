import type { State } from "./state.js";
import { getPokemonFromPokedex } from "./pokedex.js";

export async function commandInspect(
  state: State,
  ...args: string[]
): Promise<void> {
  const pokemonName = args[0].toLowerCase();
  if (!pokemonName) {
    throw new Error("Pokemon name is required");
  }

  const capturedPokemon = getPokemonFromPokedex(state, pokemonName);

  if (!capturedPokemon) {
    throw new Error(`you have not caught that pokemon`);
  }

  console.log(`Name: ${capturedPokemon.name}`);
  console.log(`Height: ${capturedPokemon.height}`);
  console.log(`Weight: ${capturedPokemon.weight}`);
  console.log("Stats:");
  for (const stat of capturedPokemon.stats) {
    console.log(`  -${stat.stat.name}: ${stat.base_stat}`);
  }
  console.log("Types:");
  for (const type of capturedPokemon.types) {
    console.log(`  - ${type.type.name}`);
  }
}
