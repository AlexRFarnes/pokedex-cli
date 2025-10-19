import type { State } from "./state.js";

export function cleanInput(input: string): string[] {
  return input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter(item => item !== "");
}

export async function startRepl(state: State) {
  state.rl.prompt();

  state.rl.on("line", async line => {
    const input = cleanInput(line);

    if (input.length === 0) {
      state.rl.prompt();
      return;
    }

    const commandName = input[0];

    const command = state.commands[commandName];

    if (!command) {
      console.log(
        `Unknown command: "${commandName}". Type "help" for a list of commands.`
      );
      state.rl.prompt();
      return;
    }

    try {
      await command.callback(state, ...input.slice(1));
    } catch (error) {
      console.error((error as Error).message);
    } finally {
      state.rl.prompt();
    }
  });
}
