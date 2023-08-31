'use client';

import { Box, Typography } from '@mui/material';
import { poiretone, comfortaa } from '@/theme/Typography';

export default function Footer() {
  return (
    <Box
      component='div'
      sx={{
        padding: '0 2.5vw',
        height: '10rem',
        width: '100%',
        backgroundColor: '#111111',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        component='div'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            marginBottom: '0.5rem',
            color: '#ffffff',
            fontFamily: poiretone.style.fontFamily,
            fontSize: '2rem',
            fontWeight: 400,
            lineHeight: '2rem',
            textTransform: 'lowercase',
          }}
        >
          je`sky
        </Typography>
        <Typography
          sx={{
            marginTop: '5px',
            color: '#ffffff',
            fontFamily: comfortaa.style.fontFamily,
            fontSize: '0.75rem',
            lineHeight: '0.75rem',
            opacity: 0.5,
          }}
        >
          Frontend Developer
        </Typography>
        <Typography
          sx={{
            marginTop: '5px',
            color: '#ffffff',
            fontFamily: comfortaa.style.fontFamily,
            fontSize: '0.75rem',
            lineHeight: '0.75rem',
            opacity: 0.5,
          }}
        >
          Copyright © 2023 | MIT Licensed
        </Typography>
      </Box>
    </Box>
  );
}
