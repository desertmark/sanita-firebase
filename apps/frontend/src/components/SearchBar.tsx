import {
  Button,
  ButtonGroup,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { Box } from '@mui/system';

import { FC, useState } from 'react';
import { Text } from './Text';

export interface SearchBarProps {
  onSearch: (searchParams: {
    criterias: Set<string>;
    searchTerm: string;
  }) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const [criterias, setCriterias] = useState<Set<string>>(new Set(['code']));

  const handleChange = (key: string) => {
    criterias.has(key) ? criterias.delete(key) : criterias.add(key);
    setCriterias(new Set(criterias));
  };
  const disabled = criterias.size === 0;
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <TextField
        label={`Buscar por...`}
        variant="outlined"
        fullWidth={true}
        disabled={disabled}
        onChange={(e) => onSearch?.({ criterias, searchTerm: e.target.value })}
      />
      <ToggleButtonGroup
        size="small"
        value={Array.from(criterias)}
        color="primary"
      >
        <ToggleButton value="code" onClick={() => handleChange('code')}>
          Codigo
        </ToggleButton>
        <ToggleButton
          value="description"
          onClick={() => handleChange('description')}
        >
          Descripcion
        </ToggleButton>
      </ToggleButtonGroup>

      {disabled && (
        <Text variant="caption" color="error">
          Debe seleccionar al menos un criterio de busqueda
        </Text>
      )}
    </Box>
  );
};
