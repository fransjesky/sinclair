import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import { liujian, poiretone, comfortaa } from '@/theme/Typography';

function Logo({ variant }: { variant: 'text' | 'full' }) {
  const initial = 'j';
  const title = 'je`sky';
  const desc = 'frontend developer';

  return (
    <Link href='/'>
      <Box
        component='div'
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        {variant !== 'text' ? (
          <Box
            component='div'
            sx={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundImage: 'linear-gradient(90deg, #2196f3, #00dfd8)',
            }}
          >
            <Typography
              sx={{
                color: '#ffffff',
                fontFamily: liujian.style.fontFamily,
                fontSize: '2rem',
                fontWeight: 400,
                textTransform: 'uppercase',
                transform: 'translateY(-10%)',
              }}
            >
              {initial}
            </Typography>
          </Box>
        ) : null}
        {variant === 'full' || variant === 'text' ? (
          <Box
            component='div'
            sx={{ display: 'flex', flexDirection: 'column' }}
          >
            <Box
              component='div'
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                marginBottom: '0.25rem',
                marginLeft: '0.5rem',
                color: '#111111',
                fontFamily: poiretone.style.fontFamily,
                fontSize: '1.75rem',
                fontWeight: 400,
                lineHeight: '2rem',
                textTransform: 'lowercase',
              }}
            >
              {title.split('').map((value, index) => {
                return (
                  <Box
                    component='div'
                    key={index}
                    sx={{
                      margin: 0,
                      padding: 0,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      backgroundImage:
                        'linear-gradient(90deg, #2196f3, #00dfd8)',
                    }}
                  >
                    {value}
                  </Box>
                );
              })}
            </Box>
            <Box
              component='span'
              sx={{
                marginBottom: '0.25rem',
                marginLeft: '0.5rem',
                color: '#111111',
                fontFamily: comfortaa.style.fontFamily,
                fontSize: '0.65rem',
                fontWeight: 400,
                textTransform: 'capitalize',
              }}
            >
              {desc}
            </Box>
          </Box>
        ) : null}
      </Box>
    </Link>
  );
}

export default Logo;
