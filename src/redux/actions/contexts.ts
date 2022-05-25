import { createAction, nanoid, PrepareAction } from "@reduxjs/toolkit";
import { contextsSlice, Context } from "../slices/contexts";

export const { setContexts } = contextsSlice.actions;

export const createContext = createAction<PrepareAction<Context>>(
  `${contextsSlice.name}/create`,
  ({ name }: Omit<Context, "id">) => {
    return {
      payload: {
        name,
        id: nanoid(),
      },
    };
  }
);

export const deleteContext = createAction<{ id: string }>(
  `${contextsSlice.name}/delete`
);
