"use client";

import ApplicationSwitcher from "@/components/common/ApplicationSwitcher";
import { AppointmentCard } from "@/components/common/AppoitmentCard";
import FilterSection from "@/components/common/FilterSection/FilterSection";
import { ApplicationType } from "@/types/Application/ApplicationType";
import { AppointmentType } from "@/types/Appointment/AppointmentType";
import { BasicUserType } from "@/types/User/UserType";
import { useEffect, useMemo, useState } from "react";

export type testApplicationType = {
  application: ApplicationType[];
  progress: number;
  status: string;
};

export default function Page() {
  const [applications, setApplications] = useState<ApplicationType[]>([]);
  const [testApplications, setTestApplications] = useState<
    testApplicationType[]
  >([]);
  const [appointment, setAppointment] = useState<AppointmentType | null>(null);
  const [attendees, setAttendees] = useState<BasicUserType[]>([]);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const applicationsResponse = await fetch("../api/applications");
        const applicationsData: ApplicationType[] =
          await applicationsResponse.json();
        console.log(applicationsData);

        setApplications(applicationsData);

        const testApplicationsResponse = await fetch("/api/test-applications");
        const testApplicationsData: testApplicationType[] =
          await testApplicationsResponse.json();
        setTestApplications(testApplicationsData);

        const appointmentResponse = await fetch("/api/appointment");
        const appointmentData: AppointmentType =
          await appointmentResponse.json();
        setAppointment(appointmentData);

        const attendeesResponse = await fetch("/api/attendees");
        const attendeesData: BasicUserType[] = await attendeesResponse.json();
        setAttendees(attendeesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
        selectedVisaTypes.includes(app.type.name);
      return typeMatch;
    });

    return filtered.sort((a, b) => {
      switch (selectedSort) {
        case "date_asc":
          return a.updatedAt.getTime() - b.updatedAt.getTime();
        case "date_desc":
          return b.updatedAt.getTime() - a.updatedAt.getTime();
        case "alpha_asc":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
  }, [applications, selectedSort, selectedVisaTypes]);

  const testFilteredAndSortedApplications = useMemo(() => {
    const testFiltered = testApplications.filter((app) => {
      const typeMatch =
        selectedVisaTypes.length === 0 ||
        selectedVisaTypes.includes(app.application[0].type.name);
      const statusMatch =
        selectedStatus.length === 0 || selectedStatus.includes(app.status);
      return typeMatch && statusMatch;
    });

    return testFiltered.sort((a, b) => {
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
  }, [testApplications, selectedSort, selectedVisaTypes, selectedStatus]);

  return (
    <div className="p-4">
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
          {testFilteredAndSortedApplications.map((app) => (
            <li key={app.application[0].id}>
              {app.application[0].name} - Type: {app.application[0].type.name},
              Status: {app.status}, Progress: {app.progress}%
            </li>
          ))}
        </ul>
      </div>
      {appointment && (
        <AppointmentCard appointment={appointment} attendees={attendees} />
      )}
    </div>
  );
}
