import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/ProductSlice";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
