import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import type { TransactionType } from '../../utilis/types';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { Box } from '@mui/material';

type TotalExpenceCardProps = {
  totalExpenceCardTransactions: TransactionType[];
};

const TotalExpenceCard = ({
  totalExpenceCardTransactions,
}: TotalExpenceCardProps) => {
  const totalBalance: number = totalExpenceCardTransactions.reduce(
    (total: number, transaction: TransactionType) => total + transaction.amount,
    0,
  );

  const paidTransactions: TransactionType[] =
    totalExpenceCardTransactions.filter((trans) => trans.amount < 0);

  const totalPaid: number = paidTransactions.reduce(
    (total: number, transaction: TransactionType) => total + transaction.amount,
    0,
  );

  const incomeTransactions: TransactionType[] =
    totalExpenceCardTransactions.filter((trans) => trans.amount > 0);

  const totalIncome: number = incomeTransactions.reduce(
    (total: number, transaction: TransactionType) => total + transaction.amount,
    0,
  );
  const options: Intl.NumberFormat = new Intl.NumberFormat('sv-SE', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });
  return (
    <Card
      elevation={0}
      sx={{
        width: '100%',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      <CardContent>
        <Typography gutterBottom sx={{ color: 'white', fontSize: 14 }}>
          TOTAL BALANCE
        </Typography>
        <Typography variant="h4" component="div" sx={{ color: 'white' }}>
          {options.format(totalBalance)} SEK
        </Typography>
      </CardContent>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          px: 2,
          py: 4,
          color: '#fff',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
          }}
        >
          <Box
            sx={{
              width: 34,
              height: 34,
              borderRadius: '50%',
              background: '#ffffff2e',

              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TrendingUpIcon sx={{ fontSize: 18 }} />
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: 12,
                opacity: 0.7,
              }}
            >
              Income
            </Typography>

            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              {options.format(totalIncome)} SEK
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
          }}
        >
          <Box
            sx={{
              width: 34,
              height: 34,
              borderRadius: '50%',
              background: '#ffffff2e',

              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TrendingDownIcon sx={{ fontSize: 18 }} />
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: 12,
                opacity: 0.7,
              }}
            >
              Expences
            </Typography>

            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              {options.format(Math.abs(totalPaid))} SEK
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default TotalExpenceCard;
