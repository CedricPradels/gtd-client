import {
  combineReducers,
  configureStore,
  StateFromReducersMapObject,
} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { coreMiddlewares } from "./middlewares/core";
import { featureMiddleware } from "./middlewares/feature";

import { actionsSlice } from "./slices/nextActions";
import { contextsSlice } from "./slices/contexts";
import { projectsSlice } from "./slices/projects";

const reducers = {
  nextActions: actionsSlice.reducer,
  contexts: contextsSlice.reducer,
  projects: projectsSlice.reducer,
};

const reducer = combineReducers(reducers);

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([...coreMiddlewares, ...featureMiddleware]),
});

export interface GlobalState
  extends StateFromReducersMapObject<typeof reducers> {}

export const useAppSelector: TypedUseSelectorHook<GlobalState> = useSelector;

export { store };
