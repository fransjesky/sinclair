import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

const words = [
  'Fabulous',
  'Awesome',
  'Humble',
  'Gentle',
  'Funny',
  'Hilarious',
  'Industrious',
  'Quite',
  'Shy',
  'Perfectionist',
  'Ambitious',
  'Artistic',
  'Creative',
  'Introvert',
  'Tidy',
  'Kind',
  'Generous',
  'Observant',
  'Passionate',
  'Persistent',
  'Sensitive',
];

export default function Describer() {
  const [displayWord, setDisplayWord] = useState(words[0]);

  useEffect(() => {
    const describerInterval = setInterval(() => {
      const randomizer = Math.floor(Math.random() * words.length);

      setDisplayWord(words[randomizer]);
    }, 200);

    return () => clearInterval(describerInterval);
  }, []);
  return (
    <Box
      component='div'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        userSelect: 'none',
      }}
    >
      <Box
        component='span'
        sx={{
          color: '#2196f3',
          fontSize: '0.55rem',
          fontWeight: 600,
          textTransform: 'uppercase',
        }}
      >
        what people say about me
      </Box>
      <Typography
        sx={{
          margin: 0,
          fontSize: '2.5rem',
          color: '#ffffff',
          textTransform: 'uppercase',
          fontWeight: 800,
          lineHeight: '2.5rem',
        }}
      >
        {displayWord}
      </Typography>
    </Box>
  );
}
