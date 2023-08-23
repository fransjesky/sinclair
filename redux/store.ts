import { configureStore } from '@reduxjs/toolkit';

// reducers
import globalReducer from './features/global';

export const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
