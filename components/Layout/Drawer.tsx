import { Box, Grid, Typography } from '@mui/material';
import Link from 'next/link';

// ICON
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

interface DrawType {
  data: {
    link: string;
    nav: string;
  }[];
  opened: boolean;
}

export default function Drawer(props: DrawType) {
  return (
    <Box
      component='div'
      sx={{
        paddingTop: '5rem',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: '#ffffff',
        transform: props.opened ? 'translateX(0)' : 'translateX(100%)',
        transition: 'all 0.5s ease-in-out',
      }}
    >
      <Grid container sx={{ padding: '2.5rem 0' }}>
        {props.data.map((data, index) => {
          return (
            <Grid item xs={12} key={index}>
              <Box
                component='div'
                sx={{
                  height: '4rem',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{
                    padding: '0.5rem',
                    fontSize: '0.55rem',
                    fontWeight: 600,
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    letterSpacing: '0.075rem',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    color: '#121212',
                    transition: 'all 0.3s ease-in',
                  }}
                >
                  {data.nav}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <Grid
        container
        columnSpacing={3}
        sx={{
          position: 'absolute',
          bottom: '2rem',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          color: '#121212',
        }}
      >
        <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
          <Link passHref href='https://www.linkedin.com/in/fransjesky'>
            <LinkedInIcon
              sx={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
            />
          </Link>
        </Grid>
        <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
          <Link passHref href='https://github.com/fransjesky'>
            <GitHubIcon
              sx={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
            />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
