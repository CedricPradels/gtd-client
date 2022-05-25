import { createAction, nanoid, PrepareAction } from "@reduxjs/toolkit";
import { actionsSlice, NextAction } from "../slices/nextActions";

export const { setNextActions } = actionsSlice.actions;

export const createNextAction = createAction<PrepareAction<NextAction>>(
  `${actionsSlice.name}/create`,
  ({ contexts, description, project }: Omit<NextAction, "id" | "done">) => {
    return {
      payload: {
        done: false,
        id: nanoid(),
        contexts,
        description,
        project,
      },
    };
  }
);
