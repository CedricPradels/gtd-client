import { createAction, nanoid, PrepareAction } from "@reduxjs/toolkit";
import { Project, projectsSlice } from "../slices/projects";

export const { setProjects } = projectsSlice.actions;

export const createProject = createAction<PrepareAction<Project>>(
  `${projectsSlice.name}/create`,
  ({ name }: Omit<Project, "id">) => {
    return {
      payload: {
        name,
        id: nanoid(),
      },
    };
  }
);
