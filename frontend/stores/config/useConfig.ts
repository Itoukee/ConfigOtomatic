import { configureStore, combineReducers } from "@reduxjs/toolkit";
import config from "./config";

const useConfig = configureStore({
  reducer: {
    config: config,
  },
});
export default useConfig;

export type RootState = ReturnType<typeof useConfig.getState>;
export type AppDispatch = typeof useConfig.dispatch;
