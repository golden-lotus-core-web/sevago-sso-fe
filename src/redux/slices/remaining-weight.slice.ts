import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface RemainingWeightState {
  weight: number;
}

export const initialStateRemainingWeight: RemainingWeightState = {
  weight: 0,
};

const remainingWeightSlice = createSlice({
  name: "remainingWeight",
  initialState: initialStateRemainingWeight,
  reducers: {
    setRemainingWeight: (state, action: PayloadAction<number>) => {
      state.weight = action.payload;
    },
    updateRemainingWeight: (state, action: PayloadAction<number>) => {
      const usedWeight = action.payload;
      state.weight = Math.max(0, state.weight - usedWeight);
    },
    resetRemainingWeight: (state) => {
      state.weight = 0;
    },
  },
});

export const {
  setRemainingWeight,
  updateRemainingWeight,
  resetRemainingWeight,
} = remainingWeightSlice.actions;

export default remainingWeightSlice.reducer;
