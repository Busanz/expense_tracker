import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ExpenceCard from '../ExpenceCard';
import AddExpenseForm from '../AddExpence';
import AddIncomeForm from '../AddIncome';

const Expences = () => {
  return (
    <>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          // backgroundColor: '#cbfaf8',
          pb: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            width: '100%',
            py: 3,
            gap: 2,
          }}
        >
          <ExpenceCard />
          <ExpenceCard />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            width: '100%',
            py: 3,
            gap: 2,
          }}
        >
          <AddExpenseForm />
          <AddIncomeForm />
        </Box>
      </Container>
    </>
  );
};

export default Expences;
