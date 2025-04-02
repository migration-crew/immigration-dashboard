"use client";

import { LogoImage } from "@/components/common/Logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import clsx from "clsx";
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
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="flex mx-auto mb-8">
        <LogoImage width={134} height={58} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {sidebarItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton asChild className="w-[240px] h-[50px]">
                <Link
                  href={item.href}
                  className={clsx(
                    "flex gap-2 h-full w-[80%] rounded mx-auto pl-10 transition-colors",
                    pathname === item.href
                      ? "bg-primary-red text-primary-white hover:!bg-primary-red hover:!text-primary-white hover:cursor-default"
                      : "hover:bg-primary-gray"
                  )}
                >
                  <item.icon className="w-[24px] h-[24px]" />
                  <Caption>{item.label}</Caption>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="flex mx-auto">
        {/* <p>footer goes here</p> */}
      </SidebarFooter>
    </Sidebar>
  );
}
