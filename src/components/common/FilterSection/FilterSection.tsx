"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/upImmigrationButton";
import { cn } from "@/lib/utils";
import { Check, ChevronDown, RotateCcw } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import * as React from "react";
import { Caption } from "../text/Caption";
import { useEffect } from "react";

export type FilterOption = {
  label: string;
  value: string;
};

export type FilterSectionProps = {
  sortOptions: FilterOption[];
  visaTypes: FilterOption[];
  statusOptions: FilterOption[];
  className?: string;
};

export default function FilterSection({
  sortOptions,
  visaTypes,
  statusOptions,
  className = "",
}: FilterSectionProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname()
  const {replace} = useRouter()

  const [selectedSort, setSelectedSort] = React.useState<string>(
    searchParams.get("sort") || ""
  );
  const [selectedVisaTypes, setSelectedVisaTypes] = React.useState<string[]>(
    searchParams.getAll("visa") || []
  );
  const [selectedStatus, setSelectedStatus] = React.useState<string[]>(
    searchParams.getAll("status") || []
  );
  const [sortOpen, setSortOpen] = React.useState(false);
  const [visaTypeOpen, setVisaTypeOpen] = React.useState(false);
  const [statusOpen, setStatusOpen] = React.useState(false);

  useEffect(()=> {
    setSelectedSort(searchParams.get("sort") || "")
    setSelectedVisaTypes(searchParams.getAll("visa") || [])
    setSelectedStatus(searchParams.getAll("status") || [])
  }, [searchParams])

  const onSortChange = (value: string | null) => {
    setSelectedSort(value || "")
    const params = new URLSearchParams(searchParams)
    params.delete("sort")
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    value && params.append("sort", value)
    replace(`${pathname}?${params.toString()}`)
  }
  const onVisaTypeChange = (values: string[]) => {
    setSelectedVisaTypes(values)
    const params = new URLSearchParams(searchParams)
    params.delete("visa")
    values.forEach((value) => params.append("visa", value))
    replace(`${pathname}?${params.toString()}`)
  }
  const onStatusChange = (values: string[]) => {
    setSelectedStatus(values)
    const params = new URLSearchParams(searchParams)
    params.delete("status")
    values.forEach((value) => params.append("status", value))
    replace(`${pathname}?${params.toString()}`)
  }
  const onReset = () => {
    setSelectedSort("");
    setSelectedVisaTypes([]);
    setSelectedStatus([]);
    replace(`${pathname}`)
  }

  return (
    <div
      className={`flex flex-wrap items-center border w-[739px] h-[53px] rounded bg-primary-white ${className}`}
    >
      <div className="text-center w-[79px] h-[21]">
        <Caption>Filter by</Caption>
      </div>

      <DropdownMenu open={sortOpen} onOpenChange={setSortOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="w-[187px] h-full justify-between rounded-none border-x"
          >
            <Caption>Sort by</Caption>
            <ChevronDown
              className={cn(
                "transition-transform duration-200",
                sortOpen && "rotate-180"
              )}
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-[187px]">
          <ScrollArea className="h-[200px] w-full">
            {sortOptions.map((option) => (
              <div
                key={option.value}
                className="flex items-center py-2 px-4 gap-2 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  onSortChange(option.value);
                }}
              >
                {selectedSort === option.value && (
                  <Check className="h-4 w-4 text-bold" />
                )}
                {selectedSort !== option.value && (
                  <div className="h-4 w-4"></div>
                )}
                <Caption>{option.label}</Caption>
              </div>
            ))}
          </ScrollArea>
          {selectedSort.length > 0 && (
            <Button
              variant="link"
              className="w-full justify-center px-2 text-destructive"
              onClick={() => {
                onSortChange(null);
              }}
            >
              <Caption>Remove</Caption>
            </Button>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu open={visaTypeOpen} onOpenChange={setVisaTypeOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="w-[155px] h-full justify-between rounded-none"
          >
            <Caption>Visa Type</Caption>
            <ChevronDown
              className={cn(
                "transition-transform duration-200",
                visaTypeOpen && "rotate-180"
              )}
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-[155px]">
          <ScrollArea className="h-[200px] w-full p-2">
            {visaTypes.map((option) => (
              <label
                key={option.value}
                className="flex cursor-pointer items-center space-x-2 rounded p-2 hover:bg-accent"
              >
                <Checkbox
                  checked={selectedVisaTypes.includes(option.value)}
                  onCheckedChange={(checked: unknown) => {
                    const newSelected = checked
                      ? [...selectedVisaTypes, option.value]
                      : selectedVisaTypes.filter((v) => v !== option.value);
                    onVisaTypeChange(newSelected);
                  }}
                />
                <Caption>{option.label}</Caption>
              </label>
            ))}
          </ScrollArea>
          {selectedVisaTypes.length > 0 && (
            <Button
              variant="link"
              className="w-full justify-center px-2 text-destructive"
              onClick={() => {
                onVisaTypeChange([]);
              }}
            >
              <Caption>Remove</Caption>
            </Button>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu open={statusOpen} onOpenChange={setStatusOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="w-[155px] h-full justify-between rounded-none shadow-none border-x"
          >
            <Caption>Status</Caption>
            <ChevronDown
              className={cn(
                "transition-transform duration-200",
                statusOpen && "rotate-180"
              )}
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-[155px]">
          <ScrollArea className="h-[200px] w-full p-2">
            {statusOptions.map((option) => (
              <label
                key={option.value}
                className="flex cursor-pointer items-center space-x-2 rounded p-2 hover:bg-accent"
              >
                <Checkbox
                  checked={selectedStatus.includes(option.value)}
                  onCheckedChange={(checked: unknown) => {
                    const newSelected = checked
                      ? [...selectedStatus, option.value]
                      : selectedStatus.filter((v) => v !== option.value);
                    onStatusChange(newSelected);
                  }}
                />
                <Caption>{option.label}</Caption>
              </label>
            ))}
          </ScrollArea>
          {selectedStatus.length > 0 && (
            <Button
              variant="link"
              className="w-full px-2 text-destructive justify-center"
              onClick={() => {
                onStatusChange([]);
              }}
            >
              <Caption>Remove</Caption>
            </Button>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      <Button
        variant="ghost"
        className="text-primary w-[161px] h-full rounded-none hover:text-primary/80"
        onClick={() => {
          onReset();
        }}
      >
        <RotateCcw className="mr-2 h-4 w-4 text-primary-red" />
        <Caption className="text-primary-red">Reset Filter</Caption>
      </Button>
    </div>
  );
}
