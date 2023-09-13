import { Box } from '@mui/material';
import { ScrollView } from '@/components';
import { Header, Oootopia, Fitcells } from './Container';

export const Projects = () => {
  return (
    <Box component='div' sx={{ minHeight: '100vh' }}>
      <ScrollView id='projects' />
      <Header />
      <Oootopia />
      <Fitcells />
    </Box>
  );
};
