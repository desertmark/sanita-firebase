import { ThemeProvider } from '@mui/material';
import { spotifyTheme } from '@config/theme';
import { FC, PropsWithChildren } from 'react';
import { ProductsProvider } from './ProductsProvider';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={spotifyTheme}>
      <ProductsProvider>{children}</ProductsProvider>
    </ThemeProvider>
  );
};
