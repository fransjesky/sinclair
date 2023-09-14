import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Box, Typography, Button, CircularProgress } from '@mui/material';
import { comfortaa } from '@/theme/Typography';
import { useProgress } from '@react-three/drei';
import { GlyphText } from '@/components';
import {
  useAppDispatch,
  useAppSelector,
  start,
  stopMusic,
  mobileViewport,
} from '@/redux';
import ProgressBar from './ProgressBar';

export const LoadingOverlay = () => {
  const started = useAppSelector((state) => state.global.isStarted);
  const { item, loaded, total } = useProgress();
  const [enableStart, setEnableStart] = useState(false);
  const [progress, setProgress] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const copyrightYear = new Date().getFullYear();
    const asciiArt = `\r\n ________    ___     \r\n|\\  _____\\  |\\  \\    \r\n\\ \\  \\__\/   \\ \\  \\   \r\n \\ \\   __\\__ \\ \\  \\  \r\n  \\ \\  \\_|\\  \\\\_\\  \\ \r\n   \\ \\__\\\\ \\________\\\r\n    \\|__| \\|________|\r\n                     \r\n`;

    console.info(
      `${asciiArt} \n\nWelcome to Project Sinclair! \nCopyright © ${copyrightYear} Frans Jesky \n\nThis is an open source project under MIT license. Get the source code: \nhttps://github.com/fransjesky/sinclair`
    );
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 600) dispatch(mobileViewport());

    const updatedProgress = (loaded / total) * 100;
    setProgress((current) =>
      // only update the progress if it has more value than previous progress percentage
      current > updatedProgress ? current : updatedProgress
    );

    setTimeout(() => {
      if (progress === 100) setEnableStart(true);
    }, 350);
  }, [progress, item, loaded, total, dispatch]);

  const handleStart = () => {
    dispatch(start());
  };

  const handleStartNoAudio = () => {
    dispatch(start());
    setTimeout(() => {
      dispatch(stopMusic());
    }, 500);
  };

  return (
    <Box
      component='div'
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: '100%',
        maxHeight: '100vh',
        width: '100%',
        display: started ? 'none' : 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        transition: 'all 0.3s ease',
        overflow: 'hidden',
        zIndex: 999,
      }}
    >
      <Box
        component='div'
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          zIndex: -1,
          '@keyframes loadingBG': {
            '0%': {
              transform: 'rotate(0) scale(5) translate(0, 60%) skew(0);',
            },
            '25%': {
              transform:
                'rotate(180deg) scale(10) translate(50%, -25%) skew(40deg);',
            },
            '50%': {
              transform: 'rotate(360deg) scale(3) translate(0, 20%) skew(0);',
            },
            '75%': {
              transform:
                'rotate(-180deg) scale(10) translate(-50%, 50%) skew(-30deg);',
            },
            '100%': {
              transform: 'rotate(-360deg) scale(5) translate(0, 60%) skew(0);',
            },
          },
        }}
      >
        <Image
          priority
          src='/assets/background.jpg'
          alt=''
          fill
          style={{
            filter: 'blur(5rem)',
            WebkitFilter: 'blur(5rem)',
            objectFit: 'cover',
            objectPosition: 'center',
            animation: 'loadingBG 90s ease-in-out infinite',
          }}
        />
      </Box>
      <Image
        priority
        src='/Loader.gif'
        alt='loader'
        width={200}
        height={150}
        quality={100}
        style={{
          objectFit: 'contain',
          border: 'none',
          outline: 'none',
          userSelect: 'none',
        }}
      />
      <ProgressBar
        item={item}
        enableStart={enableStart}
        progress={loaded || total ? progress : 0}
      />
      <Box
        component='div'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <GlyphText english='loading status' japanese='読み込みステータス' />
        <Typography
          variant='h1'
          sx={{
            color: '#ffffff',
            fontSize: '2.25rem',
            fontWeight: 900,
            letterSpacing: '0.125rem',
          }}
        >
          {enableStart
            ? `READY`
            : progress === 0
            ? `INITIALIZING`
            : `NOW LOADING`}
        </Typography>
      </Box>
      <Box component='div' sx={{ marginTop: '2.5rem' }}>
        <Button
          onClick={handleStart}
          disabled={enableStart ? false : true}
          sx={{
            minWidth: '10rem',
            padding: '0.5rem 3rem',
            border: '0.125rem solid #2196f3',
            borderRadius: '0.5rem',
            fontWeight: 900,
            letterSpacing: '0.125rem',
            color: enableStart ? '#ffffff' : '#333333',
            backgroundColor: enableStart ? '#2196f3' : 'transparent',
            cursor: 'pointer',
            position: 'relative',
            transition: 'all 0.3s ease',
            animation: 'hueSwitch 20s linear infinite',
            '&:hover': {
              padding: '0.5rem 5rem',
              color: '#ffffff',
              backgroundColor: enableStart ? '#2196f3' : 'transparent',
            },
            '&:disabled': {
              color: '#333333',
              border: '0.125rem solid #333333',
            },
          }}
        >
          {enableStart ? (
            'START'
          ) : (
            <CircularProgress
              size={25}
              thickness={5}
              value={100}
              sx={{ color: '#333333' }}
            />
          )}
        </Button>
      </Box>
      <Box component='div' sx={{ marginTop: '1rem' }}>
        <Typography
          onClick={handleStartNoAudio}
          sx={{
            color: '#ffffff',
            fontSize: '0.65rem',
            fontFamily: comfortaa.style.fontFamily,
            textTransform: 'uppercase',
            letterSpacing: '0.065rem',
            userSelect: 'none',
            cursor: 'pointer',
            opacity: enableStart ? 0.75 : 0,
            transition: 'all 0.3s ease',
            '&:hover': {
              opacity: 1,
            },
          }}
        >
          start without music
        </Typography>
      </Box>
    </Box>
  );
};
