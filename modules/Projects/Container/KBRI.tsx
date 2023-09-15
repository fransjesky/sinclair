import { Box } from '@mui/material';
import { ProjectPreview } from '../Components/ProjectPreview';

export const Kbri = () => {
  const data = {
    link: 'https://indonesiacomercio.pe/',
    image: 'kbri.png',
    enText: 'KBRI Lima',
    jpText: 'KBRI リマ',
    year: '2021 - 2022',
    region: 'Lima, Peru',
    about: 'Official website of the Indonesian Embassy located in Lima, Peru',
    role: 'Frontend Developer',
    work: 'First official government project. Revamped and recreated from scratch a responsive website and CMS (content management system) dashboard for the Indonesian Embassy in Lima, Peru',
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
