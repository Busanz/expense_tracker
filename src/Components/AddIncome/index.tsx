import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Autocomplete,
} from '@mui/material';

const options = ['Salary', 'Freelance', 'Tax return', 'Jackpot'];

const AddIncomeForm = () => {
  const [value, setValue] = useState<string | null>(options[0]);
  const [inputValue, setInputValue] = useState('');

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        background: '#08b69c1c ',
        gap: 2,
        p: 2,
        width: { xs: '100%', md: '50%' },
        borderRadius: 1,
      }}
    >
      <Typography sx={{ color: '#667eea', fontSize: 14 }}>
        ADD QUICK INCOME
      </Typography>
      <TextField label="Description" required size="small" />
      <TextField label="Amount" type="number" required size="small" />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row', md: 'row' },
          alignItems: { xs: 'center' },
          justifyItems: { xs: 'none', sm: 'end' },
          backgroundColor: '#000',
        }}
      >
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
          size="small"
          sx={{
            width: { xs: '100%', sm: 'none' },
            pr: { xs: 0, sm: 2 },
          }}
          renderInput={(params) => (
            <TextField {...params} label="Income type" />
          )}
        />
        <Button
          variant="contained"
          size="medium"
          sx={{
            background: 'linear-gradient(135deg, #667eea 0%, #08b69c 100%)',
            px: 5,
            // mt: { xs: 2, sm: 0 },
            boxShadow: 'none',
            height: '100%',
            width: { xs: '100%' },
            maxWidth: { xs: 'none', sm: 180 },
          }}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default AddIncomeForm;
