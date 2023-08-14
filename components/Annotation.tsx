import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Vector3 } from 'three';
import { Html } from '@react-three/drei';

interface AnnotationTypes {
  title?: string;
  text: string;
  content?: string;
  board?: boolean;
  position?: Vector3;
}

export default function Annotation(props: AnnotationTypes) {
  const [responsiveWidth, setResponsiveWidth] = useState('');

  useEffect(() => {
    window.innerWidth <= 600
      ? setResponsiveWidth('18.75rem')
      : setResponsiveWidth('20rem');
  }, []);

  return (
    props.text.length > 0 && (
      <Html
        position={props.position}
        scale={0.12}
        dispose={null}
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
          {props.board ? (
            <Typography
              sx={{
                color: '#ffffff',
                fontSize: '0.8rem',
                fontWeight: 900,
                textAlign: 'center',
              }}
            >
              {props.title}
            </Typography>
          ) : (
            <Typography
              sx={{
                color: '#ff5722',
                fontSize: '1.2rem',
                fontWeight: 900,
                textTransform: 'uppercase',
              }}
            >
              Sinclair
            </Typography>
          )}
          {props.board ? (
            <Typography
              sx={{
                color: '#ff5722',
                fontSize: '2rem',
                fontWeight: 900,
                textTransform: 'uppercase',
                textAlign: 'center',
              }}
            >
              {props.content}
            </Typography>
          ) : (
            <Typography>{props.text}</Typography>
          )}
        </Box>
      </Html>
    )
  );
}
