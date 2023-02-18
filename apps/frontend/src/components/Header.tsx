import { AppBar, Button, Toolbar } from '@mui/material';
import { Text } from './Text';

export function Header() {
  return (
    <AppBar position="static" className="Header">
      <Toolbar>
        <Text variant="h6">SANITA</Text>
        <Button color="inherit">Inicio</Button>
      </Toolbar>
    </AppBar>
  );
}
