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
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown, Plus, RotateCcw } from "lucide-react";
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
  onAddVisaType: (newType: string) => void;
  onAddStatus: (newStatus: string) => void;
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
  onAddVisaType,
  onAddStatus,
  onReset,
  className = "",
}: FilterSectionProps) {
  const [selectedSort, setSelectedSort] = React.useState<string>("");
  const [selectedVisaTypes, setSelectedVisaTypes] = React.useState<string[]>(
    []
  );
  const [selectedStatus, setSelectedStatus] = React.useState<string[]>([]);
  const [showAllVisaTypes, setShowAllVisaTypes] = React.useState(false);
  const [showAllStatus, setShowAllStatus] = React.useState(false);
  const [showAddVisaType, setShowAddVisaType] = React.useState(false);
  const [showAddStatus, setShowAddStatus] = React.useState(false);
  const [newVisaType, setNewVisaType] = React.useState("");
  const [newStatus, setNewStatus] = React.useState("");

  const visibleVisaTypes = showAllVisaTypes ? visaTypes : visaTypes.slice(0, 4);
  const visibleStatus = showAllStatus
    ? statusOptions
    : statusOptions.slice(0, 4);

  const handleAddVisaType = () => {
    if (newVisaType.trim()) {
      onAddVisaType(newVisaType.trim());
      setNewVisaType("");
      setShowAddVisaType(false);
    }
  };

  const handleAddStatus = () => {
    if (newStatus.trim()) {
      onAddStatus(newStatus.trim());
      setNewStatus("");
      setShowAddStatus(false);
    }
  };

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
            {visibleVisaTypes.map((option) => (
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
                    setSelectedVisaTypes(newSelected);
                    onVisaTypeChange(newSelected);
                  }}
                />
                <span>{option.label}</span>
              </label>
            ))}
            {visaTypes.length > 4 && (
              <Button
                variant="link"
                className="mt-2 w-full justify-start px-2 text-primary"
                onClick={() => setShowAllVisaTypes(!showAllVisaTypes)}
              >
                <Plus className="mr-2 h-4 w-4" />
                {showAllVisaTypes ? "Show less" : "More filter"}
              </Button>
            )}
            {!showAddVisaType && (
              <Button
                variant="link"
                className="mt-2 w-full justify-start px-2 text-primary"
                onClick={() => setShowAddVisaType(true)}
              >
                <Plus className="mr-2 h-4 w-4" />
                More filter
              </Button>
            )}
            {showAddVisaType && (
              <div className="mt-4 space-y-2">
                <Input
                  placeholder="New visa type"
                  value={newVisaType}
                  onChange={(e) => setNewVisaType(e.target.value)}
                />
                <div className="flex justify-end space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowAddVisaType(false)}
                  >
                    Cancel
                  </Button>
                  <Button size="sm" onClick={handleAddVisaType}>
                    Add
                  </Button>
                </div>
              </div>
            )}
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
            {visibleStatus.map((option) => (
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
                    setSelectedStatus(newSelected);
                    onStatusChange(newSelected);
                  }}
                />
                <span>{option.label}</span>
              </label>
            ))}
            {statusOptions.length > 4 && (
              <Button
                variant="link"
                className="mt-2 w-full justify-start px-2 text-primary"
                onClick={() => setShowAllStatus(!showAllStatus)}
              >
                <Plus className="mr-2 h-4 w-4" />
                {showAllStatus ? "Show less" : "More filter"}
              </Button>
            )}
            {!showAddStatus && (
              <Button
                variant="link"
                className="mt-2 w-full justify-start px-2 text-primary"
                onClick={() => setShowAddStatus(true)}
              >
                <Plus className="mr-2 h-4 w-4" />
                More filter
              </Button>
            )}
            {showAddStatus && (
              <div className="mt-4 space-y-2">
                <Input
                  placeholder="New status"
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value)}
                />
                <div className="flex justify-end space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowAddStatus(false)}
                  >
                    Cancel
                  </Button>
                  <Button size="sm" onClick={handleAddStatus}>
                    Add
                  </Button>
                </div>
              </div>
            )}
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
