import { poemsActions } from "./slice";
import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { call, Effect, ForkEffect, put, takeEvery } from "redux-saga/effects";
import { get, post } from "./apiService";

// ------------------------ Async Functions -------------------------

export async function fetchAllPoems(): Promise<AxiosResponse> {
  const response = await get("/all-poems");
  return response;
}

export async function fetchAllPoets(): Promise<AxiosResponse> {
  const response = await get("all-poets-names");
  return response;
}

export async function fetchPoemsByPoet(
  poetName: string
): Promise<AxiosResponse> {
  const response = await post("poems-by-poet", { poetName });
  return response;
}

export async function fetchPoemsNames(): Promise<AxiosResponse> {
  const response = await get("all-poems-names");
  return response;
}

export async function fetchPoemsByPoemName(
  poemName: string
): Promise<AxiosResponse> {
  const response = await post("poem-by-name", { poemName });
  return response;
}

export async function fetchYears(): Promise<AxiosResponse> {
  const response = await get("years");
  return response;
}

export async function fetchPoemsByYear(year: string): Promise<AxiosResponse> {
  const response = await post("poems-by-year", { year });
  return response;
}

export async function fetchPoemsByText(text: string): Promise<AxiosResponse> {
  const response = await post("poems-by-text", { text });
  return response;
}

// ------------------------ Saga Functions --------------------------

export function* fetchAllPoemsSaga(): Generator<Effect, void> {
  try {
    const poems: any = yield call(fetchAllPoems);
    yield put(poemsActions.fetchAllPoemsSuccess(poems));
  } catch (error) {
    yield put(poemsActions.fetchAllPoemsFailure((error as any).message));
  }
}

export function* fetchAllPoetsSaga(): Generator<Effect, void, unknown> {
  try {
    const poets: any = yield call(fetchAllPoets);
    yield put(poemsActions.fetchAllPoetsSuccess(poets));
  } catch (error) {
    yield put(poemsActions.fetchAllPoetsFailure((error as any).message));
  }
}

export function* fetchPoemsByPoetSaga(
  action: PayloadAction<string>
): Generator<Effect, void, unknown> {
  try {
    const poetName = action.payload;
    const poems: any = yield call(fetchPoemsByPoet, poetName);
    yield put(poemsActions.fetchPoemsByPoetSuccess(poems));
  } catch (error) {
    yield put(poemsActions.fetchPoemsByPoetFailure((error as any).message));
  }
}

export function* fetchPoemNamesSaga(): Generator<Effect, void, unknown> {
  try {
    const poems: any = yield call(fetchPoemsNames);
    yield put(poemsActions.fetchPoemNamesSuccess(poems));
  } catch (error) {
    yield put(poemsActions.fetchPoemNamesFailure((error as any).message));
  }
}

export function* fetchPoemsByPoemNameSaga(
  action: PayloadAction<string>
): Generator<Effect, void, unknown> {
  try {
    const poemName = action.payload;
    const poems: any = yield call(fetchPoemsByPoemName, poemName);
    yield put(poemsActions.fetchPoemsByPoemNameSuccess(poems));
  } catch (error) {
    yield put(poemsActions.fetchPoemsByPoemNameFailure((error as any).message));
  }
}

export function* fetchYearsSaga(): Generator<Effect, void, unknown> {
  try {
    const years: any = yield call(fetchYears);
    yield put(poemsActions.fetchYearsSuccess(years));
  } catch (error) {
    yield put(poemsActions.fetchYearsFailure((error as any).message));
  }
}

export function* fetchPoemsByYearSaga(
  action: PayloadAction<string>
): Generator<Effect, void, unknown> {
  try {
    const year = action.payload;
    const poems: any = yield call(fetchPoemsByYear, year);
    yield put(poemsActions.fetchPoemsByYearSuccess(poems));
  } catch (error) {
    yield put(poemsActions.fetchPoemsByYearFailure((error as any).message));
  }
}

export function* fetchPoemsByTextSaga(
  action: PayloadAction<string>
): Generator<Effect, void, unknown> {
  try {
    const text = action.payload;
    const poems: any = yield call(fetchPoemsByText, text);
    yield put(poemsActions.fetchPoemsByTextSuccess(poems));
  } catch (error) {
    yield put(poemsActions.fetchPoemsByTextFailure((error as any).message));
  }
}

export function* watchSagas(): Generator<ForkEffect, void> {
  yield takeEvery(poemsActions.fetchAllPoems, fetchAllPoemsSaga);
  yield takeEvery(poemsActions.fetchAllPoets, fetchAllPoetsSaga);
  yield takeEvery(poemsActions.fetchPoemsByPoet, fetchPoemsByPoetSaga);
  yield takeEvery(poemsActions.fetchPoemsNames, fetchPoemNamesSaga);
  yield takeEvery(poemsActions.fetchPoemsByPoemName, fetchPoemsByPoemNameSaga);
  yield takeEvery(poemsActions.fetchYears, fetchYearsSaga);
  yield takeEvery(poemsActions.fetchPoemsByYear, fetchPoemsByYearSaga);
  yield takeEvery(poemsActions.fetchPoemsByText, fetchPoemsByTextSaga);
}

const sagas = watchSagas;
export default sagas;
