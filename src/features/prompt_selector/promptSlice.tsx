import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface PromptState {
  promptId: String;
}

const initialState: PromptState = {
  promptId: 'pr_start',
};

export const promptSlice = createSlice({
  name: 'promptHandler',
  initialState,
  reducers: {
    handlePrompt: (state, action: PayloadAction<String>) => {
      state.promptId = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {handlePrompt} = promptSlice.actions;

export default promptSlice.reducer;
