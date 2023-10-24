import { AllEffect, ForkEffect, all, fork } from "redux-saga/effects";
import sagas from "./saga";

export default function* rootSaga(): Generator<
  AllEffect<ForkEffect<void>>,
  void,
  unknown
> {
  yield all([fork(sagas)]);
}
