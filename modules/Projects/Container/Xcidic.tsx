import { Box } from '@mui/material';
import { ProjectPreview } from '../Components/ProjectPreview';

export const Xcidic = () => {
  const data = {
    link: 'https://xcidic.com',
    image: 'xcidic.png',
    enText: 'xcidic',
    jpText: 'X・シディック',
    year: '2022',
    region: 'Singapore',
    about: 'A company profile of Xcidic, a startup IT company based in Singapore',
    role: 'Frontend Developer',
    work: 'Involved in internal project revamped and re-created from scratch a company profile responsive website of Xcidic and its CMS (content management system) dashboard',
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
