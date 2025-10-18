import { commandExit } from "./command_exit.js";
import { commandExplore } from "./command_explore.js";
import { commandHelp } from "./command_help.js";
import { commandMap, commandMapBack } from "./command_map.js";
import { CLICommand } from "./state.js";

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
  };
}
