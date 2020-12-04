import { all, takeLatest } from "redux-saga/effects"

import { UserActionTypes } from "./users/types"
import { save, getUsers, destroy } from "./users/sagas"

export default function* rootSaga () {
  return yield all([
    takeLatest(UserActionTypes.SAVE, save),
    takeLatest(UserActionTypes.LOAD, getUsers),
    takeLatest(UserActionTypes.DELETE, destroy)
  ])
}
