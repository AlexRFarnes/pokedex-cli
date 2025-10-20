import { commandCatch } from "./command_catch.js";
import { commandExit } from "./command_exit.js";
import { commandExplore } from "./command_explore.js";
import { commandHelp } from "./command_help.js";
import { commandInspect } from "./command_inspect.js";
import { commandMap, commandMapBack } from "./command_map.js";
import { CLICommand } from "./state.js";
import { commandPokedex } from "./command_pokedex.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Display a help message",
      callback: commandHelp,
    },
    map: {
      name: "map",
      description: "Show the next locations in the Pokemon world",
      callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "Show the previous locations in the Pokemon world",
      callback: commandMapBack,
    },
    explore: {
      name: "explore",
      description: "Explore the Pokemon world",
      callback: commandExplore,
    },
    catch: {
      name: "catch",
      description: "Catch a Pokemon",
      callback: commandCatch,
    },
    inspect: {
      name: "inspect",
      description: "Inspect a captured Pokemon",
      callback: commandInspect,
    },
    pokedex: {
      name: "pokedex",
      description: "Show your Pokedex",
      callback: commandPokedex,
    },
  };
}
