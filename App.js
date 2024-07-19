import React from "react";
import { Provider } from "react-redux";
import store from "./store/auth-slice";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
