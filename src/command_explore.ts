import type { State } from "./state.js";
import type { Location } from "./pokeapi.js";

export async function commandExplore(
  state: State,
  ...args: string[]
): Promise<void> {
  const locationName = args[0];
  if (!locationName) {
    throw new Error("Location name is required");
  }

  console.log(`Exploring ${locationName}...`);

  const location = await state.pokeapi.fetchLocation(locationName);
  printPokemonEncounters(location);
  return;
}

export function printPokemonEncounters(location: Location) {
  console.log("Found Pokemon:");
  location.pokemon_encounters.forEach(encounter => {
    console.log(`- ${encounter.pokemon.name}`);
  });
  return;
}
