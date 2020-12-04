import api from "../../../services/api"
import { call, put } from "redux-saga/effects"
import { deleteUser, loadUsers, saveUser } from "./actions"
import { User } from "./types"

export function* getUsers() {
  try {
    const response = yield call(api.get, "user")
    yield put(loadUsers(response.data))

  } catch (error) {
    console.log(error)
  }
}

export function* save(data: any) {
  try {
    const response = yield call(api.post, "user", data.payload)

    yield put(saveUser(response.data))
  } catch (error) {
    console.log(error)
  }
}


export function* destroy(data: any) {
  try {
    const id = data.payload._id
    const response = yield call(api.delete, `user/${id}`)
    yield put(deleteUser(id))
  } catch (error) {
    console.log(error)
  }
}
