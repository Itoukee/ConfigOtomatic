import { configureStore, combineReducers } from "@reduxjs/toolkit";
import config from "./config";

const reducer = combineReducers({
  // here we will be adding reducers
  config,
});
const useConfig = configureStore({
  reducer,
});
export default useConfig;

export type AppDispatch = typeof useConfig.dispatch;
