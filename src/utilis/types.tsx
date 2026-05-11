export type TransactionType = {
  description: string;
  amount: number;
  category: string;
  typeOfTransaction: 'paid' | 'income';
  createdDate: string;
  createdTime: string;
};
