"use client";

import { DynamicRoundedContainer } from "@/components/common/DynamicRoundedContainer";
import { CaptionSemi } from "@/components/common/text/CaptionSemi";
import { Microtext } from "@/components/common/text/Microtext";
import { Paragraph } from "@/components/common/text/Paragraph";
import { SubheadingLead } from "@/components/common/text/SubheadingLead";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/upImmigrationRadio-group";
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

export function AppointmentTypeContainer(
  {
    // onTypeSelect,
  }
) {
  const [selectedType, setSelectedType] = useState<string>("");

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
    const selectedAppointmentType = appointmentTypes.find(
      (type) => type.id === value
    );
    if (selectedAppointmentType) {
      // onTypeSelect(selectedAppointmentType);
    }
  };

  return (
    <DynamicRoundedContainer
      title=""
      childrenDivClassName="w-full p-6 rounded-lg bg-slate-50 flex flex-col items-center"
      className="w-full h-[323]"
    >
      <div className="w-[80%]">
        <SubheadingLead className="text-primary-red mb-6">
          Choose your Appointment
        </SubheadingLead>
        <RadioGroup
          value={selectedType}
          onValueChange={handleTypeChange}
          className="flex justify-between"
        >
          {appointmentTypes.map((type) => (
            <div key={type.id} className="flex">
              <RadioGroupItem
                value={type.id}
                id={type.id}
                className="mt-1 mr-3"
              />
              <label htmlFor={type.id} className="flex-grow cursor-pointer">
                <div className="mb-2 text-secondary-dark-gray">
                  <Paragraph>{type.name}</Paragraph>
                  <CaptionSemi className="">
                    {type.duration} minutes @{" "}
                    {type.price === 0
                      ? "Free"
                      : `${type.currency}${type.price.toFixed(2)}`}
                  </CaptionSemi>
                </div>
                <ul className="space-y-1 text-secondary-medium-gray">
                  {getFeatures(type.id).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Microtext>
                        <span className="mr-2">•</span>
                        <span>{feature}</span>
                      </Microtext>
                    </li>
                  ))}
                </ul>
              </label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </DynamicRoundedContainer>
  );
}
