"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type TimeSlot = {
  time: string;
  available: boolean;
};

type DaySchedule = {
  date: Date;
  timeSlots: TimeSlot[];
};

export function AppointmentDatePicker() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentWeekStart, setCurrentWeekStart] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Generate 28 days of schedule starting from today
  const schedule: DaySchedule[] = Array.from({ length: 28 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return {
      date,
      timeSlots: [
        { time: "11:00 AM", available: true },
        { time: "12:00 PM", available: true },
        { time: "12:30 PM", available: true },
        { time: "13:30 PM", available: true },
        { time: "14:30 PM", available: true },
        { time: "15:30 PM", available: true },
        { time: "16:00 PM", available: true },
        { time: "16:30 PM", available: true },
      ],
    };
  });

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
    }).format(date);
  };

  const getDayLabel = (date: Date, index: number) => {
    const weekday = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(date);
    if (index === 0) return `TODAY\n${weekday}`;
    if (index === 1) return `TOMORROW\n${weekday}`;
    return weekday;
  };

  const handleNextWeek = () => {
    setCurrentWeekStart((prev) => Math.min(prev + 7, schedule.length - 7));
  };

  const handlePreviousWeek = () => {
    setCurrentWeekStart((prev) => Math.max(prev - 7, 0));
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  }, [currentWeekStart]);

  const visibleDays = schedule.slice(currentWeekStart, currentWeekStart + 7);

  return (
    <div className="w-full max-w-4xl bg-slate-50 p-6 rounded-lg">
      <div ref={scrollContainerRef} className="overflow-x-hidden">
        <div className="grid grid-cols-7 gap-4">
          {visibleDays.map((day, index) => (
            <div
              key={day.date.toISOString()}
              className="flex flex-col items-center"
            >
              <div className="mb-3 grid">
                <div className="h-9 text-xs font-medium text-primary-red mb-1 text-center whitespace-pre-line px-0 pt-Auto pb-0">
                  {getDayLabel(day.date, currentWeekStart + index)}
                </div>
                <div className="text-sm font-medium mb-2 bottom-0">
                  {formatDate(day.date)}
                </div>
              </div>
              <div className="space-y-2 w-full">
                {day.timeSlots.map((slot) => (
                  <label
                    key={`${day.date.toISOString()}-${slot.time}`}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="appointmentTime"
                      value={`${day.date.toISOString()}-${slot.time}`}
                      checked={
                        selectedDate?.toDateString() ===
                          day.date.toDateString() && selectedTime === slot.time
                      }
                      onChange={() => {
                        setSelectedDate(day.date);
                        setSelectedTime(slot.time);
                      }}
                      className="form-radio h-4 w-4 text-primary-red border-gray-300 focus:ring-primary-red"
                    />
                    <span className="text-sm">{slot.time}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <Button
          variant="ghost"
          className="text-primary-red hover:text-primary-red/80"
          onClick={handlePreviousWeek}
          disabled={currentWeekStart === 0}
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Previous Week
        </Button>
        <Button
          variant="ghost"
          className="text-primary-red hover:text-primary-red/80"
          onClick={handleNextWeek}
          disabled={currentWeekStart >= schedule.length - 7}
        >
          Next Week
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
