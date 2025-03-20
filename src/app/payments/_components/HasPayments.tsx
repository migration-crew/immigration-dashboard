'use client';

import ColorCodeChart from '@/app/calendar/_components/ColorCodeChart';
import { Caption } from '@/components/common/text/Caption';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/upImmigrationChart';
import { HasPaymentsType } from '@/types/Payment/HasPaymentsType';
import { CheckCircle } from 'lucide-react';

import { Label, Pie, PieChart } from 'recharts';

const HasPayments = ({
  paymentData,
  chartConfig,
  paidPercentage,
  paidAmount,
  totalAmount,
}: HasPaymentsType) => (
  <Card className='grid grid-cols-2 place-items-center border-none shadow-none h-full w-full gap-6'>
    <CardContent className='w-full'>
      <ChartContainer
        config={chartConfig}
        className='mx-auto aspect-square max-h-[250px]'
      >
        <PieChart width={250} height={250}>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={paymentData}
            dataKey='amount'
            nameKey='status'
            innerRadius={70}
            outerRadius={80}
            strokeWidth={5}
            startAngle={90}
            endAngle={-270}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor='middle'
                      dominantBaseline='middle'
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className='fill-foreground text-3xl font-bold'
                      >
                        {paidPercentage}%
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className='fill-muted-foreground'
                      >
                        Paid
                      </tspan>
                    </text>
                  );
                }
                return null;
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
    </CardContent>
    <div className='flex flex-col justify-center items-center gap-4 h-full'>
      <ColorCodeChart
        colorCodes={[
          {
            colorClass: 'bg-secondary-green',
            description: 'Paid',
          },
          {
            colorClass: 'bg-secondary-gray',
            description: 'Pending',
          },
        ]}
      />
      <CardFooter>
        <Caption className='flex items-center gap-1'>
          ${paidAmount.toLocaleString()} paid of ${totalAmount.toLocaleString()}{' '}
          <CheckCircle className='h-4 w-4 text-secondary-green' />
        </Caption>
      </CardFooter>
    </div>
  </Card>
);

export default HasPayments;
