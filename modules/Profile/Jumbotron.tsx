import { Box, Typography } from '@mui/material';

export default function Jumbotron() {
  return (
    <Box
      component='div'
      sx={{
        minHeight: '50vh',
        height: '50vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url('/assets/profile.jpg')`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        userSelect: 'none',
      }}
    >
      <Typography
        sx={{
          color: '#ffffff',
          fontSize: '1.5rem',
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '0.375rem',
        }}
      >
        the story of
      </Typography>
      <Typography
        sx={{
          color: '#ffffff',
          fontSize: '5rem',
          fontWeight: 900,
          textTransform: 'uppercase',
          lineHeight: '5rem',
        }}
      >
        jesky
      </Typography>
    </Box>
  );
}
