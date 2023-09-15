import Link from 'next/link';
import Image from 'next/image';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { GlyphText } from '@/components';
import { comfortaa } from '@/theme/Typography';
import { useAppSelector } from '@/redux';

interface ProjectPreviewProps {
  offline?: boolean;
  reverse?: boolean;
  link: string;
  image: string;
  enText: string;
  jpText: string;
  year: string;
  region: string;
  about: string;
  role: string;
  work: string;
}

export const ProjectPreview = (props: ProjectPreviewProps) => {
  const mobile = useAppSelector((state) => state.global.isMobile);
  const {
    offline,
    link,
    reverse,
    image,
    enText,
    jpText,
    year,
    region,
    about,
    role,
    work,
  } = props;

  return (
    <Container maxWidth='lg'>
      <Grid
        container
        direction={reverse ? 'row-reverse' : 'row'}
        columnSpacing={{ xs: 0, sm: 4, lg: 6 }}
        sx={{
          marginBottom: '2rem',
          minHeight: '75vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            height: '100%',
            width: '100%',
            cursor: 'grab',
            '&:active': {
              cursor: 'grabbing',
            },
          }}
        >
          <Box
            component='div'
            sx={{
              height: { xs: '12.5rem', sm: '20rem', md: '62.5vh', lg: '75vh' },
              width: '100%',
              position: 'relative',
            }}
          >
            <Image
              fill
              priority
              quality={100}
              alt={enText}
              src={`/assets/${image}`}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100%, 100%'
              style={{ objectFit: 'contain' }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ width: '100%' }}>
          <Box
            component='div'
            sx={{
              width: '100%',
              paddingTop: '1rem',
              paddingBottom: '1rem',
              userSelect: 'none',
            }}
          >
            <GlyphText
              english={enText}
              japanese={jpText}
              size={mobile ? 'large' : 'extraLarge'}
            />
            <Typography
              sx={{
                color: '#ffffff',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.125rem',
                textAlign: 'center',
              }}
            >
              {year} | {region}
            </Typography>
            <Typography
              sx={{
                margin: '1rem 0',
                color: '#ffffff',
                fontSize: {
                  xs: '1rem',
                  sm: '1.1rem',
                  md: '1.25rem',
                  lg: '1.5rem',
                },
                fontFamily: comfortaa.style.fontFamily,
                textAlign: 'left',
                fontWeight: 500,
              }}
            >
              {about}
            </Typography>
            <Box
              component='div'
              sx={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}
            >
              <Typography
                sx={{
                  color: '#ff4655',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                }}
              >
                Job Role
              </Typography>
              <Typography
                sx={{
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  textTransform: 'capitalize',
                  fontFamily: comfortaa.style.fontFamily,
                }}
              >
                {role}
              </Typography>
            </Box>
            <Box
              component='div'
              sx={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}
            >
              <Typography
                sx={{
                  color: '#ff4655',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                }}
              >
                Responsibilities
              </Typography>
              <Typography
                sx={{
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  fontFamily: comfortaa.style.fontFamily,
                }}
              >
                {work}
              </Typography>
            </Box>
            <Box
              component='div'
              sx={{
                marginTop: '1rem',
                height: '2.5rem',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                aligItems: 'center',
              }}
            >
              {offline ? (
                <Button
                  sx={{
                    padding: '0.5rem 1rem',
                    border: '0.125rem solid #121212',
                    borderRadius: '0.5rem',
                    fontSize: '0.55rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    backgroundColor: '#121212',
                    cursor: 'pointer',
                    position: 'relative',
                    letterSpacing: '0.125rem',
                    textTransform: 'uppercase',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#121212',
                    },
                  }}
                >
                  ⛔ this project is offline 🚧
                </Button>
              ) : (
                <Link passHref href={link}>
                  <Button
                    sx={{
                      padding: '0.5rem 1rem',
                      border: '0.125rem solid #ff4655',
                      borderRadius: '0.5rem',
                      fontSize: '0.55rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      backgroundColor: '#ff4655',
                      cursor: 'pointer',
                      position: 'relative',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        padding: '0.5rem 2rem',
                        backgroundColor: '#ff4655',
                      },
                    }}
                  >
                    View Project&apos;s Website
                  </Button>
                </Link>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
