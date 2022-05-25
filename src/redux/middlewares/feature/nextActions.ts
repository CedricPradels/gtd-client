import { Middleware } from "@reduxjs/toolkit";
import { createNextAction, setNextActions } from "../../actions/nextActions";
import { GlobalState } from "../../store";

export const nextActionMiddleware: Middleware<{}, GlobalState> =
  (api) => (next) => (action) => {
    next(action);

    if (createNextAction.match(action)) {
      api.dispatch(
        setNextActions([...api.getState().nextActions, action.payload])
      );
    }
  };
