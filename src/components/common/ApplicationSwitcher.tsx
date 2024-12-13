"use client";

import { testApplicationType } from "@/app/playground/saulo/page";
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
import { Check } from "lucide-react";
import Image from "next/image";
import * as React from "react";
import { Caption } from "./text/Caption";

export type globalApplicationsType = {
  id: string;
  name: string;
  updatedAt?: Date;
};

export type Props = {
  className?: string;
  containerClassName?: string;
  applications: testApplicationType[];
};

function ApplicationSwitcher({
  applications,
  containerClassName,
  className,
}: Props) {
  const sortedApplications = React.useMemo(
    () =>
      [...(applications || [])].sort(
        (a, b) =>
          b.application[0].updatedAt.getTime() -
          a.application[0].updatedAt.getTime()
      ),
    [applications]
  );

  const allApplications: globalApplicationsType = {
    id: "All Applications",
    name: "All Applications",
  };

  const isAdmin = false;
  // fake admin user is active

  const globalApplications: globalApplicationsType[] = applications.map(
    (app) => ({
      id: app.application[0].id,
      name: app.application[0].name,
      date: app.application[0].updatedAt,
    })
  );
  if (isAdmin) {
    globalApplications.push(allApplications);
  }
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(
    isAdmin
      ? globalApplications[globalApplications.length - 1].id
      : sortedApplications[0].application[0].id
  );

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
              {globalApplications.find(
                (application) => application.id === value
              )?.name || <Caption>Loading...</Caption>}
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
                {isAdmin && (
                  <CommandItem
                    value={allApplications.id}
                    onSelect={(currentValue) => {
                      if (currentValue !== value) {
                        setValue(currentValue);
                        setOpen(false);
                      }
                    }}
                  >
                    <Caption>All Applications</Caption>
                    <Check
                      className={cn(
                        "ml-auto",
                        value === allApplications.id
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                )}
                {sortedApplications.map((application) => (
                  <CommandItem
                    key={application.application[0].id}
                    value={application.application[0].id}
                    onSelect={(currentValue) => {
                      if (currentValue !== value) {
                        setValue(currentValue);
                        setOpen(false);
                      }
                    }}
                  >
                    <Caption className="">
                      {application.application[0].name}
                    </Caption>
                    <Check
                      className={cn(
                        "ml-auto",
                        value === application.application[0].id
                          ? "opacity-100"
                          : "opacity-0"
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
