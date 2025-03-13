'use client';

import { Calendar } from '@/components/ui/upImmigrationCalendar';
import { QuickCalendarType } from '@/types/Calendar/EventType';
import { format, getYear } from 'date-fns';
import React, { useState } from 'react';

type Props = {
  events: QuickCalendarType[];
};

export default function QuickCalendar({ events }: Props) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [month, setMonth] = useState<Date>(new Date());

  const handleMonthChange = (selectedMonth: Date) => {
    setMonth(selectedMonth);
    const monthName = format(selectedMonth, 'MMMM');
    const year = getYear(selectedMonth);
    console.log(`Month: ${monthName}, Year: ${year}`);
  };

  const modifiers = React.useMemo(() => {
    const modifiers: { [key: string]: Date[] } = {};

    events.forEach((event) => {
      const eventDate = new Date(event.date);
      if (!modifiers[event.events]) {
        modifiers[event.events] = [];
      }
      modifiers[event.events].push(eventDate);
    });

    return modifiers;
  }, [events]);

  const modifiersClassNames = {
    appointment: 'border border-secondary-green rounded-3xl',
    payment: 'border border-primary-red rounded-3xl',
    document: 'border border-secondary-blue rounded-3xl',
  };

  return (
    <div className='flex w-[340px]  justify-center'>
      <Calendar
        mode='single'
        selected={date}
        onSelect={setDate}
        modifiers={modifiers}
        modifiersClassNames={modifiersClassNames}
        captionLayout='dropdown'
        className=' flex items-center justify-center bg-primary-white py-4 px-8 rounded-bl-[14px] rounded-br-[14px]'
        month={month}
        onMonthChange={handleMonthChange}
      />
    </div>
  );
}
