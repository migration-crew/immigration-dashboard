'use client';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer, CalendarProps } from 'react-big-calendar';
import moment from 'moment';
import { DynamicRoundedContainer } from '@/components/common/DynamicRoundedContainer';
import { events2 } from '../events';

// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment); // or globalizeLocalizer

// const now = new Date() (why is this here??)

export const DetailedCalendar = (props: Omit<CalendarProps, 'localizer'>) => (
  <>
    <DynamicRoundedContainer
      title=""
      className="w-[900px] h-[850px]"
      childrenDivClassName="w-full h-full"
    >
      <Calendar
        {...props}
        localizer={localizer}
        events={events2}
        startAccessor="start"
        endAccessor="end"
        views={['month', 'week', 'day']}
        eventPropGetter={({ resource }) => {
          switch (resource) {
            case 'record':
              return {};
            case 'appointment':
              return { style: { backgroundColor: '#0C9986' } };
            case 'document':
              return { style: { backgroundColor: '#AD2320' } };
          }
          return {};
        }}
      />
    </DynamicRoundedContainer>
  </>
);
