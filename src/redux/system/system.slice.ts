import { createSlice } from "@reduxjs/toolkit";
import type { GlobalSystemState } from "./system.interface";
import { Mode } from "../../common/enums/mode.enum";
import { changeMode } from "./system.action";

export const initialStateSystem: GlobalSystemState = {
  mode: Mode.LIGHT,
};

export const slice = createSlice({
  // Name Slice
  name: "system",
  initialState: initialStateSystem,
  reducers: {},

  extraReducers: (builder) => {
    // ChangeMode
    builder.addCase(changeMode.fulfilled, (state, action) => {
      state.mode = action.payload;
    });
  },
});

export const reducerSystem = slice.reducer;
