import * as firebase from "firebase/app";
import { rrfConfig } from "./rrfConfig";
import { store } from "../store/store";
import { createFirestoreInstance } from "redux-firestore";

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};
