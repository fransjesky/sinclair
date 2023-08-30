import Image from 'next/image';
import { Box, Container, Grid, Typography } from '@mui/material';

// FONT
import { comfortaa } from '@/theme/Typography';

export default function Introduction() {
  return (
    <Box
      component='div'
      sx={{
        padding: '1rem 0',
        width: '100%',
      }}
    >
      <Container maxWidth='lg'>
        <Grid container>
          <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              component='div'
              sx={{
                height: '20rem',
                width: '20rem',
                position: 'relative',
              }}
            >
              <Image
                src='/assets/picture.jpg'
                alt='frans jesky'
                fill
                quality={100}
                style={{ borderRadius: '1.625rem', objectFit: 'cover' }}
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              component='div'
              sx={{
                width: '100%',
                minHeight: '15rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}
            >
              <Typography
                sx={{
                  marginBottom: '1rem',
                  color: '#ffffff',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                }}
              >
                Hi there!
              </Typography>
              <Typography
                sx={{
                  margin: '0.25rem 0',
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  fontFamily: comfortaa.style.fontFamily,
                  fontWeight: 400,
                }}
              >
                My name is Frans Jesky, and i&apos;m a Frontend Developer.
                <br />I blend artwork with cutting-edge technology, designing
                immersive visual and functional user interfaces and experiences.
              </Typography>
              <Typography
                sx={{
                  margin: '0.25rem 0',
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  fontFamily: comfortaa.style.fontFamily,
                  fontWeight: 400,
                }}
              >
                Professionally, i have 3 years of experience in programming and
                have specialized in React and Node. I&apos;m also a Threejs and
                R3F (React Three Fiber) enthusiast.
              </Typography>
              <Typography
                sx={{
                  margin: '0.25rem 0',
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  fontFamily: comfortaa.style.fontFamily,
                  fontWeight: 400,
                }}
              >
                Currently, i&apos;m working as a Frontend Developer at Xcidic, a
                startup IT company based in Singapore.
              </Typography>
              <Typography
                sx={{
                  margin: '0.25rem 0',
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  fontFamily: comfortaa.style.fontFamily,
                  fontWeight: 400,
                }}
              >
                In my spare time, i always like to practice coding, play video
                games, and watch movies. I was a musician, and sometimes i still
                play guitar in my free time.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
