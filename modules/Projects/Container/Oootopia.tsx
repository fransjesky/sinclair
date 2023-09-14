import { Box } from '@mui/material';
import { ProjectPreview } from '../Components/ProjectPreview';

export const Oootopia = () => {
  const data = {
    link: 'https://www.oootopia.com',
    image: 'oootopia.png',
    enText: 'oootopia',
    jpText: 'ウートピア',
    year: '2020 - 2021',
    region: 'Hong Kong, China',
    about: 'Hong Kong inovative serviced apartment integrated with IoT',
    role: 'Frontend Developer, Mobile Developer',
    work: 'Monitoring, maintaining and bug-fixing the resident mobile app and PMS (property management system) dashboard while creating new features. Prepare monthly reports such as app production status, app security and performance statistics, and existing and fixed issues',
  };

  return (
    <Box component='div' sx={{ margin: '1rem 0' }}>
      <ProjectPreview
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
