import firebase from "firebase";
import { takeEvery, call, put, fork } from "redux-saga/effects";
import { Type, Creator } from "../actions";

const { Auth } = Type;

function* signin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
}

function* signout() {
  yield firebase.auth().signOut();
  yield put(Creator.Auth.notAuthed());
}

function authenticate() {
  return new Promise(resolve => firebase.auth().onAuthStateChanged(resolve));
}

function* checkAuth() {
  const user = yield call(authenticate);
  if (!user) {
    yield put(Creator.Auth.notAuthed(user));
    return;
  }
  yield put(Creator.Auth.authed(user));
}

export default [
  takeEvery(Auth.Signin, signin),
  takeEvery(Auth.Signout, signout),
  takeEvery(Auth.CheckAuth, checkAuth)
];
