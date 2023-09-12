import { Box } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import { MacbookPro } from '../Components/Device';

export const ProjectPreview = () => {
  return (
    <Box component='div' sx={{ height: 800, width: 1280 }}>
      <Canvas>
        <MacbookPro />
        <ambientLight />
        <directionalLight position={[0, 2, 0]} />
        <directionalLight intensity={1.8} position={[0.5, 0, 1]} />
        <directionalLight intensity={1.5} position={[-2, 2, 2]} />
      </Canvas>
    </Box>
  );
};
