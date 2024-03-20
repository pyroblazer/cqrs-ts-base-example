/**
This file should be imported into index.ts.
*/
import {
  GetAllNotesQueryHandler as GetAllNotesHandler,
  CreateNewNoteCommandHandler as CreateNewNoteHandler,
  GetUsersQueryHandler as GetUsersHandler,
  CreateUserCommandHandler as CreateUserHandler,
  } from "../bounded_contexts/index.ts";
  
  /**
  This section orchestrates the functionalities.
  Each command is mapped to its respective handler.
  */
  export const create = {
  CREATE_USER: CreateUserHandler,
  GET_USERS: GetUsersHandler,
  GET_NOTES: GetAllNotesHandler,
  CREATE_NOTE: CreateNewNoteHandler,
  };