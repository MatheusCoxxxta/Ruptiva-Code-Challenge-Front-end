import { createStore, applyMiddleware, Store } from "redux"
import { UsersState } from "./users/types"
import createSagaMiddleware from "redux-saga"

import rootReducer from "./rootReducer"
import rootSaga from "./rootSaga"

export interface ApplicationState {
  users: UsersState
}

const sagaMiddleware = createSagaMiddleware()


const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store
