import { createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { IComponent, IConfig, IType } from "../types/computerTypes";
import { IUser } from "../types/userType";
import { AppDispatch, RootState } from "./useStore";

// Slice

const initConfig: Partial<IConfig> = {
  visibility: false,
};

let user: IUser | undefined;

const slice = createSlice({
  name: "config",
  initialState: {
    initConfig,
    type: "",
    visible: false,
    user,
  },
  reducers: {
    update: (state, action) => {
      state.initConfig = action.payload;
    },
    show: (state, action) => {
      state.type = action.payload.type;
      state.visible = action.payload.visible;
    },
    setSession: (state, action) => {
      state.user = action.payload;
    },
  },
});
export default slice.reducer;

// Actions
const { update, show, setSession } = slice.actions;

export const updateConfig =
  (config: Partial<IConfig>) => (dispatch: AppDispatch) => {
    dispatch(update(config));
  };

export const showComponents = (item: object) => (dispatch: AppDispatch) => {
  dispatch(show(item));
};

export const useSession = (user: IUser) => (dispatch: AppDispatch) => {
  dispatch(setSession(user));
};

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
