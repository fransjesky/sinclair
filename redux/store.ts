import { configureStore } from '@reduxjs/toolkit';

// reducers
import viewportReducer from './features/viewportSlicer';

export const store = configureStore({
  reducer: {
    viewport: viewportReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
