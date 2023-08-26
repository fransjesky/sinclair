import { useState, useEffect } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Modal from './Modal';

// REDUX
import { useAppSelector } from '@/redux/hooks';

const KeyCapIcon = (key: any) => {
  return (
    <Box
      component='div'
      sx={{
        p: '0.5rem',
        mr: '0.25rem',
        height: '1.5rem',
        minWidth: '1.5rem',
        borderRadius: '0.25rem',
        backgroundColor: '#272727',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        userSelect: 'none',
        outline: 'none',
      }}
    >
      <Typography sx={{ fontSize: '0.75rem', fontWeight: 900 }}>
        {key}
      </Typography>
    </Box>
  );
};

export default function ControlsGuide() {
  const [open, setOpen] = useState(false);
  const [showControl, setShowControl] = useState(false);
  const controllable = useAppSelector((state) => state.global.isControllable);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    controllable ? setShowControl(true) : setShowControl(false);
  }, [controllable]);

  return (
    <>
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
          opacity: showControl ? 1 : 0,
          transition: 'all 3.5s ease',
        }}
        onClick={handleOpen}
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
      <Modal title='controls guide' open={open} onClose={handleClose}>
        <Box component='div'>
          <Grid container spacing={2}>
            <Grid xs={12} sm={6} item>
              <Box
                component='div'
                sx={{
                  mb: '0.5rem',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                {KeyCapIcon('W')}
                {KeyCapIcon('A')}
                {KeyCapIcon('S')}
                {KeyCapIcon('D')}
              </Box>
              <Box
                component='div'
                sx={{
                  mb: '0.5rem',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                {KeyCapIcon('⇡')}
                {KeyCapIcon('⇠')}
                {KeyCapIcon('⇣')}
                {KeyCapIcon('⇢')}
              </Box>
              <Typography sx={{ fontSize: '0.75rem', fontWeight: 600 }}>
                Press and hold to move
              </Typography>
            </Grid>
            <Grid xs={12} sm={6} item>
              <Box
                component='div'
                sx={{
                  mb: '0.5rem',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                {KeyCapIcon('LShift')}
                {KeyCapIcon('RShift')}
              </Box>
              <Typography sx={{ fontSize: '0.75rem', fontWeight: 600 }}>
                Hold to sprint
              </Typography>
            </Grid>
            <Grid xs={12} sm={6} item>
              <Box
                component='div'
                sx={{
                  mb: '0.5rem',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                {KeyCapIcon('Space')}
              </Box>
              <Typography sx={{ fontSize: '0.75rem', fontWeight: 600 }}>
                Press to jump
              </Typography>
            </Grid>
            <Grid xs={12} sm={6} item>
              <Box
                component='div'
                sx={{
                  mb: '0.5rem',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                {KeyCapIcon('R')}
              </Box>
              <Typography sx={{ fontSize: '0.75rem', fontWeight: 600 }}>
                Press to reset
              </Typography>
            </Grid>
          </Grid>
          <Box
            component='div'
            sx={{
              mt: '2.5rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              onClick={handleClose}
              sx={{
                minWidth: '10rem',
                padding: '0.25rem 2.5rem',
                border: '0.125rem solid #2196f3',
                borderRadius: '0.5rem',
                color: '#2196f3',
                fontWeight: 900,
                textTransform: 'capitalize',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#ffffff',
                  cursor: 'pointer',
                  backgroundColor: '#2196f3',
                },
              }}
            >
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
