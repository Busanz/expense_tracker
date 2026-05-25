import {
  Box,
  Card,
  CardContent,
  LinearProgress,
  Typography,
} from '@mui/material';
import type { TransactionType } from '../../utilis/types';

type TotalPaidDashboardProps = {
  totalPaidDashboardTransactions: TransactionType[];
};
const TotalPaidDashboard = ({
  totalPaidDashboardTransactions,
}: TotalPaidDashboardProps) => {
  const MONTHY_LIMITE: number = 8000;
  const paidTransactions = totalPaidDashboardTransactions.filter(
    (trans) => trans.amount < 0,
  );
  const totalPaid = paidTransactions.reduce(
    (total: number, transaction: TransactionType) => total + transaction.amount,
    0,
  );

  const options: Intl.NumberFormat = new Intl.NumberFormat('sv-SE', {
    style: 'decimal',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });

  const percent: number = Math.min(
    (Math.abs(totalPaid) / MONTHY_LIMITE) * 100,
    100,
  );

  return (
    <Card
      elevation={0}
      sx={{
        width: '100%',
        background: '#908afa20',
      }}
    >
      <CardContent sx={{ pb: 0 }}>
        <Typography
          sx={{ color: '#9e9e9e', fontSize: 14, textTransform: 'uppercase' }}
        >
          Monthly Budget
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{ color: '#232323', mb: 0, pb: 0 }}
        >
          {options.format(Math.abs(totalPaid))}

          <Typography component="span" sx={{ color: '#9e9e9e' }}>
            {' /'}
            {MONTHY_LIMITE} SEK
          </Typography>
        </Typography>
      </CardContent>
      <Box>
        <Box
          sx={{
            display: 'flex',
            width: '83%',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            component="div"
            sx={{
              color: '#636363',
              pl: 2,
              py: 1,
              fontWeight: 200,
              fontSize: 14,
            }}
          >
            Spent
          </Typography>
          <Typography
            component="div"
            sx={{
              color: '#764ba2',
              pl: 2,
              py: 1,
              fontWeight: 200,
              fontSize: 14,
            }}
          >
            {percent.toFixed(2)}%
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={percent}
          sx={{
            mx: 2,
            width: '80%',
            height: 8,
            borderRadius: 5,
            backgroundColor: '#c8c8c8',
            '& .MuiLinearProgress-bar': {
              background:
                percent > 80
                  ? 'red'
                  : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: 5,
            },
          }}
        />
        <Typography
          component="div"
          sx={{
            color: '#636363',
            pl: 2,
            py: 2,
            fontWeight: 200,
            fontSize: 14,
          }}
        >
          {(MONTHY_LIMITE - Math.abs(totalPaid)).toFixed(2)} SEK remaining
        </Typography>
      </Box>
    </Card>
  );
};

export default TotalPaidDashboard;
