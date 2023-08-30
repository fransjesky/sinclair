import { Box, Grid } from '@mui/material';
import SectionTitle from '@/components/Layout/SectionTittle';
import Describer from '@/components/Layout/Describer';

export default function Profile() {
  return (
    <Box
      id='profile'
      component='div'
      sx={{
        paddingTop: '10rem',
        height: 'calc(100vh + 5rem)',
        width: '100%',
        backgroundColor: '#ECE8E1',
      }}
    >
      <Grid container columnSpacing={2}>
        <Grid item md={6}>
          <SectionTitle
            title='profile'
            english='introduction'
            japanese='プロフィール'
          />
        </Grid>
        <Grid item md={6}>
          <Box
            component='div'
            sx={{
              width: '100%',
              height: '10rem',
              backgroundColor: '#2196f3',
            }}
          />
        </Grid>
      </Grid>
      <Box
        component='div'
        sx={{
          margin: '1rem 0',
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
    </Box>
  );
}
