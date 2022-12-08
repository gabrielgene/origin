import { extendTheme } from '@chakra-ui/react';

export const colors = {
  brandPrimary: '#1B31A8',
  brandSecondary: '#0079FF',
  blueGray: {
    10: '#F4F8FA',
    50: '#E9EEF2',
    900: '#1E2A32',
    400: '#708797',
  },
};

const theme = extendTheme({
  fonts: {
    heading: `'Work Sans', sans-serif`,
    body: `'Work Sans', sans-serif`,
  },
  colors,
  styles: {
    global: () => ({
      body: {
        bg: '#F4F8FA',
      },
    }),
  },
});

export default theme;
