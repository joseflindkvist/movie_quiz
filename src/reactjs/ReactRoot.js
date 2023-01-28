// Add relevant imports here
import { firebaseModelPromise } from "../firebaseModel";
import App from "../App";
import { PromiseNoData } from "../views/promiseNoData";
import {
  getFirebaseData,
  updateFirebaseFromModel,
  updateModelFromFirebase,
} from "../firebaseModel.js";
import resolvePromise from "../resolvePromise";
import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebaseConfig";
// Define the ReactRoot component

export default function ReactRoot() {
  const [promiseState] = React.useState({});
  const [, reRender] = React.useState();
  var uid = "";
  onAuthStateChanged(getAuth(app), (user) => {
    uid = "no-user";
    if (user) {
      uid = user.uid;
    }
    if (promiseState.promise) {
      updateFirebaseFromModel(promiseState.data);
      updateModelFromFirebase(promiseState.data);
    }

    if (!promiseState.promise) {
      resolvePromise(getFirebaseData(uid), promiseState, notifyACB);
    }
  });
  function notifyACB() {
    reRender(new Object());
  }
  return PromiseNoData(promiseState) || <App model={promiseState.data} />;
}
// Export the ReactRoot component
