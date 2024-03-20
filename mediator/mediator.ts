import { create } from "./create.ts";

/**
 * This implementation utilizes the mediator pattern, 
 * where an object handles both keys and functions.
 *
 * Consider creating two objects, one for commands and the 
 * other for queries, as this approach aims to optimize 
 * actions, recognizing that reads are 10 times more 
 * frequent than writes and can benefit from caching.
 * 
 * The advantage lies in centralizing code optimizations, 
 * ensuring that changes made to enhance performance don't 
 * affect the underlying business logic.
 */

const _commandsOrQueries = create;

type CommandsOrQueries = typeof _commandsOrQueries;
type InputMap = {
  [K in keyof CommandsOrQueries]: Omit<
    Parameters<CommandsOrQueries[K]>[0],
    "ctx"
  >;
};
type OutputMap = {
  [K in keyof CommandsOrQueries]: ReturnType<CommandsOrQueries[K]>;
};
const commandsOrQueries: {
  [K in keyof CommandsOrQueries]: (arg: InputMap[K]) => OutputMap[K];
} = _commandsOrQueries as any;
type Mediator<K extends keyof CommandsOrQueries = keyof CommandsOrQueries> = {
  [P in K]: { type: P; arg: InputMap[P] };
}[K];

/**
 *
 * Dispatches the stored function by calling its key value, 
 * facilitating code separation, reducing controller complexity, 
 * and minimizing dependencies.
 *
 * Additional logic can be incorporated to make this dispatch 
 * process pluggable. For instance, the `logTime` function 
 * below serves as a universal logger, capturing all commands 
 * and displaying the execution start time.
 *
 * @param param0
 * @returns
 */
export const dispatch = <K extends keyof CommandsOrQueries>({
  type,
  arg,
}: Mediator<K>) => {
  logTime(type);
  return commandsOrQueries[type](arg);
};

function logTime(type: string | number | symbol) {
  const _type = typeof type === "symbol" ? String(type) : type;
  console.log("This approach allows logging of every executed command, which enables a plugin architecture.");
  console.log(`Starting ${_type} at ${Date.now()}`);
}