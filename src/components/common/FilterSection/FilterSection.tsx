"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown, RotateCcw } from "lucide-react";
import * as React from "react";

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

  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      <div className="text-sm font-medium">Filter by</div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-[140px] justify-between">
            Sort by
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-[200px]">
          <DropdownMenuRadioGroup
            value={selectedSort}
            onValueChange={(value: string) => {
              setSelectedSort(value);
              onSortChange(value);
            }}
          >
            {sortOptions.map((option) => (
              <DropdownMenuRadioItem key={option.value} value={option.value}>
                {option.label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-[140px] justify-between">
            Visa Type
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-[200px]">
          <ScrollArea className="h-[300px] w-full p-2">
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
                <span>{option.label}</span>
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
                Remove
              </Button>
            )}
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-[140px] justify-between">
            Status
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-[200px]">
          <ScrollArea className="h-[300px] w-full p-2">
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
                <span>{option.label}</span>
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
                Remove
              </Button>
            )}
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button
        variant="ghost"
        className="text-primary hover:text-primary/80"
        onClick={() => {
          setSelectedSort("");
          setSelectedVisaTypes([]);
          setSelectedStatus([]);
          onReset();
        }}
      >
        <RotateCcw className="mr-2 h-4 w-4" />
        Reset Filter
      </Button>
    </div>
  );
}
