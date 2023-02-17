import { ThemeProvider } from '@mui/material';
import { spotifyTheme } from '@config/theme';
import { FC, PropsWithChildren } from 'react';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={spotifyTheme}>{children}</ThemeProvider>;
};
