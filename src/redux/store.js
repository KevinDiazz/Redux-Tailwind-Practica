import { configureStore } from "@reduxjs/toolkit";
import manzanaReducer from "./slices-redux";
export const store = configureStore({
  reducer: {
    fruta: manzanaReducer,
  },
});
