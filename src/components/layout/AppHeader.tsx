
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Bell, Settings } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { KiwiIcon } from '../icons';
import { AppSidebar } from './AppSidebar';

type User = {
  name: string;
  email: string;
};

export function AppHeader() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Acessa o localStorage apenas no lado do cliente
    const storedUser = localStorage.getItem('kiwiboard-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('kiwiboard-token');
    localStorage.removeItem('kiwiboard-user');
    router.push('/login');
  };

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
              placeholder="Pesquise no seu dashboard..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-background text-foreground"
            />
          </div>
        </form>
        <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/90">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Alternar notificações</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/90">
          <Settings className="h-5 w-5" />
          <span className="sr-only">Alternar configurações</span>
        </Button>
        {user && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={`https://i.pravatar.cc/150?u=${user.email}`} alt={user.name} />
                  <AvatarFallback>{user.name?.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                <div className="font-bold">{user.name}</div>
                <div className="text-xs text-muted-foreground">{user.email}</div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Perfil</DropdownMenuItem>
              <DropdownMenuItem>Faturamento</DropdownMenuItem>
              <DropdownMenuItem>Configurações</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>Sair</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  );
}
