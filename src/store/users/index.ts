import { Reducer } from "redux"
import { UsersState, UserActionTypes } from "./types"

const INITIAL_STATE: UsersState = {
  data: [],
}

const reducer: Reducer<UsersState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.LOAD:
      return { ...state };
    case UserActionTypes.GET:
      return { ...state, data: action.payload };
    case UserActionTypes.SAVE:

      const newList = [...state.data, action.payload]
      return { ...state, data: newList }

    case UserActionTypes.DELETE:
      const userId = action.payload._id
      const allUsers = state.data.filter(user => user._id !== userId)
      return { ...state, data: allUsers }

    default:
      return state
  }
};

export default reducer;



/**
    case ACTIONS.SAVE:
      const usersList = [ ...state.users, action.user ]
      return { ...state, users: usersList };
    case ACTIONS.DELETE:
      const id = action.id
      const allUsers = state.users.filter((user: {id: number; name: string; document: string;}) => user.id !== id)
      return { ...state, users: allUsers }
 */
