import { Box } from '@mui/material';
import Describer from '@/components/Layout/Describer';

export default function Jumbotron() {
  return (
    <Box
      component='div'
      sx={{
        marginTop: '1rem',
        minHeight: '50vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url('/assets/profile.jpg')`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Describer />
    </Box>
  );
}
