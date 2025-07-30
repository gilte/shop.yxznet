import { AppHeader } from "@/components/layout/AppHeader";
import { HorizontalNavigation } from "@/components/layout/HorizontalNavigation";
import { DashboardContent } from "@/components/dashboard/DashboardContent";

export default function Home() {
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
