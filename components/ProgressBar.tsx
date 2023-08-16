import { useState, useEffect } from 'react';
import { Box, Grid, Typography, LinearProgress } from '@mui/material';

interface ProgressBarProps {
  progress: number;
  item: string;
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
          height: '1rem',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'cennter',
        }}
      >
        <Grid item>
          {props.progress !== 0 && props.progress !== 100 && (
            <Typography sx={{ color: '#ffffff' }}>
              Loading: {loadingItem}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {props.progress !== 0 && props.progress !== 100 && (
            <Typography sx={{ color: '#ffffff' }}>
              {Math.floor(props.progress)}%
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
            backgroundColor: '#00e5ff',
          },
        }}
      />
    </Box>
  );
}
