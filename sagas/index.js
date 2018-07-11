import { all, takeEvery, put } from "redux-saga/effects";
import { Type, Creator } from "../actions";
import Router from "next/router";

import Auth from "./auth";

function* routing(action) {
  Router.push(action.path);
  yield put(Creator.Menu.close());
}

function* rootSaga() {
  yield all([yield takeEvery(Type.Router.Push, routing), ...Auth]);
}

export default rootSaga;
