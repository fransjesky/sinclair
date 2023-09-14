import { Box } from '@mui/material';
import { ProjectPreview } from '../Components/ProjectPreview';

export const Protoslabs = () => {
  const data = {
    link: 'https://www.protoslabs.sg/',
    image: 'protoslabs.png',
    enText: 'Protos Labs',
    jpText: 'プローターズ・ラブズ',
    year: '2023',
    region: 'Singapore',
    about:
      'A cybersecurity solution and risk management, orchestration platform',
    role: 'Frontend Developer',
    work: 'Involved as a part of small outsource team in developing a cyber security and risk analytics, solution and management dashboard system',
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
