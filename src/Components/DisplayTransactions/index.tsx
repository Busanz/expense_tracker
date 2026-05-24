import type { TransactionType } from '../../utilis/types';
import { Box, Chip, Paper, Stack, Typography } from '@mui/material';

type DisplayTransactionProps = {
  transactions: TransactionType[];
};

const DisplayTransactions = ({ transactions }: DisplayTransactionProps) => {
  return (
    <Stack sx={{ pb: 2, mt: 3, borderRadius: 2, backgroundColor: '#908afa20' }}>
      <Typography
        variant="h5"
        sx={{
          justifyContent: 'flex-start',
          p: 2,
        }}
      >
        Transaction history
      </Typography>
      {transactions.map((item, index) => (
        <Box key={index} sx={{ pl: 2, pb: 1, pr: 2 }}>
          <Paper sx={{ p: 1, boxShadow: 0, backgroundColor: '#c9e8fb' }}>
            <Stack
              direction="row"
              sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Stack
                spacing={0.5}
                direction={{ xs: 'column', sm: 'row' }}
                sx={{
                  justifyContent: { xs: 'flex-start', sm: 'space-between' },
                  alignItems: { xs: 'start', sm: 'center' },
                  flexGrow: 1,
                  maxWidth: '50%',
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    justifyContent: 'flex-start',
                  }}
                >
                  {item.description}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {item.createdDate} • {item.createdTime}
                </Typography>
              </Stack>
              <Stack
                spacing={1}
                direction={{ xs: 'column', sm: 'row' }}
                sx={{
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}
              >
                <Typography
                  variant="button"
                  sx={{
                    color:
                      item.typeOfTransaction === 'income'
                        ? '#00823d'
                        : '#dc0037',
                  }}
                >
                  {item.typeOfTransaction === 'income' ? '+' : ''}
                  {item.amount} SEK
                </Typography>
                <Chip
                  label={item.category}
                  sx={{
                    px: 4,
                    py: 2,
                    display: 'box',
                    minWidth: 150,
                    backgroundColor: '#fff',
                  }}
                  size="small"
                />
              </Stack>
            </Stack>
          </Paper>
        </Box>
      ))}
    </Stack>
  );
};

export default DisplayTransactions;
