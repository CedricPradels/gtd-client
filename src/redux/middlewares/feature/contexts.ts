import { Middleware, nanoid } from "@reduxjs/toolkit";
import { NextActions } from "../../../components/nextActions";
import {
  createContext,
  deleteContext,
  setContexts,
} from "../../actions/contexts";
import { setNextActions } from "../../actions/nextActions";
import { GlobalState } from "../../store";

export const contextsMiddleware: Middleware<{}, GlobalState> =
  (api) => (next) => (action) => {
    next(action);

    if (createContext.match(action)) {
      api.dispatch(setContexts([...api.getState().contexts, action.payload]));
    }

    if (deleteContext.match(action)) {
      api.dispatch(
        setContexts(
          api
            .getState()
            .contexts.filter((context) => context.id !== action.payload.id)
        )
      );
      api.dispatch(
        setNextActions(
          api.getState().nextActions.map((nextAction) => ({
            ...nextAction,
            contexts: nextAction.contexts.filter(
              (id) => id !== action.payload.id
            ),
          }))
        )
      );
    }
  };
