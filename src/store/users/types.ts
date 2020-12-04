/**
 * Action types
 */

export enum UserActionTypes {
  GET = "GET_USERS",
  SAVE = "SAVE_USER",
  DELETE = "DELETE_USER"
}

/**
 * Data Types
 */

export interface User {
  id: number,
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
