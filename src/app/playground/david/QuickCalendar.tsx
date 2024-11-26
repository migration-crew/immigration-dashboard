import { Calendar } from "@/components/ui/calendar";
import React from "react";

/* type Props = {
  events: QuickCalendarType[];
}; */

export default function QuickCalendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="flex w-[340px]  justify-center">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        captionLayout="dropdown"
        className=" flex items-center justify-center bg-primary-white py-4 px-8 rounded-bl-[14px] rounded-br-[14px]"
      />
    </div>
  );
}
