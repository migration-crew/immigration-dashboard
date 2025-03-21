import { MessageType } from "@/types/Inbox/MessageType";

export const messages: MessageType[] = [
  {
    _id: "0",
    content: "Welcome!",
    createdAt: "5:20",
    user: {
      _id: "userId",
      imageURL: "https://github.com/shadcn.png",
      firstName: "Broock",
      lastName: "",
      nationality: "",
      language: "",
      address: "",
      dateOfBirth: "",
      gender: "",
      email: "",
    },
  },
  {
    _id: "1",
    content: "Hi",
    createdAt: "9:20",
    user: {
      _id: "adminId",
      imageURL: "https://github.com/shadcn.png",
      firstName: "Fruncky",
      lastName: "",
      nationality: "",
      language: "",
      address: "",
      dateOfBirth: "",
      gender: "",
      email: "",
    },
  },
  {
    _id: "3",
    content:
      "📢 Exciting News for Canada Visa Applicants! 📢\nHi everyone,\nWe have some exciting news to share! Canada has introduced new visa policies that significantly streamline the application process. This means less paperwork and faster approvals, making it easier than ever to get your visa. We invite you to join our online info session on July 31, where we'll go over these changes in detail and answer any questions you might have. Please RSVP by October 06 to secure your spot. In light of these positive changes, we are also offering a 15% discount on our services for a limited time. Make sure to check your inbox for more details on how to take advantage of this offer!",
    createdAt: "10:20",
    user: {
      _id: "userId",
      imageURL: "https://github.com/shadcn.png",
      firstName: "Broock",
      lastName: "",
      nationality: "",
      language: "",
      address: "",
      dateOfBirth: "",
      gender: "",
      email: "",
    },
  },
  {
    _id: "2",
    content:
      "Hi! I'm interested in finding a 2-bedroom apartment in Toronto. My budget is around $2,000 per month, and I’d like it to be near public transportation and amenities like grocery stores and parks. Can you help me with this?",
    createdAt: "11:20",
    user: {
      _id: "adminId",
      imageURL: "https://github.com/shadcn.png",
      firstName: "Fruncky",
      lastName: "",
      nationality: "",
      language: "",
      address: "",
      dateOfBirth: "",
      gender: "",
      email: "",
    },
  },
];
