import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { CircleDollarSign, Clock3, SquarePen } from "lucide-react";

const items = [
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
    href: "/payment",
    icon: CircleDollarSign,
  },
];

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.label}>
              <a href={item.href}>
                <item.icon />
                <span>{item.label}</span>
              </a>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
