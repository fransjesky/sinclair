import { Box } from '@mui/material';
import { ProjectPreview } from '../Components/ProjectPreview';

export const Kfk = () => {
  const data = {
    link: 'https://kungfukebab.id/',
    image: 'kfk.png',
    enText: 'Kungfu Kebab',
    jpText: 'カンフー・ケバブ',
    year: '2022',
    region: 'Jakarta, Indonesia',
    about: 'An online food order platform for a Kungfu Kebab franchise',
    role: 'Frontend Developer, Backend Developer',
    work: 'A freelance project and collaboration with friends. Created the official website, CMS (content management system) dashboard, and server. This project has already been handed over to its owner and is now being maintained by another developer',
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
