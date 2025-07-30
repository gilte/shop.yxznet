import { AppHeader } from "@/components/layout/AppHeader";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { DashboardContent } from "@/components/dashboard/DashboardContent";
import { SidebarProvider, Sidebar, SidebarInset } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-background">
        <AppHeader />
        <main className="p-4 sm:p-6 lg:p-8">
          <DashboardContent />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
