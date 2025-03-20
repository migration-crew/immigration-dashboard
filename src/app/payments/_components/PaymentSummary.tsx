'use client';

import { DynamicRoundedContainer } from '@/components/common/DynamicRoundedContainer';
import { type ChartConfig } from '@/components/ui/upImmigrationChart';
import { PaymentType } from '@/types/Payment/PaymentType';
import * as React from 'react';
import HasPayments from './HasPayments';
import NoPayments from './NoPayments';

type Props = {
  payments: PaymentType[];
};

const chartConfig = {
  amount: {
    label: 'Amount',
  },
  paid: {
    label: 'Paid',
    color: 'rgba(var(--green), 1)',
  },
  pending: {
    label: 'Pending',
    color: 'rgba(var(--gray), 1)',
  },
} satisfies ChartConfig;

export function PaymentSummary({ payments }: Props) {
  const totalAmount = React.useMemo(() => {
    return payments.reduce((acc, curr) => acc + curr.amount, 0);
  }, [payments]);

  const paidAmount = React.useMemo(() => {
    return payments
      .filter((payment) => payment.status === 'paid')
      .reduce((acc, curr) => acc + curr.amount, 0);
  }, [payments]);

  const paidPercentage = React.useMemo(() => {
    return totalAmount > 0 ? Math.round((paidAmount / totalAmount) * 100) : 0;
  }, [paidAmount, totalAmount]);

  const pendingAmount = totalAmount - paidAmount;

  const paymentData = React.useMemo(() => {
    return [
      { status: 'paid', amount: paidAmount, fill: 'var(--color-paid)' },
      {
        status: 'pending',
        amount: pendingAmount,
        fill: 'var(--color-pending)',
      },
    ];
  }, [paidAmount, pendingAmount]);

  const hasPayments = payments.length > 0;

  return (
    <DynamicRoundedContainer
      title='Payment Summary'
      className='flex flex-col gap-6 flex-1'
      childrenDivClassName='flex items-center justify-center gap-6 h-full w-full'
    >
      {hasPayments ? (
        <HasPayments
          paymentData={paymentData}
          chartConfig={chartConfig}
          paidPercentage={paidPercentage}
          paidAmount={paidAmount}
          totalAmount={totalAmount}
        />
      ) : (
        <NoPayments />
      )}
    </DynamicRoundedContainer>
  );
}
