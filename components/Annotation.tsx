import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Html } from '@react-three/drei';

export default function Annotation(props: any) {
  return (
    props.text.length > 0 && (
      <Html dispose={null} {...props} transform geometry={<planeGeometry />}>
        <Box
          component='div'
          sx={{
            padding: '1rem',
            minHeight: '5rem',
            width: '100%',
            maxWidth: '30rem',
            border: '1px solid #ff5722',
            borderRadius: '0.5rem',
            backgroundColor: '#121212',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            userSelect: 'none',
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
