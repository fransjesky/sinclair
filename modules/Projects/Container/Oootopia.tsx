import { Box } from '@mui/material';
import { ProjectPreview } from '../Components/ProjectPreview';

export const Oootopia = () => {
  const data = {
    image: 'oootopia.png',
    enText: 'oootopia',
    jpText: 'ウオトピア',
    year: '2020 - 2021',
    region: 'China',
    about: 'Hong Kong inovative serviced apartment integrated with IoT',
    role: 'Frontend Developer, Mobile Developer',
    work: 'Monitoring, maintaining and bug-fixing the mobile app and dashboard system while creating new features. Prepare monthly reports such as app production status, app security and performance statistics, and existing and fixed issues.',
  };

  return (
    <Box component='div' sx={{ margin: '1rem 0' }}>
      <ProjectPreview
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
