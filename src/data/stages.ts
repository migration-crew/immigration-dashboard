import { ApplicationTaskType } from "@/types/Application/ApplicationTaskType";

export const gettingStartedTasks: ApplicationTaskType[] = [
  {
    id: "1",
    name: "Portal Introduction",
    description:
      "Read the portal introduction and get familiar with the system",
    status: "Completed",
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
    id: "2",
    name: "Update your profile",
    description: "Review the IMM and Visa documents from the applicant",
    status: "Completed",
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
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/b3/b399e6f3d68abd4963bab22c1efe0983f5189644.jpg",
    ],
  },
];

export const schoolAdmissionTasks: ApplicationTaskType[] = [
  {
    id: "1",
    name: "Complete Admission Form",
    description: "Fill out the admission form and submit it to the school",
    status: "Completed",
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
    name: "Upload documents",
    description: "Upload the required documents for the admission process",
    status: "Completed",
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
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/b3/b399e6f3d68abd4963bab22c1efe0983f5189644.jpg",
    ],
  },
  {
    id: "3",
    name: "Sign the proposal",
    description: "Sign the proposal to confirm the admission",
    status: "Completed",
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
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/b3/b399e6f3d68abd4963bab22c1efe0983f5189644.jpg",
    ],
  },
  {
    id: "4",
    name: "Make the first payment",
    description: "Make the first payment to confirm the admission",
    status: "Completed",
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
];

export const visaApplicationTasks: ApplicationTaskType[] = [
  {
    id: "1",
    name: "Complete Visa Application Form",
    description: "Fill out the visa application form and submit it",
    status: "Completed",
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
    name: "Complete Visa requirements",
    description: "Complete the visa requirements and submit them",
    status: "Completed",
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
    name: "Create GC Account",
    description: "Create a GC account to track your visa application",
    status: "Completed",
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
    id: "4",
    name: "Fill IMM form",
    description: "Fill out the IMM form and submit it to the embassy",
    status: "Not Started",
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
    id: "5",
    name: "Review IMM and Visa documents",
    description: "Review the IMM and Visa documents from the applicant",
    status: "Not Started",
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
    id: "6",
    name: "Receive Visa",
    description: "Receive the visa from the embassy",
    status: "Not Started",
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
];

export const preDepartureTasks: ApplicationTaskType[] = [
  {
    id: "1",
    name: "Pre-departure/ Arrival information",
    description: "Book your flight to Canada",
    status: "Completed",
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
    name: "Air Ticket Booking",
    description: "Book your accommodation in Canada",
    status: "Not Started",
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
    id: "3",
    name: "Housing Placement",
    description: "Book your accommodation in Canada",
    status: "Not Started",
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
    id: "4",
    name: "Insurance",
    description: "Get your health insurance for Canada",
    status: "Not Started",
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
];
