import type { TransactionType } from './types';

export const getAllTransaction = (): TransactionType[] => {
  const allTransactions: TransactionType[] = JSON.parse(
    localStorage.getItem('transaction') || '[]',
  );

  return allTransactions;
};

export const valueFormatter = (item: { value: number }) => `${item.value}%`;
