import { action  } from "typesafe-actions"
import { User, UserActionTypes } from './types'

export const loadRequest = () => action(UserActionTypes.LOAD)
export const loadUsers = (data: User[]) => action(UserActionTypes.GET, data)
export const deleteUser = (data: User) => action(UserActionTypes.DELETE, data)
export const saveUser = (data: User) => action(UserActionTypes.SAVE, data)
