import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import productsReducer from "./productsSlice";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  products: productsReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});
