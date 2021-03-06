import { useState, useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { useAppSelector } from '@/redux';
import { ControlsGuide, ScrollDown } from '../Components';

interface HeroOverlayTypes {
  muted: boolean;
  started: boolean;
  onClick: () => void;
}

export const HeroOverlay = (props: HeroOverlayTypes) => {
  const isMusicPlaying = useAppSelector((state) => state.global.isMusicPlaying);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    props.started &&
      setTimeout(() => {
        setShowOverlay(true);
      }, 3500);
  }, [props.started]);

  return (
    <Box
      component='div'
      sx={{
        width: '100vw',
        position: 'fixed',
        bottom: 0,
        color: '#ffffff',
        opacity: showOverlay ? 1 : 0,
        transition: 'all 1s ease',
        zIndex: 2,
      }}
    >
      <Box
        component='div'
        sx={{
          position: 'absolute',
          bottom: { xs: 25, sm: 20 },
          right: { xs: 20, sm: 25 },
        }}
      >
        <Grid
          container
          sx={{
            width: '4.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Grid item>
            <ControlsGuide />
          </Grid>
          <Grid item onClick={props.onClick}>
            {isMusicPlaying ? (
              <Box
                component='div'
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                }}
              >
                <MusicNoteIcon />
              </Box>
            ) : (
              <Box
                component='div'
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                }}
              >
                <MusicOffIcon />
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
      <ScrollDown />
    </Box>
  );
};
