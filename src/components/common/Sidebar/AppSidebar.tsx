import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  CalendarCheck,
  CircleDollarSign,
  Clock3,
  FileText,
  MessageSquare,
  SquarePen,
  UserPen,
} from "lucide-react";
import Link from "next/link";
import { Caption } from "../text/Caption";

const sidebarItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: Clock3,
  },
  {
    label: "Applications",
    href: "/applications",
    icon: SquarePen,
  },
  {
    label: "Payment",
    href: "/payments",
    icon: CircleDollarSign,
  },
  {
    label: "Documents",
    href: "/documents",
    icon: FileText,
  },
  {
    label: "Calendar",
    href: "/calendar",
    icon: CalendarCheck,
  },
  {
    label: "Inbox",
    href: "/inbox",
    icon: MessageSquare,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: UserPen,
  },
];

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarMenu>
          {sidebarItems.map((item) => (
            <SidebarMenuItem
              key={item.label}
              className="w-[240px] h-[50px] flex flex-col items-center"
            >
              <Link
                href={item.href}
                className="flex items-center gap-2 h-full w-full justify-start hover:bg-primary-gray rounded"
              >
                <item.icon className="w-[24px] h-[24px]" />
                <Caption>{item.label}</Caption>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
