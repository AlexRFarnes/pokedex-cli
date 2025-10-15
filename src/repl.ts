import type { State } from "./state.js";

export function cleanInput(input: string): string[] {
  return input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter(item => item !== "");
}

export function startRepl(state: State) {
  state.rl.prompt();

  state.rl.on("line", line => {
    const words = cleanInput(line);

    if (words.length === 0) {
      state.rl.prompt();
      return;
    }
    const command = words[0];

    if (state.commands[command]) {
      state.commands[command].callback(state);
    } else {
      console.log(`Unknown command: ${command}`);
    }

    state.rl.prompt();
  });
}
