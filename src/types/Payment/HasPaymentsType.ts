import { ChartConfig } from '@/components/ui/upImmigrationChart';

export type HasPaymentsType = {
  paymentData: { status: string; amount: number; fill: string }[];
  chartConfig: ChartConfig;
  paidPercentage: number;
  paidAmount: number;
  totalAmount: number;
};
