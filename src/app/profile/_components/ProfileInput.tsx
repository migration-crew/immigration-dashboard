import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

export default function ProfileInput() {
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
            <Input id="first" type="text" />
          </div>
          <div className="w-[360px] h-auto">
            <label
              htmlFor="last"
              className="block text-sm font-medium text-gray-700 pb-2 text-caption"
            >
              Last Name
            </label>
            <Input id="last" type="text" />
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
            <Input id="nationality" type="text" />
          </div>
          <div className="w-[360px] h-auto">
            <label
              htmlFor="language"
              className="block text-sm font-medium text-gray-700 pb-2 text-caption"
            >
              Language
            </label>
            <Input id="language" type="text" />
          </div>
        </div>
        <div className="w-[780px]">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700 pb-2 text-caption"
          >
            Address
          </label>
          <Input id="address" type="text" />
        </div>
        <div className="flex gap-[60px]">
          <div className="w-[360px] h-auto">
            <label
              htmlFor="dateOfBirth"
              className="block text-sm font-medium text-gray-700 pb-2 text-caption"
            >
              Date of Birth
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker label="Basic date picker" />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div className="w-[360px] h-auto">
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700 pb-2 text-caption"
            >
              Gender
            </label>
            <Input id="gender" type="text" />
          </div>
        </div>
        <div className="w-[780px]">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 pb-2 text-caption"
          >
            E-mail
          </label>
          <Input id="email" type="text" />
        </div>
      </Card>
    </>
  );
}
