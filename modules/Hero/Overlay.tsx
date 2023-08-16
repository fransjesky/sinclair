import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Box, Grid, Typography } from '@mui/material';

// components
import ScrollDown from '@/components/Layouts/ScrollDown';

// icons
import MusicOffIcon from '@mui/icons-material/MusicOff';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import GitHubIcon from '@mui/icons-material/GitHub';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

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
        zIndex: 2,
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
      <Box
        component='div'
        sx={{
          width: '4.5rem',
          position: 'absolute',
          bottom: 20,
          left: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
        }}
      >
        <SportsEsportsIcon />
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: '0.625rem',
            textTransform: 'capitalize',
            userSelect: 'none',
          }}
        >
          Controls
        </Typography>
      </Box>
    </Box>
  );
}
