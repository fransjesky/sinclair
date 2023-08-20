import { createSlice } from '@reduxjs/toolkit';

interface ViewportState {
  isMobile: boolean;
}

const initialState: ViewportState = {
  isMobile: false,
};

export const viewportSlicer = createSlice({
  name: 'viewport',
  initialState,
  reducers: {
    mobileViewport: (state) => {
      state.isMobile = false;
    },
    desktopViewport: (state) => {
      state.isMobile = false;
    },
  },
});

export const { mobileViewport, desktopViewport } = viewportSlicer.actions;

export default viewportSlicer.reducer;
