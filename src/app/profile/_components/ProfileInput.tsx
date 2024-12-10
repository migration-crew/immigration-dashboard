"use client";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

type CountrySelectProps = {
  onChange?: (value: string) => void;
};

type LanguageSelectProps = {
  onChange?: (value: string) => void;
};

export default function ProfileInput({
  onChange = () => {},
}: CountrySelectProps & LanguageSelectProps) {
  const [countries, setCountries] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [value, setValue] = useState<dayjs.Dayjs | null>(dayjs());

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
      <Card className="grid gap-[18px] justify-center">
        <div className="flex gap-[60px]">
          <div className="w-[360px] h-auto">
            <label
              htmlFor="first"
              className=" block text-sm font-medium text-gray-700 pb-2 text-caption"
            >
              First Name
            </label>
            <Input id="first" type="text" placeholder="John" />
          </div>
          <div className="w-[360px] h-auto">
            <label
              htmlFor="last"
              className="block text-sm font-medium text-gray-700 pb-2 text-caption"
            >
              Last Name
            </label>
            <Input id="last" type="text" placeholder="Smith" />
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
              <SelectTrigger className="placeholder-gray-500 text-caption">
                <SelectValue
                  placeholder="Country"
                  className="placeholder-gray-500 text-caption"
                />
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
              <SelectTrigger>
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
          />
        </div>
        <div className="flex gap-[60px]">
          <div className="w-[360px] h-auto">
            <label
              htmlFor="dateOfBirth"
              className="block text-sm font-medium text-gray-700 pb-1 text-caption"
            >
              Date of Birth
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  // label="Select a date"
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                  className="w-[360px] h-9"
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div className="w-[360px] h-auto">
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700 pb-3 text-caption"
            >
              Gender
            </label>
            <Select>
              <SelectTrigger className="">
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
            className="placeholder-sidebar-foreground"
          />
        </div>
      </Card>
    </>
  );
}
