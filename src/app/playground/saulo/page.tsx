"use client";

import { AppointmentTypeContainer } from "@/app/appointment/_components/AppoinmentTypeContainer";
import ApplicationSwitcher from "@/components/common/ApplicationSwitcher";
import { ApplicationType } from "@/types/ApplicationType";
import { AppointmentTypeType } from "@/types/Appointment/AppointmentTypeType";
import { useState } from "react";

const applications: ApplicationType[] = [
  {
    id: "Maria_CICCC_ESL",
    label: "Maria_CICCC_ESL",
    date: "2023-06-15",
  },
  {
    id: "Maria_Work_Permit",
    label: "Maria_Work_Permit",
    date: "2023-05-10",
  },
  {
    id: "Carrey_Visitor",
    label: "Carrey_Visitor",
    date: "2023-04-22",
  },
  {
    id: "Maria_CICCC_UX/UI",
    label: "Maria_CICCC_UX/UI",
    date: "2023-06-01",
  },
  {
    id: "Maria_CICCC_UX/UI_2",
    label: "Maria_CICCC_UX/UI_2",
    date: "2023-05-28",
  },
];

export default function Page() {
  const [selectedAppointmentType, setSelectedAppointmentType] =
    useState<AppointmentTypeType | null>(null);

  return (
    <div>
      <ApplicationSwitcher applications={applications} />
      <div className="p-4">
        <AppointmentTypeContainer onTypeSelect={setSelectedAppointmentType} />
        {selectedAppointmentType && "<AppointmentDatePicker />"}
      </div>
    </div>
  );
}
