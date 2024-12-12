"use client";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/upImmigrationButton";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/upImmigrationRadio-group";
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
    if (index === 0) return `TODAY`;
    if (index === 1) return `TOMORROW`;
    return "";
  };

  const getWeekDay = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(date);
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
    <div className="w-full max-w-4xl p-6 rounded-lg">
      <div ref={scrollContainerRef} className="overflow-x-hidden">
        <div className="grid grid-cols-7 gap-4 bg-slate-50 py-2 mb-8 rounded">
          {visibleDays.map((day, index) => (
            <div
              key={day.date.toISOString()}
              className="flex flex-col items-center"
            >
              <div className="grid">
                <div className="h-5 text-xs font-medium text-primary-red text-center whitespace-pre-line px-0 pt-Auto pb-0">
                  {getDayLabel(day.date, currentWeekStart + index)}
                </div>
                <div className=" text-center text-sm font-medium">
                  {getWeekDay(day.date)}
                </div>
                <div className="text-sm font-medium mb-2 bottom-0">
                  {formatDate(day.date)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <RadioGroup
            onValueChange={(value) => {
              const [dateString, time] = value.split("=");
              setSelectedDate(new Date(dateString));
              setSelectedTime(time);
              
            }}
            value={
              (selectedDate && selectedTime)
                ? `${selectedDate.getUTCFullYear()}-${selectedDate.getUTCMonth()+1}-${selectedDate.getUTCDate()}=${selectedTime}`
                : undefined
            }
            className="w-full grid grid-cols-7 gap-4"
          >
            {visibleDays.map((day, index) => (
              <div key={index}>
                {day.timeSlots.map((slot) => (
                  <div
                    key={`${day.date.toISOString()}-${slot.time}`}
                    className="flex items-center space-x-2"
                  >
                    <RadioGroupItem
                      value={`${day.date.getUTCFullYear()}-${day.date.getUTCMonth()+1}-${day.date.getUTCDate()}=${slot.time}`}
                      id={`${day.date.toISOString()}-${slot.time}`}
                    />
                    <Label
                      htmlFor={`${day.date.toISOString()}-${slot.time}`}
                      className="text-sm cursor-pointer"
                    >
                      {`${slot.time}`}
                    </Label>
                  </div>
                ))}
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>
      <div
        className={`flex ${
          currentWeekStart > 0 ? "justify-between" : "justify-end"
        } mt-6`}
      >
        {currentWeekStart > 0 && (
          <Button
            variant="ghost"
            className="text-primary-red hover:text-primary-red/80"
            onClick={handlePreviousWeek}
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Previous Times
          </Button>
        )}
        <Button
          variant="ghost"
          className="text-primary-red hover:text-primary-red/80"
          onClick={handleNextWeek}
          disabled={currentWeekStart >= schedule.length - 7}
        >
          View More Times
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
