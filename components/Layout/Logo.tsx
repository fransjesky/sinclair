import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import { liujian, poiretone, comfortaa } from '@/theme/Typography';

interface LogoType {
  variant: 'text' | 'full';
  opened: boolean;
}

function Logo(props: LogoType) {
  const initial = 'j';
  const title = 'je`sky';
  const desc = 'frontend developer';

  return (
    <Box
      component='div'
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      {props.variant !== 'text' ? (
        <Link href='/' style={{ userSelect: 'none', outline: 'none' }}>
          <Box
            component='div'
            sx={{
              marginRight: '0.5rem',
              minWidth: '2.5rem',
              minHeight: '2.5rem',
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '0.5rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundImage: 'linear-gradient(45deg, #2196f3, #00dfd8)',
              position: 'relative',
              cursor: 'pointer',
              transition: 'all 0.3s ease-in',
              zIndex: props.opened ? 1000 : 'inherit',
              '&:hover': {
                transition: 'all 0.3s ease',
                boxShadow: `0 0 1rem 0 #2196f3`,
              },
              '&:after': {
                content: `''`,
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                borderRadius: '50%',
                borderTop: '0.125rem solid #ffffff',
                animation: 'rotatingNeon 1.5s linear infinite',
                '@keyframes rotatingNeon': {
                  '0%': { transform: 'rotate(0)' },
                  '100%': { transform: 'rotate(360deg)' },
                },
              },
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
                outline: 'none',
                userSelect: 'none',
              }}
            >
              {initial}
            </Typography>
          </Box>
        </Link>
      ) : null}
      {props.variant === 'full' || props.variant === 'text' ? (
        <Link href='/' style={{ userSelect: 'none', outline: 'none' }}>
          <Box
            component='div'
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              outline: 'none',
              userSelect: 'none',
              zIndex: props.opened ? 1000 : 'inherit',
            }}
          >
            <Box
              component='div'
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                marginBottom: '0.25rem',
                marginLeft: '0.5rem',
                color: '#ffffff',
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
                    component='span'
                    key={index}
                    sx={{
                      margin: 0,
                      padding: 0,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      backgroundImage:
                        'linear-gradient(45deg, #2196f3, #00dfd8)',
                      animation: `logoBouncing 1.5s ease infinite ${
                        index / title.length + 0.25
                      }s`,
                      '@keyframes logoBouncing': {
                        '0%': {
                          transform: 'translateY(0)',
                        },
                        '50%': {
                          transform: 'translateY(-0.375rem)',
                        },
                        '100%': {
                          transform: 'translateY(0)',
                        },
                      },
                    }}
                  >
                    {value}
                  </Box>
                );
              })}
            </Box>
            <Typography
              sx={{
                width: '100%',
                marginBottom: '0.25rem',
                marginLeft: '0.5rem',
                color: props.opened ? '#121212' : '#ffffff',
                fontFamily: comfortaa.style.fontFamily,
                fontSize: '0.65rem',
                fontWeight: 400,
                textTransform: 'capitalize',
                transition: 'all 0.5s ease',
              }}
            >
              {desc}
            </Typography>
          </Box>
        </Link>
      ) : null}
    </Box>
  );
}

export default Logo;
