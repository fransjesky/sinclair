import Link from 'next/link';
import { Box, Grid, Typography } from '@mui/material';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import GitHubIcon from '@mui/icons-material/GitHub';

interface HeroOverlayTypes {
  muted: boolean;
  onClick: () => void;
}

export default function HeroOverlay(props: HeroOverlayTypes) {
  return (
    <Box component='div' sx={{ color: '#ffffff', zIndex: 2 }}>
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
      <Box
        component='div'
        sx={{
          position: 'absolute',
          bottom: 20,
          left: '50%',
          transform: 'translate(-50%, 0)',
          userSelect: 'none',
          outline: 'none',
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
    </Box>
  );
}
