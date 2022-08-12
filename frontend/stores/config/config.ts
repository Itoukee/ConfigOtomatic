import { createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { IComponent, IConfig, IType } from "../../types/computerTypes";
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
    removeOne: (state, action) => {
      const index = state.initConfig.config?.components.findIndex(
        (comp: IComponent) => comp.type == action.payload.type
      );
      if (state.initConfig.config && index)
        state.initConfig.config.components.splice(index);
    },
    deleteConfig: (state) => {
      state.initConfig = { visibility: false };
    },
  },
});
export default slice.reducer;
// Actions
const { update, deleteConfig, show, removeOne } = slice.actions;

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

export const removeComponentByType =
  (type: IType) => (dispatch: AppDispatch) => {
    dispatch(removeOne(type));
  };

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
