import { createSlice } from "@reduxjs/toolkit";

export const heroesStore = createSlice({
  name: "heroes",
  initialState: {
    heroes: [],
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
        publicK: action.payload.publicK,
        privateK: action.payload.privateK,
        ts: action.payload.ts,
        hash: action.payload.hash,
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
  },
});

export const { setHeroesDataSucess, setHeroesDataFailure, setHeroIsLoading } =
  heroesStore.actions;

export const heroesReducer = heroesStore.reducer;
