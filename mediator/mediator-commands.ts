/**
 * Mediator Commands and Queries
 * 
 * This file defines types for commands and queries to be used with a mediator pattern.
 * It specifies the supported types along with their corresponding arguments.
 */

import {
  CreateNewNoteCommand,
  CreateNewNoteCommandHandler,
  GetAllNotesQuery,
  GetAllNotesQueryHandler,
  GetUsersQuery,
  GetUsersQueryHandler,
  CreateUserCommand,
  CreateUserCommandHandler,
} from "../bounded_contexts/index.ts";

export type MediatorCommandsAndQueries =
  | {
      type: "CREATE_USER";
      arg: CreateUserCommand | typeof CreateUserCommandHandler;
    }
  | {
      type: "GET_USERS";
      arg: GetUsersQuery | typeof GetUsersQueryHandler;
    }
  | {
      type: "GET_NOTES";
      arg: GetAllNotesQuery | typeof GetAllNotesQueryHandler;
    }
  | {
      type: "CREATE_NOTE";
      arg: CreateNewNoteCommand | typeof CreateNewNoteCommandHandler;
    };
