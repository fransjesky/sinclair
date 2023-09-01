import { Box, Typography } from '@mui/material';
import { comfortaa } from '@/theme/Typography';

interface CardType {
  title: string;
  scrollable: boolean;
  icon?: JSX.Element[];
  list: string[];
  desc: string;
}

export default function Card(props: CardType) {
  return (
    <Box
      component='div'
      sx={{
        padding: '1rem',
        height: '25rem',
        width: {
          xs: '100%',
          sm: '20rem',
        },
        maxWidth: {
          xs: '20rem',
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: 'white',
        borderRadius: '1rem',
        backgroundColor: '#111111',
        boxShadow: '0px 10px 10px -5px rgba(0, 0, 0, 0.5)',
        userSelect: 'none',
      }}
    >
      <Box
        component='div'
        sx={{
          height: '5rem',
          width: '100%',
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
            fontWeight: 700,
            lineHeight: '2rem',
          }}
        >
          {props.title}
        </Typography>
        {props.scrollable ? (
          <Typography
            sx={{
              marginBottom: '0.625rem',
              fontSize: '0.75rem',
              color: '#d3bc90',
            }}
          >
            scroll list to see more
          </Typography>
        ) : null}
      </Box>
      <Box
        component='div'
        sx={{
          margin: '0.5rem 0',
          height: '15rem',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          overflow: 'auto',
          cursor: 'grab',
          '&:active': {
            cursor: 'grabbing',
          },
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {props.list.map((item, index) => (
          <Box
            component='span'
            key={index}
            sx={{
              margin: '0.25rem 0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              component='span'
              sx={{ marginRight: '0.5rem', color: '#d3bc90' }}
            >
              {props.icon && props.icon[index]}
            </Box>
            <Typography
              sx={{
                margin: '0.25rem 0',
                textAlign: 'center',
                fontWeight: 600,
                fontSize: '0.75rem',
              }}
            >
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box
        component='div'
        sx={{
          height: '5rem',
          width: '100%',
          overflow: 'auto',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: comfortaa.style.fontFamily,
            fontSize: '0.75rem',
            opacity: '0.75',
          }}
        >
          {props.desc}
        </Typography>
      </Box>
    </Box>
  );
}
