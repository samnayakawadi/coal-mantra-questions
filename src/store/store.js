import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todoslice/todoSlice";

export const store = configureStore({
    reducer: { "store": todoReducer }
})