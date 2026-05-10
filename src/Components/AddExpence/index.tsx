import {
  Box,
  TextField,
  Button,
  Typography,
  Autocomplete,
} from '@mui/material';
import { useState } from 'react';

const options = ['Food', 'Transport', 'Entertainment', 'Health', 'Utilities'];

const AddIncomeForm = () => {
  const [value, setValue] = useState<string | null>(options[0]);
  const [inputValue, setInputValue] = useState('');

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        background: '#a9002a1c',
        gap: 2,
        p: 2,
        width: { xs: '100%', md: '50%' },
        borderRadius: 1,
      }}
    >
      <Typography sx={{ color: '#667eea', fontSize: 14 }}>
        ADD QUICK EXPENCE
      </Typography>
      <TextField label="Description" required size="small" />
      <TextField label="Amount" type="number" required size="small" />
      <Box sx={{ display: 'flex' }}>
        <Autocomplete
          value={value}
          onChange={(_, newValue: string | null) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(_, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={options}
          sx={{ width: 300, pr: 2 }}
          renderInput={(params) => (
            <TextField {...params} label="Expence type" />
          )}
        />
        <Button
          variant="contained"
          sx={{
            background: 'linear-gradient(135deg, #667eea 0%, #a9002a 100%)',
            px: 5,
          }}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default AddIncomeForm;
