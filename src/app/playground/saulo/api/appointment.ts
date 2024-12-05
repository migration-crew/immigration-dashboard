import { AppointmentType } from "@/types/Appointment/AppointmentType";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<AppointmentType>
) {
  const appointment: AppointmentType = {
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

  res.status(200).json(appointment);
}
