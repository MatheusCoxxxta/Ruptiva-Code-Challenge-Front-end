import { action  } from "typesafe-actions"
import { User, UserActionTypes } from './types'

export const loadUsers = () => action(UserActionTypes.GET)
export const deleteUser = (data: User) => action(UserActionTypes.DELETE, data)
export const saveUser = (data: User) => action(UserActionTypes.SAVE, data)
