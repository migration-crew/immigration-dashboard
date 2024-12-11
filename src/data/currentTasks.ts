import { ApplicationTaskType } from "@/types/Application/ApplicationTaskType";

export const currentTasks: ApplicationTaskType[] = [
  {
    id: "1",
    name: "Fill IMM form",
    description: "Fill the IMM form for the new employee",
    status: "In Progress",
    dueDate: "2025-12-12",
    comments: [
      {
        user: {
          id: "1",
          firstName: "Laura",
          lastName: "Croft",
          imageUrl: "https://cdn-icons-png.flaticon.com/128/1154/1154448.png",
        },
        content: "I will do it",
        createdAt: "2025-12-12",
      },
    ],
    documentURLs: [
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/67/67e62baab9a7fcd856e7187a6d8929317bb58c7c.jpg",
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/b3/b399e6f3d68abd4963bab22c1efe0983f5189644.jpg",
    ],
  },
  {
    id: "2",
    name: "Review IMM and Visa documents",
    description: "Review the IMM and Visa documents from the applicant",
    status: "In Progress",
    dueDate: "2025-12-12",
    comments: [
      {
        user: {
          id: "1",
          firstName: "Laura",
          lastName: "Croft",
          imageUrl: "https://cdn-icons-png.flaticon.com/128/1154/1154448.png", // Girl icon created by Freepik - Flaticon</a>
        },
        content: "I will do it",
        createdAt: "2025-12-12",
      },
      {
        user: {
          id: "2",
          firstName: "John",
          lastName: "Doe",
          imageUrl: "https://cdn-icons-png.flaticon.com/128/16683/16683419.png", // User icon created by Heykiyou - Flaticon
        },
        content: "I left some comments on the document",
        createdAt: "2025-12-12",
      },
    ],
    documentURLs: [
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/67/67e62baab9a7fcd856e7187a6d8929317bb58c7c.jpg",
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/b3/b399e6f3d68abd4963bab22c1efe0983f5189644.jpg",
    ],
  },
  {
    id: "3",
    name: "Receive Visa",
    description: "Receive the visa from the applicant",
    status: "In Progress",
    dueDate: "2025-12-12",
    comments: [
      {
        user: {
          id: "1",
          firstName: "Laura",
          lastName: "Croft",
          imageUrl: "https://cdn-icons-png.flaticon.com/128/1154/1154448.png", // Girl icon created by Freepik - Flaticon</a>
        },
        content: "I will do it",
        createdAt: "2025-12-12",
      },
    ],
    documentURLs: [
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/67/67e62baab9a7fcd856e7187a6d8929317bb58c7c.jpg",
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/b3/b399e6f3d68abd4963bab22c1efe0983f",
    ],
  },
];
