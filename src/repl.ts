import { createInterface } from "readline";
import { getCommands } from "./command.js";

export function cleanInput(input: string): string[] {
  return input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter(item => item !== "");
}

export function startRepl() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });

  rl.prompt();

  rl.on("line", line => {
    const words = cleanInput(line);

    if (words.length === 0) {
      rl.prompt();
      return;
    }
    const command = words[0];

    const commands = getCommands();
    if (commands[command]) {
      commands[command].callback(commands);
    } else {
      console.log(`Unknown command: ${command}`);
    }

    rl.prompt();
  });
}
