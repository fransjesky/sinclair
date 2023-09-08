import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import useScroll from '@/hooks/useScroll';
import { useLenis } from '@studio-freight/react-lenis';

export const ScrollDown = () => {
  const [hideScrollInfo, setHideScrollInfo] = useState(false);
  const scroll = useScroll();
  const lenis = useLenis();

  useEffect(() => {
    const clientHeight = window.innerHeight;

    if (scroll >= clientHeight * (10 / 100)) {
      setHideScrollInfo(true);
    } else {
      setHideScrollInfo(false);
    }
  }, [scroll]);

  return (
    <Box
      component='div'
      onClick={() => lenis.scrollTo('#profile')}
      sx={{
        position: 'absolute',
        bottom: 20,
        left: {
          xs: 50,
          sm: '50%',
        },
        transform: 'translate(-50%, 0)',
        userSelect: 'none',
        outline: 'none',
        opacity: hideScrollInfo ? 0 : 1,
        transition: 'all 0.3s ease',
        cursor: 'pointer',
      }}
    >
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: '0.625rem',
          textTransform: 'capitalize',
        }}
      >
        Scroll Down
      </Typography>
      <Box
        component='span'
        sx={{
          position: 'absolute',
          top: '0%',
          right: '50%',
          transform: 'translate(50%, -120%)',
          width: '1.25rem',
          height: '2.25rem',
          boxShadow: 'inset 0 0 0 1px #fff',
          borderRadius: '25px',
          '&:before': {
            content: `''`,
            position: 'absolute',
            top: '25%',
            left: '50%',
            transform: 'translate(-50%, 0%)',
            width: '0.25rem',
            height: '0.25rem',
            background: '#fff',
            borderRadius: '50%',
            animationDuration: '1.5s',
            animationIterationCount: 'infinite',
            animationName: 'scroll',
          },
          '@keyframes scroll': {
            '0%': {
              opacity: 1,
            },
            '100%': {
              opacity: 0,
              transform: 'translate(-50%, 0.75rem)',
            },
          },
        }}
      />
    </Box>
  );
};
