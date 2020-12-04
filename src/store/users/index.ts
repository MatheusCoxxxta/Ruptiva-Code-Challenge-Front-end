import { Reducer } from "redux"
import { UsersState, UserActionTypes } from "./types"

const INITIAL_STATE: UsersState = {
  data: [{
    id: 1, name: "Matheus", document: "49818286839", type: "individual"
  }, {
    id: 2, name: "Matheus", document: "49818286839", type: "business"
  }]
}

const reducer: Reducer<UsersState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.GET:
      console.log("atualizando")
      return { ...state, users: action.users };
    case UserActionTypes.SAVE:
      const newUser = action.payload
      return { ...state, data: [...state.data, newUser] }

    case UserActionTypes.DELETE:
      const userId = action.payload.id
      const allUsers = state.data.filter(user => user.id !== userId)
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
