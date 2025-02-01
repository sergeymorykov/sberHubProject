import * as React from 'react';
import { useState } from 'react';
import { useGetInterestsQuery } from '../../../../service/api';
import { InterestsProps } from './types';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Grid2 from '@mui/material/Grid2';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const Interests = ({ id, name, defaultValues = [] }: InterestsProps): React.ReactElement => {
  const { data, isLoading, error } = useGetInterestsQuery(undefined);

  const [selectedInterests, setSelectedInterests] = useState<string | string[]>(defaultValues);
  const handleChange = (event: SelectChangeEvent<typeof selectedInterests>) => {
    setSelectedInterests(event.target.value);
  };

  return (
    <>
      {isLoading && <Grid2 sx={{ color: 'var(--tg-theme-text-color)' }}>Loading...</Grid2>}
      {error && <Grid2 sx={{ color: 'var(--tg-theme-text-color)' }}>Произошла ошибка</Grid2>}
      {data && (
        <FormControl fullWidth>
          <InputLabel id="chip-label">Интересы</InputLabel>
          <Select
            labelId="сhip-label"
            id={id}
            name={name}
            multiple
            fullWidth
            value={selectedInterests}
            onChange={handleChange}
            input={<Input />}
            renderValue={(selected) => {
              if (typeof selected === 'string') {
                return <Chip key={selected} label={selected} />;
              } else {
                return (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((interest) => (
                      <Chip key={interest} label={interest} />
                    ))}
                  </Box>
                );
              }
            }}
            MenuProps={MenuProps}
          >
            {data.map((interest) => (
              <MenuItem key={interest} value={interest}>
                {interest}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </>
  );
};

export default Interests;
