import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./data/data";

const store = configureStore({
  reducer: { data: dataReducer },
});

export default store;
