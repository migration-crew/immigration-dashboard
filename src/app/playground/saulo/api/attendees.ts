import { BasicUserType } from "@/types/User/UserType";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BasicUserType[]>
) {
  const attendees: BasicUserType[] = [
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

  res.status(200).json(attendees);
}
