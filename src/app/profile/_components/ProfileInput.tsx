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
import { UserType } from "@/types/User/UserType";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface DateOfBirthPickerProps {
  onDateChange: (date: Date | undefined) => void;
}

type CountrySelectProps = {
  onChange?: (value: string) => void;
};

type LanguageSelectProps = {
  onChange?: (value: string) => void;
};

type ProfileInputProps = {
  users: UserType;
  onSubmit: SubmitHandler<UserType>;
};

export default function ProfileInput({
  users,
  onSubmit,
}: CountrySelectProps &
  LanguageSelectProps &
  DateOfBirthPickerProps &
  ProfileInputProps) {
  const [countries, setCountries] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>({
    defaultValues: {
      firstName: users.firstName,
      lastName: users.lastName,
      email: users.email,
      address: users.address,
      nationality: users.nationality,
      language: users.language,
      gender: users.gender,
      dateOfBirth: users.dateOfBirth,
      _id: users._id,
      imageURL: users.imageURL,
    },
  });

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(`${apiUrl}/countries`);
        if (response.ok) {
          const data = await response.json();
          setCountries(data);
        } else {
          throw new Error("Error fetching countries");
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
    // CHECK LATER
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch(`${apiUrl}/languages`);
        if (response.ok) {
          const data = await response.json();
          setLanguages(data);
        } else {
          throw new Error("Error fetching languages");
        }
      } catch (error) {
        console.error("Error fetching languages:", error);
      }
    };
    fetchLanguages();
    // CHECK LATER
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className="grid gap-[18px] justify-center border-none shadow-none">
        <div className="flex gap-[60px]">
          <div className="w-[360px] h-auto">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 pb-2 text-caption"
            >
              First Name
            </label>
            <Controller
              name="firstName"
              control={control}
              rules={{ required: "First name is required" }}
              render={({ field }) => (
                <Input
                  {...field}
                  id="firstName"
                  placeholder="John"
                  className="h-[45px] bg-secondary-light-gray"
                />
              )}
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">
                {errors.firstName.message}
              </span>
            )}
          </div>
          <div className="w-[360px] h-auto">
            <label
              htmlFor="last"
              className="block text-sm font-medium text-gray-700 pb-2 text-caption"
            >
              Last Name
            </label>
            <Controller
              name="lastName"
              control={control}
              rules={{ required: "Last name is required" }}
              render={({ field }) => (
                <Input
                  {...field}
                  id="lastName"
                  placeholder="Smith"
                  className="h-[45px] bg-secondary-light-gray"
                />
              )}
            />
            {errors.lastName && (
              <span className="text-red-500 text-sm">
                {errors.lastName.message}
              </span>
            )}
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
            <Controller
              name="nationality"
              control={control}
              rules={{ required: "Nationality is required" }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="SelectTrigger h-[45px] bg-secondary-light-gray">
                    <SelectValue
                      placeholder="Country"
                      className="text-gray-500"
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
              )}
            />
            {errors.nationality && (
              <span className="text-red-500 text-sm">
                {errors.nationality.message}
              </span>
            )}
          </div>
          <div className="w-[360px] h-auto ">
            <label
              htmlFor="language"
              className="block text-sm font-medium text-gray-700 pb-2 text-caption"
            >
              Language
            </label>
            <Controller
              name="language"
              control={control}
              rules={{ required: "Language is required" }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="SelectTrigger h-[45px] bg-secondary-light-gray">
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
              )}
            />
            {errors.language && (
              <span className="text-red-500 text-sm">
                {errors.language.message}
              </span>
            )}
          </div>
        </div>
        <div className="w-[780px]">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700 pb-2 text-caption"
          >
            Address
          </label>
          <Controller
            name="address"
            control={control}
            rules={{ required: "Address is required" }}
            render={({ field }) => (
              <Input
                {...field}
                id="address"
                placeholder="1425 10th Avenue, Victoria BC, Canada"
                className="h-[45px] bg-secondary-light-gray"
              />
            )}
          />
          {errors.address && (
            <span className="text-red-500 text-sm">
              {errors.address.message}
            </span>
          )}
        </div>
        <div className="flex gap-[60px] h-[64px]">
          <div className="w-[360px] h-auto">
            <label
              htmlFor="dateOfBirth"
              className="block text-sm font-medium text-gray-700 text-caption pb-3"
            >
              Date of Birth
            </label>
            <Controller
              name="dateOfBirth"
              control={control}
              rules={{ required: "Date of birth is required" }}
              render={({ field }) => (
                <Popover>
                  <PopoverTrigger
                    asChild
                    className="h-[45px] bg-secondary-light-gray"
                  >
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[360px] justify-start text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value ? (
                        format(new Date(field.value), "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={field.value ? new Date(field.value) : undefined}
                      onSelect={(date) => field.onChange(date?.toISOString())}
                      defaultMonth={
                        field.value ? new Date(field.value) : undefined
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              )}
            />
          </div>
          <div className="w-[360px] h-auto">
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700 pb-3 text-caption"
            >
              Gender
            </label>
            <Controller
              name="gender"
              control={control}
              rules={{ required: "Gender is required" }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="SelectTrigger  h-[45px] bg-secondary-light-gray">
                    <SelectValue
                      placeholder="Select Gender"
                      className="opacity-50 text-caption"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="nonBinary">Non-binary</SelectItem>
                    <SelectItem value="others">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </div>
        <div className="w-[780px]">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 pb-2 text-caption"
          >
            E-mail
          </label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                id="email"
                placeholder="john_smith123@gmail.com"
                className="h-[45px] bg-secondary-light-gray"
              />
            )}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>
      </Card>
      <div className="flex justify-center mt-6">
        <Button className="w-[249px] h-14 " type="submit">
          Save
        </Button>
      </div>
    </form>
  );
}
