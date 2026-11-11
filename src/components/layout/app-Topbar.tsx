"use client";

import { usePathname, useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";

const menuMap: Record<string, string> = {
  "/": "Beranda",
  "/dashboard": "Dashboard",
  "/kelas": "Kelas",
};

export function AppTopbar() {
  const pathname = usePathname();
  const router = useRouter();
  const title =
    menuMap[pathname] ??
    (pathname.startsWith("/kelas/") ? "Detail Kelas" : "Manajemen Siswa");

  function handleLogout() {
    router.push("/auth/login");
  }

  return (
    <header className="sticky top-0 z-50 flex h-14 w-full items-center justify-between border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:px-6">
      <div className="flex items-center gap-3">
        <SidebarTrigger aria-label="Buka atau tutup navigasi" />
        <h1 className="text-lg font-semibold tracking-tight">{title}</h1>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="relative size-9 rounded-full"
            aria-label="Buka menu akun"
          >
            <Avatar>
              <AvatarImage src="/Avatar.png" alt="" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end">
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">ASYKAR</p>
              <p className="text-xs leading-none text-muted-foreground">
                asykar@gmail.com
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-red-600 focus:bg-red-50 focus:text-red-600"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 size-4" />
            <span>Keluar</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}

export default AppTopbar;