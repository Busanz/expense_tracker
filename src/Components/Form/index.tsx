import { useState } from 'react';
import type { TransactionType } from '../../utilis/types';
import { Box, TextField, Button, Autocomplete, Alert } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { getAllTransaction } from '../../utilis/functions';

type FormProps = {
  typeOfForm: 'paid' | 'income';
  onNewTransactionForm: () => void;
};

const paid: string[] = [
  'Food',
  'Transport',
  'Entertainment',
  'Health',
  'Utilities',
];
const income: string[] = [
  'Salary',
  'Freelance',
  'Tax return',
  'Jackpot',
  'Selling',
];

const Form = ({ typeOfForm, onNewTransactionForm }: FormProps) => {
  const defaultTransactionType: string =
    typeOfForm === 'paid' ? paid[0] : income[0];
  const [valueAutocomplete, setValueAutocomplete] = useState<string | null>(
    defaultTransactionType,
  );
  const [inputValue, setInputValue] = useState<string>('');
  const [inputDes, setInputDes] = useState<string | null>(null);
  const [inputAmount, setInputAmount] = useState<number | null>(null);

  const [isSuccessed, setIsSuccessed] = useState<boolean>(false);

  const handleClickAdd = () => {
    const dateTimeNow = new Date();
    if (inputDes === null || inputAmount === null) return;

    const allTransactions: TransactionType[] = getAllTransaction();

    const newTransaction: TransactionType = {
      description: inputDes!,
      amount: inputAmount!,
      category: inputValue,
      typeOfTransaction: typeOfForm,
      createdDate: new Intl.DateTimeFormat('sv-SE').format(dateTimeNow),
      createdTime: new Intl.DateTimeFormat('sv-SE', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).format(dateTimeNow),
    };

    allTransactions.unshift(newTransaction);

    localStorage.setItem('transaction', JSON.stringify(allTransactions));
    setIsSuccessed(true);
    setTimeout(() => {
      setIsSuccessed(false);
    }, 2000);

    onNewTransactionForm();
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        background: ` ${typeOfForm === 'paid' ? '#a9002a1c' : '#8bfcc03a'}`,
        gap: 2,
        p: 2,
        width: '100%',
        borderRadius: 1,
      }}
    >
      <TextField
        label="Description"
        required
        size="small"
        onChange={(e) => setInputDes(e.target.value)}
      />
      <TextField
        label="Amount"
        type="number"
        required
        size="small"
        onChange={(e) => {
          const inputAmount = Number(e.target.value);
          setInputAmount(typeOfForm === 'paid' ? -inputAmount : inputAmount);
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'stretch',
          gap: 2,
        }}
      >
        <Autocomplete
          value={valueAutocomplete}
          onChange={(_, newValue: string | null) => {
            setValueAutocomplete(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(_, newInputValue: string) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={typeOfForm === 'income' ? income : paid}
          size="small"
          sx={{
            flexGrow: 1,
            width: { xs: '100%', sm: 'auto' },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={typeOfForm === 'income' ? 'Income type' : 'Expence type'}
            />
          )}
        />
        <Button
          variant="contained"
          size="medium"
          sx={{
            background: 'linear-gradient(135deg, #667eea 0%, #7c5ad8 100%)',
            px: 5,
            boxShadow: 'none',
            width: { xs: '100%', sm: 'auto' },
            minHeight: 40,
            maxWidth: { xs: 'none', sm: 180 },

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            '&:hover': {
              background: 'linear-gradient(135deg, #7c5ad8 0%, #069e88 100%)',
              boxShadow: 'none',
            },
          }}
          onClick={() => {
            handleClickAdd();
          }}
        >
          Add
        </Button>
      </Box>
      {isSuccessed && (
        <Alert
          icon={<CheckIcon fontSize="inherit" />}
          severity="success"
          sx={{ position: 'absolute' }}
        >
          Transaction was added successfuly.
        </Alert>
      )}
    </Box>
  );
};

export default Form;

// To validate form
// Need to validate input range for amount
// Need to clear entered value once press Add button
