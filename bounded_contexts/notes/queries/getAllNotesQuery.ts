export type GetAllNotesQuery = {
  userId: string;
};

export async function GetAllNotesQueryHandler(query: GetAllNotesQuery) {
  console.log("Getting all the notes", query);
  await Promise.resolve();
  return;
}
