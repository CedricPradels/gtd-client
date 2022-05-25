import { Middleware } from "@reduxjs/toolkit";
import { createProject, setProjects } from "../../actions/projects";
import { GlobalState } from "../../store";

export const projectsMiddleware: Middleware<{}, GlobalState> =
  (api) => (next) => (action) => {
    next(action);

    if (createProject.match(action)) {
      api.dispatch(setProjects([...api.getState().projects, action.payload]));
    }
  };
