"use client";

import { AppointmentTypeContainer } from "@/app/appointment/_components/AppoinmentTypeContainer";
import { AppointmentDatePicker } from "@/app/appointment/_components/AppoinementDatePicker";
import ApplicationSwitcher from "@/components/common/ApplicationSwitcher";
import { AppointmentCard } from "@/components/common/AppoitmentCard";
import AwaitingPayment from "@/components/common/AwaitingPayment/AwaitingPayment";
import FilterSection from "@/components/common/FilterSection/FilterSection";
import { ApplicationType } from "@/types/Application/ApplicationType";
import { AppointmentType } from "@/types/Appointment/AppointmentType";
import { AppointmentTypeType } from "@/types/Appointment/AppointmentTypeType";
import { BasicUserType } from "@/types/User/UserType";
import { useMemo, useState } from "react";
import { applications } from "./data/application";
import { payments } from "./data/payment";

export type testApplicationType = {
  application: ApplicationType[];
  progress: number;
  status: string;
};

const testAppointment: AppointmentType = {
  id: "1",
  appointmentType: {
    id: "1",
    name: "First Consultation",
    duration: 60,
    currency: "USD",
    price: 100,
  },
  date: new Date("2024-01-28T16:00:00"),
  user: {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    nationality: "US",
    language: "English",
    address: "123 Main St, Anytown, USA",
    birthDate: "1990-01-01",
    gender: "Male",
    email: "john.doe@example.com",
    imageUrl: "/placeholder.svg",
  },
};

const testAttendees: BasicUserType[] = [
  {
    id: "1",
    firstName: "John",
    imageUrl: "/placeholder.svg",
  },
  {
    id: "2",
    firstName: "Jane",
    imageUrl: "/placeholder.svg",
  },
];

export default function Page() {
  const [selectedAppointmentType, setSelectedAppointmentType] =
    useState<AppointmentTypeType | null>(null);

  const [sortOptions] = useState([
    { label: "Date: First to Last", value: "date_asc" },
    { label: "Date: Last to First", value: "date_desc" },
    { label: "Progress: Low to High", value: "progress_asc" },
    { label: "Progress: High to Low", value: "progress_desc" },
    { label: "A-Z", value: "alpha_asc" },
  ]);

  const [visaTypes] = useState([
    { label: "Student Visa", value: "student" },
    { label: "Work Permit", value: "workPermit" },
    { label: "LMIA", value: "lmia" },
    { label: "Check", value: "check" },
    { label: "Visitor", value: "visitor" },
  ]);

  const [statusOptions] = useState([
    { label: "Processing", value: "processing" },
    { label: "On hold", value: "onHold" },
    { label: "Completed", value: "completed" },
    { label: "Rejected", value: "rejected" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");
  const [selectedVisaTypes, setSelectedVisaTypes] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);

  const handleSortChange = (value: string) => {
    console.log("Sort changed:", value);
    setSelectedSort(value);
  };

  const handleVisaTypeChange = (values: string[]) => {
    console.log("Visa types changed:", values);
    setSelectedVisaTypes(values);
  };

  const handleStatusChange = (values: string[]) => {
    console.log("Status changed:", values);
    setSelectedStatus(values);
  };

  const handleReset = () => {
    console.log("Filters reset");
    setSelectedSort("");
    setSelectedVisaTypes([]);
    setSelectedStatus([]);
  };

  const filteredAndSortedApplications = useMemo(() => {
    const filtered = applications.filter((app) => {
      const typeMatch =
        selectedVisaTypes.length === 0 ||
        selectedVisaTypes.includes(app.application[0].type.name);
      const statusMatch =
        selectedStatus.length === 0 || selectedStatus.includes(app.status);
      return typeMatch && statusMatch;
    });

    return filtered.sort((a, b) => {
      switch (selectedSort) {
        case "date_asc":
          return (
            a.application[0].updatedAt.getTime() -
            b.application[0].updatedAt.getTime()
          );
        case "date_desc":
          return (
            b.application[0].updatedAt.getTime() -
            a.application[0].updatedAt.getTime()
          );
        case "progress_asc":
          return a.progress - b.progress;
        case "progress_desc":
          return b.progress - a.progress;
        case "alpha_asc":
          return a.application[0].name.localeCompare(b.application[0].name);
        default:
          return 0;
      }
    });
  }, [selectedSort, selectedVisaTypes, selectedStatus]);

  return (
    <div className="p-4">
      <AwaitingPayment payments={payments} singleCard={true} />
      <div className="mb-4">
        <ApplicationSwitcher applications={filteredAndSortedApplications} />
      </div>
      <FilterSection
        sortOptions={sortOptions}
        visaTypes={visaTypes}
        statusOptions={statusOptions}
        onSortChange={handleSortChange}
        onVisaTypeChange={handleVisaTypeChange}
        onStatusChange={handleStatusChange}
        onReset={handleReset}
        className="mb-4"
      />
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">Filtered Applications:</h2>
        <ul>
          {filteredAndSortedApplications.map((app) => (
            <li key={app.application[0].id}>
              {app.application[0].name} - Type: {app.application[0].type.name},
              Status: {app.status}, Progress: {app.progress}%
            </li>
          ))}
        </ul>
      </div>
      <AppointmentCard
        appointment={testAppointment}
        attendees={testAttendees}
      />
      <div className="p-4">
        <AppointmentTypeContainer onTypeSelect={setSelectedAppointmentType} />
        {selectedAppointmentType && "<AppointmentDatePicker />"}
      </div>
      <AppointmentDatePicker />
    </div>
  );
}
