import { Input } from "@/components/ui/input";
import { MessageType } from "@/types/Inbox/MessageType";
import { NotificationType } from "@/types/NotificationType";
import { Search } from "lucide-react";
import { useState } from "react";
import { BsBellFill } from "react-icons/bs";
import { FaMessage } from "react-icons/fa6";
import NavbarIcon from "./NavbarIcon";

const messages: MessageType[] = [
  {
    id: "1",
    content: "This is a message",
    createdAt: new Date().toISOString(),
    user: {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      nationality: "USA",
      language: "en",
      address: "1234 Main St",
      birthDate: "01/01/1990",
      gender: "male",
      email: "johndoe@test.com",
      imageUrl: "https://randomuser.me/api/port",
    },
  },
  {
    id: "2",
    content: "This is another message",
    createdAt: new Date().toISOString(),
    user: {
      id: "2",
      firstName: "Jane",
      lastName: "Doe",
      nationality: "USA",
      language: "en",
      address: "1234 Main St",
      birthDate: "01/01/1990",
      gender: "male",
      email: "johndoe@test.com",
      imageUrl: "https://randomuser.me/api/port",
    },
  },
];

const notifications: NotificationType[] = [
  {
    id: "1",
    content: "This is a notification",
    timestamp: new Date(),
    read: false,
    redirectUrl: "/",
  },
  {
    id: "2",
    content: "This is another notification",
    timestamp: new Date(),
    read: true,
    redirectUrl: "/",
  },
];

export default function TopNavbar() {
  const [openDropdown, setOpenDropdown] = useState<
    "messages" | "notifications" | null
  >(null);

  return (
    <div className="flex justify-between items-center self-stretch bg-primary-white px-6 h-[70px]">
      <div className="relative flex w-[400px] items-center">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search"
          className="pl-8  rounded-[19px] bg-secondary-light-gray"
        />
      </div>
      <div className="flex items-center gap-2 h-full">
        <NavbarIcon
          items={messages}
          icon={FaMessage}
          isOpen={openDropdown === "messages"}
          onToggle={() =>
            setOpenDropdown((prev) => (prev === "messages" ? null : "messages"))
          }
        />
        <NavbarIcon
          items={notifications}
          icon={BsBellFill}
          isOpen={openDropdown === "notifications"}
          onToggle={() =>
            setOpenDropdown((prev) =>
              prev === "notifications" ? null : "notifications"
            )
          }
        />
      </div>
    </div>
  );
}
