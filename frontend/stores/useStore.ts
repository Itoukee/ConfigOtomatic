import { configureStore, combineReducers } from "@reduxjs/toolkit";
import config from "./config";

const useStore = configureStore({
  reducer: {
    config: config,
  },
});
export default useStore;

export type RootState = ReturnType<typeof useStore.getState>;
export type AppDispatch = typeof useStore.dispatch;
