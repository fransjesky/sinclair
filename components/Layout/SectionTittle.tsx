import { Box, Typography } from '@mui/material';
import GlyphText from './GlyphText';

interface SectionTitleType {
  title: string;
  english: string;
  japanese: string;
  delay?: number;
}

export default function SectionTitle(props: SectionTitleType) {
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
      <Box component='span' sx={{ padding: '0 0.5rem' }}>
        <GlyphText
          english={props.english}
          japanese={props.japanese}
          delay={props.delay || 300}
          size='medium'
          animate={false}
        />
      </Box>
      <Typography
        sx={{
          color: '#ffffff',
          fontSize: '10rem',
          fontWeight: 900,
          textAlign: 'left',
          textTransform: 'uppercase',
          lineHeight: '7.5rem',
        }}
      >
        {props.title}
      </Typography>
    </Box>
  );
}
