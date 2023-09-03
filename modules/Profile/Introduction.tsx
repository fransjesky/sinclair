import Image from 'next/image';
import { Box, Container, Grid, Typography } from '@mui/material';

// FONT
import { comfortaa } from '@/theme/Typography';

export default function Introduction() {
  return (
    <Box
      component='div'
      sx={{
        margin: {
          xs: '2rem 0',
          sm: '2rem 0',
          md: '0',
        },
        minHeight: '45vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        userSelect: 'none',
      }}
    >
      <Container maxWidth='lg'>
        <Grid container rowSpacing={2}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
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
                sizes='(max-width: 768px) 10rem (max-width: 1200px) 20rem'
                quality={100}
                style={{ borderRadius: '1.625rem', objectFit: 'cover' }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
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
              <Box
                component='div'
                sx={{
                  margin: '0.5rem 0',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    fontWeight: 600,
                  }}
                >
                  Hi there!
                </Typography>
                <Box
                  component='div'
                  sx={{
                    marginLeft: '1.5rem',
                    animation: 'rotatingTriangle 3s linear infinite',
                    '@keyframes rotatingTriangle': {
                      '0%': { transform: 'rotate(0)' },
                      '100%': { transform: 'rotate(360deg)' },
                    },
                  }}
                >
                  <Image
                    src='/assets/SVG/triangle.svg'
                    alt=''
                    width={40}
                    height={40}
                    style={{ userSelect: 'none', objectFit: 'contain' }}
                  />
                </Box>
              </Box>
              <Typography
                sx={{
                  margin: '0.25rem 0',
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  fontFamily: comfortaa.style.fontFamily,
                  fontWeight: 400,
                }}
              >
                My name is{' '}
                <strong style={{ color: '#2196f3' }}>Frans Jesky</strong>, and
                i&apos;m a{' '}
                <strong style={{ color: '#2196f3' }}>Frontend Developer</strong>
                .
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
                have specialized in{' '}
                <strong style={{ color: '#2196f3' }}>React</strong> and{' '}
                <strong style={{ color: '#2196f3' }}>Node</strong>. I&apos;m
                also a <strong style={{ color: '#2196f3' }}>Three.js</strong> and{' '}
                <strong style={{ color: '#2196f3' }}>
                  R3F (React Three Fiber)
                </strong>{' '}
                enthusiast.
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
                Currently, i&apos;m working as a Frontend Developer at Xcidic
                since late 2020. Xcidic is a startup IT company based in
                Singapore.
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
              <Box component='div' sx={{ marginTop: '2rem' }}>
                <Typography
                  sx={{
                    color: '#ffffff',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                  }}
                >
                  Languages I know
                </Typography>
                <Typography sx={{ color: '#ffffff', fontSize: '0.75rem' }}>
                  Indonesia (native), English, Japanese (JLPT N2)
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
