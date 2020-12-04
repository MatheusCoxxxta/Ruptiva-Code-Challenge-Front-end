import api from "../../../services/api"
import { call, put } from "redux-saga/effects"

export function* save() {
  try {
    const response = yield call(api.get, "users/MatheusCoxxxta/repos")
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
}

export function* getUsers() {
  try {
    const response = yield call(api.get, "users/MatheusCoxxxta/repos")
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
}

export function* destroy() {
  try {
    const response = yield call(api.get, "users/MatheusCoxxxta/repos")
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
}
