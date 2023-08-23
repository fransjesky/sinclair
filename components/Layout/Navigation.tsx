'use client';

import { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Logo from './Logo';

// REDUX
import { useAppSelector } from '@/redux/hooks';

export default function Navigation() {
  const [showNavigation, setShowNavigation] = useState(false);
  const started = useAppSelector((state) => state.global.isStarted);

  useEffect(() => {
    if (started) {
      setTimeout(() => {
        setShowNavigation(true);
      }, 3500);
    }
  }, [started]);

  const navData = [
    {
      link: '#about',
      nav: 'about',
    },
    {
      link: '#projects',
      nav: 'projects',
    },
    {
      link: '#experience',
      nav: 'experience',
    },
    {
      link: '#blog',
      nav: 'blog',
    },
  ];

  return (
    <Box
      component='div'
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '5rem',
        backgroundColor: '#ffffff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 999,
        transition: 'all 0.3s ease',
        userSelect: 'none',
        outline: 'none',
        borderBottom: `0.125rem solid #2196f3`,
        boxShadow: `0 0 2.5rem 0 #2196f3`,
        opacity: showNavigation ? 1 : 0,
      }}
    >
      <Box
        component='div'
        sx={{
          paddingLeft: '2rem',
          paddingRight: '2rem',
          height: '100%',
          width: '50%',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Box
          component='div'
          sx={{
            padding: '0 1rem',
            borderRight: '1px solid #0000004d',
          }}
        >
          <Logo variant='full' />
        </Box>
        <Grid
          container
          sx={{
            paddingLeft: '1rem',
            paddingRight: '1rem',
            width: '20vw',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {navData.map((data, index) => {
            return (
              <Grid item key={index}>
                <Typography
                  sx={{
                    padding: '0.5rem',
                    fontSize: '0.5rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    color: '#121212',
                    letterSpacing: '1px',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease-in',
                    '&:hover': {
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      backgroundImage:
                        'linear-gradient(90deg, #03a9f4, #18ffff)',
                    },
                  }}
                >
                  {data.nav}
                  <Box
                    component='span'
                    id={`topNeonBar-${index}`}
                    sx={{
                      position: 'absolute',
                      display: 'block',
                      animation: 'animatedNeonLeft 0.75s ease infinite',
                      '&:nth-child(1)': {
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '2px',
                        borderRadius: '10rem',
                        background:
                          'linear-gradient(90deg, transparent, #03a9f4)',
                      },
                      '@keyframes animatedNeonLeft': {
                        '0%': { left: '-100%' },
                        '100%': { left: '100%' },
                      },
                    }}
                  />
                  <Box
                    component='span'
                    id={`topNeonBar-${index}`}
                    sx={{
                      position: 'absolute',
                      display: 'block',
                      animation: 'animatedNeonRight 0.75s ease infinite',
                      '&:nth-child(2)': {
                        bottom: 0,
                        right: '-100%',
                        width: '100%',
                        height: '2px',
                        borderRadius: '10rem',
                        background:
                          'linear-gradient(270deg, transparent, #18ffff)',
                      },
                      '@keyframes animatedNeonRight': {
                        '0%': { right: '-100%' },
                        '100%': { right: '100%' },
                      },
                    }}
                  />
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
