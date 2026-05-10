import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ExpenceCard = () => {
  return (
    <Card
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
          $5000
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ExpenceCard;
