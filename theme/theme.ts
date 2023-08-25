import { createTheme } from '@mui/material/styles';
import palette from './Palette';
import { typography } from './Typography';

const theme = createTheme({
  palette: palette,
  typography: typography,
});

export default theme;
