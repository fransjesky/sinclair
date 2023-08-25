import { Box } from '@mui/material';

interface DrawerButtonType {
  onClick: () => void;
  opened: boolean;
}

export default function DrawerButton(props: DrawerButtonType) {
  return (
    <Box
      component='div'
      onClick={props.onClick}
      sx={{
        height: '1rem',
        display: {
          xs: 'flex',
          sm: 'flex',
          md: 'none',
        },
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'space-between',
        zIndex: 1000,
      }}
    >
      <Box
        component='span'
        sx={{
          height: '0.125rem',
          width: '1.5rem',
          backgroundColor: props.opened ? '#121212' : '#ffffff',
          transform: props.opened
            ? 'rotate(405deg) translate(5px, 5px)'
            : 'rotate(0) translate(0, 0)',
          transition: 'all 0.75s ease',
        }}
      />
      <Box
        component='span'
        sx={{
          height: '0.125rem',
          width: '1.5rem',
          backgroundColor: props.opened ? '#121212' : '#ffffff',
          transform: props.opened ? 'translateX(-50%)' : 'translateX(0)',
          opacity: props.opened ? 0 : 1,
          transition: 'all 0.4s ease',
        }}
      />
      <Box
        component='span'
        sx={{
          height: '0.125rem',
          width: '1.5rem',
          backgroundColor: props.opened ? '#121212' : '#ffffff',
          transform: props.opened
            ? 'rotate(-405deg) translate(5px, -5px)'
            : 'rotate(0) translate(0, 0)',
          transition: 'all 0.75s ease',
        }}
      />
    </Box>
  );
}
