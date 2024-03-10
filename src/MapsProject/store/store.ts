import { configureStore } from "@reduxjs/toolkit";
import mapsSlice from "./mapsSlice";
import layersSlice from "./layersSlice";
import rotationSlice from "./rotationSlice";
export const store = configureStore({
  reducer: {
    coordinates: mapsSlice,
    editLayers: layersSlice,
    rotation: rotationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
