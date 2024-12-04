"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AppointmentTypeType } from "@/types/Appointment/AppointmentTypeType";
import { useState } from "react";

const appointmentTypes: AppointmentTypeType[] = [
  {
    id: "immigration-consultation",
    name: "Immigration Consultation",
    duration: 50,
    currency: "CA$",
    price: 150.0,
  },
  {
    id: "zoom-meeting",
    name: "Zoom Meeting",
    duration: 15,
    currency: "CA$",
    price: 0,
  },
];

// This is a mock function to get features. In a real application, you might fetch this from an API or database.
const getFeatures = (appointmentTypeId: string): string[] => {
  switch (appointmentTypeId) {
    case "immigration-consultation":
      return [
        "Profile Analysis",
        "Eligibility Assessment",
        "Express Entry Points Simulation",
        "Information on Provincial Processes",
        "Define Visa Strategy(including visa refusal)",
        "Answer Questions about Immigration",
        "Immigration Strategy Definition (Permanent Residence)",
        "Personalized Immigration Plan",
        "50-minute Consultation via Google Meets",
        "C$150 Credit for Any Future Application (Permanent Residence)",
      ];
    case "zoom-meeting":
      return [
        "Application Process Overview",
        "Application Form Assistance",
        "Fee Structure and Payment",
        "Interview Preparation",
        "Processing Times and Status Tracking",
        "Next Steps and Follow-Up",
      ];
    default:
      return [];
  }
};

export interface AppointmentTypeContainerProps {
  onTypeSelect: (type: AppointmentTypeType) => void;
}

export function AppointmentTypeContainer({
  onTypeSelect,
}: AppointmentTypeContainerProps) {
  const [selectedType, setSelectedType] = useState<string>("");

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
    const selectedAppointmentType = appointmentTypes.find(
      (type) => type.id === value
    );
    if (selectedAppointmentType) {
      onTypeSelect(selectedAppointmentType);
    }
  };

  return (
    <div className="w-[1116px] h-[323] border rounded py-[23px] px-[18px]">
      <div className="w-full p-6 rounded-lg bg-slate-50 mb-6">
        <h2 className="text-xl font-semibold text-primary-red mb-6">
          Choose your Appointment
        </h2>
        <div>
          <RadioGroup
            value={selectedType}
            onValueChange={handleTypeChange}
            className="space-y-4"
          >
            {appointmentTypes.map((type) => (
              <div key={type.id} className="flex h-full">
                <RadioGroupItem value={type.id} id={type.id} className="mt-1" />
                <label htmlFor={type.id} className="flex-grow cursor-pointer">
                  <div className="mb-2">
                    <h3 className="text-lg font-medium">{type.name}</h3>
                    <p className="text-sm text-gray-600">
                      {type.duration} minutes @{" "}
                      {type.price === 0
                        ? "Free"
                        : `${type.currency}${type.price.toFixed(2)}`}
                    </p>
                  </div>
                  <ul className="space-y-1">
                    {getFeatures(type.id).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 text-gray-400">•</span>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}
