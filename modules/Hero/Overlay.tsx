import { useState, useEffect } from 'react';
import { Box, Grid } from '@mui/material';

// components
import ScrollDown from '@/components/Layout/ScrollDown';
import ControlsGuide from '@/components/Layout/ControlsGuide';

// icons
import MusicOffIcon from '@mui/icons-material/MusicOff';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

interface HeroOverlayTypes {
  muted: boolean;
  started: boolean;
  onClick: () => void;
}

export default function HeroOverlay(props: HeroOverlayTypes) {
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
        zIndex: 999,
      }}
    >
      <Box component='div' sx={{ position: 'absolute', bottom: 20, right: 40 }}>
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
            {props.muted ? (
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
                <MusicNoteIcon />
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
      <ScrollDown />
    </Box>
  );
}
