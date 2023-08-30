import { Box, Grid } from '@mui/material';
import SectionTitle from '@/components/Layout/SectionTittle';

export default function Header() {
  return (
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
            clipPath:
              'polygon(100% 0%, 100% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)',
            zIndex: 0,
          }}
        />
      </Grid>
    </Grid>
  );
}
