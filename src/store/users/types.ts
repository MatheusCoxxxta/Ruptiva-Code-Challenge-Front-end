/**
 * Action types
 */

export enum UserActionTypes {
  LOAD = "LOAD_REQUEST",
  GET = "GET_USERS",
  SAVE = "SAVE_USER",
  DELETE = "DELETE_USER"
}

/**
 * Data Types
 */

export interface User {
  _id?: string,
  name: string,
  document: string,
  type: string
}

/**
 * State type
 */

 export interface UsersState {
   data: User[]
 }
