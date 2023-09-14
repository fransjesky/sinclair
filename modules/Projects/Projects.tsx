import { Box } from '@mui/material';
import { ScrollView } from '@/components';
import {
  Header,
  Tupan,
  Oootopia,
  Fitcells,
  Kbri,
  Kfk,
  Xcidic,
  Protoslabs,
} from './Container';

export const Projects = () => {
  return (
    <Box component='div' sx={{ minHeight: '100vh' }}>
      <ScrollView id='projects' />
      <Header />
      <Tupan />
      <Oootopia />
      <Fitcells />
      <Kbri />
      <Kfk />
      <Xcidic />
      <Protoslabs />
    </Box>
  );
};
