import { Box } from '@mui/material';
import GlyphText from '@/components/Layout/GlyphText';

export default function About() {
  return (
    <Box component='div' sx={{ height: '100vh', width: '100%' }}>
      <GlyphText
        english='frans jesky'
        japanese='フランス・ジェスキー'
        delay={300}
      />
    </Box>
  );
}
