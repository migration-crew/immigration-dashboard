"use client";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/upImmigrationButton";
import { Calendar } from "@/components/ui/upImmigrationCalendar";
import { cn } from "@/lib/utils";
import axios from "axios";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface DateOfBirthPickerProps {
  onDateChange: (date: Date | undefined) => void;
}

type CountrySelectProps = {
  onChange?: (value: string) => void;
};

type LanguageSelectProps = {
  onChange?: (value: string) => void;
};

export default function ProfileInput({
  onChange = () => {},
}: // onDateChange,
CountrySelectProps & LanguageSelectProps & DateOfBirthPickerProps) {
  const [countries, setCountries] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);

  const [date, setDate] = React.useState<Date>();
  const [selectedYear, setSelectedYear] = React.useState<number | undefined>();

  const { control } = useForm();

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  const handleDateChange = (newDate: Date | undefined) => {
    setDate(newDate);
    // onDateChange(newDate);
  };

  const handleYearChange = (year: string) => {
    const yearNumber = parseInt(year);
    setSelectedYear(yearNumber);
  };

  useEffect(() => {
    if (selectedYear !== undefined && date) {
      const newDate = new Date(date);
      newDate.setFullYear(selectedYear);
      setDate(newDate);
    }
  }, [selectedYear]);

  useEffect(() => {
    if (!selectedYear && date) {
      setSelectedYear(date.getFullYear());
    }
  }, [date]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/countries");
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/languages");
        setLanguages(response.data);
      } catch (error) {
        console.error("Error fetching languages:", error);
      }
    };
    fetchLanguages();
  }, []);

  return (
    <>
      <Card className="grid gap-[18px] justify-center border-none shadow-none">
        <div className="flex gap-[60px]">
          <div className="w-[360px] h-auto">
            <label
              htmlFor="first"
              className=" block text-sm font-medium text-gray-700 pb-2 text-caption"
            >
              First Name
            </label>
            <Input
              id="first"
              type="text"
              placeholder="John"
              className="h-[45px]"
            />
          </div>
          <div className="w-[360px] h-auto">
            <label
              htmlFor="last"
              className="block text-sm font-medium text-gray-700 pb-2 text-caption"
            >
              Last Name
            </label>
            <Input
              id="last"
              type="text"
              placeholder="Smith"
              className="h-[45px]"
            />
          </div>
        </div>
        <div className="flex gap-[60px]">
          <div className="w-[360px] h-[45px]">
            <label
              htmlFor="nationality"
              className="block text-sm font-medium text-gray-700 pb-2 text-caption"
            >
              Nationality
            </label>
            <Select onValueChange={(value: string) => onChange(value)}>
              <SelectTrigger className="SelectTrigger h-[45px]">
                <SelectValue placeholder="Country" className="text-gray-500" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((countryName) => (
                  <SelectItem key={countryName} value={countryName}>
                    {countryName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="w-[360px] h-auto">
            <label
              htmlFor="language"
              className="block text-sm font-medium text-gray-700 pb-2 text-caption"
            >
              Language
            </label>
            <Select onValueChange={(value: string) => onChange(value)}>
              <SelectTrigger className="SelectTrigger h-[45px]">
                <SelectValue
                  placeholder="Please select language"
                  className="placeholder-opacity-55 text-caption"
                />
              </SelectTrigger>
              <SelectContent>
                {languages.map((languageName) => (
                  <SelectItem key={languageName} value={languageName}>
                    {languageName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="w-[780px]">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700 pb-2 text-caption"
          >
            Address
          </label>
          <Input
            id="address"
            type="text"
            placeholder="1234 Maple Street Springfield, IL USA"
            className="h-[45px]"
          />
        </div>
        <div className="flex gap-[60px] h-[64px]">
          <div className="w-[360px] h-auto">
            <label
              htmlFor="dateOfBirth"
              className="block text-sm font-medium text-gray-700 text-caption pb-3"
            >
              Date of Birth
            </label>
            <Popover>
              <PopoverTrigger asChild className="h-[45px]">
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[360px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <div className="flex justify-center space-x-2 p-2">
                  <Controller
                    name="year"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value);
                          handleYearChange(value);
                        }}
                      >
                        <SelectTrigger className="w-[120px]">
                          <SelectValue placeholder="Select Year" />
                        </SelectTrigger>
                        <SelectContent>
                          {years.map((year) => (
                            <SelectItem key={year} value={year.toString()}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={handleDateChange}
                  initialFocus
                  month={
                    selectedYear
                      ? new Date(selectedYear, date?.getMonth() || 0)
                      : undefined
                  }
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="w-[360px] h-auto">
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700 pb-3 text-caption"
            >
              Gender
            </label>
            <Select>
              <SelectTrigger className="SelectTrigger  h-[45px]">
                <SelectValue
                  placeholder="Select Gender"
                  className="opacity-50 text-caption"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="others">Others</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="w-[780px]">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 pb-2 text-caption"
          >
            E-mail
          </label>
          <Input
            id="email"
            type="text"
            placeholder="john_smith123@gmail.com"
            className="h-[45px]"
          />
        </div>
      </Card>
    </>
  );
}
