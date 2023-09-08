import { useState, useEffect } from 'react';
import { Box, Grid, Typography, LinearProgress } from '@mui/material';

interface ProgressBarProps {
  item: string;
  progress: number;
  enableStart: boolean;
}

export default function ProgressBar(props: ProgressBarProps) {
  const [loadingItem, setLoadingItem] = useState('');

  useEffect(() => {
    setLoadingItem(props.item);
  }, [props.item]);

  return (
    <Box component='div' sx={{ width: '80%' }}>
      <Grid
        component='div'
        sx={{
          height: '0.5rem',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'cennter',
        }}
      >
        <Grid item>
          {props.progress !== 0 && (
            <Typography sx={{ fontSize: '0.75rem', color: '#ffffff' }}>
              {loadingItem.length > 20 && props.progress < 100
                ? `Loading: ${loadingItem.substring(0, 20)}...`
                : loadingItem.length > 0 && props.progress < 100
                ? `Loading: ${loadingItem}`
                : props.progress === 100
                ? `Completed`
                : `Initializing Loader`}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {props.progress !== 0 && (
            <Typography sx={{ fontSize: '0.75rem', color: '#ffffff' }}>
              {isNaN(props.progress) ? '0%' : `${Math.floor(props.progress)}%`}
            </Typography>
          )}
        </Grid>
      </Grid>
      <LinearProgress
        variant='determinate'
        value={props.progress === 100 ? 100 : props.progress}
        sx={{
          margin: '1rem auto',
          backgroundColor: '#333333',
          borderRadius: '8px',
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#2196f3',
            animation: 'hueSwitch 20s linear infinite',
          },
        }}
      />
    </Box>
  );
}
