import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Box, Grid } from '@mui/material';

// components
import ScrollDown from '@/components/Layout/ScrollDown';
import ControlsGuide from '@/components/Layout/ControlsGuide';

// icons
import MusicOffIcon from '@mui/icons-material/MusicOff';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import GitHubIcon from '@mui/icons-material/GitHub';

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
        color: '#ffffff',
        opacity: showOverlay ? 1 : 0,
        transition: 'all 1s ease',
      }}
    >
      <Box component='div' sx={{ position: 'absolute', bottom: 20, right: 20 }}>
        <Grid
          container
          sx={{
            width: '4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Grid item onClick={props.onClick}>
            {props.muted ? (
              <MusicOffIcon sx={{ cursor: 'pointer' }} />
            ) : (
              <MusicNoteIcon sx={{ cursor: 'pointer' }} />
            )}
          </Grid>
          <Grid item>
            <Link passHref href='https://github.com/fransjesky/sinclair'>
              <GitHubIcon sx={{ cursor: 'pointer' }} />
            </Link>
          </Grid>
        </Grid>
      </Box>
      <ScrollDown />
      <ControlsGuide />
    </Box>
  );
}
