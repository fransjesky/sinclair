import { Box, Container, Grid, Typography } from '@mui/material';
import GlyphText from '@/components/Layout/GlyphText';
import CardJob from '@/components/Layout/CardJob';

// REDUX
import { useAppSelector } from '@/redux/hooks';

export default function Experience() {
  const mobile = useAppSelector((state) => state.global.isMobile);

  const expData = [
    {
      imageUrl: '/assets/SVG/xcidic.svg',
      companyName: 'xcidic',
      periode: '2020 - on going',
      role: 'frontend developer',
      jobDesk:
        'Woohoo! My first full-time job! 🎉 \nDevelop and implement UI with UI/UX designers and integrate APIs from back-end developers to create web apps, dashboards, and mobile applications. Maintaining and fixing bugs in existing projects.',
    },
  ];

  return (
    <Box
      component='div'
      sx={{
        height: 'auto',
        margin: '2rem 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        userSelect: 'none',
      }}
    >
      <Box component='div' sx={{ marginBottom: '1rem' }}>
        <GlyphText
          english='work experience'
          japanese='仕事の経験'
          size={mobile ? 'medium' : 'large'}
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
          my career journey
        </Typography>
      </Box>
      <Box component='div' sx={{ width: '100%', margin: '2rem 0' }}>
        <Container maxWidth='lg'>
          <Grid
            container
            spacing={2}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            {expData.map((data, index) => {
              return (
                <Grid item key={index}>
                  <CardJob
                    url={data.imageUrl}
                    name={data.companyName}
                    periode={data.periode}
                    role={data.role}
                    job={data.jobDesk}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
