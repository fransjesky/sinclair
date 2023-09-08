'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Box, Grid, Typography } from '@mui/material';
import useScroll from '@/hooks/useScroll';
import Drawer from './Drawer';
import DrawerButton from './DrawerButton';
import { useLenis } from '@studio-freight/react-lenis';

// ICON
import Logo from './Logo';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

// REDUX
import { useAppSelector } from '@/redux/hooks';

export const Header = () => {
  const scroll = useScroll();
  const lenis = useLenis();
  const [showNavigation, setShowNavigation] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [solidBackground, setSolidBackground] = useState(false);
  const started = useAppSelector((state) => state.global.isStarted);
  const navData = [
    {
      link: '#profile',
      nav: 'profile',
      disabled: false,
    },
    {
      link: '#projects',
      nav: 'projects',
      disabled: true,
    },
    {
      link: '#contact',
      nav: 'contact',
      disabled: true,
    },
    {
      link: '#blogs',
      nav: 'blogs',
      disabled: true,
    },
  ];

  useEffect(() => {
    const clientHeight = window.innerHeight;

    if (scroll >= clientHeight * (10 / 100)) {
      setSolidBackground(true);
    } else {
      setSolidBackground(false);
    }

    if (started) {
      const timer = setTimeout(() => {
        setShowNavigation(true);
      }, 3500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [started, scroll]);

  const handleDrawer = () => {
    openDrawer ? setOpenDrawer(false) : setOpenDrawer(true);
  };

  const SmoothScroll = (target: string) => {
    lenis.scrollTo(target);
  };

  return (
    <Grid
      container
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        padding: {
          xs: '0 1rem',
          sm: '0 1rem',
          md: '0 2rem',
        },
        width: '100%',
        height: '5rem',
        maxHeight: '5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#ffffff',
        outline: 'none',
        backgroundColor: solidBackground ? '#111111' : 'none',
        boxShadow: solidBackground
          ? '0 0.0625rem 0.5rem 0 rgba(0,0,0,.05), 0 0.0625rem 0.3125rem 0 rgba(0,0,0,.05)'
          : 'none',
        opacity: showNavigation ? 1 : 0,
        zIndex: 999,
        userSelect: 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <Grid item xs={10}>
        <Grid
          container
          columnSpacing={2}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <Grid
            item
            sx={{
              paddingRight: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRight: {
                xs: 'none',
                sm: 'none',
                md: '0.075rem solid #ffffff',
              },
            }}
          >
            <Logo variant='full' opened={openDrawer} />
          </Grid>
          {navData.map((data, index) => {
            return (
              <Grid
                item
                key={index}
                sx={{
                  display: {
                    xs: 'none',
                    sm: 'none',
                    md: 'initial',
                  },
                }}
              >
                {data.disabled ? (
                  <Typography
                    sx={{
                      padding: '0.5rem',
                      color: '#616161',
                      fontSize: '0.55rem',
                      fontWeight: 600,
                      textAlign: 'center',
                      textTransform: 'uppercase',
                      letterSpacing: '0.125rem',
                      position: 'relative',
                      overflow: 'hidden',
                      cursor: 'default',
                      transition: 'all 0.3s ease-in',
                    }}
                  >
                    {data.nav}
                    <Box
                      component='span'
                      id={`topNeonBar-${index}`}
                      sx={{
                        position: 'absolute',
                        display: 'block',
                        animation: `animatedNeonLeft 0.75s ease infinite ${
                          index / navData.length + 0.25
                        }s`,
                        '&:nth-child(1)': {
                          top: 0,
                          left: '-100%',
                          width: '100%',
                          height: '0.125rem',
                          borderRadius: '10rem',
                          background:
                            'linear-gradient(90deg, transparent, #2196f3)',
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
                        animation: `animatedNeonRight 0.75s ease infinite ${
                          index * (navData.length + 1) - 12
                        }s`,
                        '&:nth-child(2)': {
                          bottom: 0,
                          right: '-100%',
                          width: '100%',
                          height: '0.125rem',
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
                ) : (
                  <Link
                    href={data.link}
                    onClick={() => SmoothScroll(data.link)}
                  >
                    <Typography
                      sx={{
                        padding: '0.5rem',
                        color: '#ffffff',
                        fontSize: '0.55rem',
                        fontWeight: 600,
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        letterSpacing: '0.125rem',
                        position: 'relative',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease-in',
                        '&:hover': {
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          backgroundImage:
                            'linear-gradient(45deg, #2196f3, #18ffff)',
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
                          animation: `animatedNeonLeft 0.75s ease infinite ${
                            index / navData.length + 0.25
                          }s`,
                          '&:nth-child(1)': {
                            top: 0,
                            left: '-100%',
                            width: '100%',
                            height: '0.125rem',
                            borderRadius: '10rem',
                            background:
                              'linear-gradient(90deg, transparent, #2196f3)',
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
                          animation: `animatedNeonRight 0.75s ease infinite ${
                            index * (navData.length + 1) - 12
                          }s`,
                          '&:nth-child(2)': {
                            bottom: 0,
                            right: '-100%',
                            width: '100%',
                            height: '0.125rem',
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
                  </Link>
                )}
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Grid
        item
        xs={2}
        sx={{
          display: {
            xs: 'none',
            sm: 'none',
            md: 'initial',
          },
        }}
      >
        <Grid
          container
          columnSpacing={3}
          sx={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
            <Link passHref href='https://www.instagram.com/fransjesky'>
              <InstagramIcon
                sx={{
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': { transform: 'translateY(-0.125rem)' },
                }}
              />
            </Link>
          </Grid>
          <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
            <Link passHref href='https://www.linkedin.com/in/fransjesky'>
              <LinkedInIcon
                sx={{
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': { transform: 'translateY(-0.125rem)' },
                }}
              />
            </Link>
          </Grid>
          <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
            <Link passHref href='https://github.com/fransjesky'>
              <GitHubIcon
                sx={{
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': { transform: 'translateY(-0.125rem)' },
                }}
              />
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <DrawerButton onClick={handleDrawer} opened={openDrawer} />
      <Drawer data={navData} opened={openDrawer} />
    </Grid>
  );
};
