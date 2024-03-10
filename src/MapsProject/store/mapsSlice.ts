import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  ClickedCoordinates: number[] | null;
}

const initialState: InitialState = {
  ClickedCoordinates: null,
};

export const mapsSlice = createSlice({
  name: "maps",
  initialState,
  reducers: {
    coordinates: (state: InitialState, action: PayloadAction<number[]>) => {
      state.ClickedCoordinates = action.payload;
      return state;
    },
  },
});

export const { coordinates } = mapsSlice.actions;
export default mapsSlice.reducer;
