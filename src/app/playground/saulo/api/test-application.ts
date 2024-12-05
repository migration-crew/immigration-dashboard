import { NextApiRequest, NextApiResponse } from "next";
import { testApplicationType } from "../page";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<testApplicationType[]>
) {
  const testApplications: testApplicationType[] = [
    {
      application: [
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
      ],
      progress: 100,
      status: "completed",
    },
    {
      application: [
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
      ],
      progress: 75,
      status: "onHold",
    },
    {
      application: [
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
      ],
      progress: 25,
      status: "processing",
    },
    {
      application: [
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
      ],
      progress: 100,
      status: "rejected",
    },
    {
      application: [
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
      ],
      progress: 50,
      status: "processing",
    },
  ];

  res.status(200).json(testApplications);
}
