'use client';

import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import theme from './theme';

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const globalStyles = {
    body: { maxWidth: '100vw', backgroundColor: '#000000', color: '#ffffff' },
  };

  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
