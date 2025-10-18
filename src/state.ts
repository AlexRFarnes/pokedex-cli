import { createInterface, type Interface } from "readline";
import { getCommands } from "./command.js";
import { Pokeapi } from "./pokeapi.js";

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
  };
}
