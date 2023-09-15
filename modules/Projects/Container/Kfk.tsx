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
    work: 'Freelance project and collaboration with friends. Created official website, CMS (content management system) dashboard and server as well the database. This project is already handovered to its owner and now being maintained by other developer',
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
