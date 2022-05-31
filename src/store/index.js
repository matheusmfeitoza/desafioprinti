import { configureStore } from "@reduxjs/toolkit";
import { heroesReducer } from "./heroes";

export const store = configureStore({
  reducer: { heroes: heroesReducer },
});
