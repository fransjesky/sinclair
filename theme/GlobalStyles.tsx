import theme from './theme';

const globalStyles = {
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    maxWidth: '100vw',
    backgroundColor: theme.palette.background.default,
  },
};

export default globalStyles;
