import { Box } from '@mui/material';
import GlyphText from '@/components/Layout/GlyphText';

export default function About() {
  return (
    <Box
      component='div'
      sx={{
        // added 10rem of padding top due to divider height
        paddingTop: '10rem',
        height: '100vh',
        width: '100%',
        backgroundColor: '#ffffff',
      }}
    >
      <GlyphText
        english='frans jesky'
        japanese='フランス・ジェスキー'
        delay={300}
      />
    </Box>
  );
}
