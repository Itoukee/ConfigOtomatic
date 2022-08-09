import { createSlice } from "@reduxjs/toolkit";
import { IConfig } from "../../types/computerTypes";
import { AppDispatch } from "./useConfig";

// Slice

const initConfig: IConfig = {
  visibility: false,
};
const slice = createSlice({
  name: "config",
  initialState: {
    initConfig,
  },
  reducers: {
    update: (state, action) => {
      state.initConfig = action.payload;
    },
    deleteConfig: (state, action) => {
      state.initConfig = { visibility: false };
    },
  },
});
export default slice.reducer;
// Actions
const { update, deleteConfig } = slice.actions;

export const updateConfig = (config: IConfig) => (dispatch: AppDispatch) => {
  dispatch(update({ config }));
};
export const clearConfig = () => (dispatch: AppDispatch) => {
  dispatch(deleteConfig({}));
};
