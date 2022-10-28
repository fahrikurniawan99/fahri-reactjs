import React from "react";
import { Provider } from "react-redux";
import store from "../App/store";
import Counter from "./Counter";

const index = () => {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  );
};

export default index;
