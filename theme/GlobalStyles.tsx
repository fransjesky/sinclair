import theme from './theme';

const globalStyles = {
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    maxWidth: '100vw',
    backgroundColor: theme.palette.background.paper,
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
};

export default globalStyles;
