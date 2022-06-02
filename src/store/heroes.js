import { createSlice } from "@reduxjs/toolkit";

export const heroesStore = createSlice({
  name: "heroes",
  initialState: {
    heroes: [],
    comics: [],
    total: 0,
    isLoading: false,
    isLogged: false,
    hasError: false,
    publicK: "",
    privateK: "",
    ts: 0,
    hash: "",
    errorMessage: "",
  },
  reducers: {
    setHeroesDataSucess: (state, action) => {
      return {
        ...state,
        heroes: action.payload.heroes,
        isLoading: false,
        hasError: false,
        isLogged: true,
        errorMessage: "",
        total: action.payload.total,
      };
    },
    setHeroesDataFailure: (state, action) => {
      return {
        ...state,
        isLoading: false,
        hasError: true,
        errorMessage: action.payload.message,
      };
    },
    setHeroIsLoading: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    setApiValues: (state, action) => {
      return {
        ...state,
        publicK: action.payload.publicK,
        privateK: action.payload.privateK,
        hash: action.payload.hash,
        ts: action.payload.ts,
      };
    },
    setHeroComicsSucess: (state, action) => {
      return {
        ...state,
        comics: action.payload.comics,
        isLoading: false,
        hasError: false,
        errorMessage: "",
      };
    },
    setHeroComicsFailure: (state, action) => {
      return {
        ...state,
        hasError: true,
        errorMessage: action.payload.message,
        isLoading: false,
      };
    },
    setFailureAction: (state, action) => {
      return {
        ...state,
        hasError: true,
        errorMessage: action.payload.message,
        isLoading: false,
      };
    },
  },
});

export const {
  setHeroesDataSucess,
  setHeroesDataFailure,
  setHeroIsLoading,
  setApiValues,
  setHeroComicsSucess,
  setHeroComicsFailure,
  setFailureAction,
} = heroesStore.actions;

export const heroesReducer = heroesStore.reducer;
