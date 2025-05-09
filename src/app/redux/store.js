import { configureStore } from "@reduxjs/toolkit";
import conuterReducer from "./slices/counterSlice";

export const store = configureStore({
  reducer: {
    counter: conuterReducer,
  },
});
