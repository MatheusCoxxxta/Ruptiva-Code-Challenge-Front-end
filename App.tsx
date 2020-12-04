import React from "react";
import Main from "./src/views/Main";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import store from "./src/store/index";

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
