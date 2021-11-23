import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store/store";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { rrfProps } from "./firebase/rrfProps ";

const Root: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router basename="/shop-project/build">{children}</Router>
        {/* <Router>{children}</Router> */}
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};

export default Root;
