import { createSlice } from '@reduxjs/toolkit';

interface GlobalType {
  isMobile: boolean;
  isStarted: boolean;
}

const initialState: GlobalType = {
  isMobile: false,
  isStarted: false,
};

export const globalState = createSlice({
  name: 'global',
  initialState,
  reducers: {
    mobileViewport: (state) => {
      state.isMobile = false;
    },
    start: (state) => {
      state.isStarted = true;
    },
  },
});

export const { mobileViewport, start } = globalState.actions;

export default globalState.reducer;
