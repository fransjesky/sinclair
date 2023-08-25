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
        outline: 'none',
      }}
    >
      {props.variant !== 'text' ? (
        <Link href='/'>
          <Box
            component='div'
            sx={{
              marginRight: '0.5rem',
              minWidth: '2.5rem',
              minHeight: '2.5rem',
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundImage: 'linear-gradient(90deg, #2196f3, #00dfd8)',
              position: 'relative',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              zIndex: props.opened ? 1000 : 'inherit',
              '&:after': {
                content: `''`,
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                borderRadius: '50%',
                borderTop: '0.125rem solid #ffffff',
                transition: 'all 0.3s ease',
                animation: props.opened
                  ? 'none'
                  : 'rotatingNeon 0.75s linear infinite',
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
              }}
            >
              {initial}
            </Typography>
          </Box>
        </Link>
      ) : null}
      {props.variant === 'full' || props.variant === 'text' ? (
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
                  component='div'
                  key={index}
                  sx={{
                    margin: 0,
                    padding: 0,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    backgroundImage: 'linear-gradient(90deg, #2196f3, #00dfd8)',
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
      ) : null}
    </Box>
  );
}

export default Logo;
