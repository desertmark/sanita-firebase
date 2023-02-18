import { Box, useTheme } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { Header } from './Header';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const {
    palette: { background },
  } = useTheme();
  return (
    <Box
      className="layout"
      style={{ height: '100vh', background: background.default }}
      display="flex"
      flexDirection="column"
    >
      <Header />
      <main
        style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}
        className="main"
      >
        {children}
      </main>
    </Box>
  );
};
