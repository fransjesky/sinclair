'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Box, Grid, Typography } from '@mui/material';

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
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 999,
        transition: 'all 0.3s ease',
        userSelect: 'none',
        outline: 'none',
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
        <Image
          src='/Logo.png'
          alt='Frans Jesky'
          priority
          height={50}
          width={50}
        />
        <Box
          component='div'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Typography
            sx={{
              ml: 2,
              fontWeight: 500,
              fontSize: '0.625rem',
              textTransform: 'capitalize',
            }}
          >
            Project Sinclair | MIT Licensed
          </Typography>
          <Typography
            sx={{
              ml: 2,
              fontWeight: 500,
              fontSize: '0.625rem',
              textTransform: 'capitalize',
            }}
          >
            Copyright © 2023 by Frans Jesky
          </Typography>
        </Box>
      </Box>
      <Grid
        container
        sx={{
          paddingLeft: '2rem',
          paddingRight: '2rem',
          width: '30vw',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {navData.map((data, index) => {
          return (
            <Grid item key={index}>
              <Typography
                sx={{
                  fontWeight: 700,
                  textTransform: 'capitalize',
                }}
              >
                {data.nav}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
