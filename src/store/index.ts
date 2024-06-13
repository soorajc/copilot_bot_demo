import { configureStore } from '@reduxjs/toolkit'
import promptReducer from '../features/prompt_selector/promptSlice';

export const store = configureStore({
  reducer: {
    promptProcessor: promptReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch