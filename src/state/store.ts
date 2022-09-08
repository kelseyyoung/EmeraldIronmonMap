import { configureStore } from "@reduxjs/toolkit";
import { mapSettingsSlice } from "./storeSlices";

export const store = configureStore({
  reducer: {
    settings: mapSettingsSlice.reducer,
  },
});

export type EmeraldMapState = ReturnType<typeof store.getState>;
export type EmeraldMapDispatch = typeof store.dispatch;
