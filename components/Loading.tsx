import { Box, Typography, Button } from '@mui/material';
import { useProgress } from '@react-three/drei';
import Image from 'next/image';

interface LoadingTypes {
  started: boolean;
  onClick: () => void;
}

export default function LoadingOverlay(props: LoadingTypes) {
  const { progress } = useProgress();

  return (
    <Box
      component='div'
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: '100%',
        width: '100%',
        display: props.started ? 'none' : 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        transition: 'all 0.3s ease',
        zIndex: 999,
      }}
    >
      <Image
        priority
        src='/Loader.gif'
        alt='loader'
        width={200}
        height={150}
        quality={100}
        style={{
          objectFit: 'contain',
          border: 'none',
          outline: 'none',
          userSelect: 'none',
        }}
      />
      <Box
        component='div'
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
          LOADING STATUS
        </Typography>
        <Typography
          variant='h1'
          sx={{
            color: '#ffffff',
            fontSize: '2.25rem',
            fontWeight: 900,
          }}
        >
          {progress < 100 ? `INITIALIZING` : 'READY'}
        </Typography>
      </Box>
      <Box component='div' sx={{ marginTop: '2.5rem' }}>
        <Button
          onClick={props.onClick}
          disabled={progress === 100 ? false : true}
          sx={{
            padding: '0.5rem 3rem',
            color: '#00bfa5',
            border: '0.125rem solid #00bfa5',
            borderRadius: '0.5rem',
            fontWeight: 900,
            letterSpacing: '0.125rem',
            transition: 'all 0.3s ease',
            '&:hover': {
              padding: '0.5rem 5rem',
              color: '#ffffff',
              cursor: 'pointer',
              backgroundColor: '#00bfa5',
            },
            '&:disabled': {
              color: '#ff5722',
              border: '0.125rem solid #ff5722',
            },
          }}
        >
          START
        </Button>
      </Box>
    </Box>
  );
}
