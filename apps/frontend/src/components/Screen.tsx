import { Paper, useTheme } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

export const Screen: FC<PropsWithChildren> = ({ children }) => {
  const spacing = useTheme().spacing;
  return (
    <Paper
      className="screen"
      style={{
        flex: '1 1 auto',
        display: 'flex',
        flexDirection: 'column',
        padding: spacing(2),
        gap: spacing(6),
      }}
    >
      {children}
    </Paper>
  );
};
