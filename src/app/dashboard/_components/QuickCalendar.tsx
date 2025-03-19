"use client";

import { Calendar } from "@/components/ui/upImmigrationCalendar";
import { getAllEvents } from "@/hooks/getAllEvents";
import { EventType } from "@/types/Calendar/EventType";
import { useAuth } from "@clerk/nextjs";

import { format, getYear } from "date-fns";
import React, { useEffect, useState } from "react";

export default function QuickCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [month, setMonth] = useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = useState<string>(
    format(new Date(), "MM")
  );
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );
  const [events, setEvents] = useState<EventType[]>([]);
  const { getToken } = useAuth();

  useEffect(() => {
    const fetchEvents = async () => {
      const token = await getToken();   
      const thisMonthEvents = (await getAllEvents(
        token,
        currentYear,
        currentMonth
      ))
      if (!thisMonthEvents) {
        return <div>Failed to fetch events</div>;
      }
      setEvents(thisMonthEvents);
      
    };
    fetchEvents();
  }, [currentMonth, currentYear, getToken]);

  const handleMonthChange = (selectedMonth: Date) => {
    setMonth(selectedMonth);
    const monthName = format(selectedMonth, "MM");
    const year = getYear(selectedMonth);
    setCurrentYear(year);
    setCurrentMonth(monthName);
  };

  const modifiers = React.useMemo(() => {
    const modifiers: { [key: string]: Date[] } = {};

    events.forEach((event) => {
      const eventDate = new Date(event.start);
      if (!modifiers[event.type]) {
        modifiers[event.type] = [];
      }
      modifiers[event.type].push(eventDate);
    });

    return modifiers;
  }, [events]);

  const modifiersClassNames = {
    // appointment: "border border-secondary-green rounded-3xl",
    task: "border border-primary-red rounded-3xl",
    appointment: "border border-secondary-blue rounded-3xl",
  };

  return (
    <div className="flex w-[340px]  justify-center">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        modifiers={modifiers}
        modifiersClassNames={modifiersClassNames}
        captionLayout="dropdown"
        className=" flex items-center justify-center bg-primary-white py-4 px-8 rounded-bl-[14px] rounded-br-[14px]"
        month={month}
        onMonthChange={handleMonthChange}
      />
    </div>
  );
}
