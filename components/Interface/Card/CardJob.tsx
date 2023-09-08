import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { comfortaa } from '@/theme/Typography';

interface CardJobType {
  url: string;
  name: string;
  periode: string;
  role: string;
  job: string;
}

export const CardJob = (props: CardJobType) => {
  return (
    <Box
      component='div'
      sx={{
        height: '25rem',
        width: {
          xs: '100%',
          sm: '20rem',
        },
        maxWidth: {
          xs: '20rem',
        },
        borderRadius: '1rem',
        backgroundColor: '#111111',
        overflow: 'hidden',
        borderBottom: '0.25rem solid #2196f3',
        position: 'relative',
      }}
    >
      <Box
        component='div'
        sx={{
          height: '10rem',
          width: '100%',
          position: 'relative',
        }}
      >
        <Box
          component='div'
          sx={{
            height: '20rem',
            width: '15rem',
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: '#2196f3',
            transform: 'rotate(90deg) translateY(-2.5rem) translateX(-5rem)',
            clipPath: 'polygon(75% 0%, 50% 50%, 75% 100%, 0 100%, 0% 50%, 0 0)',
          }}
        />
        <Box
          component='div'
          sx={{
            height: '7.5rem',
            width: '100%',
            position: 'relative',
            backgroundColor: '#ffffff',
            clipPath:
              'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
            transform: 'translateY(1rem)',
          }}
        >
          <Image
            src={props.url}
            alt='xcidic'
            fill
            sizes='(max-width: 768px) 15rem (max-width: 1200px) 17.5rem'
            style={{ objectFit: 'scale-down' }}
          />
        </Box>
      </Box>
      <Box
        component='div'
        sx={{
          height: '5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            color: '#ffffff',
            fontSize: '2rem',
            fontWeight: 900,
            textAlign: 'center',
            textTransform: 'capitalize',
            lineHeight: '2rem',
          }}
        >
          {props.name}
        </Typography>
        <Typography
          sx={{
            marginBottom: '0.625rem',
            fontSize: '0.75rem',
            color: '#d3bc90',
            textAlign: 'center',
            textTransform: 'capitalize',
          }}
        >
          {props.periode}
        </Typography>
      </Box>
      <Box
        component='div'
        sx={{
          padding: '0 1rem',
          height: '9rem',
          overflow: 'hidden',
        }}
      >
        <Typography
          sx={{
            color: '#2196f3',
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
          }}
        >
          Role
        </Typography>
        <Typography
          sx={{
            color: '#ffffff',
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'capitalize',
          }}
        >
          {props.role}
        </Typography>
        <Typography
          sx={{
            marginTop: '1rem',
            color: '#ffffff',
            fontFamily: comfortaa.style.fontFamily,
            fontSize: '0.65rem',
            whiteSpace: 'pre-line',
          }}
        >
          {props.job}
        </Typography>
      </Box>
    </Box>
  );
};
