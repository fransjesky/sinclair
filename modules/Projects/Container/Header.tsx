import { Box, Grid } from '@mui/material';
import { SectionTitle } from '@/components';

export const Header = () => {
  return (
    <Box
      component='div'
      sx={{
        marginBottom: '2.5rem',
        minHeight: '25vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        overflowX: 'hidden',
      }}
    >
      <Grid container rowSpacing={{ xs: 2, sm: 0 }}>
        <Grid
          item
          xs={12}
          sm={3}
          md={3}
          lg={2}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            component='div'
            sx={{
              width: {
                xs: '8rem',
                sm: '10rem',
              },
              height: {
                xs: '8rem',
                sm: '10rem',
              },
              borderRadius: '50%',
              backgroundColor: '#ff4655',
              userSelect: 'none',
            }}
          />
        </Grid>
        <Grid item xs={12} sm={9} md={9} lg={10}>
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
              title='projects'
              english='featured works'
              japanese='注目の作品'
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
