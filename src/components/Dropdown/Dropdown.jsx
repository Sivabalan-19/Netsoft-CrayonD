import * as React from 'react';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

export default function SelectIndicator() {
  return (
<Select
  placeholder="Ammunities"
  indicator={<KeyboardArrowDown />}
  sx={{
    width: '100%',
    backgroundColor: '#E4E8EE',
    border: 'none', // Remove border
    outline: 'none', // Remove outline
    '&:before, &:after': {
      border: 'none', // Remove border before and after
    },
    '&:focus': {
      border: 'none', // Ensure no border on focus
      outline: 'none', // Ensure no outline on focus
    },
    '&:active': {
      border: 'none', // Ensure no border on focus
      outline: 'none', // Ensure no outline on focus
    },
    [`& .${selectClasses.indicator}`]: {
      transition: '0.2s',
      [`&.${selectClasses.expanded}`]: {
        transform: 'rotate(-180deg)',
      },
    },
  }}
>
      <Option value="fish">Casagrand</Option>
      <Option value="dog">Mahindra</Option>
      <Option value="cat">Appaswamy</Option>
      <Option value="bird">Urban</Option>
    </Select>
  );
}
