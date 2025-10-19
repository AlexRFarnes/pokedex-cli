import { createInterface, type Interface } from "readline";
import { getCommands } from "./command.js";
import { Pokeapi } from "./pokeapi.js";
import { initPokedex, type Pokedex } from "./pokedex.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
  commands: Record<string, CLICommand>;
  rl: Interface;
  pokeapi: Pokeapi;
  nextLocationURL: string;
  prevLocationURL: string;
  pokedex: Pokedex;
};

export function initState(): State {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });

  return {
    commands: getCommands(),
    rl,
    pokeapi: new Pokeapi(),
    nextLocationURL: "",
    prevLocationURL: "",
    pokedex: initPokedex(),
  };
}
