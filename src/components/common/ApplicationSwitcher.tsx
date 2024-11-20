"use client";

import { Button } from "@/components/ui/button";
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
import { cn } from "@/lib/utils";
import { ApplicationType } from "@/types/ApplicationType";
import { Check } from "lucide-react";
import Image from "next/image";
import * as React from "react";
import { Caption } from "./text/Caption";

export type Props = {
  className?: string;
  applications: ApplicationType[];
};

type globalApplicationsType = {
  id: string;
  label: string;
  date?: string;
};

function ApplicationSwitcher({ applications, className }: Props) {
  const sortedApplications = React.useMemo(
    () =>
      [...(applications || [])].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    [applications]
  );

  const allApplications = {
    id: "All Applications",
    label: "All Applications",
  };

  const isAdmin = true;
  // fake admin user is active

  const globalApplications: globalApplicationsType[] = [...applications];
  if (isAdmin) {
    globalApplications.push(allApplications);
  }
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(
    isAdmin
      ? globalApplications[globalApplications.length - 1].id
      : sortedApplications[0].id
  );

  return (
    <>
      <Caption className="text-gray-400">Choose an application</Caption>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "w-[337px] h-[37px] pt-[11px] pr-[141px] pb-[10px] pl-[25px] flex flex-row justify-between shadow-md hover:shadow-lg transition-shadow duration-200",
              className
            )}
          >
            <div className="w-full h-full justify-between flex float-start">
              <div className="w-[90%] flex justify-start">
                {globalApplications.find(
                  (application) => application.id === value
                )?.label || <Caption>Loading...</Caption>}
              </div>
              <div className="w-[10%] flex align-middle justify-center">
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
                    key={application.id}
                    value={application.id}
                    onSelect={(currentValue) => {
                      if (currentValue !== value) {
                        setValue(currentValue);
                        setOpen(false);
                      }
                    }}
                  >
                    <Caption className="">{application.label}</Caption>
                    <Check
                      className={cn(
                        "ml-auto",
                        value === application.id ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
}

export default ApplicationSwitcher;
