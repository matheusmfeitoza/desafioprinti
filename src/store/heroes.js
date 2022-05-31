import { createSlice } from "@reduxjs/toolkit";

export const heroesStore = createSlice({
  name: "heroes",
  initialState: {
    heroes: [],
    total: 0,
    isLoading: false,
    isLogged: false,
    hasError: false,
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
  },
});

export const { setHeroesDataSucess, setHeroesDataFailure, setHeroIsLoading } =
  heroesStore.actions;

export const heroesReducer = heroesStore.reducer;
