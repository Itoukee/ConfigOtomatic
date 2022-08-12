import { createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { IConfig } from "../../types/computerTypes";
import { AppDispatch, RootState } from "./useConfig";

// Slice

const initConfig: Partial<IConfig> = {
  visibility: false,
};

const slice = createSlice({
  name: "config",
  initialState: {
    initConfig,
    type: "",
    visible: false,
  },
  reducers: {
    update: (state, action) => {
      state.initConfig = action.payload;
    },
    show: (state, action) => {
      state.type = action.payload.type;
      state.visible = action.payload.visible;
    },
    deleteConfig: (state) => {
      state.initConfig = { visibility: false };
    },
  },
});
export default slice.reducer;
// Actions
const { update, deleteConfig, show } = slice.actions;

export const updateConfig =
  (config: Partial<IConfig>) => (dispatch: AppDispatch) => {
    dispatch(update(config));
  };

export const showComponents = (item: object) => (dispatch: AppDispatch) => {
  dispatch(show(item));
};
export const clearConfig = () => (dispatch: AppDispatch) => {
  dispatch(deleteConfig());
};

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
