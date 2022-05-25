import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

export interface Project {
  id: string;
  name: string;
}

export const projectsSlice = createSlice({
  name: "project",
  initialState: [] as Project[],
  reducers: {
    setProjects: (state, action: PayloadAction<Project[]>) => {
      return action.payload;
    },
  },
});
