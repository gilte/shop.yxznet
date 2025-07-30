"use client";
import React from 'react';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from '@/components/ui/sidebar';
import { navItems } from '@/data/dashboard-data';
import { KiwiIcon } from '@/components/icons';
import { usePathname } from 'next/navigation';
import { useSidebar } from '@/components/ui/sidebar';

export function AppSidebar() {
  const pathname = usePathname();
  const { isMobile } = useSidebar();

  if (isMobile) {
    return (
      <Sidebar>
        <SidebarContent className="p-2">
          <SidebarMenu className="flex flex-row flex-wrap justify-center">
            {navItems.map((item) => (
              <SidebarMenuItem key={item.label} className="m-1">
                <SidebarMenuButton
                  href={item.href}
                  isActive={pathname === item.href}
                  className="font-medium"
                  tooltip={item.label}
                  variant="outline"
                  size="sm"
                >
                  <item.icon />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    );
  }

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="bg-primary text-primary-foreground p-2 rounded-lg">
            <KiwiIcon className="w-6 h-6" />
          </div>
          <h1 className="text-xl font-headline font-semibold text-sidebar-foreground">
            KiwiBoard
          </h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton
                href={item.href}
                isActive={pathname === item.href}
                className="font-medium"
                tooltip={item.label}
              >
                <item.icon />
                <span>{item.label}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
