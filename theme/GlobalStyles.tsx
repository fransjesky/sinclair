import theme from './theme';

const globalStyles = {
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    WebkitUserDrag: 'none',
    KhtmlUserDrag: 'none',
    MozUserDrag: 'none',
    OUserDrag: 'none',
  },
  body: {
    maxWidth: '100vw',
    backgroundColor: theme.palette.background.default,
    overflowX: 'hidden',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
};

export default globalStyles;
