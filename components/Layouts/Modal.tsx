import { Modal as MuiModal, ModalProps as MuiModalProps } from '@mui/material';

export interface ModalProps extends MuiModalProps {
  onClick: () => void;
}

export default function Modal(props: ModalProps) {
  const { children } = props;
  return <MuiModal {...props}>{children}</MuiModal>;
}
