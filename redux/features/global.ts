import { createSlice } from '@reduxjs/toolkit';

interface GlobalType {
  isMobile: boolean;
  isStarted: boolean;
  isControllable: boolean;
  isMusicPlaying: boolean;
}

const initialState: GlobalType = {
  isMobile: false,
  isStarted: false,
  isControllable: false,
  isMusicPlaying: false,
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
    playMusic: (state) => {
      state.isMusicPlaying = true;
    },
    stopMusic: (state) => {
      state.isMusicPlaying = false;
    },
  },
});

export const { mobileViewport, start, takeControl, playMusic, stopMusic } =
  globalState.actions;

export default globalState.reducer;
