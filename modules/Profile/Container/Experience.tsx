import { Box, Container, Grid, Typography } from '@mui/material';
import { CardJob, GlyphText } from '@/components';
import { useAppSelector } from '@/redux';

export const Experience = () => {
  const mobile = useAppSelector((state) => state.global.isMobile);

  const expData = [
    {
      imageUrl: '/assets/SVG/xcidic.svg',
      companyName: 'xcidic',
      periode: 'Oct 2023 - present',
      role: 'head of information technology',
      jobDesk:
        "In October 2023, i got promoted to Head of IT role. My main responsibility is to innovate and improve company's current technology. Involve in project's planning, SoW, development and production. Review other developer codes and do assessment interview.",
      website: 'https://xcidic.com/',
      color: '#ff6937',
    },
    {
      imageUrl: '/assets/SVG/xcidic.svg',
      companyName: 'xcidic',
      periode: 'Nov 2020 - Nov 2023',
      role: 'frontend developer',
      jobDesk:
        'Woohoo! My first full-time job! 🎉 \nDevelop and implement UI with UI/UX designers and integrate APIs from back-end developers to create web apps, dashboards, and mobile applications. Maintaining and fixing bugs in existing projects.',
      website: 'https://xcidic.com/',
      color: '#2196f3',
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
            spacing={6}
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
                    website={data.website}
                    color={data.color}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
