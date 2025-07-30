import React from 'react';
import { Search, Bell, Settings } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { userPanelData } from '@/data/dashboard-data';
import { KiwiIcon } from '../icons';
import { AppSidebar } from './AppSidebar';

export function AppHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-primary px-4 text-primary-foreground md:px-6">
       <div className="flex items-center gap-2">
         <div className="lg:hidden">
            <AppSidebar />
         </div>
          <div className="flex items-center gap-2">
            <div className="bg-primary-foreground p-2 text-primary rounded-lg">
                <KiwiIcon className="h-6 w-6" />
            </div>
            <h1 className="text-xl font-headline font-semibold text-primary-foreground">
                KiwiBoard
            </h1>
          </div>
       </div>

      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search your dashboard..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-background text-foreground"
            />
          </div>
        </form>
        <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/90">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/90">
          <Settings className="h-5 w-5" />
          <span className="sr-only">Toggle settings</span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src={userPanelData.avatar} alt={`@${userPanelData.name}`} />
                <AvatarFallback>{userPanelData.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
