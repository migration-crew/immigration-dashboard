"use client";

// import { testApplicationType } from "@/app/playground/saulo/page";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/upImmigrationButton";
import { cn } from "@/lib/utils";
import { ApplicationSwitcherType } from "@/types/Application/ApplicationType";
import { Check } from "lucide-react";
import Image from "next/image";
import * as React from "react";
import { Caption } from "./text/Caption";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export type Props = {
  className?: string;
  containerClassName?: string;
  applications: ApplicationSwitcherType[];
};

function ApplicationSwitcher({
  applications,
  containerClassName,
  className,
}: Props) {
  const allApplications: ApplicationSwitcherType = {
    _id: "allApplications",
    name: "All Applications",
  };

  const isAdmin = false;
  // fake admin user is active
  if (isAdmin) {
    applications.unshift(allApplications);
  }

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(applications[0]._id);

  const searchParams = useSearchParams();
  const pathname = usePathname()
  const {replace} = useRouter()

  React.useEffect(()=> {
    const currentApplicationId = searchParams.get("applicationId")
    setValue(currentApplicationId || applications[0]._id)
    if(!currentApplicationId){
      const params = new URLSearchParams(searchParams)
      params.append("applicationId", applications[0]._id)
      replace(`${pathname}?${params.toString()}`)
    }
  }, [searchParams, applications, replace, pathname])

  const onApplicationChange = (value: string | null) => {
    setValue(value || applications[0]._id)
    setOpen(false)
    const params = new URLSearchParams(searchParams)
    params.delete("applicationId")
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    params.append("applicationId", value || applications[0]._id)
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className={containerClassName}>
      <Caption className="text-gray-400">Choose an application</Caption>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "w-[337px] h-[37px] pt-[11px] pr-[16px] pb-[10px] pl-[25px] flex flex-row justify-between shadow-md hover:shadow-lg transition-shadow duration-200",
              className
            )}
          >
            <div className="flex justify-start">
              {applications.find((application) => application._id === value)
                ?.name || <Caption>Loading...</Caption>}
            </div>
            <div className="flex align-middle justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector-xDHm6Wme9hrg7GtHzQjgve2DBtYdkq.svg"
                alt="dropdown arrow"
                height={9}
                width={14}
                className={cn(
                  "shrink-0 opacity-50 transition-transform",
                  open && "rotate-180"
                )}
              />
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className={cn("w-[337px] p-0", className)}>
          <Command>
            <CommandInput placeholder="Search application..." className="h-9" />
            <CommandList>
              <CommandEmpty>
                <Caption>No application found.</Caption>
              </CommandEmpty>
              <CommandGroup>
                {applications.map((application) => (
                  <CommandItem
                    key={application._id}
                    value={application._id}
                    onSelect={(currentValue) => {
                      if (currentValue !== value) {
                        onApplicationChange(currentValue);
                      }
                    }}
                  >
                    <Caption className="">{application.name}</Caption>
                    <Check
                      className={cn(
                        "ml-auto",
                        value === application._id ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default ApplicationSwitcher;
