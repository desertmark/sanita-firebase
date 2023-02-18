import {
  Button,
  ButtonGroup,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { Box } from '@mui/system';

import { FC, useCallback, useState } from 'react';
import { Text } from './Text';

export interface SearchBarProps {
  onSearch: (searchParams: { criterias: string[]; searchTerm: string }) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  // const [criterias, setCriterias] = useState<string[]>(['code']);
  const [criteria, setCriteria] = useState<string>('code');

  // const handleChange = useCallback((key: string) => {
  //   setCriterias((criterias) => {
  //     return criterias.includes(key)
  //       ? [...criterias.filter((c) => c !== key)]
  //       : [...criterias, key];
  //   });
  // }, []);

  const handleChange = (key: string) => {
    setCriteria(key);
  };

  // const disabled = criterias.length === 0;
  console.log(criteria);
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <TextField
        label={`Buscar por...`}
        variant="outlined"
        fullWidth={true}
        // disabled={disabled}
        onChange={(e) =>
          onSearch?.({ criterias: [criteria], searchTerm: e.target.value })
        }
      />
      <ToggleButtonGroup size="small" value={criteria} color="primary">
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

      {/* {disabled && (
        <Text variant="caption" color="error">
          Debe seleccionar al menos un criterio de busqueda
        </Text>
      )} */}
    </Box>
  );
};
