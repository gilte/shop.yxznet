
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AppHeader } from "@/components/layout/AppHeader";
import { HorizontalNavigation } from "@/components/layout/HorizontalNavigation";
import { DashboardContent } from "@/components/dashboard/DashboardContent";
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // A verificação do localStorage só pode acontecer no lado do cliente.
    const userIsAuthenticated = !!localStorage.getItem('kiwiboard-auth');
    if (!userIsAuthenticated) {
      router.push('/login');
    } else {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, [router]);

  if (isLoading || !isAuthenticated) {
    return (
      <div className="flex min-h-screen w-full flex-col bg-background p-8">
        <Skeleton className="h-16 w-full mb-4" />
        <Skeleton className="h-14 w-full mb-8" />
        <div className="flex flex-col gap-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Skeleton className="h-32" />
                <Skeleton className="h-32" />
                <Skeleton className="h-32" />
            </div>
            <Skeleton className="h-80" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <AppHeader />
      <HorizontalNavigation />
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <DashboardContent />
      </main>
    </div>
  );
}
