import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ExpenceCard from '../ExpenceCard';
import TabWapper from '../TabWapper';
import Navbar from '../Navbar';
import DisplayTransactions from '../DisplayTransactions';
import { useEffect, useRef, useState } from 'react';
import type { TransactionType } from '../../utilis/types';
import { getAllTransaction } from '../../utilis/functions';

const Home = () => {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  const isLoadingRef = useRef(false);

  const loadTransactions = () => {
    if (isLoadingRef.current) return;

    isLoadingRef.current = true;
    setTransactions(getAllTransaction());
    isLoadingRef.current = false;
  };

  const handleTransactionAdded = () => {
    setTransactions(getAllTransaction());
  };

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          pb: 3,
        }}
      >
        <Navbar />
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
            gap: 2,
          }}
        >
          <TabWapper onNewTransactionTab={handleTransactionAdded} />
        </Box>
        <DisplayTransactions transactions={transactions} />
      </Container>
    </>
  );
};

export default Home;
