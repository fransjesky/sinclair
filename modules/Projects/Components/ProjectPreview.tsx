import { Suspense } from 'react';
import Link from 'next/link';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GlyphText } from '@/components';
import { comfortaa } from '@/theme/Typography';
import { Laptop } from '.';

interface ProjectPreviewProps {
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
  const {
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
        columnSpacing={10}
        rowSpacing={6}
        sx={{
          marginBottom: '2rem',
          height: '75vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <Grid
          item
          xs={6}
          sx={{
            height: '100%',
            width: '100%',
            cursor: 'grab',
            '&:active': {
              cursor: 'grabbing',
            },
          }}
        >
          <Box component='div' sx={{ height: '100%', width: '100%' }}>
            <Canvas>
              <pointLight position={[3, 3, 3]} intensity={1.5} />
              <Suspense fallback={null}>
                <group position={[0, -0.5, 0]} scale={0.4}>
                  <Laptop image={image} />
                </group>
              </Suspense>
              <ambientLight />
              <directionalLight position={[-6, 2, 2]} />
              <directionalLight position={[0.5, 0, 0.866]} />
              <directionalLight intensity={0.1} position={[0, 0, -5]} />
              <OrbitControls
                enablePan={false}
                enableZoom={false}
                minPolarAngle={Math.PI / 2.2}
                maxPolarAngle={Math.PI / 2.2}
              />
            </Canvas>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            component='div'
            sx={{
              paddingTop: '1rem',
              paddingBottom: '1rem',
              userSelect: 'none',
            }}
          >
            <GlyphText english={enText} japanese={jpText} size='extraLarge' />
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
                fontSize: '1.5rem',
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
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
