import { Box } from '@mui/material';
import { ProjectPreview } from '../Components/ProjectPreview';

export const Fitcells = () => {
  const data = {
    link: 'https://www.fitcells.com',
    image: 'fitcells.png',
    enText: 'fitcells',
    jpText: 'フィツェルズ',
    year: '2021',
    region: 'Singapore',
    about: 'Fitness listing platform that connects people with workout venues',
    role: 'Frontend Developer, Mobile Developer',
    work: 'Involved in early development until the initial official public release of Fitcells, created the mobile app and CMS (content management system) dashboard',
  };

  return (
    <Box component='div' sx={{ margin: '1rem 0' }}>
      <ProjectPreview
        reverse
        link={data.link}
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
