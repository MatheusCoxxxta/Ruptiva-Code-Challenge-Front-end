const ACTIONS = {
  GET: "GET_USERS",
  SAVE: "SAVE_USER",
  DELETE: "DELETE_USER"
}

const INITIAL_STATE = {
  users: [{
    id: 0,
    name: "",
    document: "",
    type: ""
  }]
}

export const userReducer = (state = INITIAL_STATE, action: any) => {
  switch(action.type) {
    case ACTIONS.GET:
      return { ...state, users: action.users };
    case ACTIONS.SAVE:
      const usersList = [ ...state.users, action.user ]
      return { ...state, users: usersList };
    case ACTIONS.DELETE:
      const id = action.id
      const allUsers = state.users.filter((user: {id: number; name: string; document: string;}) => user.id !== id)
      return { ...state, users: allUsers }
  }
}

export function get_users () {

}

export function save () {
  return (dispatch: (arg0: { type: string; user: { name: string; document: string; type: string; }; }) => void) => {
    dispatch({
      type: ACTIONS.SAVE,
      user: {
        name: "Costa",
        document: "12345678910",
        type: "individual"
      }
    })
  }
}

export function destroy () {

}
