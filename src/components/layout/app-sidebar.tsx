"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Home, Users } from "lucide-react";

import {
  Sidebar as SidebarPrimitive,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  { label: "Beranda", href: "/", icon: Home },
  { label: "Dashboard", href: "/dashboard", icon: Users },
  { label: "Kelas", href: "/kelas", icon: BookOpen },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <SidebarPrimitive>
      <SidebarHeader className="border-b px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="flex size-8 items-center justify-center rounded-lg bg-blue-600 text-sm text-white">
            MS
          </span>
          <span>Manajemen Siswa</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigasi</SidebarGroupLabel>
          <SidebarMenu>
            {menuItems.map(({ label, href, icon: Icon }) => (
              <SidebarMenuItem key={href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === href || (href !== "/" && pathname.startsWith(`${href}/`))}
                >
                  <Link href={href}>
                    <Icon aria-hidden="true" />
                    <span>{label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </SidebarPrimitive>
  );
}

export default AppSidebar;
