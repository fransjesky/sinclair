import { Box } from '@mui/material';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

interface SliderButtonType {
  previous?: boolean;
}

export const SliderButton = (props: SliderButtonType) => {
  return (
    <Box
      component='div'
      className={props.previous ? 'custom-prev-button' : 'custom-next-button'}
      aria-label={props.previous ? 'Previous Slide' : 'Next Slide'}
      sx={{
        color: '#ffffff',
        height: '2rem',
        width: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '100%',
        left: props.previous ? 50 : undefined,
        right: !props.previous ? 50 : undefined,
        transform: props.previous
          ? 'translateY(50%) rotate(180deg) scale(2)'
          : 'translateY(50%) scale(2)',
        cursor: 'pointer',
        zIndex: 2,
      }}
    >
      <DoubleArrowIcon fontSize='medium' />
    </Box>
  );
};
