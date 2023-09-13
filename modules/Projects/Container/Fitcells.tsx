import { Box } from '@mui/material';
import { ProjectPreview } from '../Components/ProjectPreview';

export const Fitcells = () => {
  const data = {
    image: 'fitcells.png',
    enText: 'fitcells',
    jpText: 'フィツェルズ',
    year: '2021',
    region: 'Singapore',
    about:
      'Fitness listing platform that connects people with the workout venues',
    role: 'Frontend Developer, Mobile Developer',
    work: 'Involved in early development until initial release of Fitcells app, created the mobile app and content management system (CMS)',
  };

  return (
    <Box component='div' sx={{ margin: '1rem 0' }}>
      <ProjectPreview
        reverse
        image={data.image}
        enText={data.enText}
        jpText={data.jpText}
        year={data.year}
        region={data.region}
        about={data.about}
        role={data.role}
        work={data.work}
      />
    </Box>
  );
};
