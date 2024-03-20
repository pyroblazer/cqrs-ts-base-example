export type CreateNewNoteCommand = {
  userId: string;
  post: {
    title: string;
    content: string;
  };
};

export function CreateNewNoteCommandHandler(cmd: CreateNewNoteCommand) {
  console.log("I am creating a new note!", cmd);
  return Promise.resolve({
    title: cmd.post.title,
    content: cmd.post.content,
  });
}
