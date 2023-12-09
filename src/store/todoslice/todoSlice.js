import { createSlice } from "@reduxjs/toolkit";
import { todoState } from "./todoState";
import { todoReducers } from "./todoReducers";

const todoSlice = createSlice({
    name: "todoSlice",
    initialState: todoState,
    reducers: todoReducers
})

export const todoActions = todoSlice.actions
export const todoReducer = todoSlice.reducer