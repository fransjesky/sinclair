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
      <Grid container>
        <Grid
          item
          xs={2}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            component='div'
            sx={{
              width: '12.5rem',
              height: '12.5rem',
              borderRadius: '50%',
              backgroundColor: '#ff4655',
              userSelect: 'none',
            }}
          />
        </Grid>
        <Grid item xs={10}>
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
