export type CreateUserCommand = {
  username: string;
  password: string;
};

export function CreateUserCommandHandler(cmd: CreateUserCommand) {
  console.log("Apply the create user command handler", cmd);
}
