import { Box } from '@mui/material';

interface ScrollViewType {
  id: string;
}

export default function ScrollView(props: ScrollViewType) {
  return <Box id={props.id} component='div' sx={{ height: '5rem' }} />;
}
