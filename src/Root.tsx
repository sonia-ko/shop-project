import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store/store";

type Props = {};

const Root: React.FC<Props> = ({ children }) => {
  return (
    <Provider store={store}>
      <Router basename="/shop-project/build">{children}</Router>
      {/* <Router>{children}</Router> */}
    </Provider>
  );
};

export default Root;
