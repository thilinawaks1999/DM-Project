import { Poem } from "../types/poems.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RootState {
  poems: Poem[][];
  poets: {
    key: string;
    doc_count: number;
  }[];
  fetching: boolean;
  error: string | null;
  poemNames: {
    key: string;
    doc_count: number;
  }[];
  years: {
    key: string;
    doc_count: number;
  }[];
}

export const initialState: RootState = {
  poems: [],
  poets: [],
  poemNames: [],
  years: [],
  fetching: false,
  error: null,
};

export const poemsSlice = createSlice({
  name: "poems",
  initialState,
  reducers: {
    fetchAllPoems: (state) => {
      state.fetching = true;
      state.error = null;
    },
    fetchAllPoemsSuccess: (state, action: PayloadAction<Poem[][]>) => {
      state.poems = action.payload;
      state.fetching = false;
      state.error = null;
    },
    fetchAllPoemsFailure: (state, action: PayloadAction<string>) => {
      state.fetching = false;
      state.error = action.payload;
    },
    fetchAllPoets: (state) => {
      state.fetching = true;
      state.error = null;
    },
    fetchAllPoetsSuccess: (
      state,
      action: PayloadAction<
        {
          key: string;
          doc_count: number;
        }[]
      >
    ) => {
      state.poets = action.payload;
      state.fetching = false;
      state.error = null;
    },
    fetchAllPoetsFailure: (state, action: PayloadAction<string>) => {
      state.fetching = false;
      state.error = action.payload;
    },
    fetchPoemsByPoet: (state, action: PayloadAction<string>) => {
      state.fetching = true;
      state.error = null;
    },
    fetchPoemsByPoetSuccess: (state, action: PayloadAction<Poem[][]>) => {
      state.poems = action.payload;
      state.fetching = false;
      state.error = null;
    },
    fetchPoemsByPoetFailure: (state, action: PayloadAction<string>) => {
      state.fetching = false;
      state.error = action.payload;
    },
    fetchPoemsNames: (state) => {
      state.fetching = true;
      state.error = null;
    },
    fetchPoemNamesSuccess: (
      state,
      action: PayloadAction<
        {
          key: string;
          doc_count: number;
        }[]
      >
    ) => {
      state.poemNames = action.payload;
      state.fetching = false;
      state.error = null;
    },
    fetchPoemNamesFailure: (state, action: PayloadAction<string>) => {
      state.fetching = false;
      state.error = action.payload;
    },
    fetchPoemsByPoemName: (state, action: PayloadAction<string>) => {
      state.fetching = true;
      state.error = null;
    },
    fetchPoemsByPoemNameSuccess: (state, action: PayloadAction<Poem[][]>) => {
      state.poems = action.payload;
      state.fetching = false;
      state.error = null;
    },
    fetchPoemsByPoemNameFailure: (state, action: PayloadAction<string>) => {
      state.fetching = false;
      state.error = action.payload;
    },
    fetchYears: (state) => {
      state.fetching = true;
      state.error = null;
    },
    fetchYearsSuccess: (
      state,
      action: PayloadAction<
        {
          key: string;
          doc_count: number;
        }[]
      >
    ) => {
      state.years = action.payload;
      state.fetching = false;
      state.error = null;
    },
    fetchYearsFailure: (state, action: PayloadAction<string>) => {
      state.fetching = false;
      state.error = action.payload;
    },
    fetchPoemsByYear: (state, action: PayloadAction<string>) => {
      state.fetching = true;
      state.error = null;
    },
    fetchPoemsByYearSuccess: (state, action: PayloadAction<Poem[][]>) => {
      state.poems = action.payload;
      state.fetching = false;
      state.error = null;
    },
    fetchPoemsByYearFailure: (state, action: PayloadAction<string>) => {
      state.fetching = false;
      state.error = action.payload;
    },
    fetchPoemsByText: (state, action: PayloadAction<string>) => {
      state.fetching = true;
      state.error = null;
    },
    fetchPoemsByTextSuccess: (state, action: PayloadAction<Poem[][]>) => {
      state.poems = action.payload;
      state.fetching = false;
      state.error = null;
    },
    fetchPoemsByTextFailure: (state, action: PayloadAction<string>) => {
      state.fetching = false;
      state.error = action.payload;
    },
  },
});

export const { actions: poemsActions, reducer: poemsReducer } = poemsSlice;
