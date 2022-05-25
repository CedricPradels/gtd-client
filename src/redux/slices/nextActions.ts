import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface NextAction {
  id: string;
  description: string;
  project: null | string;
  contexts: string[];
  done: boolean;
}

export const actionsSlice = createSlice({
  name: "nextactions",
  initialState: [] as NextAction[],
  reducers: {
    setNextActions: (state, action: PayloadAction<NextAction[]>) => {
      return action.payload;
    },
  },
});
