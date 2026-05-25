import { PieChart } from '@mui/x-charts/PieChart';
import { Box, Typography } from '@mui/material';
import { valueFormatter } from '../../utilis/functions';
import type { TransactionType } from '../../utilis/types';

type ExpenceGraphProps = {
  expenceGraphTransactions: TransactionType[];
};

type DataOnGraphType = {
  label: string;
  value: number;
};
const ExpenceGraph = ({ expenceGraphTransactions }: ExpenceGraphProps) => {
  const paidTransactions = expenceGraphTransactions
    .filter((trans) => trans.amount < 0)
    .reduce((total, current) => total + current.amount, 0);

  const getTotalSpentByCategory = (expenceCategory: string): number => {
    const total: number = expenceGraphTransactions
      .filter(
        (item: TransactionType) =>
          item.category === expenceCategory && item.amount < 0,
      )
      .reduce(
        (total: number, current: TransactionType) => total + current.amount,
        0,
      );
    const percentage: number =
      (Math.abs(total) / Math.abs(paidTransactions)) * 100;

    return Number(percentage.toFixed(2));
  };

  const paid: string[] = [
    'Food',
    'Transport',
    'Entertainment',
    'Health',
    'Utilities',
  ];

  const expencesPerCategory: DataOnGraphType[] = paid.map((category) => ({
    label: category,
    value: getTotalSpentByCategory(category),
  }));
  console.log(expencesPerCategory);
  return (
    <Box
      sx={{
        width: { sx: '100%', sm: '75%', md: '49.4%' },
        backgroundColor: '#908afa20',
        p: 2,
        borderRadius: 1,
      }}
    >
      <Typography
        sx={{ color: '#9e9e9e', fontSize: 14, textTransform: 'uppercase' }}
      >
        Category Breakdown
      </Typography>
      <Box
        sx={{
          display: 'flex',
          width: { sm: '100%', md: '80%' },
          height: 200,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <PieChart
          series={[
            {
              data: expencesPerCategory,
              highlightScope: { fade: 'global', highlight: 'item' },
              faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
              valueFormatter,
            },
          ]}
          height={200}
          slotProps={{
            legend: {
              sx: {
                fontSize: { sx: 12, md: 16 },
                color: '#9e9e9e',
                fontWeight: 300,
              },
            },
          }}
          colors={['#f59163', '#63daf5', '#d8f563', '#6563f5', '#e263f5']}
        />
      </Box>
    </Box>
  );
};

export default ExpenceGraph;
