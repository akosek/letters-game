import * as React from "react";
import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducer from "./store/reducer";

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const store: Store<CardState, CardAction> & {
  dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const renderApp = () =>
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );

renderApp();
