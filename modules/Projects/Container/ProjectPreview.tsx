import { Suspense } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GlyphText } from '@/components';
import Model from '../Components/Laptop';

export const ProjectPreview = () => {
  return (
    <Container maxWidth='lg'>
      <Grid container sx={{ height: '75vh', width: '100%' }}>
        <Grid item xl={6}>
          <Box component='div' sx={{ height: '100%', width: '100%' }}>
            <Canvas>
              <pointLight position={[3, 3, 3]} intensity={1.5} />
              <Suspense fallback={null}>
                <group position={[0, 0.35, 0]} scale={0.375}>
                  <Model />
                </group>
              </Suspense>
              <ambientLight />
              <directionalLight position={[-6, 2, 2]} />
              <directionalLight position={[0.5, 0, 0.866]} />
              <directionalLight position={[0, 10, 0]} />
              <directionalLight intensity={0.5} position={[0, 0, -5]} />
              <directionalLight intensity={0.5} position={[0, 1, 2]} />
              <OrbitControls
                enablePan={false}
                enableZoom={false}
                minPolarAngle={Math.PI / 2.2}
                maxPolarAngle={Math.PI / 2.2}
              />
            </Canvas>
          </Box>
        </Grid>
        <Grid item xl={6}>
          <Box
            component='div'
            sx={{
              paddingTop: '1rem',
              paddingBottom: '1rem',
              userSelect: 'none',
            }}
          >
            <GlyphText
              english='oootopia'
              japanese='ウオトピア'
              size='extraLarge'
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
              2020 - 2021 | Macau, China
            </Typography>
            <Typography
              sx={{
                margin: '1rem 0',
                color: '#ffffff',
                fontSize: '1.5rem',
                textAlign: 'left',
                fontWeight: 500,
              }}
            >
              Hong Kong inovative serviced apartment integrated with IoT (Internet of Thing)
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
                Role
              </Typography>
              <Typography
                sx={{
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  textTransform: 'capitalize',
                }}
              >
                Frontend Developer, Mobile Developer
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
