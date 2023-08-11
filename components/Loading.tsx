import { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useProgress } from '@react-three/drei';
import Image from 'next/image';

interface LoadingProps {
  started: boolean;
  onClick: () => void;
}

export default function LoadingOverlay(props: LoadingProps) {
  const { progress } = useProgress();

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        transition: 'all 0.3s ease',
        zIndex: props.started ? -1 : 999,
      }}
    >
      <Box sx={{ userSelect: 'none', outline: 'none' }}>
        <Image src='/Loader.gif' alt='loader' width={256} height={192} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            color: '#ffffff',
            fontSize: '1rem',
            fontWeight: 300,
          }}
        >
          NOW LOADING
        </Typography>
        <Typography
          variant='h1'
          sx={{
            color: '#ffffff',
            fontSize: '2.25rem',
            fontWeight: 900,
          }}
        >
          {progress}%
        </Typography>
      </Box>
      <Box sx={{ marginTop: '2.5rem' }}>
        <Button
          onClick={props.onClick}
          disabled={progress === 100 ? false : true}
          sx={{
            padding: '0.5rem 3rem',
            color: '#64ffda',
            border: '0.125rem solid #64ffda',
            borderRadius: '0.5rem',
            fontWeight: 900,
            letterSpacing: '0.125rem',
            '&:hover': {
              color: '#ffffff',
              cursor: 'pointer',
              backgroundColor: '#64ffda',
            },
            '&:disabled': {
              color: '#f44336',
              border: '0.125rem solid #f44336',
            },
          }}
        >
          START
        </Button>
      </Box>
    </Box>
  );
}
