import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import GlyphText from './GlyphText';

// REDUX
import { useAppSelector } from '@/redux/hooks';

interface SectionTitleType {
  title: string;
  english: string;
  japanese: string;
  delay?: number;
}

export default function SectionTitle(props: SectionTitleType) {
  const mobile = useAppSelector((state) => state.global.isMobile);
  const [mobileView, setMobileView] = useState(mobile);

  useEffect(() => {
    const mobilePort = () => {
      window.innerWidth <= 425 ? setMobileView(true) : setMobileView(false);
    };

    window.addEventListener('resize', mobilePort);

    return () => {
      window.removeEventListener('resize', mobilePort);
    };
  });

  return (
    <Box
      component='div'
      sx={{
        padding: '0 1rem',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        userSelect: 'none',
      }}
    >
      <Box
        component='span'
        sx={{
          padding: {
            xs: '0 0.1rem',
            sm: '0 0.25rem',
            md: '0 0.5rem',
          },
          zIndex: 2,
        }}
      >
        <GlyphText
          english={props.english}
          japanese={props.japanese}
          delay={props.delay || 300}
          size={mobileView ? 'small' : 'medium'}
          animate={false}
        />
      </Box>
      <Typography
        sx={{
          color: '#ffffff',
          fontSize: {
            xs: '4rem',
            sm: '5rem',
            md: '6.5rem',
            lg: '8.5rem',
            xl: '10rem',
          },
          fontWeight: 900,
          textAlign: 'left',
          textTransform: 'uppercase',
          lineHeight: {
            xs: '4rem',
            sm: '5rem',
            md: '6.5rem',
            lg: '8.5rem',
            xl: '8.5rem',
          },
          zIndex: 2,
        }}
      >
        {props.title}
      </Typography>
    </Box>
  );
}
