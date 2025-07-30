"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/data/dashboard-data';
import { cn } from '@/lib/utils';

export function HorizontalNavigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex h-14 items-center justify-center border-b bg-muted/40 px-4 text-sm font-medium">
      <div className="flex gap-4">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              'flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
              pathname === item.href && 'bg-muted text-primary'
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
