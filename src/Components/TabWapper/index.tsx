import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Form from '../Form';

type TabWapperProps = {
  onNewTransactionTab: () => void;
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 1 }}>{children}</Box>}
    </div>
  );
}

const TabWapper = ({ onNewTransactionTab }: TabWapperProps) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: { sx: '100%', sm: '75%', md: '49.4%' },
        backgroundColor: '#908afa20',
        p: 2,
        borderRadius: 1,
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="ADD EXPENCE" />
          <Tab label="ADD INCOME" />
        </Tabs>
      </Box>
      {(['paid', 'income'] as Array<'paid' | 'income'>).map((form, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          <Form typeOfForm={form} onNewTransactionForm={onNewTransactionTab} />
        </CustomTabPanel>
      ))}
    </Box>
  );
};
export default TabWapper;
