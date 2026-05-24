import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TotalExpenceCard from '../TotalExpenceCard';
import TabWapper from '../TabWapper';
import Navbar from '../Navbar';
import DisplayTransactions from '../DisplayTransactions';
import { useEffect, useRef, useState } from 'react';
import type { TransactionType } from '../../utilis/types';
import { getAllTransaction } from '../../utilis/functions';
import TotalPaidDashboard from '../TotalPaidDashboard';

const Home = () => {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  const isLoadingRef = useRef(false);

  const handleTransactionAdded = () => {
    if (isLoadingRef.current) return;
    isLoadingRef.current = true;
    setTransactions(getAllTransaction());
    isLoadingRef.current = false;
  };

  useEffect(() => {
    handleTransactionAdded();
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
          <TotalExpenceCard totalExpenceCardTransactions={transactions} />
          <TotalPaidDashboard totalPaidDashboardTransactions={transactions} />
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
