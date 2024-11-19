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
import { Check } from "lucide-react";
import * as React from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

export type Props = {
  className?: string;
  applications: ApplicationType[];
};

export type ApplicationType = {
  value: string;
  label: string;
  date: string;
};

function ApplicationSwitcher({ applications }: Props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const sortedApplications = React.useMemo(
    () =>
      [...(applications || [])].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    [applications]
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-[220px] justify-between shadow-md hover:shadow-lg transition-shadow duration-200",
            "hover:bg-accent hover:text-accent-foreground"
          )}
        >
          {value
            ? sortedApplications.find(
                (application) => application.value === value
              )?.label
            : "Choose your application..."}
          {open ? (
            <IoMdArrowDropup className="ml-2 h-4 w-4 shrink-0 opacity-50 transition-transform" />
          ) : (
            <IoMdArrowDropdown className="ml-2 h-4 w-4 shrink-0 opacity-50 transition-transform" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search application..." className="h-9" />
          <CommandList>
            <CommandEmpty>No application found.</CommandEmpty>
            <CommandGroup>
              {sortedApplications.map((application) => (
                <CommandItem
                  key={application.value}
                  value={application.value}
                  onSelect={(currentValue) => {
                    if (currentValue !== value) {
                      setValue(currentValue);
                      setOpen(false);
                    }
                  }}
                >
                  {application.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === application.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default ApplicationSwitcher;
