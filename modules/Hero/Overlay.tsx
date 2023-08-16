import { Box } from '@mui/material';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

interface HeroOverlayTypes {
  muted: boolean;
  onClick: () => void;
}

export default function HeroOverlay(props: HeroOverlayTypes) {
  return (
    <Box component='div' sx={{ height: '100%', width: '100%' }}>
      <Box
        component='div'
        onClick={props.onClick}
        sx={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          zIndex: 2,
          color: '#ffffff',
          '&:hover': {
            cursor: 'pointer',
          },
        }}
      >
        {props.muted ? <MusicOffIcon /> : <MusicNoteIcon />}
      </Box>
    </Box>
  );
}
