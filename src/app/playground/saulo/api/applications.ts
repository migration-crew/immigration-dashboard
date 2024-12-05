import { ApplicationType } from "@/types/Application/ApplicationType";
import { NextApiRequest, NextApiResponse } from "next";

export function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApplicationType[]>
) {
  const applications: ApplicationType[] = [
    {
      id: "Maria_CICCC_ESL",
      name: "Maria_CICCC_ESL",
      type: {
        id: "student",
        name: "student",
        createdAt: new Date("2023-05-01"),
        updatedAt: new Date("2023-06-15"),
      },
      createdAt: new Date("2023-05-01"),
      updatedAt: new Date("2023-06-15"),
    },
    {
      id: "Maria_Work_Permit",
      name: "Maria_Work_Permit",
      type: {
        id: "workPermit",
        name: "workPermit",
        createdAt: new Date("2023-04-01"),
        updatedAt: new Date("2023-05-10"),
      },
      createdAt: new Date("2023-04-01"),
      updatedAt: new Date("2023-05-10"),
    },

    {
      id: "Carrey_Visitor",
      name: "Carrey_Visitor",
      type: {
        id: "visitor",
        name: "visitor",
        createdAt: new Date("2023-04-01"),
        updatedAt: new Date("2023-04-22"),
      },
      createdAt: new Date("2023-04-01"),
      updatedAt: new Date("2023-04-22"),
    },
    {
      id: "Maria_CICCC_UX/UI",
      name: "Maria_CICCC_UX/UI",
      type: {
        id: "student",
        name: "student",
        createdAt: new Date("2023-05-01"),
        updatedAt: new Date("2023-06-01"),
      },
      createdAt: new Date("2023-05-01"),
      updatedAt: new Date("2023-06-01"),
    },

    {
      id: "Maria_CICCC_UX/UI_2",
      name: "Maria_CICCC_UX/UI_2",
      type: {
        id: "student",
        name: "student",
        createdAt: new Date("2023-04-01"),
        updatedAt: new Date("2023-05-28"),
      },
      createdAt: new Date("2023-04-01"),
      updatedAt: new Date("2023-05-28"),
    },
  ];

  res.status(200).json(applications);
}
