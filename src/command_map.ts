import type { State } from "./state.js";
import type { ShallowLocations } from "./pokeapi.js";

export async function commandMap(state: State): Promise<void> {
  const locations = await state.pokeapi.fetchLocations(state.nextLocationURL);
  state.nextLocationURL = locations.next;
  state.prevLocationURL = locations.previous;

  printLocations(locations);
  return;
}

export async function commandMapBack(state: State): Promise<void> {
  if (!state.prevLocationURL) {
    throw new Error("you're on the first page");
  }

  const locations = await state.pokeapi.fetchLocations(state.prevLocationURL);
  state.nextLocationURL = locations.next;
  state.prevLocationURL = locations.previous;

  printLocations(locations);
  return;
}

export function printLocations(locations: ShallowLocations) {
  const locationNames = locations.results.map(result => result.name);
  console.log(locationNames.join("\n"));
  return;
}
