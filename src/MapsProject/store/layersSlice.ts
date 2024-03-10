import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { layersType } from "../models/mapModel";
import { tileLayer } from "../helpers/layres";
interface InitialState {
  layer: layersType;
}

const initialState: InitialState = {
  layer: tileLayer,
};

export const layersSlice = createSlice({
  name: "layers",
  initialState,
  reducers: {
    editLayers: (state: InitialState, action: PayloadAction<layersType>) => {
      state.layer = action.payload;
      return;
    },
  },
});

export const { editLayers } = layersSlice.actions;
export default layersSlice.reducer;
