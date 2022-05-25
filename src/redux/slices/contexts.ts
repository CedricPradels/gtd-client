import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

export interface Context {
  id: string;
  name: string;
}

export const contextsSlice = createSlice({
  name: "context",
  initialState: [] as Context[],
  reducers: {
    setContexts: (state, action: PayloadAction<Context[]>) => {
      return action.payload;
    },
  },
});
