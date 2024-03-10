import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  rotation: number;
}

const initialState: InitialState = {
  rotation: 0,
};

export const rotationSlice = createSlice({
  name: "rotation",
  initialState,
  reducers: {
    right: (state: InitialState) => {
      state.rotation += 0.33;
    },
    left: (state: InitialState) => {
      state.rotation -= 0.33;
    },
    rest: (state: InitialState) => {
      state.rotation = 0;
    },
  },
});

export const { right, left, rest } = rotationSlice.actions;
export default rotationSlice.reducer;
