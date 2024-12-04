import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function ProfileInput() {
  return (
    <>
      <Card className="grid gap-[18px]">
        <div className="flex">
          <div className="w-[360px] h-[45px]">
            <label
              htmlFor="first"
              className=" block text-sm font-medium text-gray-700 pb-2"
            >
              First Name
            </label>
            <Input id="first" type="text" />
          </div>
          <div className="w-[360px] h-[45px]">
            <label
              htmlFor="last"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <Input id="last" type="text" />
          </div>
        </div>
        <div className="flex">
          <div className="w-[360px] h-[45px]">
            <label
              htmlFor="nationality"
              className="block text-sm font-medium text-gray-700"
            >
              Nationality
            </label>
            <Input id="nationality" type="text" />
          </div>
          <div className="w-[360px] h-[45px]">
            <label
              htmlFor="language"
              className="block text-sm font-medium text-gray-700"
            >
              Language
            </label>
            <Input id="language" type="text" />
          </div>
        </div>
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <Input id="address" type="text" />
        </div>
      </Card>
      <div></div>
    </>
  );
}
