import { Box } from '@mui/material';
import { ProjectPreview } from '../Components/ProjectPreview';

export const Tupan = () => {
  const data = {
    link: 'https://www.tutuppanci.com',
    image: 'tupan.png',
    enText: 'Tupan',
    jpText: 'トゥーパン',
    year: '2019',
    region: 'Jakarta, Indonesia',
    about: 'Online reserve platform for multiple branches of restaurant',
    role: 'Frontend Developer, Backend Developer',
    work: 'My first paid freelance project, created everything from scratch including the official website, CMS (content management system) dashboard and server as well the database',
  };

  return (
    <Box component='div' sx={{ margin: '1rem 0' }}>
      <ProjectPreview
        offline
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
