import {
  Box,
  Modal as MuiModal,
  ModalProps as MuiModalProps,
  Typography,
} from '@mui/material';

export interface ModalProps extends MuiModalProps {
  title: string;
}

export default function Modal(props: ModalProps) {
  const { title, onClose } = props;

  return (
    <MuiModal onClose={onClose} {...props}>
      <Box
        component='div'
        sx={{
          position: 'absolute' as 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: {
            xs: '90vw',
            sm: '60vw',
            md: '50vw',
            lg: '40vw',
            xl: '30vw',
          },
          borderRadius: '0.5rem',
          color: '#ffffff',
          outline: 'none',
          borderBottom: `0.25rem solid #2196f3`,
          boxShadow: `0 0 1.5rem 0 #2196f3`,
        }}
      >
        <Box
          component='div'
          sx={{
            width: '100%',
            height: '5rem',
            backgroundColor: '#2196f3',
            borderTopLeftRadius: '0.5rem',
            borderTopRightRadius: '0.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              fontSize: '1.5rem',
              fontWeight: '700',
              textTransform: 'capitalize',
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box
          component='div'
          sx={{
            p: 4,
            width: '100%',
            maxHeight: '75vh',
            overflowY: 'scroll',
            borderBottomLeftRadius: '0.5rem',
            borderBottomRightRadius: '0.5rem',
            backgroundColor: '#121212',
          }}
        >
          {props.children}
        </Box>
      </Box>
    </MuiModal>
  );
}
