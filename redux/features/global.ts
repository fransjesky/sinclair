import { createSlice } from '@reduxjs/toolkit';

interface GlobalType {
  isMobile: boolean;
  isStarted: boolean;
  isControllable: boolean;
}

const initialState: GlobalType = {
  isMobile: false,
  isStarted: false,
  isControllable: false,
};

export const globalState = createSlice({
  name: 'global',
  initialState,
  reducers: {
    mobileViewport: (state) => {
      state.isMobile = true;
    },
    start: (state) => {
      state.isStarted = true;
    },
    takeControl: (state) => {
      state.isControllable = true;
    },
  },
});

export const { mobileViewport, start, takeControl } = globalState.actions;

export default globalState.reducer;
