import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Html } from '@react-three/drei';

export default function Annotation(props: any) {
  const [responsiveWidth, setResponsiveWidth] = useState('');

  useEffect(() => {
    window.innerWidth <= 600
      ? setResponsiveWidth('18.75rem')
      : setResponsiveWidth('20rem');
  }, []);

  return (
    props.text.length > 0 && (
      <Html
        scale={0.12}
        dispose={null}
        {...props}
        transform
        geometry={<planeGeometry />}
      >
        <Box
          component='div'
          sx={{
            padding: '1rem',
            minHeight: '5rem',
            width: '100%',
            maxWidth: responsiveWidth,
            border: '0.125rem solid #ff5722',
            borderRadius: '0.5rem',
            backgroundColor: '#121212',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            outline: 'none',
            color: '#ffffff',
          }}
        >
          <Typography
            sx={{ color: '#ff5722', fontSize: '1.2rem', fontWeight: 900 }}
          >
            Sinclair
          </Typography>
          <Typography>{props.text}</Typography>
        </Box>
      </Html>
    )
  );
}
