import { Box } from '@mui/material';
import Header from './Header';
import Introduction from './Introduction';
import Jumbotron from './Jumbotron';
import Skills from './Skills';

export default function Profile() {
  return (
    <Box
      id='profile'
      component='div'
      sx={{
        paddingTop: '10rem',
        height: 'calc(200vh + 5rem)',
        width: '100%',
        backgroundColor: '#000000',
      }}
    >
      <Header />
      <Introduction />
      <Skills />
      <Jumbotron />
    </Box>
  );
}
