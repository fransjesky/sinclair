import { Box } from '@mui/material';
import Header from './Header';
import Introduction from './Introduction';
import Jumbotron from './Jumbotron';
import Skills from './Skills';
import Biography from './Biography';

export default function Profile() {
  return (
    <Box
      id='profile'
      component='div'
      sx={{
        paddingTop: '10rem',
        minHeight: 'calc(100vh + 5rem)',
        width: '100%',
        backgroundColor: '#000000',
      }}
    >
      <Header />
      <Introduction />
      <Skills />
      <Jumbotron />
      <Biography />
    </Box>
  );
}
