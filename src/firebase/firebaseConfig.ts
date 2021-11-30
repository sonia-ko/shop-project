import { initializeApp } from "firebase/app";
import "firebase/database";

import { getFirestore } from "firebase/firestore";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyBL9iPcG1bxDJe-JFOB4bl9YWXHWswswgA",
  authDomain: "online-shop-sonia.firebaseapp.com",
  databaseURL:
    "https://online-shop-sonia-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "online-shop-sonia",
  storageBucket: "online-shop-sonia.appspot.com",
  messagingSenderId: "386565220108",
  appId: "1:386565220108:web:f387f7a0326ca497a74b29",
  measurementId: "G-MRJDGGCNWJ",
});

export const db = getFirestore();
