import { Cache } from "./pokecache.js";

export class Pokeapi {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  #cache: Cache;

  constructor() {
    this.#cache = new Cache(1000 * 60 * 60 * 1); // 1 hour
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const locationURL =
      pageURL || `${Pokeapi.baseURL}/location-area/?offset=0&limit=20`;
    console.log(`Fetching locations from ${locationURL}`);
    const cached = this.#cache.get<ShallowLocations>(locationURL);
    if (cached) {
      console.log(`Cache hit for ${locationURL}`);
      return cached.val;
    }
    try {
      const response = await fetch(locationURL);
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const data: ShallowLocations = await response.json();
      this.#cache.add(locationURL, data);
      return data;
    } catch (error) {
      throw new Error(`Failed to fetch locations: ${(error as Error).message}`);
    }
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const locationURL = `${Pokeapi.baseURL}/location-area/${locationName}`;
    try {
      const response = await fetch(locationURL);
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const data: Location = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Failed to fetch location: ${(error as Error).message}`);
    }
  }
}

export type ShallowLocations = {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
};

export type Location = {
  encounter_method_rates: {
    encounter_method: { name: string; url: string };
    version_details: {
      rate: number;
      version: { name: string; url: string };
    }[];
  }[];
  game_index: number;
  id: number;
  location: { name: string; url: string };
  name: string;
  names: { language: { name: string; url: string }; name: string }[];
  pokemon_encounters: {
    pokemon: { name: string; url: string };
    version_details: {
      encounter_details: {
        chance: number;
        condition_values: any[];
        max_level: number;
        method: { name: string; url: string };
        min_level: number;
      }[];
      max_chance: number;
      version: { name: string; url: string };
    }[];
  }[];
};
