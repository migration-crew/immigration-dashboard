'use client';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import { events2 } from './events';
import { useState } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './index.css';

const localizer = momentLocalizer(moment); // or globalizeLocalizer

const components = {
  event: (props: {
    event: {
      id?: number;
      title: string;
      start: Date;
      end: Date;
      type: string;
      desc?: string;
    };
  }) => {
    const eventType = props.event.type;
    switch (eventType) {
      case 'appointment':
        return (
          <div className="bg-blue-100 opacity-95 p-1 flex flex-wrap flex-col items-end justify-end h-full">
            <p className="text-blue-800 text-sm">{props.event.title}</p>
            <p className="text-black text-sm">{props.event.desc}</p>
          </div>
        );
      case 'record':
        return (
          <div className="bg-green-200 p-1 flex flex-wrap  flex-col items-end justify-end h-full">
            <p className="text-green-800 text-sm">{props.event.title}</p>
            <p className="text-black text-sm">{props.event.desc}</p>
          </div>
        );
      case 'document':
        return (
          <div className="bg-red-200 opacity-95 p-1 flex flex-wrap flex-col items-end justify-end h-full">
            <p className="text-red-800 text-sm">{props.event.title} </p>
            <p className="text-black text-sm">{props.event.desc}</p>
          </div>
        );
    }
  },
};

export function DetailedCalendar() {
  const [view, setView] = useState<
    'month' | 'week' | 'work_week' | 'day' | 'agenda'
  >(Views.MONTH);
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
        components={components}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
}
