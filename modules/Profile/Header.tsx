import { Box, Grid } from '@mui/material';
import SectionTitle from '@/components/Layout/SectionTittle';

export default function Header() {
  return (
    <Box
      component='div'
      sx={{
        minHeight: '25vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box
            component='div'
            sx={{
              height: '100%',
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <SectionTitle
              title='profile'
              english='introduction'
              japanese='プロフィール'
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            component='div'
            sx={{
              width: '100%',
              height: '10rem',
              backgroundColor: '#2196f3',
              clipPath:
                'polygon(100% 0%, 100% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
