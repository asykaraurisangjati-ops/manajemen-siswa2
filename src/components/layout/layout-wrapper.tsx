"use client";

import { usePathname } from "next/navigation";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { AppTopbar } from "@/components/layout/app-Topbar";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith("/auth");

  if (isAuthPage) {
    return <main className="min-h-full flex-1">{children}</main>;
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-[#f8fafc]">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <AppTopbar />
          <main className="flex-1 bg-[#f8fafc]">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default LayoutWrapper;