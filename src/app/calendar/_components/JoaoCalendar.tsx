'use client';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import { events2 } from '../events';
import { useState } from 'react';

const localizer = momentLocalizer(moment); // or globalizeLocalizer

export function MyCalendar() {
  const [view, setView] = useState<
    'month' | 'week' | 'work_week' | 'day' | 'agenda'
  >(Views.WEEK);
  const [date, setDate] = useState(new Date());

  return (
    <div className="h-full w-full bg-white p-4 rounded-lg shadow-lg">
      <Calendar
        localizer={localizer}
        events={events2}
        views={[Views.MONTH, Views.WEEK, Views.DAY]}
        view={view}
        date={date}
        onView={(view) => setView(view)}
        onNavigate={(date) => {
          setDate(new Date(date));
        }}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
}
