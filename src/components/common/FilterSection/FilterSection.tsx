"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/upImmigrationButton";
import { cn } from "@/lib/utils";
import { ChevronDown, RotateCcw } from "lucide-react";
import * as React from "react";
import { Caption } from "../text/Caption";

export type FilterOption = {
  label: string;
  value: string;
};

export type FilterSectionProps = {
  sortOptions: FilterOption[];
  visaTypes: FilterOption[];
  statusOptions: FilterOption[];
  onSortChange: (value: string) => void;
  onVisaTypeChange: (values: string[]) => void;
  onStatusChange: (values: string[]) => void;
  onReset: () => void;
  className?: string;
};

export default function FilterSection({
  sortOptions,
  visaTypes,
  statusOptions,
  onSortChange,
  onVisaTypeChange,
  onStatusChange,
  onReset,
  className = "",
}: FilterSectionProps) {
  const [selectedSort, setSelectedSort] = React.useState<string>("");
  const [selectedVisaTypes, setSelectedVisaTypes] = React.useState<string[]>(
    []
  );
  const [selectedStatus, setSelectedStatus] = React.useState<string[]>([]);
  const [sortOpen, setSortOpen] = React.useState(false);
  const [visaTypeOpen, setVisaTypeOpen] = React.useState(false);
  const [statusOpen, setStatusOpen] = React.useState(false);

  return (
    <div
      className={`flex flex-wrap items-center border w-[739px] h-[53px] ${className}`}
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
          <DropdownMenuRadioGroup
            value={selectedSort}
            onValueChange={(value: string) => {
              setSelectedSort(value);
              onSortChange(value);
            }}
          >
            {sortOptions.map((option) => (
              <DropdownMenuRadioItem key={option.value} value={option.value}>
                <Caption>{option.label}</Caption>
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
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
          <ScrollArea className="h-[210px] w-full p-2">
            {visaTypes.map((option) => (
              <label
                key={option.value}
                className="flex cursor-pointer items-center space-x-2 rounded p-2 hover:bg-accent"
              >
                <Checkbox
                  checked={selectedVisaTypes.includes(option.value)}
                  onCheckedChange={(checked) => {
                    const newSelected = checked
                      ? [...selectedVisaTypes, option.value]
                      : selectedVisaTypes.filter((v) => v !== option.value);
                    setSelectedVisaTypes(newSelected);
                    onVisaTypeChange(newSelected);
                  }}
                />
                <Caption>{option.label}</Caption>
              </label>
            ))}
            {selectedVisaTypes.length > 0 && (
              <Button
                variant="link"
                className="mt-2 w-full justify-start px-2 text-destructive"
                onClick={() => {
                  setSelectedVisaTypes([]);
                  onVisaTypeChange([]);
                }}
              >
                <Caption>Remove</Caption>
              </Button>
            )}
          </ScrollArea>
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
          <ScrollArea className="h-[210px] w-full p-2">
            {statusOptions.map((option) => (
              <label
                key={option.value}
                className="flex cursor-pointer items-center space-x-2 rounded p-2 hover:bg-accent"
              >
                <Checkbox
                  checked={selectedStatus.includes(option.value)}
                  onCheckedChange={(checked) => {
                    const newSelected = checked
                      ? [...selectedStatus, option.value]
                      : selectedStatus.filter((v) => v !== option.value);
                    setSelectedStatus(newSelected);
                    onStatusChange(newSelected);
                  }}
                />
                <Caption>{option.label}</Caption>
              </label>
            ))}
            {selectedStatus.length > 0 && (
              <Button
                variant="link"
                className="mt-2 w-full justify-start px-2 text-destructive"
                onClick={() => {
                  setSelectedStatus([]);
                  onStatusChange([]);
                }}
              >
                <Caption>Remove</Caption>
              </Button>
            )}
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button
        variant="ghost"
        className="text-primary w-[161px] h-full rounded-none hover:text-primary/80"
        onClick={() => {
          setSelectedSort("");
          setSelectedVisaTypes([]);
          setSelectedStatus([]);
          onReset();
        }}
      >
        <RotateCcw className="mr-2 h-4 w-4 text-primary-red" />
        <Caption className="text-primary-red">Reset Filter</Caption>
      </Button>
    </div>
  );
}
