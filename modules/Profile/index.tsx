import { Box } from '@mui/material';
import Header from './Header';
import Introduction from './Introduction';
import Jumbotron from './Jumbotron';

export default function Profile() {
  return (
    <Box
      id='profile'
      component='div'
      sx={{
        paddingTop: '10rem',
        height: 'calc(100vh + 5rem)',
        width: '100%',
        backgroundColor: '#000000',
      }}
    >
      <Header />
      <Introduction />
      <Jumbotron />
    </Box>
  );
}
